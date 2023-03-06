import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Productbar from './Productbar';
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
        <Navbar></Navbar>
        <div className="headphone-container">
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
          <img
            className="headphonesproduct-tablet"
            src="images\product-xx99-mark-two-headphones\tablet\image-category-page-preview.jpg"
          ></img>
          <img
            className="headphonesproduct-mobile"
            src="images\product-xx99-mark-two-headphones\mobile\image-category-page-preview.jpg"
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
          <img
            className="headphonesproduct2-tablet"
            src="\images\product-xx99-mark-one-headphones\tablet\image-category-page-preview.jpg"
          ></img>
          <img
            className="headphonesproduct-mobile"
            src="\images\product-xx99-mark-one-headphones\mobile\image-category-page-preview.jpg"
          ></img>
          <div className="headphonesproduct-text">
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
          <img
            className="headphonesproduct-tablet"
            src="\images\product-xx59-headphones\tablet\image-category-page-preview.jpg"
          ></img>
          <img
            className="headphonesproduct-mobile"
            src="\images\product-xx59-headphones\mobile\image-category-page-preview.jpg"
          ></img>

          <div className="headphonesproduct-text">
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
