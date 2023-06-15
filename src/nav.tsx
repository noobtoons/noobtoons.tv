import target from "./static/target-link.png";

export default function Navigation() {
  return(
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#about">About <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#socials">Socials</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#showcase">Showcase</a>
          </li>
          <li className="nav-item">
            <a className="all-links" target="_blank" href="http://www.beacons.ai/noobtoons"> All Links
              <img  className="icons" src={target} alt="linkedin-link" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
    )
}