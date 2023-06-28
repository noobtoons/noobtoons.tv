import React from "react";

export default function Carousel() {
  const files = "https://drive.google.com/uc?id=";
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
              srcSet={`${files}12Zy_s9SahclNmcfUHZIJDpwoUWTycIH1`}
              type="image/webp"
            />
          <img
            className="d-block w-100"
            src={`${files}1HV4x5OP6fHpKBQZQbsNfulXE14McNUOT`}
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
              srcSet={`${files}1es6GE8XQqAZqAy-eeCF5zdIKebgVPT3X`}
              type="image/webp"
            />
          <img
            className="d-block w-100"
            src={`${files}18PNPy0Oyv17NRNYU5uv5n3WHu2hWu1RH`}
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
              srcSet={`${files}1wdUNRu4_abjDrz2pEc9U5xYSWekYPNn-`}
              type="image/webp"
            />
          <img
            className="d-block w-100"
            src={`${files}1-Yr2QdifOPVI1BpPZYgbTpK5CFJXOAls`}
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
              srcSet={`${files}14Vh3I27ZaOTpAEqib-qHMrj4EvLGLym-`}
              type="image/webp"
            />
          <img
            className="d-block w-100"
            src={`${files}1dRNiM8HRTS5p6b78LXe-l_pbyrUCtXhG`}
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
              srcSet={`${files}1xBduAAXXmqTvXEpOgPxsVVk0XirZpjK5`}
              type="image/webp"
            />
          <img
            className="d-block w-100"
            src={`${files}1WYO2r84wr-sRZv0_0CHuJ98Fp4ofmblI`}
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
              srcSet={`${files}1QZaMcIlUPyA1-oesy3-syAJ1YhBGc72u`}
              type="image/webp"
            />
          <img
            className="d-block w-100"
            src={`${files}19TZtaEvzI5BfaTIjdJQ1w0qg2Lwry-Ib`}
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
              srcSet={`${files}1_ZDOXS6W-tgcimZ3U_Xxhu_mohIn5oLk`}
              type="image/webp"
            />
          <img
            className="d-block w-100"
            src={`${files}1Hs7YuuoHASeHdWHCmaOUmwjmPu9pd9MY`}
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
              srcSet={`${files}1es6GE8XQqAZqAy-eeCF5zdIKebgVPT3X`}
              type="image/webp"
            />
          <img
            className="d-block w-100"
            src={`${files}1Rp-njn_ONbszLR5azg9fC2V2Nby5ej5h`}
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
              srcSet={`${files}1m6E4gf-PkycnMz_bhj4CHuCmA2wfN2pc`}
              type="image/webp"
            />
          <img
            className="d-block w-100"
            src={`${files}1hlam3hErj48ZOKF9K1fNyac7YYYP-rBv`}
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
