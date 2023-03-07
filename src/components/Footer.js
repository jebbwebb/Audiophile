import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-nav">
          <h1>audiophile</h1>

          <div class="footer-menu">
            <a>
              <Link to="/">HOME</Link>
            </a>
            <a>
              <Link to="/headphones">HEADPHONES</Link>
            </a>
            <a href=" ">
              <Link to="/speakers">SPEAKERS</Link>
            </a>
            <a>
              <Link to="/earphones">EARPHONES</Link>
            </a>
          </div>
        </div>
        <div className="footer-text">
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <div className="socials-container">
          <h2>Copyright 2021 All Rights Reserved</h2>
          <div className="socials">
            <img src="\images\shared\desktop\icon-facebook.svg"></img>
            <img src="\images\shared\desktop\icon-twitter.svg"></img>
            <img src="\images\shared\desktop\icon-instagram.svg"></img>
          </div>
        </div>
      </div>
    </footer>
  );
}
