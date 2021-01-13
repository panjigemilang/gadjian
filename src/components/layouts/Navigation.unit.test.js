import { mount } from "enzyme"
import { SideNavContext } from "../../contexts/SideNavContext"
import Navigation from "./Navigation"

describe("<Navigation />", () => {
  it("should have class 'show' to show side nav properly in mobile device", () => {
    const data = {
      toggleSideNav: true,
    }

    const wrapper = mount(
      <SideNavContext.Provider value={data}>
        <Navigation />
      </SideNavContext.Provider>
    )

    expect(wrapper.find("nav.navigation-wrapper").hasClass("show")).toBe(true)
  })
})
