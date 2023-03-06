import React from 'react';
import { Link } from 'react-router-dom';

export default function Productbar() {
  return (
    <div className="product-bar">
      <div className="products">
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
      <div className="products">
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
      <div className="products">
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
  );
}
