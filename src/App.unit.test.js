import { mount } from "enzyme"
import App from "./App"
import Card from "./components/Card"
import Loading from "./components/Loading"

describe("<App />", () => {
  const wrapper = mount(<App />)

  afterAll(() => {
    wrapper.unmount()
  })

  it("should render <Loading /> when fetching data first time", () => {
    expect(wrapper.find(Loading).exists()).toBe(true)
  })

  it("should not render <Card /> when <Loading /> exists", () => {
    expect(wrapper.find(Card).exists()).toBe(false)
  })
})
