import React from "react"
import "../../dist/scss/topbar.scss"

export default function TopBar() {
  return (
    <header className="topbar-wrapper">
      <div className="user-wrapper">
        <h2>
          Hallo, <span>Gadjian User</span>
        </h2>
        <img src="http://via.placeholder.com/80x80.png" alt="User" />.
      </div>
    </header>
  )
}
