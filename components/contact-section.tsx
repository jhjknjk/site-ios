"use client"

import type React from "react"
import { useState, type FormEvent } from "react"
import AnimatedSection from "@/components/animated-section"

interface ContactSectionProps {
  onFormSubmit?: () => void
}

export default function ContactSection({ onFormSubmit }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    role: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Формируем сообщение для Telegram
      const message =
        `🔥 Новая заявка с сайта EliteFansOnly!\n\n` +
        `👤 Имя: ${formData.name}\n` +
        `📱 Контакт: ${formData.contact}\n` +
        `💼 Роль: ${formData.role}\n` +
        `💬 Сообщение: ${formData.message || "Не указано"}\n\n` +
        `⏰ Время: ${new Date().toLocaleString("ru-RU")}`

      // Кодируем сообщение для URL
      const encodedMessage = encodeURIComponent(message)

      // Имитация отправки
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Создаем ссылку на Telegram
      const telegramUrl = `https://t.me/of_slava?text=${encodedMessage}`

      // Для мобильных устройств используем прямое перенаправление
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // На мобильных устройствах используем location.href
        window.location.href = telegramUrl
      } else {
        // На десктопе открываем в новой вкладке
        window.open(telegramUrl, "_blank")
      }

      // Вызываем функцию обратного вызова для отображения модального окна
      if (onFormSubmit) {
        onFormSubmit()
      }

      // Сбрасываем форму
      setFormData({
        name: "",
        contact: "",
        role: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      // Резервный вариант - прямая ссылка
      const message =
        `🔥 Новая заявка с сайта EliteFansOnly!\n\n` +
        `👤 Имя: ${formData.name}\n` +
        `📱 Контакт: ${formData.contact}\n` +
        `💼 Роль: ${formData.role}\n` +
        `💬 Сообщение: ${formData.message || "Не указано"}`

      const encodedMessage = encodeURIComponent(message)
      window.location.href = `https://t.me/of_slava?text=${encodedMessage}`
    } finally {
      setIsSubmitting(false)
    }
  }

  // Функция для быстрого перехода в Telegram без заполнения формы
  const handleQuickContact = () => {
    const quickMessage = "Привет! Хочу узнать больше о работе с EliteFansOnly 🚀"
    const encodedMessage = encodeURIComponent(quickMessage)

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.location.href = `https://t.me/of_slava?text=${encodedMessage}`
    } else {
      window.open(`https://t.me/of_slava?text=${encodedMessage}`, "_blank")
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Упрощенный анимированный фон для мобильных */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 opacity-5 md:opacity-10">
          <div className="absolute top-4 left-4 md:top-10 md:left-10 w-8 h-8 md:w-20 md:h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-16 right-8 md:top-32 md:right-20 w-6 h-6 md:w-16 md:h-16 bg-yellow-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-8 left-1/4 w-4 h-4 md:w-12 md:h-12 bg-pink-300 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 right-1/3 w-3 h-3 md:w-8 md:h-8 bg-purple-300 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 py-8 md:py-12 lg:py-20 text-white">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-lg md:max-w-4xl mx-auto">
            <AnimatedSection animation="fadeInDown">
              <div className="text-center mb-6 md:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-lg rounded-full mb-4 md:mb-6 animate-pulse-slow">
                  <i className="fas fa-rocket text-2xl md:text-3xl text-yellow-400"></i>
                </div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent leading-tight">
                  Готов начать зарабатывать?
                </h2>
                <p className="text-base md:text-xl opacity-90 px-2 md:px-0">
                  Заполни форму и получи консультацию в течение 24 часов
                </p>
              </div>
            </AnimatedSection>

            {/* Быстрая кнопка для связи */}
            <AnimatedSection animation="fadeInUp" delay={200}>
              <div className="text-center mb-6">
                <button
                  onClick={handleQuickContact}
                  className="inline-flex items-center bg-white/20 backdrop-blur-lg hover:bg-white/30 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-lg tap-highlight-none active:scale-95 border border-white/30"
                >
                  <i className="fab fa-telegram mr-2 text-lg"></i>
                  Написать сразу в Telegram
                  <i className="fas fa-external-link-alt ml-2 text-sm"></i>
                </button>
                <p className="text-sm opacity-75 mt-2">Или заполни подробную форму ниже ⬇️</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={300}>
              <div className="relative">
                <form
                  className="bg-white/95 backdrop-blur-lg rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-8 text-gray-800 border border-white/20"
                  onSubmit={handleSubmit}
                >
                  {/* Компактный заголовок формы */}
                  <div className="text-center mb-6 md:mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-3 md:mb-4 animate-pulse-slow">
                      <i className="fas fa-file-alt text-lg md:text-2xl text-white"></i>
                    </div>
                    <h3 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                      Подробная заявка
                    </h3>
                  </div>

                  {/* Мобильная сетка - одна колонка на телефонах */}
                  <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 mb-4 md:mb-6">
                    <div className="relative group">
                      <label htmlFor="name" className="block font-medium mb-2 text-sm md:text-base text-gray-700">
                        <i className="fas fa-user mr-2 text-pink-500"></i>
                        Ваше имя*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className={`w-full px-4 py-3 md:py-4 rounded-xl border-2 transition-all duration-300 text-base ${
                          focusedField === "name"
                            ? "border-pink-400 shadow-lg shadow-pink-200 md:scale-105"
                            : "border-gray-200 hover:border-pink-300"
                        } focus:outline-none bg-white/80 backdrop-blur-sm`}
                        placeholder="Как к вам обращаться?"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus("name")}
                        onBlur={handleBlur}
                      />
                      {focusedField === "name" && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full animate-ping"></div>
                      )}
                    </div>

                    <div className="relative group">
                      <label htmlFor="contact" className="block font-medium mb-2 text-sm md:text-base text-gray-700">
                        <i className="fab fa-telegram mr-2 text-blue-500"></i>
                        Телеграм*
                      </label>
                      <input
                        type="text"
                        id="contact"
                        name="contact"
                        required
                        className={`w-full px-4 py-3 md:py-4 rounded-xl border-2 transition-all duration-300 text-base ${
                          focusedField === "contact"
                            ? "border-blue-400 shadow-lg shadow-blue-200 md:scale-105"
                            : "border-gray-200 hover:border-blue-300"
                        } focus:outline-none bg-white/80 backdrop-blur-sm`}
                        placeholder="@username или номер"
                        value={formData.contact}
                        onChange={handleChange}
                        onFocus={() => handleFocus("contact")}
                        onBlur={handleBlur}
                      />
                      {focusedField === "contact" && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                      )}
                    </div>
                  </div>

                  <div className="mb-4 md:mb-6 relative group">
                    <label htmlFor="role" className="block font-medium mb-2 text-sm md:text-base text-gray-700">
                      <i className="fas fa-briefcase mr-2 text-purple-500"></i>Я хочу работать как*
                    </label>
                    <select
                      id="role"
                      name="role"
                      required
                      className={`w-full px-4 py-3 md:py-4 rounded-xl border-2 transition-all duration-300 text-base ${
                        focusedField === "role"
                          ? "border-purple-400 shadow-lg shadow-purple-200 md:scale-105"
                          : "border-gray-200 hover:border-purple-300"
                      } focus:outline-none bg-white/80 backdrop-blur-sm`}
                      value={formData.role}
                      onChange={handleChange}
                      onFocus={() => handleFocus("role")}
                      onBlur={handleBlur}
                    >
                      <option value="">Выберите вариант</option>
                      <option value="Модель OnlyFans">💃 Модель OnlyFans</option>
                      <option value="Чатер OnlyFans">💬 Чатер OnlyFans</option>
                    </select>
                    {focusedField === "role" && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
                    )}
                  </div>

                  <div className="mb-6 md:mb-8 relative group">
                    <label htmlFor="message" className="block font-medium mb-2 text-sm md:text-base text-gray-700">
                      <i className="fas fa-comment-dots mr-2 text-green-500"></i>
                      Расскажите о себе
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className={`w-full px-4 py-3 md:py-4 rounded-xl border-2 transition-all duration-300 text-base resize-none ${
                        focusedField === "message"
                          ? "border-green-400 shadow-lg shadow-green-200 md:scale-105"
                          : "border-gray-200 hover:border-green-300"
                      } focus:outline-none bg-white/80 backdrop-blur-sm`}
                      placeholder="Ваш опыт, ожидания..."
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus("message")}
                      onBlur={handleBlur}
                    ></textarea>
                    {focusedField === "message" && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                    )}
                  </div>

                  <div className="mb-4 md:mb-6 text-center">
                    <div className="inline-flex items-center text-xs text-gray-500 bg-gray-50 px-3 py-2 rounded-full">
                      <i className="fas fa-shield-alt mr-2 text-green-500"></i>
                      <span className="text-xs">Согласие на обработку данных</span>
                    </div>
                  </div>

                  {/* Большая кнопка для мобильных */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full relative overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white font-bold px-6 py-4 md:py-5 rounded-2xl transition-all duration-300 shadow-lg text-lg md:text-xl tap-highlight-none ${
                      isSubmitting ? "animate-pulse" : "active:scale-95 md:hover:scale-105 md:hover:shadow-2xl"
                    }`}
                  >
                    <div className="flex items-center justify-center relative z-10">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 md:h-6 md:w-6 border-b-2 border-white mr-3"></div>
                          <span>Отправляем в Telegram...</span>
                        </>
                      ) : (
                        <>
                          <i className="fab fa-telegram mr-3 text-lg md:text-xl"></i>
                          <span>Отправить в Telegram</span>
                          <i className="fas fa-external-link-alt ml-3"></i>
                        </>
                      )}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>

                    {!isSubmitting && (
                      <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-1 left-1 w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full animate-ping"></div>
                        <div className="absolute bottom-1 right-1 w-4 h-4 md:w-6 md:h-6 bg-white/30 rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </button>

                  <div className="text-center mt-4 md:mt-6">
                    <p className="text-xs md:text-sm text-gray-500 flex items-center justify-center flex-wrap">
                      <i className="fas fa-mobile-alt mr-2 text-green-500"></i>
                      <span>Откроет Telegram приложение с готовым сообщением</span>
                    </p>
                  </div>
                </form>
              </div>
            </AnimatedSection>

            {/* Адаптивные информационные карточки */}
            <AnimatedSection animation="fadeInUp" delay={600}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8 px-2 md:px-0">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 md:p-6 text-center border border-white/20">
                  <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded-full mb-3 md:mb-4 animate-bounce">
                    <i className="fas fa-clock text-lg md:text-xl text-gray-900"></i>
                  </div>
                  <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2">Быстрый ответ</h4>
                  <p className="text-xs md:text-sm opacity-90">В течение 24 часов</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 md:p-6 text-center border border-white/20">
                  <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-green-400 rounded-full mb-3 md:mb-4 animate-pulse">
                    <i className="fas fa-gift text-lg md:text-xl text-gray-900"></i>
                  </div>
                  <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2">Бесплатно</h4>
                  <p className="text-xs md:text-sm opacity-90">Консультация без оплаты</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 md:p-6 text-center border border-white/20">
                  <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-blue-400 rounded-full mb-3 md:mb-4 animate-ping">
                    <i className="fas fa-shield-alt text-lg md:text-xl text-gray-900"></i>
                  </div>
                  <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2">Конфиденциально</h4>
                  <p className="text-xs md:text-sm opacity-90">100% анонимность</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
