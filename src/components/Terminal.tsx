import { useEffect, useMemo, useState } from 'react'
import { terminalLines, type TerminalLine } from '../data/site'
import { useReducedMotion } from '../hooks/useReducedMotion'

/** Characters revealed per tick, and tick interval, per line kind. */
const TYPE_SPEED_MS = 26
const LINE_PAUSE_MS = 260

/**
 * A restrained security-workstation panel. It types itself out once,
 * then holds. With reduced motion the full transcript renders immediately.
 */
export function Terminal() {
  const reducedMotion = useReducedMotion()

  /** Flattened plain-text form of each line, used to drive the typing clock. */
  const plainLines = useMemo(
    () =>
      terminalLines.map((line) => {
        if (line.kind === 'spacer') return ''
        if (line.kind === 'field') return `${line.label}  ${line.value}`
        if (line.kind === 'command') return `$ ${line.text}`
        return line.text
      }),
    [],
  )

  const [lineIndex, setLineIndex] = useState(reducedMotion ? plainLines.length : 0)
  const [charCount, setCharCount] = useState(0)

  useEffect(() => {
    if (reducedMotion) {
      setLineIndex(plainLines.length)
      return
    }
    if (lineIndex >= plainLines.length) return

    const target = plainLines[lineIndex]

    if (charCount < target.length) {
      const timer = window.setTimeout(() => setCharCount((c) => c + 1), TYPE_SPEED_MS)
      return () => window.clearTimeout(timer)
    }

    const timer = window.setTimeout(() => {
      setLineIndex((i) => i + 1)
      setCharCount(0)
    }, LINE_PAUSE_MS)
    return () => window.clearTimeout(timer)
  }, [lineIndex, charCount, plainLines, reducedMotion])

  const done = lineIndex >= plainLines.length

  return (
    <div className="relative">
      {/* Ambient glow behind the panel */}
      <div
        aria-hidden="true"
        className="glow-accent -left-10 top-10 h-56 w-56 bg-accent/25 sm:h-72 sm:w-72"
      />

      <div className="card card-static relative overflow-hidden">
        {/* Chrome */}
        <div className="flex items-center justify-between border-b border-line bg-surface-3/60 px-4 py-3">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          </div>
          <span className="label-mono">priyesh@lab: ~/engagements</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            <span className="label-mono hidden sm:inline">secure</span>
          </span>
        </div>

        {/* Transcript */}
        <div
          className="px-4 py-5 font-mono text-[13px] leading-[1.85] sm:px-6 sm:py-7 sm:text-sm"
          role="img"
          aria-label="Terminal readout: priyesh, security consultant and researcher. Specialization: OT/ICS, SCADA, red team, VAPT. Approach: recon, exploit, validate, reduce risk. Focus: critical infrastructure and high-risk networks."
        >
          <div aria-hidden="true">
            {terminalLines.map((line, i) => (
              <TerminalRow
                key={i}
                line={line}
                plain={plainLines[i]}
                state={i < lineIndex ? 'complete' : i === lineIndex ? 'typing' : 'pending'}
                charCount={charCount}
                showCaret={i === lineIndex || (done && i === terminalLines.length - 1)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

type RowProps = {
  line: TerminalLine
  plain: string
  state: 'complete' | 'typing' | 'pending'
  charCount: number
  showCaret: boolean
}

function TerminalRow({ line, plain, state, charCount, showCaret }: RowProps) {
  if (state === 'pending') {
    // Reserve the row height so the panel never reflows while typing.
    return <div className="h-[1.85em]" />
  }

  const visible = state === 'complete' ? plain.length : charCount
  const caret = showCaret ? <span className="caret" /> : null

  if (line.kind === 'spacer') {
    return <div className="h-[1.85em]" />
  }

  if (line.kind === 'command') {
    const shown = `$ ${line.text}`.slice(0, visible)
    return (
      <div className="text-fg">
        <span className="text-accent">{shown.slice(0, 1)}</span>
        <span>{shown.slice(1)}</span>
        {caret}
      </div>
    )
  }

  if (line.kind === 'response') {
    return (
      <div className="text-fg-muted">
        {plain.slice(0, visible)}
        {caret}
      </div>
    )
  }

  // field
  const full = `${line.label}  ${line.value}`
  const shown = full.slice(0, visible)
  const labelPart = shown.slice(0, Math.min(shown.length, line.label.length))
  const valuePart = shown.length > line.label.length + 2 ? shown.slice(line.label.length + 2) : ''

  return (
    <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
      <span className="shrink-0 text-fg-subtle">{labelPart}</span>
      <span className="text-cyan">
        {valuePart}
        {caret}
      </span>
    </div>
  )
}
