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
import { HashRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
function App() {
  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/home" element={<Landing></Landing>}></Route>
        <Route path="/headphones" element={<Headphones></Headphones>}></Route>
        <Route path="/speakers" element={<Speakers></Speakers>}></Route>
        <Route path="/earphones" element={<Earphones></Earphones>}></Route>
        <Route path="/xx99m2" element={<Xx99m2></Xx99m2>}></Route>
        <Route path="/xx99" element={<Xx99></Xx99>}></Route>
        <Route path="/zx9" element={<Zx9></Zx9>}></Route>
        <Route path="/zx7" element={<Zx7></Zx7>}></Route>
        <Route path="/xx59" element={<Xx59></Xx59>}></Route>
        <Route path="/yx1" element={<Yx1></Yx1>}></Route>
      </Routes>
    </>
  );
}

export default App;
