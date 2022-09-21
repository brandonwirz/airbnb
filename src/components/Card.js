import React from "react"

export default function Card(props) {
 console.log(props.openSpots)
 
 let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online"){
        badgeText = "ONLINE"
    }
      else if (props.location === "Norway"){
        badgeText = "NORWAY"
    }
      else if (props.location === "Switzerland"){
        badgeText = "SWITZERLAND"
 }
 
    return (
      <div className="card">
       {badgeText && <div className="card-badge">{badgeText}</div>}
          <img src={`./images/${props.img}`} className="card-img" alt="katiez"/>
          <div className="card-stats">
                 <img src={"./images/star.png"} className="card-star" alt="star-icon"/>
                 <span>{props.rating}</span>
                 <span className="grey">({props.reviewCount}) • </span>
                 <span className="grey">{props.location}</span>
             </div>
             <p className="card-title">{props.title}</p>
              <p className="card-price"><span className="bold">From ${props.price}</span> / person</p>
         </div>
    )
}