import React from 'react';

class Skills extends React.Component {
   
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
"http://localhost:8080/api/v1/skills")
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

    let skills = items.map((skills) => {
        return <div key={skills.name}><p><h4>&bull; {skills.name}: <span className="notbold">{skills.type}</span></h4></p></div>
    })

    return(
        <section id="skills">

        <div className="row skills">
            <div className="three columns header-col">
                <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">
                <div className="row item">
                <div className="twelve columns">
                    {skills}
                </div>
                </div>
            </div>
        </div>
        </section>
    );
}
}
 
export default Skills;