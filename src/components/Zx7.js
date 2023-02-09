import React from 'react';

export default function Zx7() {
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
          src="images\product-zx7-speaker\desktop\image-category-page-preview.jpg"
        ></img>

        <div className="headphonesproduct-text">
          <h2>N E W &nbsp; P R O D U C T</h2>
          <h1>
            ZX7 <br></br>SPEAKER
          </h1>
          <p>
            Stream high quality sound wirelessly with minimal to no loss. The
            ZX7 speaker uses high-end audiophile components that represents the
            top of the line powered speakers for home or studio use.
          </p>
          <h3>$4,500</h3>
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
            Reap the advantages of a flat diaphragm tweeter cone. This provides
            a fast response rate and excellent high frequencies that lower
            tiered bookshelf speakers cannot provide. The woofers are made from
            aluminum that produces a unique and clear sound. XLR inputs allow
            you to connect to a mixer for more advanced usage. The ZX7 speaker
            is the perfect blend of stylish design and high performance. It
            houses an encased MDF wooden enclosure which minimises acoustic
            resonance. Dual connectivity allows pairing through bluetooth or
            traditional optical and RCA input. Switch input sources and control
            volume at your finger tips with the included wireless remote. This
            versatile speaker is equipped to deliver an authentic listening
            experience.
          </p>
        </div>
        <div className="the-box">
          <h1>IN THE BOX</h1>
          <p>2x &nbsp; Speaker Unit</p>
          <p>2x &nbsp;Speaker Cloth Panel</p>
          <p>1x &nbsp;User Manual</p>
          <p>1x &nbsp;3.5mm 7.5m Audio Cable</p>
          <p>1x &nbsp; 7.5m Optical Cable</p>
        </div>
      </div>
      <div className="page-images">
        <div className="col-image">
          <img src="images\product-zx7-speaker\desktop\image-gallery-1.jpg"></img>
          <img src="images\product-zx7-speaker\desktop\image-gallery-2.jpg"></img>
        </div>
        <div className="row-image">
          <img src="images\product-zx7-speaker\desktop\image-gallery-3.jpg"></img>
        </div>
      </div>
      <div className="may-also">
        <h1>YOU MAY ALSO LIKE</h1>
      </div>
      <div className="also-container">
        <div className="also-bar">
          <div className="also-product">
            <img src="images\product-zx9-speaker\desktop\image-category-page-preview.jpg"></img>
            <h1>ZX9 SPEAKER</h1>
            <button>SEE PRODUCT</button>
          </div>
          <div className="also-product">
            <img src="images\product-xx99-mark-one-headphones\desktop\image-category-page-preview.jpg"></img>
            <h1>XX99 MARK I</h1>
            <button>SEE PRODUCT</button>
          </div>
          <div className="also-product">
            <img src="images\product-xx59-headphones\desktop\image-category-page-preview.jpg"></img>
            <h1>XX59</h1>
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
