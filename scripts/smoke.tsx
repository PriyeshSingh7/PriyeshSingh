/**
 * Render smoke test. Renders the whole tree to static markup in Node and
 * asserts that the sections, the four primary certifications and the
 * verification links are all present, in the right order.
 *
 * Run:  npx vite build --ssr scripts/smoke.tsx --outDir dist-ssr && node dist-ssr/smoke.js
 */
import { renderToStaticMarkup } from 'react-dom/server'
import App from '../src/App'
import { primaryCertifications } from '../src/data/credentials'
import { experience } from '../src/data/experience'
import { projects } from '../src/data/projects'
import { socials } from '../src/data/site'

const html = renderToStaticMarkup(<App />)

let failures = 0
const check = (label: string, condition: boolean) => {
  if (!condition) failures++
  console.log(`${condition ? 'PASS' : 'FAIL'}  ${label}`)
}

console.log(`Rendered ${html.length} bytes of markup\n`)

// --- Structure ---
for (const id of ['top', 'expertise', 'work', 'experience', 'credentials', 'contact', 'main']) {
  check(`section id="${id}" present`, html.includes(`id="${id}"`))
}
check('exactly one <h1>', (html.match(/<h1/g) ?? []).length === 1)
check('skip link present', html.includes('Skip to content'))

// --- Hero ---
check('hero headline line 1', html.includes('Breaking systems.'))
check('hero headline line 2', html.includes('Protecting what matters.'))
check('metric: 50+', html.includes('50+'))
check('metric: 1000+', html.includes('1000+'))

// --- Credentials: order and links ---
const certOrder = ['PT1', 'PJPT', 'CRTA', 'CEH Practical']
const positions = certOrder.map((abbr) => html.indexOf(`>${abbr}</h3>`))
check('all four primary certs rendered', positions.every((p) => p > -1))
check(
  'primary certs in order PT1, PJPT, CRTA, CEH Practical',
  positions.every((p, i) => i === 0 || p > positions[i - 1]),
)

const credentialsIndex = html.indexOf('id="credentials"')
const furtherIndex = html.indexOf('Further certifications')
check(
  'primary certs appear before secondary credentials',
  positions[3] > credentialsIndex && positions[3] < furtherIndex,
)

for (const cert of primaryCertifications) {
  const escaped = cert.verifyUrl.replace(/&/g, '&amp;')
  check(`${cert.abbr} verification link present`, html.includes(escaped))
  check(`${cert.abbr} verify button label`, html.includes(cert.verifyLabel))
}

check('CEH marked expired', html.includes('Expired') && html.includes('no longer current'))
check('CEH credential id', html.includes('ECC5932041786'))

// --- External links hygiene ---
const anchors = html.match(/<a\b[^>]*>/g) ?? []
const blankAnchors = anchors.filter((a) => a.includes('target="_blank"'))
check(
  `all ${blankAnchors.length} target="_blank" links carry rel="noopener noreferrer"`,
  blankAnchors.every((a) => a.includes('noopener') && a.includes('noreferrer')),
)
check('LinkedIn URL present', html.includes(socials.linkedin))
check('X/Twitter URL present', html.includes(socials.twitter))

// --- Content coverage ---
/** Titles carry `&`, which React escapes to `&amp;` in the markup. */
const escapeHtml = (value: string) => value.replace(/&/g, '&amp;')
check(
  `all ${projects.length} projects rendered`,
  projects.every((p) => html.includes(escapeHtml(p.title))),
)
const initialRoles = experience.slice(0, 6)
check(
  'first six roles rendered before disclosure',
  initialRoles.every((r) => html.includes(r.title)),
)
check('earlier-roles disclosure present', html.includes('earlier roles'))
check('no fabricated email address', !/[\w.]+@[\w.]+\.\w+/.test(html.replace(/priyesh@lab/g, '')))

console.log(`\n${failures === 0 ? 'ALL CHECKS PASSED' : `${failures} CHECK(S) FAILED`}`)
process.exit(failures === 0 ? 0 : 1)
