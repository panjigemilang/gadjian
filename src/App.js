import { useEffect, useRef, useState } from "react"
import { fetchUsers } from "./api/RandomUserApi"
import "./dist/scss/app.scss"

// UI components
import Navigation from "./components/layouts/Navigation"
import TopBar from "./components/layouts/TopBar"
import Search from "./components/Search"
import Card from "./components/Card"
import Loading from "./components/Loading"

function App() {
  const firstRender = useRef(true)
  const [data, setData] = useState([])
  const [temp, setTemp] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [limit, setLimit] = useState(4)
  const [page, setPage] = useState(1)

  const indexOfLastData = page * limit
  const indexOfFirstData = indexOfLastData - limit
  const currentData = data.slice(indexOfFirstData, indexOfLastData)

  // console.log("CurrentData", currentData)

  useEffect(() => {
    setLoading(true)

    // if data exists in local storage, load data from local storage
    if (window.localStorage.getItem("data")) {
      const data = JSON.parse(window.localStorage.getItem("data"))

      setData(data.results)
      // set temporary for searching
      setTemp(data.results)
      setLoading(false)
    }
    // else get data for the first time
    else {
      fetchUsers(page).then((data) => {
        setData(data.results)
        setTemp(data.results)
        setLoading(false)

        // save it to local storage
        window.localStorage.setItem("data", JSON.stringify(data))
      })
    }
  }, [])

  useEffect(() => {
    // will be skipped when rendering first time
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    // get data when searching
    if (search) {
      setData(
        temp.filter((item) =>
          item.name.first.toLowerCase().includes(search.toLowerCase())
        )
      )
    } else {
      setData(temp)
    }
  }, [search])

  const prevDisabled = () => {
    // disabling prev control if prev page less than 1
    return page - 1 === 0 ? true : false
  }

  const nextDisabled = () => {
    // get the info page if not the same as requested page, then it is the last available data
    return indexOfLastData === data.length ? true : false
  }

  const previous = () => {
    // refetching
    setPage(page - 1)
  }

  const next = () => {
    // refetching
    setPage(page + 1)
  }

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
              <Search search={search} setSearch={setSearch} />
              <button>
                ADD PERSONNEL
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="card-container">
            {loading && <Loading />}
            {!loading &&
              currentData.length > 0 &&
              currentData.map((item, i) => (
                <Card
                  key={`card-${i}`}
                  id={item.id.value}
                  profile={item.picture}
                  name={item.name}
                  phone={item.phone}
                  dob={item.dob}
                  email={item.email}
                />
              ))}
            {!loading && currentData.length === 0 && <h1>No Data was found</h1>}
          </div>
          <div className="navigation-control-wrapper">
            <button
              className="left"
              onClick={previous}
              disabled={prevDisabled() ? true : false}
            >
              <i className="fas fa-chevron-left"></i>
              <p>Previous Page</p>
            </button>
            <button
              className="right"
              onClick={next}
              disabled={nextDisabled() ? true : false}
            >
              <p>Next Page</p>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
