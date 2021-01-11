import React from "react"
import Logo from "../../dist/images/logo.png"
import "../../dist/scss/navigation.scss"

export default function SideNav() {
  return (
    <nav className="navigation-wrapper">
      <ul>
        <li className="logo">
          <img src={Logo} alt="Logo" />
        </li>
        <li>
          <a href="#">
            <i className="fas fa-home"></i>
            Beranda
          </a>
        </li>
        <li className="active">
          <a href="#">
            <i className="fas fa-user"></i>
            Personnel List
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-home"></i>
            Daily Attendance
          </a>
        </li>
      </ul>
    </nav>
  )
}
