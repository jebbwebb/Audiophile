import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  addItem,
  updateQuanity,
  lowerQuanity,
  removeAllItems,
} from './counter';
import Emptycart from './Emptycart';

export default function Shoppingcart({ open, onClose, menuRef }) {
  useEffect(() => {
    document.addEventListener('mousedown', (event) => {
      if (menuRef.current.contains(event.target)) {
        onClose();
      }
    });
  });
  const [data, setData] = useState([]);

  const MODAL_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 1000,
  };

  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const handleRemove = () => {
    dispatch(removeAllItems());
    console.log('y');
  };
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.counter.items);
  const cartId = useSelector((state) => state.counter.items.id);
  const total = cartItems.reduce(
    (accumulator, current) => accumulator + current.price * current.quantity,
    0
  );
  const handleUpdateQuantity = (id, price) => {
    dispatch(updateQuanity({ id, price }));
  };
  const handleLowerQuantity = (id, price) => {
    dispatch(lowerQuanity({ id, price }));
  };
  if (!open) return null;

  return (
    <>
      <div ref={menuRef} style={MODAL_STYLES} />
      <div className="cart-container">
        <div className="top-bar">
          <h1>Cart ({cartItems.length})</h1>
          <button onClick={handleRemove}>Remove All</button>
        </div>
        <div>
          <div className="cart-section">
            {cartItems.map((item) => {
              return (
                <div key={item.id} className="cart-item">
                  <div className="cart-details">
                    <img src={item.img}></img>
                    <div className="cart-text">
                      <h1>{item.name}</h1>
                      <p>
                        {item.price.toLocaleString('en-US', {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="cart-quanity">
                    <button
                      onClick={() =>
                        handleLowerQuantity(item.id, data[item.id - 1].price)
                      }
                    >
                      -
                    </button>
                    <h3>{item.quantity}</h3>
                    <button
                      onClick={() =>
                        handleUpdateQuantity(item.id, data[item.id - 1].price)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="cart-total">
          <h2>Total</h2>
          <h1>
            {total.toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
              style: 'currency',
              currency: 'USD',
            })}
          </h1>
        </div>
      </div>
    </>
  );
}
