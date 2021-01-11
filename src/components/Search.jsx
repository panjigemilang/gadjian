import "../dist/scss/search.scss"

export default function Search({ search, setSearch }) {
  const onChange = ({ target }) => {
    setSearch(target.value)
  }

  return (
    <div className="search-wrapper">
      <i className="fas fa-search"></i>
      <input
        type="search"
        name="search"
        placeholder="Find Personnels"
        onChange={onChange}
        value={search}
      />
    </div>
  )
}
