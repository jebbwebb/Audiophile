import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItem, updateQuanity, lowerQuanity } from './counter';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Productbar from './Productbar';

export default function Xx99(productData) {
  const navigate = useNavigate();
  const handleZx9 = () => {
    navigate('/zx9');
  };
  const handleXx99m2 = () => {
    navigate('/xx99m2');
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
        name: productData.productData.others[0].name,
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
          src="images\product-xx99-mark-one-headphones\desktop\image-category-page-preview.jpg"
        ></img>

        <div className="productimage-tablet">
          <img
            className="productpage-tablet"
            src="\images\product-xx99-mark-one-headphones\tablet\image-product.jpg"
          ></img>
        </div>
        <img
          className="productpage-mobile"
          src="images\product-xx99-mark-one-headphones\mobile\image-category-page-preview.jpg"
        ></img>

        <div className="headphonesproduct-text">
          <h2>N E W &nbsp; P R O D U C T</h2>
          <h1>
            XX99 MARK I <br></br>HEADPHONES
          </h1>
          <p>
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>
          <h3>$1,750</h3>
          <div className="button-container">
            <div className="quanity-container">
              <button
                onClick={() =>
                  handleLowerQuantity(3, productData.productData.price)
                }
                className="quanity"
              >
                -
              </button>
              <span>1</span>
              <button
                onClick={() =>
                  handleUpdateQuantity(3, productData.productData.price)
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
            As the headphones all others are measured against, the XX99 Mark I
            demonstrates over five decades of audio expertise, redefining the
            critical listening experience. This pair of closed-back headphones
            are made of industrial, aerospace-grade materials to emphasize
            durability at a relatively light weight of 11 oz. From the
            handcrafted microfiber ear cushions to the robust metal headband
            with inner damping element, the components work together to deliver
            comfort and uncompromising sound. Its closed-back design delivers up
            to 27 dB of passive noise cancellation, reducing resonance by
            reflecting sound to a dedicated absorber. For connectivity, a
            specially tuned cable is includes with a balanced gold connector.
          </p>
        </div>
        <div className="thebox-tablet">
          <div className="thebox-container">
            <div className="inthebox">
              <h1>IN THE BOX</h1>
            </div>
            <div className="box-tablet">
              <div className="box-item">
                <p>1x &nbsp; Headphone Unit</p>
              </div>
              <div className="box-item">
                <p>2x &nbsp;Replacement Earcups</p>
              </div>
              <div className="box-item">
                <p>1x &nbsp;User Manual</p>
              </div>
              <div className="box-item">
                <p>1x &nbsp;3.5mm 5m Audio Cable</p>
              </div>
            </div>
          </div>
        </div>
        <div className="the-box">
          <div className="inthebox">
            <h1>IN THE BOX</h1>
          </div>
          <div className="box">
            <div className="box-item">
              <p>1x &nbsp; Headphone Unit</p>
            </div>
            <div className="box-item">
              <p>2x &nbsp;Replacement Earcups</p>
            </div>
            <div className="box-item">
              <p>1x &nbsp;User Manual</p>
            </div>
            <div className="box-item">
              <p>1x &nbsp;3.5mm 5m Audio Cable</p>
            </div>
          </div>
        </div>
      </div>
      <div className="page-images">
        <div className="col-image">
          <img
            className="col-desktop"
            src="images\product-xx99-mark-one-headphones\desktop\image-gallery-1.jpg"
          ></img>
          <img
            className="col-desktop"
            src="images\product-xx99-mark-one-headphones\desktop\image-gallery-2.jpg"
          ></img>
          <img
            className="col-tablet"
            src="images\product-xx99-mark-one-headphones\tablet\image-gallery-1.jpg"
          ></img>
          <img
            className="col-tablet"
            src="images\product-xx99-mark-one-headphones\tablet\image-gallery-2.jpg"
          ></img>
          <img
            className="col-mobile"
            src="images\product-xx99-mark-one-headphones\mobile\image-gallery-1.jpg"
          ></img>
          <img
            className="col-mobile"
            src="images\product-xx99-mark-one-headphones\mobile\image-gallery-2.jpg"
          ></img>
        </div>
        <div className="row-image">
          <img
            className="row-desktop"
            src="images\product-xx99-mark-one-headphones\desktop\image-gallery-3.jpg"
          ></img>
          <img
            className="row-tablet"
            src="images\product-xx99-mark-one-headphones\tablet\image-gallery-3.jpg"
          ></img>
          <img
            className="row-mobile"
            src="images\product-xx99-mark-one-headphones\mobile\image-gallery-3.jpg"
          ></img>
        </div>
      </div>
      <div className="may-also">
        <h1>YOU MAY ALSO LIKE</h1>
      </div>
      <div className="also-container">
        <div className="also-bar">
          <div className="also-product">
            <img src="images\product-xx99-mark-two-headphones\desktop\image-category-page-preview.jpg"></img>
            <h1>XX99 Mark II</h1>
            <button onClick={handleXx99m2}>SEE PRODUCT</button>
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
