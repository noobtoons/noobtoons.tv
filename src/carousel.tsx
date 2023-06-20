import image0 from './static/image0.jpg';
import image1 from './static/image1.jpg';
import image3 from './static/image3.jpg';
import image4 from './static/image4.jpg';
import image7 from './static/image7.jpg';
import image8 from './static/image8.jpg';
import image9 from './static/image9.jpg';
import image10 from './static/image10.jpg';
import image13 from './static/image13.jpg';
import image14 from './static/image14.jpg';

export default function Carousel() {
  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={image1} alt="First slide" />
            <div className="carousel-caption d-md-block">
              <p className="caption">Street Fighter 6 Capcom PR Event - Red Bull Gaming Sphere</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={image0} alt="First slide" />
            <div className="carousel-caption d-md-block">
              <p className="caption">League of Legends Riot Games PR Event - Red Bull Gaming Sphere</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={image3} alt="Third slide" />
            <div className="carousel-caption d-md-block">
              <p className="caption">Black Fae Cosplay</p>
            </div>
          </div> 
          <div className="carousel-item">
            <img className="d-block w-100" src={image4} alt="Fourth slide" />
            <div className="carousel-caption d-md-block">
              <p className="caption">Overwatch D.VA Cosplay</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={image7} alt="Sevent slide" />
            <div className="carousel-caption d-md-block">
              <p className="caption">Bafta Games Awards 2022 - Nominee Party</p>
            </div>
          </div> <div className="carousel-item">
            <img className="d-block w-100" src={image8} alt="Eighth slide" />
            <div className="carousel-caption d-md-block">
              <p className="caption">Darling in the Franxx Cosplay</p>
            </div>
          </div> 
          <div className="carousel-item">
            <img className="d-block w-100" src={image9} alt="Nineth slide" />
            <div className="carousel-caption d-md-block">
              <p className="caption">Noobtoons Twitch & Tiktok Streaming Setup</p>
            </div>
          </div> 
          <div className="carousel-item">
            <img className="d-block w-100" src={image10} alt="Tenth slide" />
            <div className="carousel-caption d-md-block">
              <p className="caption">Leauge of Legends PR Event</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={image13} alt="Thirtt slide" />
            <div className="carousel-caption d-md-block">
              <p className="caption">Noobtoons for Twitch Pride 2022</p>
            </div>
          </div>
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}