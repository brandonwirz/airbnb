import React from "react"

export default function Card(props) {
  console.log(props.openSpots)

  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE"
  } else if (props.item.location === "Norway") {
    badgeText = "NORWAY"
  } else if (props.item.location === "Switzerland") {
    badgeText = "SWITZERLAND"
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        src={`./images/${props.item.coverImg}`}
        className="card-img"
        alt="card"
      />
      <div className="card-stats">
        <img src={"./images/star.png"} className="card-star" alt="star-icon" />
        <span>{props.item.stats.rating}</span>
        <span className="grey">({props.item.stats.reviewCount}) •</span>
        <span className="grey">{props.item.location}</span>
      </div>
      <p className="card-title">{props.item.title}</p>
      <p className="card-price">
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  )
}
