import { Link } from 'react-router-dom';
import headerImage from './images/HeaderImage.jpg';
import MiddleImage from './images/MiddleImage.png';
import './pagescss/Home.css'; 


function Home() {
  return (
    <div className="home-container">
      <div className="home-page">

        {/* HERO */}
        <section className="hero-section">
          <img
            src={headerImage}
            alt="Header Image"
            className="hero-image"
          />
          <div className="hero-text">
            {/* <h1>{can add text over image}</h1> */}
          </div>
        </section>

        {/* NAV links immediately below the hero */}
        <nav className="home-nav">
          <Link to="/about">About</Link>
          <Link to="/registry">Registry</Link>
          <Link to="/rsvp">RSVP</Link>
          <Link to="/travel">Travel</Link>
        </nav>

        {/* Q&A and Wedding Party Section */}
        <section className="image-links">
          <div className="image-links__left">
            <img src={MiddleImage} alt="Couple portrait" />
          </div>
          <div className="image-links__right">
            <div className="info-card">
              <h2 className="info-card__title">Have Questions?</h2>
              <p className="info-card__text">
                Find answers about the schedule, venue details, and more or meet our awsome wedding party!
              </p>
              <div className="info-card__actions">
                <Link to="/q&a" className="card">Q&A</Link>
                <Link to="/wedding-party" className="card">Wedding Party</Link>
              </div>
            </div>
          </div>

          
        </section>
        <nav className="home-nav">
            <div style={{ color: 'white' }}>.</div>
        </nav>
        {/*A sneak peek of us aka a couple picture of us*/}
        <div>
          
        </div>

        {/* Intro Section */}
        <section className="intro">
          <h2>Celebrate With Us</h2>
          <p>Join us for an unforgettable weekend of love, laughter, and memories.</p>
          <Link to="/things-to-do" className="button">Explore the Weekend</Link>
        </section>
      </div>
    </div>
  );
}

export default Home;
