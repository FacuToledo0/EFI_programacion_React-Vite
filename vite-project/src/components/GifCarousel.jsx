import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GifCarousel.css';

function GifCarousel() {
  return (
    <div className="container">
      <Carousel id="gifCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex">
              <img src="/img/VIDEO_SAMSUNG.gif" alt="Gif 1" className="d-block w-33" />
              <img src="/img/VIDEO_XIAOMI.gif" alt="Gif 2" className="d-block w-33" />
              <img src="/img/VIDEO-IPHONE.gif" alt="Gif 3" className="d-block w-33" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex">
              <img src="/img/VIDEO_SAMSUNG.gif" alt="Gif 3" className="d-block w-33" />
              <img src="/img/VIDEO_XIAOMI.gif" alt="Gif 4" className="d-block w-33" />
              <img src="/img/VIDEO-IPHONE.gif" alt="Gif 5" className="d-block w-33" />
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#gifCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#gifCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </Carousel>
    </div>
  );
}

export default GifCarousel;
