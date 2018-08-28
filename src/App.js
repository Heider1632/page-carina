import React, { Component } from 'react';
import logo from './logo.svg';
import './App.sass';

class App extends Component {
  render() {
    return (
    <body className="body">
    <main id="cd-main-content" className="main">
      <section id="cd-intro" className="section-home">
        <h1>Full Page Intro &amp; Navigation</h1>
        <header className="cd-header">
          <div id="cd-logo">
            <a href="#0">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-logo_2.svg" alt="Logo" />
            </a>
          </div>
          <a className="cd-menu-trigger" href="#main-nav">Menu<span></span></a>
        </header>
          <div className="cd-blurred-bg"></div>
      </section>
    </main>

    <div className="cd-shadow-layer"></div>

    <nav id="main-nav">
      <ul>
        <li><a href="#0"><span>Tour</span></a></li>
        <li><a href="#0"><span>Pricing</span></a></li>
        <li><a href="#0"><span>Labs</span></a></li>
        <li><a href="#0"><span>About</span></a></li>
        <li><a href="#0"><span>Contact us</span></a></li>
      </ul>
      <a href="#0" className="cd-close-menu">Close<span></span></a>
    </nav>
    </body>
    );
  }
}

export default App;
