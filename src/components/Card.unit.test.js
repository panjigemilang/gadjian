import { shallow } from "enzyme"
import Card from "./Card"

describe("<Card />", () => {
  let wrapper

  beforeEach(() => {
    const data = {
      id: 1,
      profile: "/logo512.png",
      name: {
        title: "mr",
        first: "jamal",
        last: "udin",
      },
      phone: "123",
      dob: {
        date: "1951-01-13T01:31:05.769Z",
      },
      email: "panji@gmail.com",
    }

    wrapper = shallow(<Card {...data} />)
  })

  it("should render id properly", () => {
    expect(wrapper.find('[data-testid="qa-personnel-id"]').text()).toEqual("1")
  })

  it("should render profile thumbnail properly", () => {
    expect(wrapper.find('[data-testid="qa-profile-thumbnail"]').exists()).toBe(
      true
    )
  })

  it("should render fullname properly", () => {
    expect(wrapper.find('[data-testid="qa-fullname"]').text()).toEqual(
      "mr jamal udin"
    )
  })

  it("should render phone properly", () => {
    expect(wrapper.find('[data-testid="qa-phone"]').text()).toEqual("123")
  })

  it("should render date properly", () => {
    expect(wrapper.find('[data-testid="qa-dob"]').text()).toEqual("13 Jan")
  })

  it("should render email properly", () => {
    expect(wrapper.find('[data-testid="qa-email"]').text()).toEqual(
      "panji@gmail.com"
    )
  })
})
