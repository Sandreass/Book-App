import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import { BooksProvider } from "./BooksContext";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookToRead from "./Pages/BookToRead";

function App() {
  return (
    <>
      <BrowserRouter>
        <BooksProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/toread" element={<BookToRead/>} />
          </Routes>
       
          
        </BooksProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
