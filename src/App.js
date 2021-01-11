import { useEffect, useRef, useState } from "react"
import { getUser } from "./api/RandomUserApi"
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
  const [info, setInfo] = useState({})
  const [loading, setLoading] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)

  useEffect(() => {
    setLoading(true)

    getUser(page).then((data) => {
      setInfo(data.info)
      setData(data.results)
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    if (isFetching) {
      getUser(page).then((data) => {
        setInfo(data.info)
        setData(data.results)
        setLoading(false)
        setIsFetching(false)
      })
    }
  }, [isFetching])

  const prevDisabled = () => {
    return page - 1 === 0 ? true : false
  }

  const nextDisabled = () => {
    return info.page !== page ? true : false
  }

  const previous = () => {
    setPage(page - 1)
    setLoading(true)
    setIsFetching(true)
  }

  const next = () => {
    setPage(page + 1)
    setLoading(true)
    setIsFetching(true)
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
              data.map((item, i) => (
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
