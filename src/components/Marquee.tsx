import { marqueeItems } from '../data/site'

/**
 * Thin capability ticker. The list is rendered twice so the -50% keyframe
 * loops seamlessly; the duplicate is hidden from assistive tech.
 */
export function Marquee() {
  return (
    <div
      className="marquee-wrap relative border-y border-line bg-surface/50 py-4"
      aria-label="Areas of practice"
    >
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track">
          <MarqueeGroup />
          <MarqueeGroup ariaHidden />
        </div>
      </div>
    </div>
  )
}

function MarqueeGroup({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={ariaHidden || undefined}>
      {marqueeItems.map((item) => (
        <li key={item} className="flex items-center">
          <span className="label-mono px-7 text-fg-muted">{item}</span>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent/60" />
        </li>
      ))}
    </ul>
  )
}
