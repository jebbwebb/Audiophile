import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItem, updateQuanity, lowerQuanity } from './counter';
import { Link } from 'react-router-dom';
import Xx99 from './Xx99';
import Navbar from './Navbar';
import Footer from './Footer';
import Productbar from './Productbar';

export default function Zx7(productData) {
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
  console.log(productData.productData.others[0].name);
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
          src="images\product-zx7-speaker\desktop\image-category-page-preview.jpg"
        ></img>

        <div className="productimage-tablet">
          <img
            className="productpage-tablet"
            src="\images\product-zx7-speaker\tablet\image-product.jpg"
          ></img>
        </div>
        <img
          className="productpage-mobile"
          src="images\product-zx7-speaker\mobile\image-category-page-preview.jpg"
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
          <div className="button-container">
            <div className="quanity-container">
              <button
                onClick={() =>
                  handleLowerQuantity(5, productData.productData.price)
                }
                className="quanity"
              >
                -
              </button>
              <span>1</span>
              <button
                onClick={() =>
                  handleUpdateQuantity(5, productData.productData.price)
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
        <div className="thebox-tablet">
          <div className="thebox-container">
            <div className="inthebox">
              <h1>IN THE BOX</h1>
            </div>
            <div className="box-tablet">
              <div className="box-item">
                <p>1x &nbsp; Speaker Unit</p>
              </div>
              <div className="box-item">
                <p>2x &nbsp;Speaker Cloth Panel</p>
              </div>
              <div className="box-item">
                <p>1x &nbsp;User Manual</p>
              </div>
              <div className="box-item">
                <p>1x &nbsp;3.5mm 10m Audio Cable</p>
              </div>
              <div className="box-item">
                <p>1x &nbsp; 7.5m Optical Cable</p>
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
              <p>1x &nbsp; Speaker Unit</p>
            </div>
            <div className="box-item">
              <p>2x &nbsp;Speaker Cloth Panel</p>
            </div>
            <div className="box-item">
              <p>1x &nbsp;User Manual</p>
            </div>
            <div className="box-item">
              <p>1x &nbsp;3.5mm 10m Audio Cable</p>
            </div>
            <div className="box-item">
              <p>1x &nbsp; 7.5m Optical Cable</p>
            </div>
          </div>
        </div>
      </div>
      <div className="page-images">
        <div className="col-image">
          <img
            className="col-desktop"
            src="images\product-zx7-speaker\desktop\image-gallery-1.jpg"
          ></img>
          <img
            className="col-desktop"
            src="images\product-zx7-speaker\desktop\image-gallery-2.jpg"
          ></img>
          <img
            className="col-tablet"
            src="images\product-zx7-speaker\tablet\image-gallery-1.jpg"
          ></img>
          <img
            className="col-tablet"
            src="images\product-zx7-speaker\tablet\image-gallery-2.jpg"
          ></img>
          <img
            className="col-mobile"
            src="images\product-zx7-speaker\mobile\image-gallery-1.jpg"
          ></img>
          <img
            className="col-mobile"
            src="images\product-zx7-speaker\mobile\image-gallery-2.jpg"
          ></img>
        </div>
        <div className="row-image">
          <img
            className="row-desktop"
            src="images\product-zx7-speaker\desktop\image-gallery-3.jpg"
          ></img>
          <img
            className="row-tablet"
            src="images\product-zx7-speaker\tablet\image-gallery-3.jpg"
          ></img>
          <img
            className="row-mobile"
            src="images\product-zx7-speaker\mobile\image-gallery-3.jpg"
          ></img>
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
            <button onClick={handleZx9}> SEE PRODUCT</button>
          </div>
          <div className="also-product">
            <img src="images\product-xx99-mark-one-headphones\desktop\image-category-page-preview.jpg"></img>
            <h1>XX99 MARK I</h1>
            <button onClick={handleXx99}>SEE PRODUCT</button>
          </div>
          <div className="also-product">
            <img src="images\product-xx59-headphones\desktop\image-category-page-preview.jpg"></img>
            <h1>XX59</h1>
            <button onClick={handleXx59}>SEE PRODUCT</button>
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
