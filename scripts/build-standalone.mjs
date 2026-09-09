/**
 * Collapses the Vite build into ONE self-contained .html file.
 *
 *   - CSS and JS are inlined (no /assets requests)
 *   - the JS is a classic IIFE script, not an ES module, so it runs in any
 *     browser and under file:// without module-script support
 *   - the Google Fonts <link> is replaced with base64 @font-face rules
 *   - the favicon is already a data: URI
 *   - the "you opened the source entry" notice is stripped (this IS the
 *     file you are meant to open)
 *   - a watchdog shows a readable message if the app fails to mount, so a
 *     broken render never presents as a blank dark page
 *
 * Result: zero external requests. Opens by double-click, works offline.
 *
 * Run:  npm run build:standalone
 */
import { readFileSync, writeFileSync, existsSync, rmSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { build } from 'vite'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(ROOT, 'dist-standalone')
// The finished site IS the repo root index.html: double-clickable, and
// exactly what GitHub Pages serves from the root of a branch.
const OUT_FILE = join(ROOT, 'index.html')

// Drive Vite through its JS API so the IIFE switch works identically on
// Windows, macOS and Linux without a cross-env dependency.
process.env.BUILD_STANDALONE = '1'
rmSync(DIST, { recursive: true, force: true })
await build({ configFile: join(ROOT, 'vite.config.ts'), logLevel: 'warn' })

if (!existsSync(DIST)) throw new Error(`Vite did not produce ${DIST}`)

let html = readFileSync(join(DIST, 'dev.html'), 'utf8')
const css = readFileSync(join(DIST, 'assets', 'app.css'), 'utf8')
const js = readFileSync(join(DIST, 'assets', 'app.js'), 'utf8')
const fonts = readFileSync(join(ROOT, 'scripts', 'fonts-inline.css'), 'utf8')

/** `</script>` inside a string literal would close the inline tag early. */
const safeJs = js.replace(/<\/script>/gi, '<\\/script>')

/**
 * IMPORTANT: every replacement below passes a FUNCTION, never a string.
 * Minified JS contains `$&` and `$'` sequences, which String.replace would
 * expand as special patterns and splice the original tag back into the output.
 */

// 1. Drop the Google Fonts <link>s and their preconnects.
html = html
  .replace(/\s*<link rel="preconnect"[^>]*>/g, '')
  .replace(/\s*<link[^>]*fonts\.googleapis\.com[^>]*>/g, '')

// 2. Strip the "you opened the source entry" notice and its guard script.
//    This file is exactly the one the notice points at.
const noticeRe = /\s*<div id="opened-from-disk"[\s\S]*?<\/div>\s*<\/div>/
if (!noticeRe.test(html)) throw new Error('Could not find the #opened-from-disk notice to strip')
html = html.replace(noticeRe, () => '')

const guardRe = /\s*<script>[\s\S]*?opened-from-disk[\s\S]*?<\/script>/
if (!guardRe.test(html)) throw new Error('Could not find the file:// guard script to strip')
html = html.replace(guardRe, () => '')

// 3. Guard on the ORIGINAL markup, while it is still small and readable.
const ALLOWED_REMOTE =
  /^https:\/\/(www\.linkedin\.com|twitter\.com|certified\.tcm-sec\.com|labs\.cyberwarfare\.live|aspen\.eccouncil\.org|www\.credly\.com|priyeshsingh\.dev)/

const referenced = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
  .map((m) => m[1])
  .filter((u) => !u.startsWith('#') && !u.startsWith('data:'))
  .filter((u) => !u.includes('app.css') && !u.includes('app.js'))
  .filter((u) => !ALLOWED_REMOTE.test(u))

if (referenced.length) {
  throw new Error(`index.html pulls in resources that cannot be inlined:\n  ${referenced.join('\n  ')}`)
}

// 4. Inline the stylesheet.
const styleTag = `\n    <style>\n${fonts}\n${css}\n</style>`
const linkRe = /\s*<link[^>]*href="[^"]*app\.css"[^>]*>/
if (!linkRe.test(html)) throw new Error('Could not find the <link> for app.css')
html = html.replace(linkRe, () => styleTag)

// 5. Inline the bundle as a CLASSIC script, moved to the END OF BODY.
//    Vite emits the tag in <head>, which is fine for a module (modules are
//    deferred) but fatal for a classic script: it would run before <body> is
//    parsed and #root would not exist yet. `defer` is ignored on inline
//    scripts, so position is the only lever.
const scriptRe = /\s*<script[^>]*src="[^"]*app\.js"[^>]*><\/script>/
if (!scriptRe.test(html)) throw new Error('Could not find the <script> for app.js')
html = html.replace(scriptRe, () => '')

// 6. No-JS message plus a mount watchdog, so the page always says something.
const FALLBACK_STYLE =
  "max-width:44rem;margin:12vh auto;padding:0 1.5rem;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;color:#E9F1FA;line-height:1.6"

const fallbackMarkup = `
      <div style="${FALLBACK_STYLE}">
        <h1 style="font-size:2rem;letter-spacing:-0.03em;margin:0 0 .75rem">Priyesh Singh</h1>
        <p style="color:#93A4BD;margin:0 0 1.5rem">
          Security Consultant / Researcher &mdash; OT/ICS, SCADA, Red Team, VAPT and critical
          infrastructure security.
        </p>
        <p style="color:#93A4BD;margin:0 0 1.5rem">REASON</p>
        <p style="margin:0">
          <a style="color:#0A84FF" href="https://www.linkedin.com/in/priyeshsingh7">LinkedIn</a>
          &nbsp;&middot;&nbsp;
          <a style="color:#0A84FF" href="https://twitter.com/priyeshsingh77">X / Twitter</a>
        </p>
      </div>`

const noscriptBlock = fallbackMarkup.replace(
  'REASON',
  'This page needs JavaScript enabled in order to render.',
)
const watchdogBlock = fallbackMarkup.replace(
  'REASON',
  'This page could not render in your browser. It needs a current version of Chrome, Edge, Firefox or Safari.',
)

html = html.replace(
  '<div id="root"></div>',
  () => `<div id="root"></div>
    <noscript>${noscriptBlock}</noscript>`,
)

// The app bundle goes in last, after #root exists, followed by the watchdog.
if (!html.includes('</body>')) throw new Error('No </body> to append the bundle to')
html = html.replace(
  '</body>',
  () => `  <script>\n${safeJs}\n    </script>
    <script>
      // If the app has not mounted shortly after load, say so rather than
      // leaving the visitor looking at an empty dark page.
      setTimeout(function () {
        var root = document.getElementById('root')
        if (root && root.children.length === 0) {
          root.innerHTML = ${JSON.stringify(watchdogBlock)}
        }
      }, 4000)
    </script>
  </body>`,
)

// 7. Structural assertions. Checking for the exact asset filenames is precise;
//    they cannot appear by chance inside the bundle the way `<script src=` can.
const failures = []
if (html.includes('assets/app.css')) failures.push('app.css is still referenced')
if (html.includes('assets/app.js')) failures.push('app.js is still referenced')
if (/fonts\.googleapis\.com|fonts\.gstatic\.com/i.test(html)) failures.push('a Google Fonts reference remains')
if (html.includes('opened-from-disk')) failures.push('the source-entry notice was not stripped')
if (html.includes('type="module"')) failures.push('a module script remains — it should be classic')
if (!html.includes('@font-face')) failures.push('base64 @font-face rules are missing')
if (!html.includes('id="root"')) failures.push('#root mount point is missing')
// A classic inline script must come AFTER #root, or it runs too early.
if (html.lastIndexOf('<script>') < html.indexOf('id="root"'))
  failures.push('the bundle runs before #root exists — move it to the end of <body>')

// Present-day employers are withheld on request. This catches any
// reintroduction — through a role id, a leftover comment, or the JSON-LD.
//
// The names themselves live in scripts/withheld.local.json, which is
// gitignored: hardcoding them here would publish the very strings the site
// is meant to omit. Missing file just means the check is skipped.
const withheldPath = join(ROOT, 'scripts', 'withheld.local.json')
if (existsSync(withheldPath)) {
  const withheld = JSON.parse(readFileSync(withheldPath, 'utf8'))
  const haystack = html.toLowerCase()
  const hits = withheld.filter((name) => haystack.includes(String(name).toLowerCase()))
  for (const name of hits) {
    failures.push(`a withheld employer name appears in the output (entry ${withheld.indexOf(name)})`)
  }
  if (hits.length === 0) console.log(`  withheld-name check: ${withheld.length} pattern(s), clean`)
} else {
  console.log('  withheld-name check: skipped (scripts/withheld.local.json not present)')
}
if (failures.length) throw new Error('Standalone build failed:\n  - ' + failures.join('\n  - '))

writeFileSync(OUT_FILE, html, 'utf8')

const kb = (n) => (n / 1024).toFixed(0) + 'KB'
console.log('Standalone build written')
console.log(`  ${OUT_FILE}`)
console.log(`  total ${kb(Buffer.byteLength(html))}  (css ${kb(css.length)}, js ${kb(js.length)}, fonts ${kb(fonts.length)})`)
console.log('  classic script, zero external requests')
console.log('  double-click index.html, or push the repo and enable GitHub Pages')
