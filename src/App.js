import './App.css';
import Landing from './components/Landing';
import Headphones from './components/Headphones';
import Speakers from './components/Speakers';
import Earphones from './components/Earphones';
import Xx99 from './components/Xx99';
import Xx99m2 from './components/Xx99m2';
import Xx59 from './components/Xx59';
import Zx9 from './components/Zx9';
import Zx7 from './components/Zx7';
import Yx1 from './components/Yx1';
import ScrollToTop from './components/scrollToTop';
import { useLocation } from 'react-router';
import { useLayoutEffect } from 'react';

import {
  BrowserRouter,
  HashRouter,
  Route,
  Router,
  Routes,
} from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  const [data, setData] = useState([]);

  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Landing></Landing>}></Route>
          <Route path="/headphones" element={<Headphones></Headphones>}></Route>
          <Route path="/speakers" element={<Speakers></Speakers>}></Route>
          <Route path="/earphones" element={<Earphones></Earphones>}></Route>
          <Route
            path="/xx99m2"
            element={<Xx99m2 productData={data[3]}></Xx99m2>}
          ></Route>
          <Route
            path="/xx99"
            element={<Xx99 productData={data[2]}></Xx99>}
          ></Route>
          <Route
            path="/zx9"
            element={<Zx9 productData={data[5]}></Zx9>}
          ></Route>
          <Route
            path="/zx7"
            element={<Zx7 productData={data[4]}></Zx7>}
          ></Route>
          <Route
            path="/xx59"
            element={<Xx59 productData={data[1]}></Xx59>}
          ></Route>
          <Route
            path="/yx1"
            element={<Yx1 productData={data[0]}></Yx1>}
          ></Route>
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
