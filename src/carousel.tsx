import image1 from './static/image1.jpg';
import image2 from './static/image2.jpeg';
import image3 from './static/image3.jpg';

export default function Carousel() {
  return (
    <>
      <div id="carouselControls" className="carousel slide" data-ride="carousel" data-interval="2000">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"/>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={image2} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={image2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={image2} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  )
}