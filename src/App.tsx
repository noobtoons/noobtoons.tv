import React, { useEffect } from "react";
import Mailer from "./mailer";
import FilmRoll from "./filmRoll";
import SEOKeys from "./SEOkeys";
import Navigation from "./nav";
import "./App.css";
import Carousel from "./carousel";
import {
  bafta,
  cooler,
  hnm,
  instagram,
  linkedin,
  logitech,
  mail,
  SquareEnix,
  streamlabs,
  target,
  tiktok,
  twitch,
  twitter,
  TwoK,
  womeninesports,
  youtube,
} from "./media";
import { emailJSKey } from "./vars/constantValues";

function App() {
  useEffect(() => {
    window.emailjs.init(emailJSKey);
  });

  return (
    <div className="App">
      <Navigation />
      <div>
        <header className="App-header">
          <div>
            <h1 className="name-title">Noobtoons</h1>
            <h3 className="skills">
              Gaming Content Creator | Influencer | Twitch Streamer | Gaming
              Consultant
            </h3>
            <a
              className="mail"
              target="_blank"
              rel="noreferrer"
              href="mailto:hello@noobtoons.tv"
            >
              <img
                loading="lazy"
                className="mail-icons"
                src={mail}
                alt="tiktok-link"
              />{" "}
              hello@noobtoons.tv
            </a>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/noobtoonstv"
              >
                <img
                  loading="lazy"
                  className="main-icons"
                  src={instagram}
                  alt="instagram-link"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.tiktok.com/@noobtoonstv"
              >
                <img
                  loading="lazy"
                  className="main-icons"
                  src={tiktok}
                  alt="tiktok-link"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.twitter.com/noobtoonstv"
              >
                <img
                  loading="lazy"
                  className="main-icons"
                  src={twitter}
                  alt="twitter-link"
                />
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
                Noobtoons is a black, queer variety streamer and Content Creator
                from the United Kingdom who focuses on mostly competitive
                gameplay by finding new ways to make a well loved title just a
                little bit more challenging. She also does not shy away for a
                nice cozy session after a challenging play-through.
              </p>
              <p>
                All while fostering an inclusive and safe space for her
                community that is welcoming to everyone be it on Twitch, Tiktok
                or Youtube.
                <strong>The Noob Troop</strong> as the community is known, show
                up for the cozy vibe of Noobtoons live streams, for each other
                and particularly to watch her react to random content on the
                internet, of which they get a massive kick out of.
              </p>
              <p>
                Noobtoons also helps to highlight important issues faced by
                marginalised creators where necessary and loves having an open
                and honest conversation with her community by creating engaging
                scenarios which encourages everyone to get involved be it on
                Twitch and/or other platforms.
              </p>
              <p>
                Noobtoons is a partnered Twitch Streamer and has a part of a
                number of well known <a href="#brands">brand affiliations</a> in
                her short time as a creator and is always looking to partner
                with companies on activations/ sponsorships that align with her
                and her growing audiences&apos; interests.
              </p>
              <p>
                Although Noobtoons&apos; main audience is on Twitch, she
                actively creates content for other{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.beacons.ai/noobtoons"
                >
                  platforms
                  <img
                    loading="lazy"
                    className="audience"
                    src={target}
                    alt="linkedin-link"
                  />
                </a>{" "}
                and has a lot of growing following on a lot of the other social
                medias which showcases what shes about.
              </p>
            </div>
          </div>

          <div id="brands" className="sections">
            <h2 className="sections">Brands I&apos;ve Worked with</h2>
            <img
              loading="lazy"
              className="icons-brands"
              src={twitch}
              alt="noobtoons partnered with twitch for pride month"
            />
            <img
              loading="lazy"
              className="icons-brands"
              src={bafta}
              alt="noobtoons partnered with bafta games for nominee games"
            />
            <img
              loading="lazy"
              className="icons-brands"
              src={cooler}
              alt="noobtoons partnered with coolermaster for sponsorships"
            />
            <img
              loading="lazy"
              className="icons-brands"
              src={hnm}
              alt="noobtoons partnered with h&m for activations
              in animal crossing"
            />
            <img
              loading="lazy"
              className="icons-brands"
              src={TwoK}
              alt="noobtoons partnered with 2K for womens history month"
            />
            <img
              loading="lazy"
              className="icons-brands"
              src={SquareEnix}
              alt="noobtoons partnered with Square Enix for activations"
            />
            <img
              loading="lazy"
              className="icons-brands"
              src={womeninesports}
              alt="noobtoons partnered with women in esports for castings"
            />
            <img
              loading="lazy"
              className="icons-brands"
              src={logitech}
              alt="noobtoons partnered with logitech for black history month"
            />
            <img
              loading="lazy"
              className="icons-brands"
              src={streamlabs}
              alt="noobtoons partnered with streamlabs for black history month"
            />
          </div>

          <div id="contact" className="sections">
            <h2>Contact</h2>
            <form>
              <div className="form-column">
                <div className="col">
                  <input
                    type="text"
                    id="name-content"
                    className="form-control"
                    placeholder="Contact Email"
                  />
                </div>
                <div className="col">
                  <textarea
                    placeholder="Get in Touch!"
                    className="textarea form-control"
                    id="mail-content"
                  />
                </div>
                <button
                  id="email"
                  type="submit"
                  onClick={Mailer}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div id="socials" className="sections footer">
            <h2>Socials</h2>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.twitch.tv/noobtoons"
            >
              <img
                loading="lazy"
                className="icons"
                src={twitch}
                alt="twitch-link"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/noobtoonstv"
            >
              <img
                loading="lazy"
                className="icons"
                src={instagram}
                alt="instagram-link"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.tiktok.com/@noobtoonstv"
            >
              <img
                loading="lazy"
                className="icons"
                src={tiktok}
                alt="tiktok-link"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.twitter.com/noobtoonstv"
            >
              <img
                loading="lazy"
                className="icons"
                src={twitter}
                alt="twitter-link"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/@noobtoons"
            >
              <img
                loading="lazy"
                className="icons"
                src={youtube}
                alt="youtube-link"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/noobtoons"
            >
              <img
                loading="lazy"
                className="icons"
                src={linkedin}
                alt="linkedin-link"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="all-links-main"
              href="http://https://www.beacons.ai/noobtoons"
            >
              {" "}
              All Links
              <img
                loading="lazy"
                className="icons"
                src={target}
                alt="linkedin-link"
              />
            </a>
          </div>
        </div>
        <FilmRoll />
      </div>

      <div id="timelines" className="sections">
        <SEOKeys />
        <div className="twitter">
          <a
            className="twitter-timeline"
            data-lang="en"
            data-tweet-limit="1"
            data-show-retweets={false}
            href="https://twitter.com/noobtoonsTv?ref_src=twsrc%5Etfw"
          >
            Tweets by noobtoonsTv
          </a>
        </div>
        <div className="tiktok">
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@noobtoonstv"
            data-unique-id="noobtoonstv"
            data-embed-from="oembed"
            data-embed-type="creator"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.tiktok.com/@noobtoonstv?refer=creator_embed"
            >
              @noobtoonstv
            </a>
          </blockquote>
        </div>
      </div>

      <div id="showcase">
        <Carousel />
      </div>
      <footer>
        <a
          className="mail mail-bottom"
          target="_blank"
          rel="noreferrer"
          href="mailto:hello@noobtoons.tv"
        >
          <img
            loading="lazy"
            className="mail-icons"
            src={mail}
            alt="tiktok-link"
          />
          hello@noobtoons.tv
        </a>
        <SEOKeys />
      </footer>
    </div>
  );
}

export default App;
