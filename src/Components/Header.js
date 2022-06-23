import React, { Component } from 'react';

class Header extends Component {
  render() {

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#education">Education</a></li>
            <li><a className="smoothscroll" href="#experience">Experience</a></li>
            <li><a className="smoothscroll" href="#skills">Skills</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Nicholas Baker</h1>
            <h3>I'm a St. John's based <span>Software Developer</span>. Looking to expand upon
            and use my skills as a full stack developer towards a career within your establishment.</h3>
            <hr />
            <ul className="social">
            <li><a href="https://www.linkedin.com/in/nicholas-baker-32a85022b/"><i className="fa fa-linkedin"></i></a></li>
            <li><a href="https://github.com/nicholasjamesbaker/"><i className="fa fa-github"></i></a></li>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
