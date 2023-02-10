import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Headphones() {
  const navigate = useNavigate();

  const handleXx99 = () => {
    navigate('/xx99');
  };
  const handleXx99m2 = () => {
    navigate('/xx99m2');
  };
  const handleXx59 = () => {
    navigate('/Xx59');
  };
  return (
    <>
      <div className="main-container">
        <div className="headphone-container">
          <div className="headphone-nav">
            <h1>audiophile</h1>
            <div class="headphone-menu">
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
            <h3>Cart</h3>
          </div>
          <div className="headphone-text">
            <h2>HEADPHONES</h2>
          </div>
        </div>
      </div>
      <div className="headphonesproduct-container">
        <div className="headphones-product">
          <img
            className="headphonesproduct-image"
            src="images\product-xx99-mark-two-headphones\desktop\image-category-page-preview.jpg"
          ></img>

          <div className="headphonesproduct-text">
            <h2>N E W &nbsp; P R O D U C T</h2>
            <h1>
              XX99 MARK II <br></br>HEADPHONES
            </h1>
            <p>
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <button onClick={handleXx99m2}>SEE PRODUCT</button>
          </div>
        </div>
        <div className="headphones-product">
          <div className="headphonesproduct-text">
            <h2>N E W &nbsp; P R O D U C T</h2>
            <h1>
              XX99 MARK I <br></br>HEADPHONES
            </h1>
            <p>
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <button onClick={handleXx99}>SEE PRODUCT</button>
          </div>

          <img
            className="headphonesproduct2-image"
            src="\images\product-xx99-mark-one-headphones\desktop\image-category-page-preview.jpg"
          ></img>
        </div>
        <div className="headphones-product">
          <img
            className="headphonesproduct-image"
            src="\images\product-xx59-headphones\desktop\image-category-page-preview.jpg"
          ></img>

          <div className="headphonesproduct-text">
            <h2>N E W &nbsp; P R O D U C T</h2>
            <h1>
              XX59 <br></br>HEADPHONES
            </h1>
            <p>
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <button onClick={handleXx59}>SEE PRODUCT</button>
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
          <div className="footer-nav2">
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
