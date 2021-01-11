import React, { useContext, useEffect } from "react"
import { SideNavContext } from "../../contexts/SideNavContext"
import Logo from "../../dist/images/logo.png"
import "../../dist/scss/navigation.scss"

export default function SideNav() {
  const { toggleSideNav } = useContext(SideNavContext)

  useEffect(() => {
    // if side nav shown, disable body from scrolling
    if (toggleSideNav)
      document.getElementsByTagName("body")[0].style.overflowY = "hidden"
    else document.getElementsByTagName("body")[0].style.overflowY = "auto"
  }, [toggleSideNav])

  return (
    <nav className={`navigation-wrapper ${toggleSideNav ? "show" : ""}`}>
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
