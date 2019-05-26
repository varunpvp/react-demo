import React from 'react';
import './App.css';

import icon from './images/icon.png'
import hero from './images/hero.png'

import liveLessons from './images/Live-lessons.png'
import solvePuzzles from './images/Solve-puzzles.png'
import playFeature from './images/play-feature.png'
import storeGames from './images/store-games.png'
import improveCalc from './images/blindbot.png'
import praticePositions from './images/practice-positions.png'


class App extends React.Component {


  componentDidMount() {
    const $header = document.querySelector('header')

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY
      if (scrollY >= 128) {
        $header.classList.add('sticky');
      } else {
        $header.classList.remove('sticky');
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="info-bar" >
          <div className="info-content container" >
            <span><i className="fas fa-phone"></i>+91 9980409870</span>&nbsp;&nbsp;
            <span><i className="fas fa-envelope"></i>tattvachess@gmail.com</span>
          </div>
        </div>
        <header className="container" >
          <div className="brand-logo" >
            <img src={icon} alt="logo" />
          </div>
          <div className="site-nav" >
            <ul className="nav" >
              <li className="nav-item" >
                <a className="nav-link" href="#home" >HOME</a>
              </li>
              <li className="nav-item" >
                <a className="nav-link" href="#login" >LOGIN</a>
              </li>
            </ul>
          </div>
        </header>
        <div className="container" >
          <section className="hero" >
            <div className="hero-image" >
              <img src={hero} alt="hero" />
            </div>
            <div className="hero-content" >
              <div>
                <h1 className="hero-point" >Learn</h1>
              </div>
              <div>
                <h1 className="hero-point" >Measure</h1>
              </div>
              <div>
                <h1 className="hero-point" >Improve</h1>
              </div>
              <div className="hero-login" >
                <button className="btn-login" >Login</button>
              </div>
            </div>
          </section>
          <section className="features" >
            <div className="feature" >
              <div className="feature-image" >
                <img src={liveLessons} alt="Live Lessons" />
              </div>
              <div className="feature-content" >
                <h2>Online Coaching</h2>
                <p>Rain or shine, stay connected with us anytime, anywhere. Collaboratively discuss plans and strategy remotely during tournaments.</p>
                <p>Attend online classes with our renowned coaches.</p>
              </div>
            </div>
            <div className="feature" >
              <div className="feature-image" >
                <img src={solvePuzzles} alt="Live Lessons" />
              </div>
              <div className="feature-content" >
                <h2>Solve tactics and improve your game</h2>
                <p>We will provide you tailor made homework puzzles to solve. Keeping solving them and remember that every right and wrong attempt is tracked for performance</p>
              </div>
            </div>
            <div className="feature" >
              <div className="feature-image" >
                <img src={playFeature} alt="Live Lessons" />
              </div>
              <div className="feature-content" >
                <h2>Play with other students in the academy</h2>
                <p>Within Tattva's online chess arena, you can play with other students anytime and improve your game. Games are automatically recorded for analysis</p>
              </div>
            </div>
            <div className="feature" >
              <div className="feature-image" >
                <img src={storeGames} alt="Live Lessons" />
              </div>
              <div className="feature-content" >
                <h2>Store and share your tournament games</h2>
                <p>Store your tournament games in the platform and share it with us for analysis</p>
              </div>
            </div>
            <div className="feature" >
              <div className="feature-image" >
                <img src={improveCalc} alt="Live Lessons" />
              </div>
              <div className="feature-content" >
                <h2>Improve your calculations with Blindfold Chess</h2>
                <p>Play blindfold chess in multiple levels and visualise your calculations better during the game</p>
              </div>
            </div>
            <div className="feature" >
              <div className="feature-image" >
                <img src={praticePositions} alt="Live Lessons" />
              </div>
              <div className="feature-content" >
                <h2>Practice positions with engine</h2>
                <p>Practice positions with engine and improve your accuracy.</p>
              </div>
            </div>
          </section>
        </div>
        <div className="footer-info" >
          <span className="footer-info-text" >Need Any Help? Feel Free to Contact us</span>
          <button className="footer-info-cta" >Send a Message</button>
        </div>
        <footer>
          TATTVA CHESS © COPYRIGHT 2019. SHORTCASTLE TEAM - POWERED BY CHESSLANG
        </footer>
      </div>
    );
  }

}

export default App;
