'use client'

import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Design from '@/components/sections/Design'
import Education from '@/components/sections/Education'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Gallery from '@/components/sections/Gallery'
import Statistics from '@/components/sections/Statistics'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Design />
      <Education />
      <Projects />
      <Experience />
      <Gallery />
      <Statistics />
      <Contact />
    </>
  )
}
