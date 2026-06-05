'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

interface Repo {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  topics: string[]
}

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetching directly from your GitHub
    fetch('https://api.github.com/users/titu46/repos?sort=updated&per_page=6')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data)
        }
        setLoading(false)
      })
      .catch(err => {
        console.error("Error fetching repos:", err)
        setLoading(false)
      })
  }, [])

  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured <span className="text-glow">Projects</span></h2>
          <p className="section-subtitle">Recent developments, cybersecurity tools, and design system architectures.</p>
        </motion.div>

        {loading ? (
          <div className="text-center text-primary animate-pulse">Loading projects...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glassmorphism p-6 rounded-xl border border-primary/10 hover:border-primary/50 hover:glow-lg transition-all duration-300 group flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-4xl text-primary">📁</div>
                  <div className="flex gap-3">
                    <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                      <FiGithub size={20} />
                    </a>
                    {repo.homepage && (
                      <a href={repo.homepage} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                        <FiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {repo.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 flex-grow">
                  {repo.description || "A technical project focusing on specific system architectures or design implementations."}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {repo.topics?.map(topic => (
                    <span key={topic} className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects