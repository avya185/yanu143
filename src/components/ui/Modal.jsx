import { useEffect } from 'react';
import { createPortal } from 'react-dom';

/**
 * Modal — Viewport-centered overlay rendered via portal (escapes transformed ancestors).
 */
const Modal = ({
  isOpen,
  onClose,
  children,
  ariaLabelledBy,
  contentClassName = '',
  overlayClassName = 'bg-black/60 backdrop-blur-sm',
}) => {
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKey = (event) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={ariaLabelledBy}
    >
      <button
        type="button"
        className={`absolute inset-0 ${overlayClassName}`}
        onClick={onClose}
        aria-label="Close dialog"
      />

      <div
        className={`relative z-10 w-full max-h-[min(90vh,900px)] overflow-y-auto overscroll-contain ${contentClassName}`}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
