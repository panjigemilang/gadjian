import "../dist/scss/search.scss"

export default function Search({ state, setState }) {
  const onChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    })
  }

  return (
    <div className="search-wrapper">
      <i className="fas fa-search"></i>
      <input
        type="search"
        name="search"
        placeholder="Find Personnels"
        onChange={onChange}
        value={state.search}
      />
    </div>
  )
}
