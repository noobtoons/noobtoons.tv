import React, { useEffect, useRef } from 'react';
import {
    image0,
    image1,
    image4,
    image5,
    image8,
    image11,
    image12,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    particle
} from './media';

export default function FilmRoll() {
  const filmRollRef = useRef(null);

  useEffect(() => {
    window.jQuery('.autoplay').not('.slick-initialized').slick({
      slidesToShow: 14,
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
          srcSet={image4}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={image4}
        alt="Noobtoons birthday shoot 2023"
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
        alt="Noobtoons in red hair"
      />
      </picture>

      <picture>
        <source
          srcSet={image5}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={image5}
        alt="Noobtoons Pride makeup"
      />
      </picture>

      <picture>
        <source
          srcSet={image18}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={image18}
        alt="Noobtoons Pride look"
      />
      </picture>

      <picture>
        <source
          srcSet={image1}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={image1}
        alt="Noobtoons peace sign"
      />
      </picture>

      <picture>
        <source
          srcSet={image19}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={image19}
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
          srcSet={image15}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={image15}
        alt="Noobtoons at the Tate Morden"
      />
      </picture>

      <picture>
        <source
          srcSet={image16}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={image16}
        alt="Noobtoons dog Snow - Bichon Frise"
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
        alt="Noobtoons dog Snow - Bichon Frise"
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
        alt="Noobtoons dog Snow - Bichon Frise"
      />
      </picture>
            <picture>
        <source
          srcSet={particle}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={particle}
        alt="Noobtoons dog Snow - Bichon Frise"
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
        alt="Noobtoons dog Snow - Bichon Frise"
      />
      </picture>
            <picture>
        <source
          srcSet={image17}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={image17}
        alt="Noobtoons dog Snow - Bichon Frise"
      />
      </picture>
                  <picture>
        <source
          srcSet={image8}
          type="image/webp"
        />
      <img
        loading="lazy"
        className="d-block w-100"
        src={image8}
        alt="Noobtoons dog Snow - Bichon Frise"
      />
      </picture>
    </div>
  );
}
