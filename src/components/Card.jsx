import React from "react"
import moment from "moment"
import "../dist/scss/card.scss"

export default function Card({ id, profile, name, phone, dob, email }) {
  const formatDate = (date) => {
    const formattedDate = new moment(date).format("DD MMMM")

    return formattedDate
  }

  return (
    <div className="card-wrapper">
      <div className="top">
        <p>
          Personnel ID: <span>{id ? id : "-"}</span>
        </p>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="card-content-wrapper">
        <img src={profile.large} alt="Profile" />
        <div className="card-content">
          <label>Name</label>
          <p>{`${name.title} ${name.first} ${name.last}`}</p>
        </div>
        <div className="card-content">
          <label>Telephone</label>
          <p>{phone}</p>
        </div>
        <div className="card-content">
          <label>Birthday</label>
          <p>{formatDate(dob.date)}</p>
        </div>
        <div className="card-content">
          <label>Email</label>
          <p>{email}</p>
        </div>
      </div>
    </div>
  )
}
