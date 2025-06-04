"use client"

import AnimatedSection from "@/components/animated-section"
import StaggeredCards from "@/components/staggered-cards"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: "fas fa-chart-line",
      title: "Продвижение",
      description: "Мы продвигаем ваш аккаунт на всех платформах: Twitter, Instagram, TikTok, Reddit и других",
      bgColor: "bg-pink-100",
      iconBg: "bg-pink-400",
      borderColor: "border-pink-200",
    },
    {
      icon: "fas fa-camera",
      title: "Контент",
      description: "Профессиональные контент-планы и обучение съемке качественного контента самостоятельно",
      bgColor: "bg-gray-50",
      iconBg: "bg-purple-500",
      borderColor: "border-gray-100",
    },
    {
      icon: "fas fa-comments",
      title: "Чат",
      description: "В нашей команде профессиональные чатеры, которые увеличат продажи ваших PPV в 3-5 раз",
      bgColor: "bg-gray-50",
      iconBg: "bg-blue-500",
      borderColor: "border-gray-100",
    },
    {
      icon: "fas fa-user-shield",
      title: "Анонимность",
      description: "Полная конфиденциальность. Мы скроем вашу личность от знакомых и родственников",
      bgColor: "bg-gray-50",
      iconBg: "bg-green-500",
      borderColor: "border-gray-100",
    },
  ]

  return (
    <section id="benefits" className="py-12 sm:py-16 md:py-20 bg-pink-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">Почему выбирают EliteFans?</h2>
          <p className="text-lg sm:text-xl text-center text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12">
            Мы создаем профессиональную стратегию продвижения и полностью берем на себя управление вашим OnlyFans
            аккаунтом
          </p>
        </AnimatedSection>

        <StaggeredCards staggerDelay={200} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`${benefit.bgColor} p-6 sm:p-8 rounded-xl card-hover border ${benefit.borderColor} hover-lift`}
            >
              <div
                className={`${benefit.iconBg} text-white p-3 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6 animate-pulse-slow`}
              >
                <i className={`${benefit.icon} text-xl sm:text-2xl`}></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{benefit.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </StaggeredCards>
      </div>
    </section>
  )
}
