import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItem, updateQuanity, lowerQuanity } from './counter';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Xx99m2(productData) {
  console.log(productData.productData);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.counter.items);

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
        <Navbar></Navbar>
      </div>

      <div className="headphonespage-product">
        <img
          className="productpage-image"
          src="images\product-xx99-mark-two-headphones\desktop\image-category-page-preview.jpg"
        ></img>

        <div className="productimage-tablet">
          <img
            className="productpage-tablet"
            src="\images\product-xx99-mark-two-headphones\tablet\image-product.jpg"
          ></img>
        </div>
        <img
          className="productpage-mobile"
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
          <h3>$2,999</h3>
          <div className="button-container">
            <div className="quanity-container">
              <button
                onClick={() =>
                  handleLowerQuantity(4, productData.productData.price)
                }
                className="quanity"
              >
                -
              </button>
              <span>1</span>
              <button
                onClick={() =>
                  handleUpdateQuantity(4, productData.productData.price)
                }
                className="quanity"
              >
                +
              </button>
            </div>

            <button onClick={handleAddItem}>ADD TO CART</button>
          </div>
        </div>
      </div>
      <div className="features-container">
        <div className="features">
          <h1>FEATURES</h1>
          <p>
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat. The advanced Active Noise Cancellation
            with built-in equalizer allow you to experience your audio world on
            your terms. It lets you enjoy your audio in peace, but quickly
            interact with your surroundings when you need to. Combined with
            Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the
            XX99 Mark II headphones gives you superior sound, cutting-edge
            technology, and a modern design aesthetic.
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
              <div className="box-item">
                <p>1x &nbsp;Travel Bag</p>
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
            <div className="box-item">
              <p>1x &nbsp;Travel Bag</p>
            </div>
          </div>
        </div>
      </div>
      <div className="page-images">
        <div className="col-image">
          <img
            className="col-desktop"
            src="images\product-xx99-mark-two-headphones\desktop\image-gallery-1.jpg"
          ></img>
          <img
            className="col-desktop"
            src="images\product-xx99-mark-two-headphones\desktop\image-gallery-2.jpg"
          ></img>
          <img
            className="col-tablet"
            src="images\product-xx99-mark-two-headphones\tablet\image-gallery-1.jpg"
          ></img>
          <img
            className="col-tablet"
            src="images\product-xx99-mark-two-headphones\tablet\image-gallery-2.jpg"
          ></img>
          <img
            className="col-mobile"
            src="images\product-xx99-mark-two-headphones\mobile\image-gallery-1.jpg"
          ></img>
          <img
            className="col-mobile"
            src="images\product-xx99-mark-two-headphones\mobile\image-gallery-2.jpg"
          ></img>
        </div>
        <div className="row-image">
          <img
            className="row-desktop"
            src="images\product-xx99-mark-two-headphones\desktop\image-gallery-3.jpg"
          ></img>
          <img
            className="row-tablet"
            src="images\product-xx99-mark-two-headphones\tablet\image-gallery-3.jpg"
          ></img>
          <img
            className="row-mobile"
            src="images\product-xx99-mark-two-headphones\mobile\image-gallery-3.jpg"
          ></img>
        </div>
      </div>
      <div className="may-also">
        <h1>YOU MAY ALSO LIKE</h1>
      </div>
      <div className="also-container">
        <div className="also-bar">
          <div className="also-product">
            <img
              className="also-desktop"
              src="images\product-xx99-mark-one-headphones\desktop\image-category-page-preview.jpg"
            ></img>
            <img
              className="also-tablet"
              src="images\product-xx99-mark-one-headphones\tablet\image-product.jpg"
            ></img>
            <img
              className="also-mobile"
              src="images\product-xx99-mark-one-headphones\mobile\image-product.jpg"
            ></img>
            <h1>XX99 Mark I</h1>
            <button onClick={handleXx99}>SEE PRODUCT</button>
          </div>
          <div className="also-product">
            <img
              className="also-desktop"
              src="images\product-xx59-headphones\desktop\image-category-page-preview.jpg"
            ></img>
            <img
              className="also-tablet"
              src="images\product-xx59-headphones\tablet\image-product.jpg"
            ></img>
            <img
              className="also-mobile"
              src="images\product-xx59-headphones\mobile\image-product.jpg"
            ></img>
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

      <div className="product-bar">
        <div className="products">
          <img src="/images/shared\desktop/image-category-thumbnail-headphones.png"></img>
          <div className="products-text">
            <h1>HEADPHONES</h1>
            <a>
              <Link to="/headphones">SHOP&nbsp;></Link>
            </a>
          </div>
        </div>
        <div className="products">
          <div className="products-text">
            <img src="/images\shared/desktop/image-category-thumbnail-speakers.png"></img>
            <h1>SPEAKERS</h1>
            <a>
              <Link to="/speakers">SHOP&nbsp;></Link>
            </a>
          </div>
        </div>
        <div className="products">
          <div className="products-text">
            <img
              src="/images/shared/desktop/image-category-thumbnail-earphones.png"
              alt=""
            ></img>
            <h1>EARPHONES</h1>

            <a>
              <Link to="/earphones">SHOP&nbsp;></Link>
            </a>
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
      <Footer></Footer>
    </>
  );
}
