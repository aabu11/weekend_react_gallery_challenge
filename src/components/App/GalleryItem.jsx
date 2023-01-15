import axios from "axios";
import React from "react";
import GalleryList from "./GalleryList";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';

function GalleryItem({ gallery, gettingPics, imageList }) {
  let [likeCount, setLikeCount] = useState(gallery.likes);
  let [picStatus, setPicStatus] = useState(true);

  function ShowDescription() {
    if (picStatus === true) {
      setPicStatus(false);
    } else {
      setPicStatus(true);
    }
  }

  function addLikes(id) {
    axios
      .put(`/gallery/like/${id}`)
      .then((response) => {
        setLikeCount(likeCount + 1);
        gettingPics();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function deletePost(event) {
    axios.delete(`/shopping/${event.currentTarget.id}`).then(() => {
      getShoppingList();
      alert("Item deleted!");
    });
  }
  return (
    <>
      {picStatus ? (
        <>
          <img src={gallery.path} onClick={ShowDescription} />
          <div>
            <p> {gallery.likes} Liked </p>
          </div>
          <div>
            <Button variant="contained" onClick={() => addLikes(gallery.id)}> Like </Button>
          </div>
        </>
      ) : (
        <>
          <div onClick={ShowDescription}>
            <p>{gallery.description} </p>
          </div>
          <div>
            <p> {gallery.likes} Liked </p>
          </div>
          <div>
            <button onClick={() => addLikes(gallery.id)}> Like </button>
            <button id={gallery.id} onClick={deletePost}>
              Delete
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default GalleryItem;
