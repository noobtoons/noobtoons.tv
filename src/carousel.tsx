// @ts-ignore

import React from "react";
import {image0, image1, image10, image13, image3, image4, image7, image8, image9} from "./media";

export default function Carousel() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <picture>
            <source
              srcSet={image1}
              type="image/webp"
            />
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
          </picture>
          <div className="carousel-caption d-md-block">
            <p className="caption">
              Street Fighter 6 Capcom PR Event - Red Bull Gaming Sphere
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <picture>
            <source
              srcSet={image0}
              type="image/webp"
            />
          <img
            className="d-block w-100"
            src={image0}
            alt="First slide"
          />
          </picture>
          <div className="carousel-caption d-md-block">
            <p className="caption">
              League of Legends Riot Games PR Event - Red Bull Gaming Sphere
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <picture>
            <source
              srcSet={image3}
              type="image/webp"
            />
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />
          </picture>
          <div className="carousel-caption d-md-block">
            <p className="caption">Black Fae Cosplay</p>
          </div>
        </div>
        <div className="carousel-item">
          <picture>
            <source
              srcSet={image4}
              type="image/webp"
            />
          <img
            className="d-block w-100"
            src={image4}
            alt="Fourth slide"
          />
          </picture>
          <div className="carousel-caption d-md-block">
            <p className="caption">Overwatch D.VA Cosplay</p>
          </div>
        </div>
        <div className="carousel-item">
          <picture>
            <source
              srcSet={image7}
              type="image/webp"
            />
          <img
            className="d-block w-100"
            src={image7}
            alt="Seventh slide"
          />
          </picture>
          <div className="carousel-caption d-md-block">
            <p className="caption">Bafta Games Awards 2022 - Nominee Party</p>
          </div>
        </div>
        <div className="carousel-item">
          <picture>
            <source
              srcSet={image8}
              type="image/webp"
            />
          <img
            className="d-block w-100"
            src={image8}
            alt="Eighth slide"
          />
          </picture>
          <div className="carousel-caption d-md-block">
            <p className="caption">Darling in the Franxx Cosplay</p>
          </div>
        </div>
        <div className="carousel-item">
          <picture>
            <source
              srcSet={image9}
              type="image/webp"
            />
          <img
            className="d-block w-100"
            src={image9}
            alt="Ninth slide"
          />
          </picture>
          <div className="carousel-caption d-md-block">
            <p className="caption">Noobtoons Twitch & Tiktok Streaming Setup</p>
          </div>
        </div>
        <div className="carousel-item">
          <picture>
            <source
              srcSet={image10}
              type="image/webp"
            />
          <img
            className="d-block w-100"
            src={image10}
            alt="Tenth slide"
          />
          </picture>
          <div className="carousel-caption d-md-block">
            <p className="caption">League of Legends PR Event</p>
          </div>
        </div>
        <div className="carousel-item">
          <picture>
            <source
              srcSet={image13}
              type="image/webp"
            />
          <img
            className="d-block w-100"
            src={image13}
            alt="Thirteenth slide"
          />
          </picture>
          <div className="carousel-caption d-md-block">
            <p className="caption">Noobtoons for Twitch Pride 2022</p>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"/>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"/>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
