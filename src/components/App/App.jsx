import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import GalleryList from "./GalleryList";
import GalleryItem from "./GalleryItem";

function App() {
  let [imageList, setImageList] = useState([]);
  useEffect(() => {
    gettingPics();
  }, []);
  const gettingPics = () => {
    axios
      .get("/gallery")
      .then((response) => {
        setImageList(response.data);
      })
      .catch((err) => {
        alert("error getting Gallery");
        console.log(err);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList gettingPics={gettingPics} imageList={imageList} />
    </div>
  );
}

export default App;
