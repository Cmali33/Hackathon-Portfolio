import React, { useState } from "react";
import "../../Styles/Home.css";

const images = [
  "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg",
  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTqJfAGawbFIOQLz-nEEm381x0tT3TR2DyluT11uU6pGs3FrlZUF5A-mUJqUxTCn_MZj_CaeLxCgRZT7zUMAcqU7PYQs2HvGSZaa_eW-JeEt_uycQtow6P9&usqp=CAE",
  "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slider">
      <button onClick={prevImage}>&lt;</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button onClick={nextImage}>&gt;</button>
    </div>
  );
};

export default ImageSlider;
