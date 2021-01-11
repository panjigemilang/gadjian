import React, { useContext } from "react"
import { SideNavContext } from "../../contexts/SideNavContext"
import Logo from "../../dist/images/logo.png"
import "../../dist/scss/topbar.scss"

export default function TopBar() {
  const { toggleSideNav, setToggleSideNav } = useContext(SideNavContext)

  return (
    <header className="topbar-wrapper">
      <div className="user-wrapper">
        <div
          className="burger-menu"
          onClick={() => setToggleSideNav(!toggleSideNav)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="mobile-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <h2 className="small-hide">
          Hallo, <span>Gadjian User</span>
        </h2>
        <img
          className="profile-thumbnail"
          src="http://via.placeholder.com/80x80.png"
          alt="User"
        />
      </div>
    </header>
  )
}
