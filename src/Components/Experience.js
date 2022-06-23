import React from 'react';

class Experience extends React.Component {
   
  // Constructor 
  constructor(props) {
      super(props);
 
      this.state = {
          items: [],
          DataisLoaded: false
      };
  }
 
  // ComponentDidMount is used to
  // execute the code 
  componentDidMount() {
      fetch(
"http://localhost:8080/api/v1/experience")
          .then((res) => res.json())
          .then((json) => {
              this.setState({
                  items: json,
                  DataisLoaded: true
              });
          })
  }
  render() {

    const { DataisLoaded, items } = this.state;
      if (!DataisLoaded) return <div>
        <h1> Please load back end! </h1> </div> ;

    let experience = items.map((experience) => {
        return <div key={experience.jobTitle}><h3>{experience.jobTitle}</h3>
        <p className="info">{experience.employer} <span>&bull;</span><em className="date">{experience.startDate} to {experience.endDate}</em></p>
        <p className="whitespace">{experience.description}</p>
        </div>
    })

    return(
        <section id="experience">

        <div className="row experience">
            <div className="three columns header-col">
                <h1><span>Experience</span></h1>
            </div>

            <div className="nine columns main-col">
                <div className="row item">
                <div className="twelve columns">
                    {experience}
                </div>
                </div>
            </div>
        </div>
        </section>
    );
}
}
 
export default Experience;