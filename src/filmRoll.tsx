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
      <picture>
        <source
          srcSet={`${files}1bogkMkFigw_DCC0dmrQkKLbWBqfDnTBP/view?usp=sharing`}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={`${files}1FTzSILBm6L8y-QJn0aQZDMUe3dVUzWGF/view?usp=sharing`}
        alt="Noobtoons birthday shoot 2023"
      />
      </picture>

      <picture>
        <source
          srcSet={`${files}1er17by-58DHhBiv6pQqO9O7dl0ylT7O6/view?usp=sharing`}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={`${files}1somVtq_ZRNtoETFxiqNOnUMtbQfu--KG/view?usp=sharing`}
        alt="Noobtoons in red hair"
      />
      </picture>

      <picture>
        <source
          srcSet={`${files}1Q6TfJPebiqgBDQBHfN9eueGZBB9tjBIW/view?usp=sharing`}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={`${files}1JXAB-KQySrY_KCNbM41X3ucpsCeEJHjp/view?usp=sharing`}
        alt="Noobtoons Pride makeup"
      />
      </picture>

      <picture>
        <source
          srcSet={`${files}1kZ1iKjbp34RgbKiEJ8JNcEeE6YdWH4Ou/view?usp=sharing`}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={`${files}1RAXFituozfjXscXHUjIJWsYELgDH9GiU/view?usp=sharing`}
        alt="Noobtoons Pride look"
      />
      </picture>

      <picture>
        <source
          srcSet={`${files}1m8CyAZI0MMlXpyFGkvk3GwcFIcEKgL-7/view?usp=sharing`}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={`${files}1Ofxit25Dlf8nZzzaMWxmG3Im2alU4qKD/view?usp=sharing`}
        alt="Noobtoons peace sign"
      />
      </picture>

      <picture>
        <source
          srcSet={`${files}1_ZDOXS6W-tgcimZ3U_Xxhu_mohIn5oLk/view?usp=sharing`}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={`${files}1Hs7YuuoHASeHdWHCmaOUmwjmPu9pd9MY/view?usp=sharing`}
        alt="Noobtoons Twitch and Tiktok Stream setup"
      />
      </picture>

      <picture>
        <source
          srcSet={`${files}1KNmAfDrW9gM-uvhzpkyT6VSWgYzr7Doz/view?usp=sharing`}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={`${files}1AD3x70bRyV-5OK4TJGs6zvGlyYGAadpT/view?usp=sharing`}
        alt="Noobtoons and Sharese"
      />
      </picture>

      <picture>
        <source
          srcSet={`${files}1vo-2dd7PhaXZR0qYwzqPrJrcfGaiqmeq/view?usp=sharing`}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={`${files}1XBKTK5cFIrUNowuVYHWAuoYYQbGmEO8o/view?usp=sharing`}
        alt="Noobtoons at the Tate Morden"
      />
      </picture>

      <picture>
        <source
          srcSet={`${files}1XaCpdUvjgnNbj4IVohy-nibETHSScbg4/view?usp=sharing`}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={`${files}1HV4x5OP6fHpKBQZQbsNfulXE14McNUOT/view?usp=sharing`}
        alt="Noobtoons dog Snow - Bichon Frise"
      />
      </picture>
    </div>
  );
}
