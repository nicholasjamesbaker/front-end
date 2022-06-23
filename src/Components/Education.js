import React from 'react';

class Education extends React.Component {
   
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
"http://localhost:8080/api/v1/educations")
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

    let education = items.map((education) => {
        return <div key={education.title}><h3>{education.title}</h3>
        <p className="info">{education.institutionName} <span>&bull;</span><em className="date">{education.gradYear}</em>
        <span>&bull;</span><em className="date">{education.abbreviation}</em></p>
        <p>Dates attended: {education.startDate} to {education.endDate}</p></div>
    })

    return(
        <section id="education">

        <div className="row education">
            <div className="three columns header-col">
                <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
                <div className="row item">
                <div className="twelve columns">
                    {education}
                </div>
                </div>
            </div>
        </div>
        </section>
    );
}
}
 
export default Education;