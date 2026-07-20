import { useEffect } from 'react';
import { createPortal } from 'react-dom';
<<<<<<< HEAD
import { AnimatePresence, motion } from 'motion/react';

/**
 * Modal -Viewport-centered overlay rendered via portal (escapes transformed ancestors).
 * Overlay fades in/out; content fades + scales/rises in/out via AnimatePresence so the
 * modal never just snaps into or out of existence.
=======

/**
 * Modal — Viewport-centered overlay rendered via portal (escapes transformed ancestors).
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
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

<<<<<<< HEAD
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        // This outer element is AnimatePresence's direct child, so its own
        // `exit` transition is what determines how long React waits before
        // removing the whole subtree from the DOM. Its duration matches (or
        // exceeds) the nested overlay/content exit durations below so those
        // finish playing rather than getting cut off mid-animation.
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={ariaLabelledBy}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <motion.button
            type="button"
            className={`absolute inset-0 ${overlayClassName}`}
            onClick={onClose}
            aria-label="Close dialog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          />

          <motion.div
            className={`relative z-10 w-full max-h-[min(90vh,900px)] overflow-y-auto overscroll-contain ${contentClassName}`}
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
=======
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
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
    document.body,
  );
};

export default Modal;
