import React, { useEffect, useRef } from "react";

export default function FilmRoll() {
  const files = 'https://drive.google.com/uc?id=';
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
        src={`${files}1FTzSILBm6L8y-QJn0aQZDMUe3dVUzWGF`}
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
        src={`${files}somVtq_ZRNtoETFxiqNOnUMtbQfu--KG`}
        alt="Noobtoons in red hair"
      />
      <img
        loading="lazy"
        className="d-block w-100"
        src={`${files}1JXAB-KQySrY_KCNbM41X3ucpsCeEJHjp`}
        alt="Noobtoons Pride makeup"
      />
      <img
        loading="lazy"
        className="d-block w-100"
        src={`${files}1RAXFituozfjXscXHUjIJWsYELgDH9GiU`}
        alt="Noobtoons Pride look"
      />
      <img
        loading="lazy"
        className="d-block w-100"
        src={`${files}1Ofxit25Dlf8nZzzaMWxmG3Im2alU4qKD`}
        alt="Noobtoons peace sign"
      />
      <img
        loading="lazy"
        className="d-block w-100"
        src={`${files}1Hs7YuuoHASeHdWHCmaOUmwjmPu9pd9MY`}
        alt="Noobtoons Twitch and Tiktok Stream setup"
      />
      <img
        loading="lazy"
        className="d-block w-100"
        src={`${files}1AD3x70bRyV-5OK4TJGs6zvGlyYGAadpT`}
        alt="Noobtoons and Sharese"
      />
      <img
        loading="lazy"
        className="d-block w-100"
        src={`${files}1XBKTK5cFIrUNowuVYHWAuoYYQbGmEO8o`}
        alt="Noobtoons at the Tate Morden"
      />
      <img
        loading="lazy"
        className="d-block w-100"
        src={`${files}1HV4x5OP6fHpKBQZQbsNfulXE14McNUOT`}
        alt="Noobtoons dog Snow - Bichon Frise"
      />
    </div>
  );
}
