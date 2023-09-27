import React, { useEffect } from "react";
import { Dialog, Backdrop } from '@mui/material';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  size?: "small" | "medium" | "large";
}

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  size = "small",
}) => {
  const escHandler = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", escHandler);
    }

    return () => {
      document.removeEventListener("keydown", escHandler);
    };
  }, [isOpen]);

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth={
        size === "medium"
          ? 'md'
          : size === "large"
          ? 'lg'
          : 'sm'
      }
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      }}
    
    >
      <div
        onClick={onClose}
      >
        <Backdrop open={isOpen} />
      </div>
      <div
        style={{
          inset: 0,
          zIndex: 20,
          margin: '10px auto',
          width:
            size === "medium"
              ? '1200px'
              : size === "large"
              ? '1600px'
              : '500px',
        }}
      >
        {children}
      </div>
    </Dialog>
  );
}

export default Modal;