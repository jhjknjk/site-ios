"use client"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate__animated animate__fadeIn">
      <div className="bg-white rounded-xl p-6 sm:p-8 max-w-md w-full animate__animated animate__bounceIn">
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 p-3 rounded-full">
            <i className="fas fa-check-circle text-green-500 text-4xl"></i>
          </div>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-4">Заявка успешно отправлена!</h3>
        <p className="text-gray-600 text-center mb-6">Наш менеджер свяжется с вами в течение 24 часов.</p>
        <button
          className="w-full gradient-bg hover:opacity-90 text-white font-bold px-6 py-3 rounded-full transition shadow-lg tap-highlight-none btn-press"
          onClick={onClose}
        >
          Отлично!
        </button>
      </div>
    </div>
  )
}
