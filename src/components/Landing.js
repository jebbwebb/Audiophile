import React from 'react';

export default function Landing() {
  return (
    <>
      <div className="landing-container">
        <div className="nav-container">
          <div className="nav">
            <h1>audiophile</h1>

            <div class="menu">
              <a href=" ">HOME</a>
              <a href="">HEADPHONES</a>
              <a href=" ">SPEAKERS</a>
              <a href="">EARPHONES</a>
            </div>

            <h2>Cart</h2>
          </div>
        </div>

        <div className="landing-product">
          <div className="landing-text">
            <h2>N E W P R O D U C T</h2>
            <h1>XX99 MARK II HEADPHONES</h1>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast
            </p>
            <button>SEE PRODUCT</button>
          </div>
        </div>
        <div className="product-image">
          <img src="images/image-hero.jpg"></img>
        </div>
      </div>
    </>
  );
}
