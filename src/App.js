import React from "react";
import { Routes, Route } from 'react-router-dom'
import CoinDetails from "./components/CoinDetails";
import CoinList from "./components/CoinList";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/coin" element={<CoinDetails/>}>
          <Route path=":coinId" element={<CoinDetails/>}/>
        </Route>
        <Route path='/coins' element={<CoinList/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
