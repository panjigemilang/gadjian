import { shallow } from "enzyme"

import Loading from "./Loading"

describe("<Loading />", () => {
  it("should render the loading animation", () => {
    const wrapper = shallow(<Loading />)

    expect(wrapper.find('[data-testid="loading-animation"]').exists()).toBe(
      true
    )

    wrapper.unmount()
  })
})
