import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Productbar from './Productbar';

export default function () {
  const navigate = useNavigate();

  const handleZx9 = () => {
    navigate('/zx9');
  };
  const handleZx7 = () => {
    navigate('/zx7');
  };
  return (
    <>
      <div className="main-container">
        <Navbar></Navbar>
        <div className="headphone-container">
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
          <img
            className="headphonesproduct-tablet"
            src="images\product-zx9-speaker\tablet\image-category-page-preview.jpg"
          ></img>
          <img
            className="headphonesproduct-mobile"
            src="images\product-zx9-speaker\mobile\image-category-page-preview.jpg"
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
            <button onClick={handleZx9}>SEE PRODUCT</button>
          </div>
        </div>
        <div className="headphones-product">
          <img
            className="headphonesproduct-tablet"
            src="images\product-zx7-speaker\tablet\image-category-page-preview.jpg"
          ></img>
          <img
            className="headphonesproduct-mobile"
            src="images\product-zx7-speaker\mobile\image-category-page-preview.jpg"
          ></img>
          <div className="headphonesproduct-text">
            <h1>ZX7 SPEAKER</h1>
            <p>
              Stream high quality sound wirelessly with minimal to no loss. The
              ZX7 speaker uses high-end audiophile components that represents
              the top of the line powered speakers for home or studio use.
            </p>
            <button onClick={handleZx7}>SEE PRODUCT</button>
          </div>

          <img
            className="headphonesproduct2-image"
            src="images\product-zx7-speaker\desktop\image-category-page-preview.jpg"
          ></img>
        </div>

        <Productbar></Productbar>
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
      <Footer></Footer>
    </>
  );
}
