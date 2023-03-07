import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItem, updateQuanity, lowerQuanity } from './counter';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Productbar from './Productbar';
export default function Yx1(productData) {
  const navigate = useNavigate();
  const handleZx9 = () => {
    navigate('/zx9');
  };
  const handleXx99 = () => {
    navigate('/xx99');
  };
  const handleXx59 = () => {
    navigate('/xx59');
  };
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.counter.items);
  const cartId = useSelector((state) => state.counter.items[0]);

  const handleAddItem = () => {
    dispatch(
      addItem({
        id: productData.productData.id,
        img: productData.productData.image.mobile,
        price: productData.productData.price,
        name: productData.productData.name,
        quantity: 1,
      })
    );
  };

  const handleUpdateQuantity = (id, price) => {
    dispatch(updateQuanity({ id, price }));
  };
  const handleLowerQuantity = (id, price) => {
    dispatch(lowerQuanity({ id, price }));
  };

  return (
    <>
      <div className="main-container">
        <div className="page-container">
          <Navbar></Navbar>
        </div>
      </div>

      <div className="headphonespage-product">
        <img
          className="productpage-image"
          src="images\product-yx1-earphones\desktop\image-category-page-preview.jpg"
        ></img>

        <div className="productimage-tablet">
          <img
            className="productpage-tablet"
            src="\images/product-yx1-earphones\tablet\image-product.jpg"
          ></img>
        </div>
        <img
          className="productpage-mobile"
          src="images\product-yx1-earphones\mobile\image-category-page-preview.jpg"
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
              <button
                onClick={() =>
                  handleLowerQuantity(1, productData.productData.price)
                }
                className="quanity"
              >
                -
              </button>
              <span>1</span>
              <button
                onClick={() =>
                  handleUpdateQuantity(1, productData.productData.price)
                }
                className="quanity"
              >
                +
              </button>
            </div>

            <button className="add-cart" onClick={handleAddItem}>
              ADD TO CART
            </button>
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
          <img
            className="col-desktop"
            src="images\product-yx1-earphones\desktop\image-gallery-1.jpg"
          ></img>
          <img
            className="col-desktop"
            src="images\product-yx1-earphones\desktop\image-gallery-2.jpg"
          ></img>
          <img
            className="col-tablet"
            src="images\product-yx1-earphones\tablet\image-gallery-1.jpg"
          ></img>
          <img
            className="col-tablet"
            src="images\product-yx1-earphones\tablet\image-gallery-2.jpg"
          ></img>
          <img
            className="col-mobile"
            src="images\product-yx1-earphones\mobile\image-gallery-1.jpg"
          ></img>
          <img
            className="col-mobile"
            src="images\product-yx1-earphones\mobile\image-gallery-2.jpg"
          ></img>
        </div>
        <div className="row-image">
          <img
            className="row-desktop"
            src="images\product-yx1-earphones\desktop\image-gallery-3.jpg"
          ></img>
          <img
            className="row-tablet"
            src="images\product-yx1-earphones\tablet\image-gallery-3.jpg"
          ></img>
          <img
            className="row-mobile"
            src="images\product-yx1-earphones\mobile\image-gallery-3.jpg"
          ></img>
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
            <button onClick={handleXx99}>SEE PRODUCT</button>
          </div>
          <div className="also-product">
            <img src="images\product-xx59-headphones\desktop\image-category-page-preview.jpg"></img>
            <h1>XX59</h1>
            <button onClick={handleXx59}>SEE PRODUCT</button>
          </div>
          <div className="also-product">
            <img src="images\product-zx9-speaker\desktop\image-category-page-preview.jpg"></img>
            <h1>ZX9 SPEAKER</h1>
            <button onClick={handleZx9}>SEE PRODUCT</button>
          </div>
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
      <Footer></Footer>
    </>
  );
}
