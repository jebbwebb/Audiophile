import React from 'react';
import Productbar from './Productbar';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export default function Mobilebar({ open, onClose, menuRef }) {
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
  };
  if (!open) return null;
  return (
    <>
      <div ref={menuRef} style={MODAL_STYLES} />
      <div className="productbar-mobile">
        <div className="mobileproduct-bar">
          <div className="mobile-products">
            <img src="/images/shared\desktop/image-category-thumbnail-headphones.png"></img>
            <div className="products-text">
              <h1>HEADPHONES</h1>
              <a>
                <Link to="/headphones">
                  SHOP&nbsp;<span>></span>
                </Link>
              </a>
            </div>
          </div>
          <div className="mobile-products">
            <div className="products-text">
              <img src="/images\shared/desktop/image-category-thumbnail-speakers.png"></img>
              <h1>SPEAKERS</h1>
              <a>
                <Link to="/speakers">
                  SHOP&nbsp;<span>></span>
                </Link>
              </a>
            </div>
          </div>
          <div className="mobile-products">
            <div className="products-text">
              <img
                src="/images/shared/desktop/image-category-thumbnail-earphones.png"
                alt=""
              ></img>
              <h1>EARPHONES</h1>
              <a>
                <Link to="/earphones">
                  SHOP&nbsp;<span>></span>
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
