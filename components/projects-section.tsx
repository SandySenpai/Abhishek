'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Portfolio",
    description: "A Portfolio website to show case my skills and projects",
    image: "https://img.freepik.com/free-psd/3d-nft-icon-developer-male-illustration_629802-6.jpg",
    tags: ["React", "TailwindCSS", "Nodejs", "scadcn ui"],
    liveLink: "https://abhis-portfolio.vercel.app/",
  },
  {
    title: "BaseHustler",
    description: "Our platform connects talented professionals with exciting projects in the decentralized space.",
    image: "https://uploads.laborx.com/gig/thumb_cropped_1410x632_GodssXzFW2n2tl7OFx7WZYzuFGJVYrtP.png",
    tags: ["Solidity", "Ethereum", "Web3.js", "React"],
    liveLink: "https://cdn.prod.website-files.com/61cdf3c5e0b8152652e01082/6581be9366e0c8b5b4d8521e_thumbnail_Web3-Companies.jpg",
  },
  {
    title: "IoT Home Automation",
    description: "A smart home system that integrates various IoT devices for automated control and energy efficiency.",
    image: "https://cdni.iconscout.com/illustration/premium/thumb/iot-developer-illustration-download-in-svg-png-gif-file-formats--cloud-testing-storage-designer-pack-design-development-illustrations-3956353.png?f=webp",
    tags: ["Raspberry Pi", "Python", "MQTT", "React Native"],
  },
]

export function ProjectsSectionComponent() {
  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardTitle className="mb-2">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    {project.liveLink && (
                      <Button size="sm" asChild>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      </Button>
                    )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}