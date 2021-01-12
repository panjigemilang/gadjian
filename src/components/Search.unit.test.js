import React from "react"
import { mount } from "enzyme"
import Search from "./Search"

describe("<Search />", () => {
  const updateSearch = jest.fn()
  const useStateSpy = jest.spyOn(React, "useState")
  useStateSpy.mockImplementationOnce((init) => [init, updateSearch])

  it("should render given value on input change", () => {
    const wrapper = mount(<Search setSearch={updateSearch} />)
    const input = wrapper.find('[data-testid="qa-search"]')

    input.simulate("change", {
      target: {
        value: "test",
      },
    })

    expect(updateSearch).toHaveBeenCalledWith("test")
  })
})
