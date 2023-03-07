import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItem, updateQuanity, lowerQuanity } from './counter';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Productbar from './Productbar';
export default function Zx9(productData) {
  const navigate = useNavigate();
  const handleZx7 = () => {
    navigate('/zx7');
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
          src="images\product-zx9-speaker\desktop\image-category-page-preview.jpg"
        ></img>

        <div className="productimage-tablet">
          <img
            className="productpage-tablet"
            src="\images/product-zx9-speaker\tablet\image-product.jpg"
          ></img>
        </div>
        <img
          className="productpage-mobile"
          src="images\product-zx9-speaker\mobile\image-category-page-preview.jpg"
        ></img>

        <div className="headphonesproduct-text">
          <h2>N E W &nbsp; P R O D U C T</h2>
          <h1>
            ZX9 <br></br>SPEAKER
          </h1>
          <p>
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <h3>$4,500</h3>
          <div className="button-container">
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
            Connect via Bluetooth or nearly any wired source. This speaker
            features optical, digital coaxial, USB Type-B, stereo RCA, and
            stereo XLR inputs, allowing you to have up to five wired source
            devices connected for easy switching. Improved bluetooth technology
            offers near lossless audio quality at up to 328ft (100m). Discover
            clear, more natural sounding highs than the competition with ZX9’s
            signature planar diaphragm tweeter. Equally important is its
            powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass
            unit. You’ll be able to enjoy equal sound quality whether in a large
            room or small den. Furthermore, you will experience new sensations
            from old songs since it can respond to even the subtle waveforms.
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
                <p>1x &nbsp; 10m Optical Cable</p>
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
              <p>1x &nbsp; 10m Optical Cable</p>
            </div>
          </div>
        </div>
      </div>
      <div className="page-images">
        <div className="col-image">
          <img
            className="col-desktop"
            src="images\product-zx9-speaker\desktop\image-gallery-1.jpg"
          ></img>
          <img
            className="col-desktop"
            src="images\product-zx9-speaker\desktop\image-gallery-2.jpg"
          ></img>
          <img
            className="col-tablet"
            src="images\product-zx9-speaker\tablet\image-gallery-1.jpg"
          ></img>
          <img
            className="col-tablet"
            src="images\product-zx9-speaker\tablet\image-gallery-2.jpg"
          ></img>
          <img
            className="col-mobile"
            src="images\product-zx9-speaker\mobile\image-gallery-1.jpg"
          ></img>
          <img
            className="col-mobile"
            src="images\product-zx9-speaker\mobile\image-gallery-2.jpg"
          ></img>
        </div>
        <div className="row-image">
          <img
            className="row-desktop"
            src="images\product-zx9-speaker\desktop\image-gallery-3.jpg"
          ></img>
          <img
            className="row-tablet"
            src="images\product-zx9-speaker\tablet\image-gallery-3.jpg"
          ></img>
          <img
            className="row-mobile"
            src="images\product-zx9-speaker\mobile\image-gallery-3.jpg"
          ></img>
        </div>
      </div>
      <div className="may-also">
        <h1>YOU MAY ALSO LIKE</h1>
      </div>
      <div className="also-container">
        <div className="also-bar">
          <div className="also-product">
            <img src="images\product-zx7-speaker\desktop\image-category-page-preview.jpg"></img>
            <h1>ZX7 SPEAKER</h1>
            <button onClick={handleZx7}>SEE PRODUCT</button>
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
