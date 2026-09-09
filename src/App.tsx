import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Expertise } from './components/Expertise'
import { SelectedWork } from './components/SelectedWork'
import { ExperienceTimeline } from './components/ExperienceTimeline'
import { Credentials } from './components/Credentials'
import { Philosophy } from './components/Philosophy'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      {/* Fixed decorative backdrop: blue grid, grain, vignette, scanlines */}
      <div className="bg-ambient" aria-hidden="true" />
      <div className="bg-scanlines" aria-hidden="true" />

      <div className="relative z-10">
        <Navbar />

        <main id="main">
          <Hero />
          <Marquee />
          <Expertise />
          <hr className="rule-fade" />
          <SelectedWork />
          <hr className="rule-fade" />
          <ExperienceTimeline />
          <hr className="rule-fade" />
          <Credentials />
          <hr className="rule-fade" />
          <Philosophy />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  )
}
