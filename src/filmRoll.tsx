import React, { useEffect, useRef } from "react";
import { image12, image2, image6, image11, image9, image14, snow, image0, particle} from "./media";

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
      <picture>
        <source
          srcSet={particle}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={particle}
        alt="Noobtoons birthday shoot 2023"
      />
      </picture>

      <picture>
        <source
          srcSet={image2}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={image2}
        alt="Noobtoons in red hair"
      />
      </picture>

      <picture>
        <source
          srcSet={image6}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={image6}
        alt="Noobtoons Pride makeup"
      />
      </picture>

      <picture>
        <source
          srcSet={image12}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={image12}
        alt="Noobtoons Pride look"
      />
      </picture>

      <picture>
        <source
          srcSet={image11}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={image11}
        alt="Noobtoons peace sign"
      />
      </picture>

      <picture>
        <source
          srcSet={image9}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={image9}
        alt="Noobtoons Twitch and Tiktok Stream setup"
      />
      </picture>

      <picture>
        <source
          srcSet={image14}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={image14}
        alt="Noobtoons and Sharese"
      />
      </picture>

      <picture>
        <source
          srcSet={image0}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={image0}
        alt="Noobtoons at the Tate Morden"
      />
      </picture>

      <picture>
        <source
          srcSet={snow}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={snow}
        alt="Noobtoons dog Snow - Bichon Frise"
      />
      </picture>
    </div>
  );
}
