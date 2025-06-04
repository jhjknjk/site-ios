"use client"

import { useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import BenefitsSection from "@/components/benefits-section"
import ModelsSection from "@/components/models-section"
import ChattersSection from "@/components/chatters-section"
import FaqSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import SuccessModal from "@/components/success-modal"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleFormSubmit = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <main>
      <Header />
      <HeroSection />
      <BenefitsSection />
      <ModelsSection />
      <ChattersSection />
      <FaqSection />
      <ContactSection onFormSubmit={handleFormSubmit} />
      <Footer />
      <SuccessModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  )
}
