import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Get In Touch</h2>
                  <p>
                    Please fill out the form below to send me an email.
                  </p>
                </div>
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          name="name"
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required="required"                        
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          name="email"
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required="required"
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h4>Contact Info</h4>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  {this.props.data ? this.props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {this.props.data ? this.props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    
  
                    <li>
                      <a href={this.props.data ? this.props.data.twitter : "/"} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.youtube : "/"} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                    <li> 
                    <a href ={this.props.data ? this.props.data.medium : "/"} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-medium"></i>
                    </a>
                    </li>
                    <li>
                    <a href={this.props.data ? this.props.data.github : "/"} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github" ></i>
                    </a>
                    </li>
                    <li>
                    <a href={this.props.data ? this.props.data.linkedin : "/"} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin-square"></i>
                    </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
       
           
      </div>
    );
  } 
}

export default Contact;
