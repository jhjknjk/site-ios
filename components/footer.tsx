import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="flex items-center space-x-2 justify-center md:justify-start">
              <i className="fas fa-crown text-xl text-yellow-400 slide-right-left"></i>
              <Link href="/" className="text-xl font-bold text-white tap-highlight-none">
                <span className="text-yellow-400">elitefans</span>
                <span className="text-pink-500">only</span>
              </Link>
            </div>
            <p className="mt-2 text-xs sm:text-sm max-w-xs">
              Профессиональное агентство для моделей и чатеров OnlyFans. 2023 © Все права защищены.
            </p>
          </div>

          <div className="flex space-x-4 sm:space-x-6 mb-6 md:mb-0">
            <a
              href="https://t.me/of_slava"
              className="text-gray-400 hover:text-white transition tap-highlight-none"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Наш Telegram"
            >
              <i className="fab fa-telegram text-xl sm:text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition tap-highlight-none"
              aria-label="Наш Instagram"
            >
              <i className="fab fa-instagram text-xl sm:text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition tap-highlight-none"
              aria-label="Наш Twitter"
            >
              <i className="fab fa-twitter text-xl sm:text-2xl"></i>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-xs sm:text-sm flex flex-col sm:flex-row justify-center md:justify-end space-y-2 sm:space-y-0 space-x-0 sm:space-x-4">
          <Link href="#" className="hover:text-white transition text-center tap-highlight-none">
            Политика конфиденциальности
          </Link>
          <Link href="#" className="hover:text-white transition text-center tap-highlight-none">
            Условия использования
          </Link>
        </div>
      </div>
    </footer>
  )
}
