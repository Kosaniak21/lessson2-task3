import React from "react";
import { shallow } from "enzyme";
import Counter from "../Counter";
describe("Counter", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Counter />);
  });

  it("should the initial state be 0", () => {
    const text = wrapper.find(".counter__value").text();
    expect(text).toEqual("0");
  });

  it("should the initial state be 1 after click in button Increment", () => {
    const incrementButton = wrapper.find(".counter__button").at(1);
    const counterValue = wrapper.find(".counter__value");

    incrementButton.simulate("click");
    expect(counterValue.text()).toBe("1");
  });

  it("should the initial state be -1 after click in button Decrement", () => {
    const decrementButton = wrapper.find(".counter__button").at(0);
    const counterValue = wrapper.find(".counter__value");

    decrementButton.simulate("click");
    expect(counterValue.text()).toBe("-1");
  });
});
