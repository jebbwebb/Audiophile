import React, { useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Shoppingcart from './Shoppingcart';
import Emptycart from './Emptycart';
import Mobilebar from './Mobilebar';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [ismobile, setIsMobile] = useState(false);
  const cartItems = useSelector((state) => state.counter.items);

  let menuRef = useRef();
  const handleMobile = () => {
    return <Mobilebar></Mobilebar>;
  };

  return (
    <>
      <div>
        {' '}
        <div className="nav-container">
          <div className="nav">
            <button class="hamburger" onClick={() => setIsMobile(true)}>
              <span></span>
              <span></span>
              <span></span>
            </button>

            <a>
              <Link to="/">
                <h1>audiophile</h1>
              </Link>
            </a>

            <div class="menu">
              <a>
                <Link to="/">HOME</Link>
              </a>
              <a>
                <Link to="/headphones">HEADPHONES</Link>
              </a>
              <a href=" ">
                <Link to="/speakers">SPEAKERS</Link>
              </a>
              <a>
                <Link to="/earphones">EARPHONES</Link>
              </a>
            </div>
            <div className="cart-icon">
              <button className="cart-button" onClick={() => setIsOpen(true)}>
                <img src="/images/shared/desktop/icon-cart.svg"></img>
              </button>
            </div>
          </div>
        </div>
      </div>
      {cartItems.length >= 1 ? (
        <Shoppingcart
          open={isOpen}
          onClose={() => setIsOpen(false)}
          menuRef={menuRef}
        ></Shoppingcart>
      ) : (
        <Emptycart
          open={isOpen}
          onClose={() => setIsOpen(false)}
          menuRef={menuRef}
        ></Emptycart>
      )}
      {ismobile && (
        <Mobilebar
          open={ismobile}
          onClose={() => setIsMobile(false)}
          menuRef={menuRef}
        ></Mobilebar>
      )}
    </>
  );
}
