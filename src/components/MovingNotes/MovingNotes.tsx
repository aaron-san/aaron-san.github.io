import React from "react";
import "./MovingNotes.css";

type PropTypes = {
  src: string;
  alt: string;
};

function MovingNotes() {
  const ImageCard = (props: PropTypes) => {
    return (
      <div className="image-set">
        <img
          src={`../images/${props.src}`}
          alt={props.alt}
          className="h-32 md:rounded-lg"
        />
        {/* <div className="desc rounded-lg">{props.alt}</div> */}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto shadow-md p-4">
      <div id="banner"></div>
      <h2>Moving Notes</h2>
      <div className="flex flex-wrap justify-evenly">
        <div className="city-card">
          <ImageCard src="texas-map.jpg" alt="Map of Texas" />
          <h3>Texas</h3>
          <ul className="features flex flex-wrap gap-x-3">
            <li id="pro">Warm Weather</li>
            <li id="pro">Lower taxes</li>
            <li id="pro">Food paradise</li>
            <li>Affordable Real Estate?</li>
            <li id="pro">Lower electricity bills</li>
            <li id="pro">Strong job market</li>

            <li id="con">Heavy traffic</li>
            <li id="pro">Everything is bigger</li>
            <li id="list-a">
              <a href="https://texas.gov">
                Getting a driver's license, vehicle, voter registrations
              </a>
            </li>
          </ul>
        </div>

        <div className="city-card">
          <ImageCard src="plano-texas.jpg" alt="Plano, TX" />
          <h3>Plano, TX</h3>
          <ul>
            <li id="pro">Thriving suburban area</li>
            <li id="pro">25 miles north of Dallas</li>
            <li id="pro">Low taxes</li>
            <li id="pro">Near DFW international airport</li>
            <li id="pro">Desirable neighborhoods (many options)</li>
            <li id="pro">Good schools</li>
            <li id="pro">Good buses and trains</li>
            <li id="pro">Shopping (Legacy West)</li>
            <li id="pro">Many restaurants</li>
            <li id="pro">Strong Economy</li>
            <li id="pro">
              Nightlife - bars, restaurants, nice date night options, no
              club/loud atmospheres, more calm atmospheres, some live music bars
            </li>
            <li id="pro">Safety - 16th safest city in U.S.</li>
            <li id="pro">
              Highly-rated schools (some of the best schools in TX)
            </li>
            <li id="pro">Parks, outdoor activities, kids activities</li>
            <li id="con">
              Weather - unpredictable (volatile), sunny snowy, etc.
            </li>
            <li>Older homes & neighborhoods</li>
            <li id="con">
              Traffic - slow, congested, tollways, parking difficulty (Plano has
              grown fast)
            </li>
          </ul>
        </div>
        <div className="city-card">
          <ImageCard src="roundrock-texas.jpg" alt="Round Rock, TX" />
          <h3>Round Rock, TX</h3>
          <ul>
            <li>A suburb of Dallas, TX</li>

            <li id="pro">
              Economy - lots of undeveloped land and room to grow
            </li>
            <li>Lots of tech companies moving into Round Rock</li>
            <li id="pro">Lots of parks</li>
            <li id="pro">Huge indoor water park</li>
            <li id="pro">Huge park called "Play for all abilities"</li>
            <li id="pro">Affordable housing</li>
            <li id="pro">Easily accessible by I-35 (access to Austin)</li>
            <li id="pro">Highly-rate schools</li>
            <li id="pro">Good shopping - premium outlet mall off of I-35</li>

            <li id="con">Unpredictable weather + Hot TX heat</li>
            <li id="con">Allergies year-round</li>
            <li id="con">
              Traffic (rush hour is bad on I-35 to downtown! If 25 mins is
              average, add 20-30 mins when there is an accident)
            </li>

            <li>No major sports teams (can be a pro!)</li>
          </ul>
          <ImageCard src="roundrock-es.jpg" alt="Round Rock, TX" />
        </div>
        <div className="city-card">
          <ImageCard
            src="frisco-childdaycare.jpg"
            alt="Frisco, TX child daycare"
          />
          <h3>Frisco, TX</h3>
          <ul>
            <li id="pro">Has nice outdoor parks</li>
            <li>High income earners</li>
            <li id="con">
              Looks like a small town with few attractions and shopping centers
            </li>
            <li id="con">Has a few attractions</li>
            <li id="con">Expensive homes</li>
          </ul>
          <ImageCard src="frisco-texas.jpg" alt="Frisco, TX" />
        </div>
        <div className="city-card">
          <ImageCard src="irvine-texas.png" alt="Irvine, TX" />
          <h3>Irvine, TX</h3>
          <ul>
            <li id="pro">
              Appears to be a quiet suburb with a nice city center featuring a
              Venice-inspired riverway cutting through nice shops, restaurants
              and business offices
            </li>
            <li>Next to the DFW airport</li>
          </ul>
        </div>
        <div className="city-card">
          <h3>Jarrell, TX</h3>
          <ul>
            <li>North of Austin</li>
            <li id="pro">Affordable homes</li>
            <li>Growing</li>
            <li id="con">Unpredictable Weather</li>
          </ul>
        </div>
        <div className="city-card">
          <h3>Dallas, TX</h3>
          <ul>
            <li className="pro">Friendly people</li>
          </ul>
        </div>
        <div className="city-card">
          <h3>Colorado</h3>
        </div>

        <h3>Immigrant Visa for Spouse of a U.S. Citizen</h3>
      </div>
    </div>
  );
}

export default MovingNotes;
