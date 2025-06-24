import type { ModalProps } from "../types/User";

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-40" onClick={onClose} />

      <div
        onClick={(e) => e.preventDefault()}
        className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 sm:p-10 w-full max-w-2xl mx-4 animate-fadeIn"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-400 hover:text-gray-600 text-2xl font-bold"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
