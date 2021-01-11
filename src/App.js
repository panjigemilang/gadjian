import { useState } from "react"
import "./dist/scss/app.scss"

// UI components
import Navigation from "./components/layouts/Navigation"
import TopBar from "./components/layouts/TopBar"
import Search from "./components/Search"
import Card from "./components/Card"

function App() {
  const [state, setState] = useState({
    search: "",
  })

  return (
    <div className="app">
      <Navigation />
      <div className="container">
        <TopBar />
        <div className="content-wrapper">
          <div className="heading-wrapper">
            <div className="left-heading">
              <h1>PERSONNEL LIST</h1>
              <h4>List of all personnels</h4>
            </div>
            <div className="right-heading">
              <Search state={state} setState={setState} />
              <button>
                ADD PERSONNEL
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="card-container">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="navigation-control-wrapper">
            <div className="left">
              <i className="fas fa-chevron-left"></i>
              <p>Previous Page</p>
            </div>
            <div className="right">
              <p>Next Page</p>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
