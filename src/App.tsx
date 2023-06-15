import React, { useEffect } from 'react';
import twitter from "./static/twitter-3.png";
import twitch from "./static/twitch-3.png";
import tiktok from "./static/tiktok-3.png";
import youtube from "./static/youtube-3.png";
import linkedin from "./static/linkedin-3.png";
import instagram from "./static/instagram-13.png";
import target from "./static/target-link.png";
import bafta from "./static/bafta.png";
import cooler from "./static/coolermaster.png";
import hnm from "./static/H&M.png";
import TwoK from "./static/2k.svg";
import SquareEnix from "./static/SquareEnix.png";
import womeninesports from "./static/womeninesports.png";
import logitech from "./static/Logitech.png";
import streamlabs from "./static/Streamlabs.png";
import image2 from './static/image2.jpg';
import background from './static/background.jpg';
import image12 from './static/image12.jpg';
import image6 from './static/image6.jpg';
import image11 from './static/image11.jpg';
import image9 from './static/image9.jpg';
import image5 from './static/image5.jpg';
import image14 from './static/image14.jpg';
import image1 from './static/snow.jpg';

import Navigation from './nav';
import './App.css';
import Carousel from './carousel';
import { AddLibrary } from './thirdparty';

const mailTo = async (e: any) => {
  // @ts-ignore
  const from_name = document.getElementById("name-content").value || "No Name";
  // @ts-ignore
  const message = document.getElementById("mail-content").value;
  const email = "mailto:hello@noobtoons.tv";
  try {
    e.preventDefault();

    if (message.length) {
      await window.emailjs.send(
        "service_7sd5x5o", "template_nibjan9",
        { from_name, message },
        "hTyF3BiMx61_mKf0Q"
      );
      alert("Message sent successfully!");

    } else {
      alert("Please Enter a message!");
    }
  } catch (e: any) {
    alert(e);
    console.log(e);
  }

};

function App() {
  AddLibrary("https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js", "sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q");
  AddLibrary("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", "sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz");

  useEffect(() => {
    window.emailjs.init('hTyF3BiMx61_mKf0Q');
  }, []);

  useEffect(() => {
    window.jQuery('.autoplay').not('.slick-initialized').slick({
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
  }, []);

  return (
    <div className="App">
      <Navigation />
      <div>
        <header className="App-header">
          <div>
            <h1 className="name-title">Noobtoons</h1>
            <h3 className="skills">Gaming Content Creator | Influencer | Twitch Streamer | Gaming Consultant</h3>
            <div>
              <a target="_blank" href="https://www.instagram.com/noobtoonstv">
                <img className="main-icons" src={instagram} alt="instagram-link" />
              </a>
              <a target="_blank" href="https://www.tiktok.com/@noobtoonstv">
                <img className="main-icons" src={tiktok} alt="tiktok-link" />
              </a>
              <a target="_blank" href="https://www.twitter.com/noobtoonstv">
                <img className="main-icons" src={twitter} alt="twitter-link" />
              </a>
            </div>
          </div>
        </header>
      </div>

      <div className="sectioned">
        <div>
          <div id="about" className="sections">
            <h2>About</h2>
            <div className="para-about">
              <p>
                Noobtoon is a black, queer variety streamer and Content Creator from the United Kingdom who focuseon
                mostly competatitve gameplay
                by finding new wayto make a well loved title just a little bit more challenging. She also doenot shy
                away for a nice cozy session after a challenging playthrough.
              </p>
              <p>
                Noobtoonforsteran inclusive and safe space and community that iwelcoming to everyone be it on
                Twitch,
                Tiktok or Youtube.
                <strong>The Noob Troop</strong> athe community iknown, show up for the cozy vibe of Noobtoons' live
                streams, for each other and
                particularly to watch her react to random content on the internet, of which they get a massive kick out
                of.
              </p>
              <p>
                Noobtoonalso helpto highlight important issuefaced by marginalised creatoraa collective where
                necessary
                and
                having an open and honest conversation with her community by creating engaging scenariowhich encourages
                everyone to get involved be it on Twitch and/or other platforms.
              </p>
              <p>
                Noobtoonia patrnered Twicth Streamer and haworked with a number of well known <a href="#brands">brands
                affiliations</a> in her
                short time aa creator
                and ialwaylooking to partner with companieon activations/ sponsorshipthat align with her and her
                growing audienceintereston any platform.
              </p>
              <p>
                Although Noobtoons' main audience ion Twitch, she actively createcontent for other <a
                target="_blank" href="http://https://www.beacons.ai/noobtoons">platform<img className="audience"
                                                                                            src={target}
                                                                                            alt="linkedin-link" />
              </a> and haa growing following on a lot of the other
                social mediawhich showcasewhat she iabout.
              </p>

            </div>
          </div>

          <div id="brands" className="sections">
            <h2 className="sections">Brands I've Worked with</h2>
            <img className="icons-brands" src={twitch} alt="noobtoons partnered with twitch for pride month" />
            <img className="icons-brands" src={bafta} alt="noobtoons partnered with bafta games for nominee games" />
            <img className="icons-brands" src={cooler} alt="noobtoons partnered with coolermaster for sponsorships" />
            <img className="icons-brands" src={hnm}
                 alt="noobtoons partnered with h&m for activations in animal crossing" />
            <img className="icons-brands" src={TwoK} alt="noobtoons partnered with 2K for womens history month" />
            <img className="icons-brands" src={SquareEnix} alt="noobtoons partnered with Square Enix for activations" />
            <img className="icons-brands" src={womeninesports}
                 alt="noobtoons partnered with women in esports for castings" />
            <img className="icons-brands" src={logitech}
                 alt="noobtoons partnered with logitech for black history month" />
            <img className="icons-brands" src={streamlabs}
                 alt="noobtoons partnered with streamlabs for black history month" />
          </div>

          <div id="contact" className="sections">
            <h2>Contact</h2>
            <form>
              <div className="form-column">
                <div className="col">
                  <input type="text" id="name-content" className="form-control" placeholder="Name" />
                </div>
                <div className="col">
                <textarea
                  placeholder="Get in Touch!"
                  className="textarea form-control" id="mail-content">
                </textarea>
                </div>
                <button id="email" type="submit" onClick={mailTo} className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>

          <footer id="socials" className="sections">
            <h2>Socials:</h2>
            <a target="_blank" href="https://www.twitch.tv/noobtoons">
              <img className="icons" src={twitch} alt="twitch-link" />
            </a>
            <a target="_blank" href="https://www.instagram.com/noobtoonstv">
              <img className="icons" src={instagram} alt="instagram-link" />
            </a>
            <a target="_blank" href="https://www.tiktok.com/@noobtoonstv">
              <img className="icons" src={tiktok} alt="tiktok-link" />
            </a>
            <a target="_blank" href="https://www.twitter.com/noobtoonstv">
              <img className="icons" src={twitter} alt="twitter-link" />
            </a>
            <a target="_blank" href="https://www.youtube.com/@noobtoons">
              <img className="icons" src={youtube} alt="youtube-link" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/noobtoons">
              <img className="icons" src={linkedin} alt="linkedin-link" />
            </a>
            <a target="_blank" className="all-links-main" href="http://https://www.beacons.ai/noobtoons"> All Links
              <img className="icons" src={target} alt="linkedin-link" />
            </a>
          </footer>
        </div>
        <div id="film_roll" className="autoplay">
          <a>
            <img className="d-block w-100" src={background} alt="Noobtoons birthday shoot 2023" />
          </a>
          <a>
            <img className="d-block w-100" src={image2} alt="Noobtoons in red hair" />
          </a>
          <a>
            <img className="d-block w-100" src={image12} alt="Noobtoons Pride makeup" />
          </a>
          <a>
            <img className="d-block w-100" src={image6} alt="Noobtoons Pride look" />
          </a>
          <a>
            <img className="d-block w-100" src={image11} alt="Noobtoons peace sign" />
          </a>
          <a>
            <img className="d-block w-100" src={image9} alt="Noobtoons Twitch and Tiktok Stream setup" />
          </a>
          <a>
            <img className="d-block w-100" src={image14} alt="Noobtoons and Sharese" />
          </a>
          <a>
            <img className="d-block w-100" src={image5} alt="Noobtoons at the Tate Morden" />
          </a>
          <a>
            <img className="d-block w-100" src={image1} alt="Noobtoons dog Snow - Bichon Frise" />
          </a>
        </div>
      </div>

      <div id="showcase">
        <Carousel />
      </div>
    </div>
  );
}

export default App;
