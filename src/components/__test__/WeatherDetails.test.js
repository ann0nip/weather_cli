import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import { data } from "./WeatherDetails.mock";

import WeatherDetails from "../WeatherDetails";

describe("<WeatherDetails />", () => {
  it("render <WeatherDetails /> component", () => {
    const tree = renderer.create(<WeatherDetails data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
