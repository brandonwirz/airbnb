import React from "react"

export default function Card(props) {

    return (
        <div className="card">
            <img src={`./images/${props.img}`} className="card-img" alt="katiez"/>
            <div className="card-stats">
                   <img src={"./images/star.png"} className="card-star" alt="star-icon"/>
                   <span>{props.rating}</span>
                   <span className="grey">({props.reviewCount}) • </span>
                   <span className="grey">{props.country}</span>
               </div>
               <p>{props.title}</p>
               <p><span className="bold">${136}</span> / person</p>
           </div>
    )
}