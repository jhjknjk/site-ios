import AnimatedSection from "@/components/animated-section"

export default function ModelsSection() {
  return (
    <section id="models" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 sm:mb-12 lg:mb-0 lg:pr-8">
            <AnimatedSection animation="fadeInLeft">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Стань моделью OnlyFans</h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
                Мы помогаем моделям всех типов начать зарабатывать на OnlyFans. Без опыта, с любой внешностью и любым
                уровнем раскрепощенности.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeInLeft" delay={200}>
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 text-lg sm:text-xl mt-0.5 mr-2 sm:mr-3"></i>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg">Полное сопровождение</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Мы делаем все за вас: продвижение, чаты, контент-план
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 text-lg sm:text-xl mt-0.5 mr-2 sm:mr-3"></i>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg">Гарантия дохода</h3>
                    <p className="text-sm sm:text-base text-gray-600">От $2000 в первый месяц или возвращаем затраты</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 text-lg sm:text-xl mt-0.5 mr-2 sm:mr-3"></i>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg">Без вложений</h3>
                    <p className="text-sm sm:text-base text-gray-600">Все затраты на старте берем на себя</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInLeft" delay={400}>
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

          <div className="lg:w-1/2 relative w-full">
            <AnimatedSection animation="fadeInRight">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg mb-6 sm:mb-8 hover-lift">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-center">Доход наших моделей</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm sm:text-base">1-й месяц</span>
                      <span className="text-sm sm:text-base">$2K</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-pink-400 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm sm:text-base">3-й месяц</span>
                      <span className="text-sm sm:text-base">$3K - $4K</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-purple-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm sm:text-base">6-й месяц</span>
                      <span className="text-sm sm:text-base">$5K - $7K</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-yellow-400 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={300}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-gradient-to-tr from-pink-500 to-red-500 text-white p-4 sm:p-6 rounded-xl shadow-lg hover-scale">
                  <i className="fas fa-user-friends text-xl sm:text-2xl mb-2 sm:mb-3"></i>
                  <h3 className="font-bold text-lg sm:text-xl">+3,500</h3>
                  <p className="text-xs sm:text-sm opacity-90">Подписчиков в месяц</p>
                </div>
                <div className="bg-gradient-to-tr from-purple-500 to-indigo-500 text-white p-4 sm:p-6 rounded-xl shadow-lg hover-scale">
                  <i className="fas fa-dollar-sign text-xl sm:text-2xl mb-2 sm:mb-3"></i>
                  <h3 className="font-bold text-lg sm:text-xl">$5,200</h3>
                  <p className="text-xs sm:text-sm opacity-90">Средний доход</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
