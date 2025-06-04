"use client"

import { useState } from "react"
import AnimatedSection from "@/components/animated-section"
import StaggeredCards from "@/components/staggered-cards"

interface FaqItem {
  question: string
  answer: string
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems: FaqItem[] = [
    {
      question: "Как обеспечивается анонимность?",
      answer:
        "Мы используем методы геоблокировки, чтобы ваш контент не показывался пользователям из вашего региона. Также все данные хранятся на защищенных серверах, а для чатеров предусмотрены VPN и защищенные аккаунты.",
    },
    {
      question: "Сколько платит агентство?",
      answer:
        "Для моделей: мы берем 20% от вашего заработка после вычета комиссии OnlyFans. Для чатеров: фиксированная ставка $1000-1500 + % от продаж (общий доход $2000-5000 в месяц).",
    },
    {
      question: "Нужен ли опыт для работы?",
      answer:
        "Нет, опыт не требуется. Для моделей мы проводим обучение съемкам контента, а чатеры проходят 2-недельный тренинг по продажам и общению с подписчиками.",
    },
    {
      question: "Как быстро можно начать зарабатывать?",
      answer:
        "Модели начинают получать первые выплаты через 2-3 недели после запуска аккаунта. Чатёры получают первую зарплату через месяц работы после обучения. Также возможно взять аванс после 2 недель работы.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-pink-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection animation="fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">Частые вопросы</h2>
        </AnimatedSection>

        <StaggeredCards staggerDelay={150} className="space-y-3 sm:space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover-lift"
            >
              <button
                className="w-full flex justify-between items-center p-4 sm:p-6 text-left focus:outline-none tap-highlight-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-base sm:text-lg font-medium">{item.question}</span>
                <i
                  className={`fas fa-chevron-down text-pink-400 transition-transform duration-300 ml-2 ${openIndex === index ? "transform rotate-180" : ""}`}
                ></i>
              </button>
              <div
                className={`px-4 sm:px-6 pb-6 pt-0 transition-all duration-300 ${openIndex === index ? "block" : "hidden"}`}
              >
                <p className="text-sm sm:text-base text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </StaggeredCards>
      </div>
    </section>
  )
}
