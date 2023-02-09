import React from 'react';

export default function Xx59() {
  return (
    <>
      <div className="main-container">
        <div className="page-container">
          <div className="page-nav">
            <h1>audiophile</h1>
            <div class="page-menu">
              <a href=" ">HOME</a>
              <a href="">HEADPHONES</a>
              <a href=" ">SPEAKERS</a>
              <a href="">EARPHONES</a>
            </div>
            <h3>Cart</h3>
          </div>
        </div>
      </div>

      <div className="headphones-product">
        <img
          className="headphonesproduct-image"
          src="images\product-xx59-headphones\desktop\image-category-page-preview.jpg"
        ></img>

        <div className="headphonesproduct-text">
          <h1>
            XX59 <br></br>HEADPHONES
          </h1>
          <p>
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>
          <h3>$899</h3>
          <button className="quanity">-</button>
          <span>1</span>
          <button className="quanity">+</button>
          <button>ADD TO CART</button>
        </div>
      </div>
      <div className="features-container">
        <div className="features">
          <h1>FEATURES</h1>
          <p>
            These headphones have been created from durable, high-quality
            materials tough enough to take anywhere. Its compact folding design
            fuses comfort and minimalist style making it perfect for travel.
            Flawless transmission is assured by the latest wireless technology
            engineered for audio synchronization with videos. More than a simple
            pair of headphones, this headset features a pair of built-in
            microphones for clear, hands-free calling when paired with a
            compatible smartphone. Controlling music and calls is also intuitive
            thanks to easy-access touch buttons on the earcups. Regardless of
            how you use the XX59 headphones, you can do so all day thanks to an
            impressive 30-hour battery life that can be rapidly recharged via
            USB-C.
          </p>
        </div>
        <div className="the-box">
          <h1>IN THE BOX</h1>
          <p>1x &nbsp; Headphone Unit</p>
          <p>2x &nbsp;Replacement Earcups</p>
          <p>1x &nbsp;User Manual</p>
          <p>1x &nbsp;3.5mm 5m Audio Cable</p>
        </div>
      </div>
      <div className="page-images">
        <div className="col-image">
          <img src="images\product-xx59-headphones\desktop\image-gallery-1.jpg"></img>
          <img src="images\product-xx59-headphones\desktop\image-gallery-2.jpg"></img>
        </div>
        <div className="row-image">
          <img src="images\product-xx59-headphones\desktop\image-gallery-3.jpg"></img>
        </div>
      </div>
      <div className="may-also">
        <h1>YOU MAY ALSO LIKE</h1>
      </div>
      <div className="also-container">
        <div className="also-bar">
          <div className="also-product">
            <img src="images\product-xx99-mark-two-headphones\desktop\image-category-page-preview.jpg"></img>
            <h1>XX99 MARK II</h1>
            <button>SEE PRODUCT</button>
          </div>
          <div className="also-product">
            <img src="images\product-xx99-mark-one-headphones\desktop\image-category-page-preview.jpg"></img>
            <h1>XX99 MARK I</h1>
            <button>SEE PRODUCT</button>
          </div>
          <div className="also-product">
            <img src="images\product-zx9-speaker\desktop\image-category-page-preview.jpg"></img>
            <h1>ZX9 SPEAKER</h1>
            <button>SEE PRODUCT</button>
          </div>
        </div>
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
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="about-image">
          <img src="\images\shared\desktop\image-best-gear.jpg"></img>
        </div>
      </div>
      <footer>
        <div className="footer-container">
          <div className="footer-nav5">
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
