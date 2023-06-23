import React, { useEffect, useRef } from "react";
import {
  background,
  image1,
  image11,
  image12,
  image14,
  image2,
  image5,
  image6,
  image9,
} from "./media";

export default function FilmRoll() {
  const filmRollRef = useRef(null);

  useEffect(() => {
    window.jQuery(".autoplay").not(".slick-initialized").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: true,
      focusOnSelect: true,
      vertical: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  }, [filmRollRef]);

  return (
    <div id="film_roll" className="autoplay" ref={filmRollRef}>
      <img
        loading="lazy"
        className="d-block w-100"
        src={background}
        alt="Noobtoons birthday shoot 2023"
      />
      {/*@ts-ignore*/}
      {/*<picture> TODO */}
      {/*  <source srcSet="/path/to/image.webp" type="image/webp">*/}
      {/*    <img*/}
      {/*      loading="lazy"*/}
      {/*      className="d-block w-100"*/}
      {/*      src={image2}*/}
      {/*      alt="Noobtoons in red hair"*/}
      {/*    />*/}
      {/*</picture>*/}
      <img
        loading="lazy"
        className="d-block w-100"
        src={image2}
        alt="Noobtoons in red hair"
      />
      <img
        loading="lazy"
        className="d-block w-100"
        src={image12}
        alt="Noobtoons Pride makeup"
      />
      <img
        loading="lazy"
        className="d-block w-100"
        src={image6}
        alt="Noobtoons Pride look"
      />
      <img
        loading="lazy"
        className="d-block w-100"
        src={image11}
        alt="Noobtoons peace sign"
      />
      <img
        loading="lazy"
        className="d-block w-100"
        src={image9}
        alt="Noobtoons Twitch and Tiktok Stream setup"
      />
      <img
        loading="lazy"
        className="d-block w-100"
        src={image14}
        alt="Noobtoons and Sharese"
      />
      <img
        loading="lazy"
        className="d-block w-100"
        src={image5}
        alt="Noobtoons at the Tate Morden"
      />
      <img
        loading="lazy"
        className="d-block w-100"
        src={image1}
        alt="Noobtoons dog Snow - Bichon Frise"
      />
    </div>
  );
}
