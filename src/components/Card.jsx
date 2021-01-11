import React from "react"
import "../dist/scss/card.scss"

export default function Card() {
  return (
    <div className="card-wrapper">
      <div className="top">
        <p>
          Personnel ID: <span>123456</span>
        </p>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="card-content-wrapper">
        <img src="http://via.placeholder.com/200x200.png" alt="Profile" />
        <div className="card-content">
          <label>Name</label>
          <p>First name Last name</p>
        </div>
        <div className="card-content">
          <label>Telephone</label>
          <p>08931xxxxx</p>
        </div>
        <div className="card-content">
          <label>Birthday</label>
          <p>First name Last name</p>
        </div>
        <div className="card-content">
          <label>Email</label>
          <p>aiwdj@gmail.com</p>
        </div>
      </div>
    </div>
  )
}
