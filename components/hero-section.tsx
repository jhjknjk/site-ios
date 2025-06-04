import AnimatedSection from "@/components/animated-section"

export default function HeroSection() {
  return (
    <section className="gradient-bg text-white py-8 sm:py-12 md:py-20 lg:py-32">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 sm:mb-12 md:mb-0">
          <AnimatedSection animation="fadeInUp" delay={0}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              Зарабатывай от $5000 <span className="text-yellow-400">в месяц</span> с
              <span className="italic text-white"> EliteFans</span>
              <span className="text-pink-700 font-bold">Only</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={200}>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-lg px-2 sm:px-0">
              EliteFans Agency помогает моделям и чатерам увеличить доход в OnlyFans. Мы создаем стратегию, привлекаем
              подписчиков и полностью ведем ваш аккаунт.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={400}>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 hero-buttons">
              <a
                href="https://t.me/of_slava"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-pink-600 hover:bg-gray-100 font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full text-center transition shadow-lg text-sm sm:text-base tap-highlight-none btn-press hover-lift"
              >
                Я модель <i className="fas fa-arrow-right ml-2"></i>
              </a>
              <a
                href="https://t.me/of_slava"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-pink-600 font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full text-center transition tap-highlight-none btn-press hover-lift"
              >
                Я чатер <i className="fas fa-comment-dots ml-2"></i>
              </a>
            </div>
          </AnimatedSection>
        </div>

        <div className="md:w-1/2 relative mt-8 sm:mt-12 md:mt-0">
          {/* Большая центральная карточка с доходом */}
          <AnimatedSection animation="scaleIn" delay={300}>
            <div className="bg-white text-gray-900 rounded-3xl p-8 sm:p-12 text-center shadow-2xl hover-lift mb-6">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-4">
                  <i className="fas fa-dollar-sign text-2xl text-white"></i>
                </div>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">$5,000 - $15,000</h3>
              <p className="text-lg text-gray-600 mb-6">средний доход в месяц</p>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-pink-500">500+</div>
                  <div className="text-sm text-gray-600">моделей</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-500">24/7</div>
                  <div className="text-sm text-gray-600">поддержка</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-500">0%</div>
                  <div className="text-sm text-gray-600">вложений</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Две карточки снизу */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AnimatedSection animation="fadeInLeft" delay={500}>
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-6 rounded-2xl shadow-lg hover-scale">
                <i className="fas fa-chart-line text-3xl mb-3"></i>
                <h4 className="text-xl font-bold mb-2">Быстрый рост</h4>
                <p className="text-sm opacity-90">Результат уже через 2-3 недели</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={700}>
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-6 rounded-2xl shadow-lg hover-scale">
                <i className="fas fa-shield-alt text-3xl mb-3"></i>
                <h4 className="text-xl font-bold mb-2">100% анонимно</h4>
                <p className="text-sm opacity-90">Полная конфиденциальность</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
