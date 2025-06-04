import Image from "next/image"
import AnimatedSection from "@/components/animated-section"

export default function ChattersSection() {
  return (
    <section id="chatters" className="py-12 sm:py-16 md:py-20 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 sm:mb-12 lg:mb-0 lg:order-last lg:pl-8">
            <AnimatedSection animation="fadeInRight">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Работа чатером OnlyFans</h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
                Зарабатывай от $2000 в месяц, общаясь с подписчиками моделей OnlyFans. Работа полностью удаленная и
                анонимная.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={200}>
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 text-lg sm:text-xl mt-0.5 mr-2 sm:mr-3"></i>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg">Гибкий график</h3>
                    <p className="text-sm sm:text-base text-gray-600">Работай когда удобно: 4-8 часов в день</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 text-lg sm:text-xl mt-0.5 mr-2 sm:mr-3"></i>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg">Обучение</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Научим всему: от основ до продвинутых техник продаж
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 text-lg sm:text-xl mt-0.5 mr-2 sm:mr-3"></i>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg">Безопасность</h3>
                    <p className="text-sm sm:text-base text-gray-600">Полная анонимность, никаких личных данных</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={400}>
              <a
                href="https://t.me/of_slava"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block gradient-bg hover:opacity-90 text-white font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full transition shadow-lg tap-highlight-none btn-press hover-lift"
              >
                Написать в Telegram <i className="fab fa-telegram ml-2"></i>
              </a>
            </AnimatedSection>
          </div>

          <div className="lg:w-1/2 lg:order-first">
            <AnimatedSection animation="fadeInLeft">
              <Image
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Чатер OnlyFans за работой"
                width={800}
                height={500}
                className="rounded-xl shadow-xl w-full mb-6 sm:mb-8 hover-lift"
              />
            </AnimatedSection>

            <AnimatedSection animation="fadeInLeft" delay={300}>
              <div className="mt-4 sm:mt-6 bg-indigo-50 p-4 sm:p-6 rounded-xl border border-indigo-100 hover-lift">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center text-indigo-900">
                  Что нужно чатеру?
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 text-sm sm:text-base">
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-indigo-500 mr-2"></i>
                    <span>Грамотный русский/английский</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-indigo-500 mr-2"></i>
                    <span>Компьютер/ноутбук</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-indigo-500 mr-2"></i>
                    <span>4+ часа в день</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-indigo-500 mr-2"></i>
                    <span>Телеграм для связи</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
