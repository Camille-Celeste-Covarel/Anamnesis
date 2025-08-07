import { type ReactNode, useCallback, useEffect, useState } from "react";
import { useOverlay } from "../../contexts/OverlayContext/OverlayContext.tsx";
import "../../stylesheets/components/Overlay.css";

export function Overlay({ children }: { children: ReactNode }) {
  const { closeOverlay } = useOverlay();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => {
      closeOverlay();
    }, 300);
  }, [closeOverlay]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);

  if (!children) {
    return null;
  }

  return (
    <>
      <div
        className={`overlay-backdrop ${isOpen ? "open" : ""}`}
        onClick={handleClose}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleClose();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label="Fermer l'overlay"
      />
      <div className={`overlay-container ${isOpen ? "open" : ""}`}>
        <button
          type="button"
          className="close-button"
          onClick={handleClose}
          aria-label="Fermer"
        >
          &times;
        </button>
        <div className="overlay-content">{children}</div>
      </div>
    </>
  );
}
