import { createContext, useState } from "react"

export const SideNavContext = createContext()

const SideNavContextProvider = (props) => {
  const [toggleSideNav, setToggleSideNav] = useState(false)

  return (
    <SideNavContext.Provider value={{ toggleSideNav, setToggleSideNav }}>
      {props.children}
    </SideNavContext.Provider>
  )
}

export default SideNavContextProvider
