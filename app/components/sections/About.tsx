'use client'

import AnimatedText from "../common/AnimatedText"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center p-8">
      <div className="max-w-2xl space-y-12">
        
        <div className="flex items-center gap-8">
            <div className="w-28 h-28 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/about.jpeg"
                alt="Profile Picture"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            <AnimatedText>
              <h1 className="text-4xl font-bold mb-0">About Me</h1>
            </AnimatedText>
          </div>

        <div className="space-y-8">
          <AnimatedText>
            <div className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
                  My name is Prinsi, and I love staying up-to-date with the latest tech and always look for ways to improve.

                  I’m a team player and work well with others. I enjoy collaborating, sharing ideas, and contributing to the team's success.

                  My tech stack includes JavaScript, React.js, Node.js, Express, MongoDB, and Tailwind CSS. 

            </p>
             
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Personal Interests</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                  I'm always excited to learn and work with new technologies to keep growing as a developer. I’m a tech enthusiast who enjoys staying curious and learning new things. In my free time, I love reading, vibing to music, exploring nature, and traveling to discover fresh experiences.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Career Goals</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
               I'm currently seeking job opportunities that allow me to grow as a full-stack developer, contribute to meaningful projects, and be part of an exceptional team. I aim to continuously enhance my skills, take on new challenges, and make a positive impact through my work.
              </p>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}