import React from 'react';

export default function Landing() {
  return (
    <>
      <main>
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
          <div className="products-container">
            <div className="product-text">
              <div className="text">
                <h2>N E W &nbsp;P R O D U C T</h2>
                <h1>
                  XX99 MARK II<br></br> HEADPHONES
                </h1>
                <p>
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
                </p>
                <button>SEE PRODUCT</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="product-bar">
        <div className="products">
          <img src="/images/shared\desktop/image-category-thumbnail-headphones.png"></img>
          <div className="products-text">
            <h1>HEADPHONES</h1>
            <a>SHOP&nbsp;></a>
          </div>
        </div>
        <div className="products">
          <div className="products-text">
            <img src="/images\shared/desktop/image-category-thumbnail-speakers.png"></img>
            <h1>SPEAKERS</h1>
            <a>SHOP&nbsp;></a>
          </div>
        </div>
        <div className="products">
          <div className="products-text">
            <img src="\images\shared\desktop\image-category-thumbnail-earphones.png"></img>
            <h1>EARPHONES</h1>
            <a>SHOP&nbsp;></a>
          </div>
        </div>
      </div>
      <div className="zx9-container">
        <div className="zx9-speaker">
          <img src="\images\product-zx9-speaker\desktop\image-speaker-zx9.png"></img>
          <div className="zx9-text">
            <h1>
              ZX9 <br></br>SPEAKER
            </h1>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button>SEE PRODUCT</button>
          </div>
        </div>
      </div>
    </>
  );
}
