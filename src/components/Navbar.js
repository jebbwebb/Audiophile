import React, { useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Shoppingcart from './Shoppingcart';
import Emptycart from './Emptycart';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state) => state.counter.items);
  let menuRef = useRef();

  return (
    <>
      <div>
        {' '}
        <div className="nav-container">
          <div className="nav">
            <h1>audiophile</h1>

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
    </>
  );
}
