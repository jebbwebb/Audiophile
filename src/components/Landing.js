import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Productbar from './Productbar';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  const handleXx99m2 = () => {
    navigate('/xx99m2');
  };
  const handleZx9 = () => {
    navigate('/zx9');
  };
  const handleYx1 = () => {
    navigate('yx1');
  };
  const handleZx7 = () => {
    navigate('/zx7');
  };
  return (
    <>
      <main>
        <Navbar></Navbar>
        <div className="landing-container">
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
                <button onClick={handleXx99m2}>SEE PRODUCT</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Productbar></Productbar>
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
            <button onClick={handleZx9}>SEE PRODUCT</button>
          </div>
        </div>
      </div>
      <div className="zx7-container">
        <div className="zx7-speaker">
          <div className="zx7-text">
            <h1>ZX7 SPEAKER</h1>
            <button onClick={handleZx7}>SEE PRODUCT</button>
          </div>
          <img
            className="tablet-zx7"
            src="\images\home\tablet\image-speaker-zx7.jpg"
          ></img>
          <img
            className="desktop-zx7"
            src="\images\home\desktop\image-speaker-zx7.jpg"
          ></img>
          <img
            className="mobile-zx7"
            src="\images\home\mobile\image-speaker-zx7.jpg"
          ></img>
        </div>
      </div>
      <div className="yx1-containter">
        <div className="yx1-image">
          <img
            className="yx1-desktop"
            src="\images\home\desktop\image-earphones-yx1.jpg"
          ></img>
        </div>
        <div className="yx1-text">
          <h1>YX1 EARPHONES</h1>
          <button onClick={handleYx1}>SEE PRODUCT</button>
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
          <img
            className="about-tablet"
            src="\images\shared\tablet\image-best-gear.jpg"
          ></img>
          <img
            className="about-desktop"
            src="\images\shared\desktop\image-best-gear.jpg"
          ></img>
          <img
            className="about-mobile"
            src="\images\shared\desktop\image-best-gear.jpg"
          ></img>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
