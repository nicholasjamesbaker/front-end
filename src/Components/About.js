import React, { Component } from 'react';

class About extends Component {
  render() {

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src="..\images\profilepic.jpg" alt="Nick Baker Profile Pic" /> 
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>Hi Josh, I haven't thought of a bio yet...</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Nicholas Baker</span><br />
						   <span>6 Gilham Crescent<br />
						         Mount Pearl, NL, A1N3C7
                   </span><br />
						   <span>709-728-6019</span><br />
                     <span>nicholas.baker24@ed.cna.nl.ca</span>
					   </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
