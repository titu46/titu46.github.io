'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-bold tracking-wider uppercase"
          >
            Alee GFX
          </motion.h2>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            I'm <span className="text-glow">Mazhar Ali</span>
          </h1>
          
          <h3 className="text-2xl md:text-3xl text-gray-300 font-semibold">
            Cybersecurity Student & Professional Designer
          </h3>
          
          <p className="text-gray-400 text-lg max-w-lg">
            "Building secure systems. Designing futuristic experiences."
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="/resume.pdf" download className="btn-secondary">
              Download Resume
            </a>
            <a href="#contact" className="px-6 py-3 text-gray-300 hover:text-primary transition-colors">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-glow-pulse" />
            <div className="absolute inset-0 border-2 border-primary/50 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute inset-4 border border-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
            
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary glow glassmorphism">
              <Image 
                src="/assets/images/profile.jpg" 
                alt="Mazhar Ali"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero