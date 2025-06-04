"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const mobileMenu = document.getElementById("mobileMenu")
      const mobileMenuButton = document.getElementById("mobileMenuButton")

      if (
        mobileMenu &&
        mobileMenuButton &&
        !mobileMenu.contains(target) &&
        target !== mobileMenuButton &&
        !mobileMenuButton.contains(target)
      ) {
        closeMobileMenu()
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMobileMenu()
      }
    }

    document.addEventListener("click", handleClickOutside)
    window.addEventListener("resize", handleResize)

    return () => {
      document.removeEventListener("click", handleClickOutside)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <header className="gradient-bg text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <i className="fas fa-crown text-yellow-400 text-2xl sm:text-3xl slide-right-left"></i>
            <i className="fab fa-onlyfans text-2xl" style={{ color: "#ec4899" }}></i>
            <Link href="/" className="text-xl sm:text-2xl font-bold tap-highlight-none">
              <span className="text-yellow-400">EliteFans</span>
              <span className="text-pink-700">Only</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6 ml-12">
            <Link
              href="#benefits"
              className="hover:text-yellow-200 transition tap-highlight-none font-bold text-sm whitespace-nowrap"
            >
              Преимущества
            </Link>
            <Link
              href="#models"
              className="hover:text-yellow-200 transition tap-highlight-none font-bold text-sm whitespace-nowrap"
            >
              Для моделей
            </Link>
            <Link
              href="#chatters"
              className="hover:text-yellow-200 transition tap-highlight-none font-bold text-sm whitespace-nowrap"
            >
              Для чатеров
            </Link>
          </div>

          <div className="hidden md:block ml-6">
            <a
              href="https://t.me/of_slava"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 hover:bg-pink-400 text-white font-bold px-6 py-2 rounded-full transition shadow-lg tap-highlight-none btn-press whitespace-nowrap text-sm"
            >
              Написать в Telegram
            </a>
          </div>

          <button className="md:hidden text-2xl tap-highlight-none" id="mobileMenuButton" onClick={toggleMobileMenu}>
            <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </nav>

        <div
          className={`md:hidden absolute top-full left-0 w-full bg-pink-700 shadow-lg transition-all duration-300 ${
            isMobileMenuOpen ? "animate__animated animate__fadeInDown" : "hidden"
          }`}
          id="mobileMenu"
        >
          <div className="flex flex-col px-4 py-3 space-y-3">
            <Link
              href="#benefits"
              className="hover:text-yellow-200 transition py-2 tap-highlight-none font-bold"
              onClick={closeMobileMenu}
            >
              Преимущества
            </Link>
            <Link
              href="#models"
              className="hover:text-yellow-200 transition py-2 tap-highlight-none font-bold"
              onClick={closeMobileMenu}
            >
              Для моделей
            </Link>
            <Link
              href="#chatters"
              className="hover:text-yellow-200 transition py-2 tap-highlight-none font-bold"
              onClick={closeMobileMenu}
            >
              Для чатеров
            </Link>
            <a
              href="https://t.me/of_slava"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 hover:bg-pink-400 text-white font-bold px-4 py-2 rounded-full transition shadow-lg tap-highlight-none btn-press text-center"
              onClick={closeMobileMenu}
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
