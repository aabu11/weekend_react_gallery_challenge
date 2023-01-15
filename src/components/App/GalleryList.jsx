import React from "react";
import GalleryItem from "./GalleryItem";

function GalleryList({ imageList, gettingPics }) {
  return (
    <>
      <div>
        {imageList.map((gallery) => {
          return (
            <GalleryItem
              key={[gallery.id]}
              gallery={gallery}
              gettingPics={gettingPics}
            />
          );
        })}
      </div>
    </>
  );
}

export default GalleryList;
