import { mount } from "enzyme"
import Topbar from "./TopBar"
import { SideNavContext } from "../../contexts/SideNavContext"
import toJson from "enzyme-to-json"

describe("<Topbar />", () => {
  it("should render Topbar properly", () => {
    const defaultValues = {
      toggleSideNav: false,
      setToggleSideNav: jest.fn(),
    }

    const wrapper = mount(
      <SideNavContext.Provider value={defaultValues}>
        <Topbar />
      </SideNavContext.Provider>
    )

    expect(toJson(wrapper)).toMatchSnapshot()
    wrapper.unmount()
  })
})
