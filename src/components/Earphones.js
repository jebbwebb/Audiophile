import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Productbar from './Productbar';
export default function Earphones() {
  const navigate = useNavigate();

  const handleYx1 = () => {
    navigate('/yx1');
  };
  return (
    <>
      <div className="main-container">
        <Navbar></Navbar>
        <div className="headphone-container">
          <div className="headphone-text">
            <h2>EARPHONES</h2>
          </div>
        </div>
      </div>
      <div className="headphonesproduct-container">
        <div className="headphones-product">
          <img
            className="headphonesproduct-image"
            src="images\product-yx1-earphones\desktop\image-category-page-preview.jpg"
          ></img>
          <img
            className="headphonesproduct-tablet"
            src="images\product-yx1-earphones\tablet\image-category-page-preview.jpg"
          ></img>
          <img
            className="headphonesproduct-mobile"
            src="images\product-yx1-earphones\mobile\image-category-page-preview.jpg"
          ></img>

          <div className="headphonesproduct-text">
            <h2>N E W &nbsp; P R O D U C T</h2>
            <h1>
              YX1 WIRELESS <br></br>EARPHONES
            </h1>
            <p>
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>
            <button onClick={handleYx1}>SEE PRODUCT</button>
          </div>
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
