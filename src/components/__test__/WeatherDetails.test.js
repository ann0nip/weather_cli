import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { data } from "./WeatherDetails.mock";
import WeatherDetails from "../WeatherDetails";
import CurrentComponent from "../CurrentComponent";
import ForecastComponent from "../ForecastComponent";

describe("<WeatherDetails />", () => {
  it("render <WeatherDetails /> component", () => {
    const tree = renderer.create(<WeatherDetails data={data} />).toJSON();
    expect(tree).toMatchSnapshot();

    const wrapper = shallow(<WeatherDetails data={data} />);
    expect(wrapper.find(CurrentComponent)).toHaveLength(1);
    expect(wrapper.find(ForecastComponent)).toHaveLength(5);
  });
});
