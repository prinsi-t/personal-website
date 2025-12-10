'use client'

import { useState, useEffect, useRef } from "react"
import React from 'react'

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills"},
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience"},
  { name: "Projects", href: "#projects"},
  { name: "Gallery", href: "#gallery"},
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isOpen, setIsOpen] = useState(false)
  const underlineRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLUListElement>(null)
  const NAVBAR_HEIGHT = 60

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + NAVBAR_HEIGHT + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = section.clientHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const activeItem = navRef.current?.querySelector(`a[href="#${activeSection}"]`)
    if (activeItem && underlineRef.current && navRef.current) {
      const rect = activeItem.getBoundingClientRect()
      const navRect = navRef.current.getBoundingClientRect()
      
      underlineRef.current.style.left = `${rect.left - navRect.left}px`
      underlineRef.current.style.width = `${rect.width}px`
    }
  }, [activeSection])

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href) as HTMLElement
    
    if (target) {
      const targetPosition = target.offsetTop - NAVBAR_HEIGHT
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }



  
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-sm ">
      <div className="w-full px-4 py-4 flex md:block">
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center w-8 h-8"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <ul ref={navRef} className="
          hidden md:flex justify-center items-center
          gap-6 lg:gap-8
          relative text-center w-full
        ">
          <div
            ref={underlineRef}
            className="absolute bottom-0 h-[2px] bg-neutral-950 dark:bg-neutral-50 transition-all duration-300 ease-out"
          />
          
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`
                  text-sm lg:text-base
                  font-medium whitespace-nowrap transition-colors
                  px-3 py-2
                  rounded-md hover:bg-foreground/5
                  ${activeSection === item.href.slice(1)
                    ? "text-foreground"
                    : "text-foreground/60 hover:text-foreground"
                  }
                `}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        {isOpen && (
          <ul className="md:hidden flex flex-col gap-2 mt-4 pb-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`
                    block text-sm font-medium
                    px-4 py-2 rounded-md transition-colors
                    ${activeSection === item.href.slice(1)
                      ? "bg-foreground/10 text-foreground"
                      : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
                    }
                  `}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}
