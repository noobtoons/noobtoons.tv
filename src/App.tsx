import React from 'react';
import logo from './static/header-image.png';
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
import image2 from './static/image2.jpeg';

import Navigation from './nav';
import './App.css';
import Carousel from './carousel';

const mailTo = () => {
  // @ts-ignore
  const name = document.getElementById("name-content").value || "No Name";
  // @ts-ignore
  const content = document.getElementById("mail-content").value;
  const email = "mailto:hello@noobtoons.tv";

  if (content.length) window.open(`${email}?subject=Website Enquiry:${name}&body=${content}`);
};

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <h1 className="name-title">Noobtoons</h1>
            <h3 className="skills">Gaming Content Creator | Influencer | Twitch Streamer | Gaming Consultant</h3>
          </div>
        </header>
      </div>

      <div>
        <div id="showcase">
          <Carousel />
        </div>

        <div id="about">
          <h2 className="sections">About</h2>
          <div>
            Noobtoons is I am a black, queer variety streamer from the United Kingdom who focuses on MMORPGs but more
            recently fell in love with Souls-like games.
            I have been extremely fortunate enough to attract the best of twitch and continue to foster an inclusive and
            safe space that is welcoming to everyone.
            My community show up for the cozy vibe of my streams, for each other and particularly to watch me react to
            random content on the internet.
            We treat each other with respect and enjoy to dive deep into lore and amazing story telling when we can in
            between gameplay.
            My community has been my rock and the reason why I keep going and I would not have gotten this far without
            their support in the last year.
            Being a broadcaster on Twitch has already opened so many doors for me that I could not have dreamed of and I
            have met some truly inspiring individuals who motivate me as much as I motivate them on a daily basis and
            being a partner on Twitch will give me the opportunity to do more for my community and give me a bigger
            reach where those not yet a part of it, will have a little more faith in me as a creator, if I have the
            backing of the platform.
            Even as only an affiliate, I feel incredibly lucky to have had so many opportunities with Twitch itself,
            brand deals and activations, that most partners could not even dream of and I can only imagine how much
            further I could grow as a Partnered creator, which gives me a lot of confidence that I am definitely Twitch
            Partner material and worthy of the title and responsibility.
            I love highlighting important issues faced by marginalised creators as a collective where necessary and
            having an open and honest conversation with my community by creating engaging scenarios which encourages
            everyone to get involved be it on Twitch and/or other platforms.
            Although Twitch is my preferred platform to create content, I do have a following on a lot of the other
            social medias to showcase my channel and what I am about, which brings more views to the channel such as
            Twitter, Tiktok, Youtube and Instagram.
          </div>
        </div>
        <div id="film_roll">
          <a>
            <img className="d-block w-100" src={image2} alt="First slide" />
          </a>
          <a>
            <img className="d-block w-100" src={image2} alt="Second slide" />
          </a>
          <a>
            <img className="d-block w-100" src={image2} alt="Third slide" />
          </a>
          <a>
            <img className="d-block w-100" src={image2} alt="Third slide" />
          </a>
          <a>
            <img className="d-block w-100" src={image2} alt="Third slide" />
          </a>
          <a>
            <img className="d-block w-100" src={image2} alt="Third slide" />
          </a>


        </div>

        <div>
          <h2 id="brands" className="sections">Brands I've Worked with</h2>
          <img className="icons-brands" src={twitch} alt="twitch" />
          <img className="icons-brands" src={bafta} alt="bafta" />
          <img className="icons-brands" src={cooler} alt="coolermaster" />
          <img className="icons-brands" src={hnm} alt="h&m" />
          <img className="icons-brands" src={TwoK} alt="2K" />
          <img className="icons-brands" src={SquareEnix} alt="Square Enix" />
          <img className="icons-brands" src={womeninesports} alt="women in esports" />
        </div>

        <div>
          <h2 id="contact" className="sections">Contact</h2>
          <form>
            <div className="form-column">
              <div className="col">
                <input type="text" id="name-content" className="form-control" placeholder="Name" />
              </div>
              <div className="col">
                <input type="text" id="mail-content" className="form-control" placeholder="Get in Touch" />
              </div>
              <button id="email" type="submit" onClick={mailTo} className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>

        <footer>
          <h3 id="socials" className="sections">Socials:</h3>
          <a target="_blank" href="www.twitch.tv/noobtoons">
            <img className="icons" src={twitch} alt="twitch-link" />
          </a>
          <a target="_blank" href="www.instagram.com/noobtoonstv">
            <img className="icons" src={instagram} alt="instagram-link" />
          </a>
          <a target="_blank" href="www.tiktok.com/@noobtoonstv">
            <img className="icons" src={tiktok} alt="tiktok-link" />
          </a>
          <a target="_blank" href="www.twitter.com/noobtoonstv">
            <img className="icons" src={twitter} alt="twitter-link" />
          </a>
          <a target="_blank" href="www.youtube.com/@noobtoons">
            <img className="icons" src={youtube} alt="youtube-link" />
          </a>
          <a target="_blank" href="www.linkedin.com/noobtoons">
            <img className="icons" src={linkedin} alt="linkedin-link" />
          </a>
          <a target="_blank" href="www.beacons.ai/noobtoons"> All Links
            <img className="icons" src={target} alt="linkedin-link" />
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
