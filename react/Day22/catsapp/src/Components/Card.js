import React from 'react';

//import Img1 from '../images/mr-whiskerson.png';
function Card(props){
    return (
    <div className="contact-card">
                 
                <img src={props.img} alt=""/>
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img  src="../images/phone-icon.png" alt="" />
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img  src ="../images/mail-icon.png" alt=""/>
                    <p>{props.mail}</p>
                </div>
            </div>
    )
}
export default Card;