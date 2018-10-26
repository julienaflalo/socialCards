import React, {Component} from 'react';
import './SocialCard.css';

class SocialCard extends Component{
  render(){
    const mailTo = "mailto:" + this.props.email;  
    const alt = "Picture of " + this.props.name;
    return(
    <div className="card social-card">
      <img className="card-img-top profile-pic" src={this.props.img} alt={alt} />
      <div className="card-body">
        <h5 className="card-title">{this.props.name}</h5>
        <p className="card-text">{this.props.phone_number}</p>
        <a href={mailTo} className="btn btn-primary">Send email</a>
      </div>
    </div>
    )
  }
}

export default SocialCard;