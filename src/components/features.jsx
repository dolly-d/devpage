import React, { Component } from "react";

export class features extends Component {
  render() {
    return (
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Projects</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d,i) => (
                  <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                    {" "}
                    <i className={d.icon}></i>
                     <a href={d.demo} target="_blank" rel="noopener noreferrer"> <h3><u>{d.title}</u></h3></a>

                    <p>{d.text}</p>
                    ---
                    <p>{d.tech}</p>
                  </div>
                ))
              : "Loading..."}
              
          </div>
        </div>
      </div>
    );
  }
}

export default features;
