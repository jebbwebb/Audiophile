import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItem, updateQuanity, lowerQuanity } from './counter';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Productbar from './Productbar';
export default function Xx59(productData) {
  const navigate = useNavigate();
  const handleXx99 = () => {
    navigate('/xx99');
  };
  const handleXx99m2 = () => {
    navigate('/xx99m2');
  };
  const handleZx9 = () => {
    navigate('/zx9');
  };
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.counter.items);
  const cartId = useSelector((state) => state.counter.items.id);
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
          src="images\product-xx59-headphones\desktop\image-category-page-preview.jpg"
        ></img>

        <div className="productimage-tablet">
          <img
            className="productpage-tablet"
            src="\images\product-xx59-headphones\tablet\image-product.jpg"
          ></img>
        </div>
        <img
          className="productpage-mobile"
          src="images\product-xx59-headphones\mobile\image-category-page-preview.jpg"
        ></img>

        <div className="headphonesproduct-text">
          <h1>
            XX59 <br></br>HEADPHONES
          </h1>
          <p>
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>
          <h3>$899</h3>

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
            These headphones have been created from durable, high-quality
            materials tough enough to take anywhere. Its compact folding design
            fuses comfort and minimalist style making it perfect for travel.
            Flawless transmission is assured by the latest wireless technology
            engineered for audio synchronization with videos. More than a simple
            pair of headphones, this headset features a pair of built-in
            microphones for clear, hands-free calling when paired with a
            compatible smartphone. Controlling music and calls is also intuitive
            thanks to easy-access touch buttons on the earcups. Regardless of
            how you use the XX59 headphones, you can do so all day thanks to an
            impressive 30-hour battery life that can be rapidly recharged via
            USB-C.
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
            src="images\product-xx59-headphones\desktop\image-gallery-1.jpg"
          ></img>
          <img
            className="col-desktop"
            src="images\product-xx59-headphones\desktop\image-gallery-2.jpg"
          ></img>
          <img
            className="col-tablet"
            src="images\product-xx59-headphones\tablet\image-gallery-1.jpg"
          ></img>
          <img
            className="col-tablet"
            src="images\product-xx59-headphones\tablet\image-gallery-2.jpg"
          ></img>
          <img
            className="col-mobile"
            src="images\product-xx59-headphones\mobile\image-gallery-1.jpg"
          ></img>
          <img
            className="col-mobile"
            src="images\product-xx59-headphones\mobile\image-gallery-2.jpg"
          ></img>
        </div>
        <div className="row-image">
          <img
            className="row-desktop"
            src="images\product-xx59-headphones\desktop\image-gallery-3.jpg"
          ></img>
          <img
            className="row-tablet"
            src="images\product-xx59-headphones\tablet\image-gallery-3.jpg"
          ></img>
          <img
            className="row-mobile"
            src="images\product-xx59-headphones\mobile\image-gallery-3.jpg"
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
            <h1>XX99 MARK II</h1>
            <button onClick={handleXx99m2}>SEE PRODUCT</button>
          </div>
          <div className="also-product">
            <img src="images\product-xx99-mark-one-headphones\desktop\image-category-page-preview.jpg"></img>
            <h1>XX99 MARK I</h1>
            <button onClick={handleXx99}>SEE PRODUCT</button>
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
