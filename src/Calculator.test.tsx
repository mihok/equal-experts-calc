import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import Calculator from "./Calculator";

describe("Calculator", () => {
  test("renders correctly", () => {
    const snapshot = shallow(<Calculator />);

    expect(toJson(snapshot)).toMatchSnapshot();
  });

  test("performs addition", () => {
    const calc = mount(<Calculator />);

    const output = calc.find(".output");

    calc.find("button.one").simulate("click");

    expect(output.text()).toEqual("1");

    calc.find("button.plus").simulate("click");

    expect(output.text()).toEqual("1+");

    calc.find("button.one").simulate("click");
    calc.find("button.equals").simulate("click");

    expect(output.text()).toEqual("2");
  });

  test("subtraction", () => {
    const calc = mount(<Calculator />);

    const output = calc.find(".output");

    calc.find("button.one").simulate("click");

    expect(output.text()).toEqual("1");

    calc.find("button.minus").simulate("click");

    expect(output.text()).toEqual("1-");

    calc.find("button.one").simulate("click");
    calc.find("button.equals").simulate("click");

    expect(output.text()).toEqual("0");
  });

  test("division", () => {
    const calc = mount(<Calculator />);

    const output = calc.find(".output");

    calc.find("button.one").simulate("click");
    calc.find("button.zero").simulate("click");

    expect(output.text()).toEqual("10");

    calc.find("button.divided-by").simulate("click");

    expect(output.text()).toEqual("10/");

    calc.find("button.five").simulate("click");
    calc.find("button.equals").simulate("click");

    expect(output.text()).toEqual("2");
  });

  test("multiplication", () => {
    const calc = mount(<Calculator />);

    console.log(toJson(calc));

    const output = calc.find(".output");

    calc.find("button.two").simulate("click");

    expect(output.text()).toEqual("2");

    calc.find("button.multiplied-by").simulate("click");

    expect(output.text()).toEqual("2*");

    calc.find("button.two").simulate("click");
    calc.find("button.equals").simulate("click");

    expect(output.text()).toEqual("4");
  });
});
