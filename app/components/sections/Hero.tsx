'use client'

import Image from "next/image"
import AnimatedText from "../common/AnimatedText"
import FloatingElements from "../common/FloatingElements"


export default function Hero() {
  return (
    <section id="home" className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 sm:p-8 pb-20 sm:pb-20 gap-8 sm:gap-16 font-[family-name:var(--font-geist-sans)]">
      <FloatingElements />
      <main className="flex flex-col gap-6 sm:gap-8 row-start-2 items-center sm:items-start w-full sm:w-auto">
        <AnimatedText className="flex flex-col items-center sm:items-start gap-4 w-full">
          <Image
            className="rounded-full"
            src="/avatar.jpeg"
            alt="Profile Picture"
            width={120}
            height={120}
            priority
          />
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center sm:text-left">Prinsi Tiwari</h1>
          <p className="text-sm sm:text-base lg:text-lg text-foreground/80 font-[family-name:var(--font-geist-mono)] text-center sm:text-left">
            Software Developer | Open Source Enthusiast | Tech Blogger
          </p>
        </AnimatedText>

        <AnimatedText 
          className="max-w-2xl text-center sm:text-left text-sm sm:text-base px-2 sm:px-0"
        >
          <p className="text-foreground/80 leading-relaxed">
            👋 Hello! I'm Prinsi, a Software Engineer specialising in full-stack web development, driven by a strong passion for technology.

            I enjoy building cool things, solving problems, and constantly learning new skills. 

            <br></br>

            Feel free to reach out to me -- I'm always open to connecting, collaborating, or just chatting about tech!

            Let's connect and build something awesome together!         
          </p>
        </AnimatedText>

        <AnimatedText 
          className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center justify-center sm:justify-start flex-wrap w-full sm:w-auto px-2 sm:px-0"
        >
          <a
            className="
              relative
              z-20
              rounded-full border border-solid border-black/[.08] dark:border-white/[.145] 
              transition-colors flex items-center justify-center 
              hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
              h-10 sm:h-12
              px-4 sm:px-5
              text-xs sm:text-base
              w-full sm:w-auto
            "
            href="https://github.com/prinsi-t"
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
              h-10 sm:h-12
              px-4 sm:px-5
              text-xs sm:text-base
              w-full sm:w-auto
            "
            href="/Resume (3).pdf"
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
              h-10 sm:h-12
              px-4 sm:px-5
              text-xs sm:text-base
              w-full sm:w-auto
            "
            href="mailto:tprincy56@gmail.com"
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
            <span>Send Email</span>
          </a>

          <a
            className="
              relative
              z-20
              rounded-full border gap-2 border-solid border-black/[.08] dark:border-white/[.145] 
              transition-colors flex items-center justify-center 
              hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
              h-10 sm:h-12
              px-4 sm:px-5
              text-xs sm:text-base
              w-full sm:w-auto
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
            <span>LinkedIn</span>
          </a>
        </AnimatedText>
      </main>
    </section>
  )
}