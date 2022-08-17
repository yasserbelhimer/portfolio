import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faFile } from '@fortawesome/free-solid-svg-icons';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">{this.landingData.firstName}
            <span className="text-primary">{this.landingData.lastName}</span>
          </h1>
          <div className="subheading mb-5"> {this.landingData.address} · {this.landingData.phoneNumber} ·
            <a href="mailto:name@email.com">{this.landingData.email}</a>
          </div>
          <p className="lead mb-5">{this.landingData.bio}</p>
          <div className="social-icons">
            <a href={this.landingData.linkedin} target="_blank" title="Linkedin">
              <FontAwesomeIcon icon={faLinkedin} size="lg"/>
            </a>
            <a href={this.landingData.github} target="_blank" title="github">
              <FontAwesomeIcon icon={faGithub} size="lg"/>
            </a>
            <a href={this.landingData.facebook} target="_blank" title="facebook">
              <FontAwesomeIcon icon={faFacebook} size="lg"/>
            </a>
            <a href={this.landingData.resume} target="_blank" title="resume">
              <FontAwesomeIcon icon={faFile} size="lg"/>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;
