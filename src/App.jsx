import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./assets/components/Header";
import Hero from "./assets/components/Main/hero";
import Testmonials from "./assets/components/Main/testmonials";
import Mareka from "./assets/components/Main/Mareka";
import Kegiatan from "./assets/components/Main/Kegiatan";
import Ingin from "./assets/components/Main/Ingin";
import Footer from "./assets/components/Footer";
import Error from "./assets/components/Error"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/Collection" element={<Hero />} />
            <Route path="/Beranda" element={<Kegiatan />} />
            <Route path="/Kontak" element={<Testmonials />} />
            <Route path="/Syaratdan" element={<Mareka />} />
            <Route path="/Ketentuan" element={<Ingin />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
