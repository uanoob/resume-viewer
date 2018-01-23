import React, { Component } from 'react';

class About extends Component {
  render() {
    let name = '';
    let imageUrl = '';
    let bio = '';
    let street = '';
    let city = '';
    let state = '';
    let zip = '';
    let phone = '';
    let email = '';
    let resumedownload = '';
    if (this.props.data) {
      name = this.props.data.name;
      imageUrl = 'images/' + this.props.data.image;
      bio = this.props.data.bio;
      street = this.props.data.address.street;
      city = this.props.data.address.city;
      state = this.props.data.address.state;
      zip = this.props.data.address.zip;
      phone = this.props.data.phone;
      email = this.props.data.email;
      resumedownload = this.props.data.resumedownload;
    }
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={imageUrl} alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              {bio}
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}<br />
                    {city}, {state} {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumedownload} className="button">
                    <i className="fa fa-download" />Download Resume
                  </a>
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
