import React from "react"
import moment from "moment"
import "../dist/scss/card.scss"

export default function Card({ id, profile, name, phone, dob, email }) {
  const formatDate = (date) => {
    // format date to show date and month
    const formattedDate = new moment(date).format("DD MMMM")

    return formattedDate
  }

  return (
    <div className="card-wrapper">
      <div className="top">
        <p>
          Personnel ID:
          <span data-testid="qa-personnel-id">{id ? id : "-"}</span>
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
          <label>Telephone</label>
          <p>{phone}</p>
          <label className="small-hide">Birthday</label>
          <p className="small-hide">{formatDate(dob.date)}</p>
          <label className="small-hide">Email</label>
          <p className="small-hide">{email}</p>
        </div>
      </div>
    </div>
  )
}
