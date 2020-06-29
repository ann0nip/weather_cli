import React from "react";
import { shallow } from "enzyme";

import App from "../App";
import WeatherCard from "../components/WeatherCard";
import Typography from "@material-ui/core/Typography";
import ButtonComponent from "../components/ButtonComponent";
import renderer from "react-test-renderer";

describe("<App />", () => {
  it("renders <WeatherCard /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(WeatherCard)).toHaveLength(1);

    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the title", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Typography)).toHaveLength(1);
    wrapper.find(Typography).text("Weather App");
  });

  it("renders <ButtonComponent /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ButtonComponent)).toHaveLength(1);
    wrapper.find(ButtonComponent).text("add city");

    const tree = renderer.create(<ButtonComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("click in 'add city' should add a new <WeatherCard /> ", () => {
    const wrapper = shallow(<App />);
    const addCity = wrapper.find(ButtonComponent);

    addCity.simulate("click");
    expect(wrapper.find(WeatherCard)).toHaveLength(2);
  });
});
