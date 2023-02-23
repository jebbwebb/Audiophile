import React from 'react';
import { useRef, useEffect } from 'react';

export default function Emptycart({ open, onClose, menuRef }) {
  useEffect(() => {
    document.addEventListener('mousedown', (event) => {
      if (menuRef.current.contains(event.target)) {
        onClose();
      }
    });
  });

  const MODAL_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 1000,
    overflow: 'hidden',
  };

  if (!open) return null;

  return (
    <>
      <div ref={menuRef} style={MODAL_STYLES} />
      <div className="cart-container">
        <div className="empty-cart">
          <h1>Your cart is empty</h1>
          <img src="/images/shared/desktop/icon-cart.svg"></img>
        </div>
      </div>
    </>
  );
}
