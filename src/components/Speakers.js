import React from 'react';

export default function () {
  return (
    <>
      <div className="main-container">
        <div className="headphone-container">
          <div className="headphone-nav">
            <h1>audiophile</h1>
            <div class="headphone-menu">
              <a href=" ">HOME</a>
              <a href="">HEADPHONES</a>
              <a href=" ">SPEAKERS</a>
              <a href="">EARPHONES</a>
            </div>
            <h3>Cart</h3>
          </div>
          <div className="headphone-text">
            <h2>SPEAKERS</h2>
          </div>
        </div>
      </div>
      <div className="headphonesproduct-container">
        <div className="headphones-product">
          <img
            className="headphonesproduct-image"
            src="images\product-zx9-speaker\desktop\image-category-page-preview.jpg"
          ></img>

          <div className="headphonesproduct-text">
            <h2>N E W &nbsp; P R O D U C T</h2>
            <h1>ZX9 SPEAKER</h1>
            <p>
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <button>SEE PRODUCT</button>
          </div>
        </div>
        <div className="headphones-product">
          <div className="headphonesproduct-text">
            <h2>N E W &nbsp; P R O D U C T</h2>
            <h1>ZX7 SPEAKER</h1>
            <p>
              Stream high quality sound wirelessly with minimal to no loss. The
              ZX7 speaker uses high-end audiophile components that represents
              the top of the line powered speakers for home or studio use.
            </p>
            <button>SEE PRODUCT</button>
          </div>

          <img
            className="headphonesproduct2-image"
            src="images\product-zx7-speaker\desktop\image-category-page-preview.jpg"
          ></img>
        </div>

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
              <img
                src="/images/shared/desktop/image-category-thumbnail-earphones.png"
                alt=""
              ></img>
              <h1>EARPHONES</h1>
              <a>SHOP&nbsp;></a>
            </div>
          </div>
        </div>
        <div className="about-container">
          <div className="about-text">
            <h1>
              BRINGING YOU THE <span>BEST</span> AUDIO GEAR
            </h1>
            <p>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <div className="about-image">
            <img src="\images\shared\desktop\image-best-gear.jpg"></img>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-container">
          <div className="footer-nav3">
            <h1>audiophile</h1>

            <div class="footer-menu">
              <a href=" ">HOME</a>
              <a href="">HEADPHONES</a>
              <a href=" ">SPEAKERS</a>
              <a href="">EARPHONES</a>
            </div>
          </div>
          <div className="footer-text">
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <div className="socials">
              <img src="\images\shared\desktop\icon-facebook.svg"></img>
              <img src="\images\shared\desktop\icon-twitter.svg"></img>
              <img src="\images\shared\desktop\icon-instagram.svg"></img>
            </div>
            <h2>Copyright 2021 All Rights Reserved</h2>
          </div>
        </div>
      </footer>
    </>
  );
}
