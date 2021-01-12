import React from "react"
import moment from "moment"
import "../dist/scss/card.scss"

export default function Card({ id, profile, name, phone, dob, email }) {
  const formatDate = (date) => {
    // format date to show date and month
    const formattedDate = new moment(date).format("DD MMM")

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
        <img
          src={profile.large}
          alt="Profile"
          data-testid="qa-profile-thumbnail"
        />

        <div className="card-content">
          <label>Name</label>
          <p data-testid="qa-fullname">{`${name.title} ${name.first} ${name.last}`}</p>
          <label>Telephone</label>
          <p data-testid="qa-phone">{phone}</p>
          <label className="small-hide">Birthday</label>
          <p data-testid="qa-dob" className="small-hide">
            {formatDate(dob.date)}
          </p>
          <label className="small-hide">Email</label>
          <p data-testid="qa-email" className="small-hide">
            {email}
          </p>
        </div>
      </div>
    </div>
  )
}
