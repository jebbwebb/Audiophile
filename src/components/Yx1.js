import React from 'react';

export default function Yx1() {
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
          src="images\product-xx99-mark-two-headphones\desktop\image-category-page-preview.jpg"
        ></img>

        <div className="headphonesproduct-text">
          <h2>N E W &nbsp; P R O D U C T</h2>
          <h1>
            YX1 WIRELESS <br></br>HEADPHONES
          </h1>
          <p>
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <h3>$599</h3>
          <div className="button-container">
            <div className="quanity-container">
              <button className="quanity">-</button>
              <span>1</span>
              <button className="quanity">+</button>
            </div>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
      <div className="features-container">
        <div className="features">
          <h1>FEATURES</h1>
          <p>
            Experience unrivalled stereo sound thanks to innovative acoustic
            technology. With improved ergonomics designed for full day wearing,
            these revolutionary earphones have been finely crafted to provide
            you with the perfect fit, delivering complete comfort all day long
            while enjoying exceptional noise isolation and truly immersive
            sound. The YX1 Wireless Earphones features customizable controls for
            volume, music, calls, and voice assistants built into both earbuds.
            The new 7-hour battery life can be extended up to 28 hours with the
            charging case, giving you uninterrupted play time. Exquisite
            craftsmanship with a splash resistant design now available in an all
            new white and grey color scheme as well as the popular classic
            black.
          </p>
        </div>
        <div className="the-box">
          <h1>IN THE BOX</h1>
          <p>
            <span>2x</span> &nbsp; Earphone Unit
          </p>
          <p>
            <span>6x</span> &nbsp;Multi-Size Earplugs
          </p>
          <p>
            <span>1x</span> &nbsp;User Manual
          </p>
          <p>
            <span>1x</span> &nbsp;USB-C Charging Cable
          </p>
          <p>
            <span>1x</span> &nbsp;Travel Pouch
          </p>
        </div>
      </div>
      <div className="page-images">
        <div className="col-image">
          <img src="images\product-yx1-earphones\desktop\image-gallery-1.jpg"></img>
          <img src="images\product-yx1-earphones\desktop\image-gallery-2.jpg"></img>
        </div>
        <div className="row-image">
          <img src="images\product-yx1-earphones\desktop\image-gallery-3.jpg"></img>
        </div>
      </div>
      <div className="may-also">
        <h1>YOU MAY ALSO LIKE</h1>
      </div>
      <div className="also-container">
        <div className="also-bar">
          <div className="also-product">
            <img src="images\product-xx99-mark-one-headphones\desktop\image-category-page-preview.jpg"></img>
            <h1>XX99 Mark I</h1>
            <button>SEE PRODUCT</button>
          </div>
          <div className="also-product">
            <img src="images\product-xx59-headphones\desktop\image-category-page-preview.jpg"></img>
            <h1>XX59</h1>
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
