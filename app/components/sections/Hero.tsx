'use client'

import Image from "next/image"
import AnimatedText from "../common/AnimatedText"
import FloatingElements from "../common/FloatingElements"


export default function Hero() {
  return (
    <section id="home" className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <FloatingElements />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <AnimatedText className="flex flex-col items-center sm:items-start gap-4">
          <Image
            className="rounded-full"
            src="/avatar.jpeg" // Replace with your avatar image path in public folder
            alt="Profile Picture"
            width={175}
            height={50}
            priority
          />
          <h1 className="text-4xl font-bold">Prinsi Tiwari</h1>
          <p className="text-lg text-foreground/80 font-[family-name:var(--font-geist-mono)]">
            Software Developer | Open Source Enthusiast | Tech Blogger
          </p>
        </AnimatedText>

        <AnimatedText 
          className="max-w-2xl text-center sm:text-left"
        >
          <p className="text-foreground/80 leading-relaxed">
                    👋 Hello! I'm Prinsi, a Software Engineer specialising in full-stack web development, driven by a strong passion for technology.

                    I enjoy building cool things, solving problems, and constantly learning new skills. 

                    <br></br>

                    Feel free to reach out out to me -- I’m always open to connecting, collaborating, or just chatting about tech!

                    Let’s connect and build something awesome together!         
          </p>
        </AnimatedText>

        <AnimatedText 
          className="flex gap-5 items-center flex-row"
        >
          <a
            className="
              relative
              z-20
              rounded-full border border-solid border-black/[.08] dark:border-white/[.145] 
              transition-colors flex items-center justify-center 
              hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
              h-12                                    // Fixed height
              px-5                                   // Fixed padding
              text-base                              // Fixed font size
            "
            href="https://github.com/prinsi-t" // Replace with your GitHub profile link
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="invert dark:invert-0 mr-2"
              src="/github.svg"
              alt="GitHub"
              width={20}
              height={20}
              sizes="20px"
            />
            <span className="relative z-20">GitHub</span>
          </a>
          <a
            className="
              rounded-full border border-solid border-black/[.08] dark:border-white/[.145] 
              transition-colors flex items-center justify-center 
              hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
              hover:border-transparent 
              h-12                                   // Fixed height
              px-5                                   // Fixed padding
              text-base                              // Fixed font size
              min-w-44                              // Fixed minimum width
            "
            href="/resume.pdf" // Replace with your resume PDF path in public folder
            target="_blank"
          >
            <Image
              className="dark:invert mr-2"
              src="/resume.svg"
              alt="Resume"
              width={20}
              height={20}
              sizes="20px"
            />
            View Resume
          </a>

           <a
            className="
              relative
              z-20
              rounded-full border gap-2 border-solid border-black/[.08] dark:border-white/[.145] 
              transition-colors flex items-center justify-center 
              hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
              h-12                                    // Fixed height
              px-5                                   // Fixed padding
              text-base                              // Fixed font size
            "
           href="mailto:tprincy56@gmail.com" // Replace with your email address
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
            aria-hidden
            className="dark:invert"
            src="/mail.svg"
            alt="Email"
            width={16}
            height={16}
          />
          Send Email
          </a>

          <a
            className="
              relative
              z-20
              rounded-full border gap-2 border-solid border-black/[.08] dark:border-white/[.145] 
              transition-colors flex items-center justify-center 
              hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
              h-12                                    // Fixed height
              px-5                                   // Fixed padding
              text-base                              // Fixed font size
            "
           href="https://www.linkedin.com/in/prinsi-tiwari-b62042272/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
            aria-hidden
            className="dark:invert"
            src="/linkedin.svg"
            alt="LinkedIn"
            width={16}
            height={16}
          />
          LinkedIn
          </a>
        </AnimatedText>

        
      </main>

      
    </section>
  )
} 