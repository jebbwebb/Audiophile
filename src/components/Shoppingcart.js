import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItem, updateQuanity, lowerQuanity } from './counter';
export default function Shoppingcart() {
  const cartItems = useSelector((state) => state.counter.items);
  console.log(cartItems);
  return (
    <ul>
      {cartItems.map((item) => {
        return (
          <li key={item.id}>
            {item.name}
            {item.price}
          </li>
        );
      })}
    </ul>
  );
}
