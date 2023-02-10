import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <>
      <main>
        <div className="landing-container">
          <div className="nav-container">
            <div className="nav">
              <h1>audiophile</h1>

              <div class="menu">
                <a>
                  <Link to="/home">HOME</Link>
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
            <img
              src="/images/shared/desktop/image-category-thumbnail-earphones.png"
              alt=""
            ></img>
            <h1>EARPHONES</h1>
            <a>SHOP&nbsp;></a>
          </div>
        </div>
      </div>
      <div className="zx9-container">
        <div className="zx9-speaker">
          <img
            src="/images/product-zx9-speaker/desktop/image-speaker-zx9.png"
            alt=""
          ></img>
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
      <div className="zx7-container">
        <div className="zx7-speaker">
          <div className="zx7-text">
            <h1>ZX7 SPEAKER</h1>
            <button>SEE PRODUCT</button>
          </div>

          <img src="\images\home\desktop\image-speaker-zx7.jpg"></img>
        </div>
      </div>
      <div className="yx1-containter">
        <div className="yx1-image">
          <img src="\images\home\desktop\image-earphones-yx1.jpg"></img>
        </div>
        <div className="yx1-text">
          <h1>YX1 EARPHONES</h1>
          <button>SEE PRODUCT</button>
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
          <div className="footer-nav">
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
