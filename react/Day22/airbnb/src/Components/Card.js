import React from 'react';



function Card(props){
    return(
        <div className="card">
 <img src={props.img} alt="" 
className="card--image" />
 <div className="card--stats">
 <img src='../images/star.png' alt="" 
className="card--star" />
 <span>{props.rating}</span>
 <span className='gray'>{props.review_count}  </span>
 <span className='gray'>{props.country}</span>
 </div>
 <p>{props.title}</p>
 <p id='bold'>From ${props.price} / person`</p>
 </div>
    )
}
export default Card;