import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Typography from "@material-ui/core/Typography";
import { data } from "./WeatherDetails.mock";
import WeatherDetails from "../WeatherDetails";

describe("<WeatherDetails />", () => {
  it("render <WeatherDetails /> component", () => {
    const tree = renderer.create(<WeatherDetails data={data} />).toJSON();
    expect(tree).toMatchSnapshot();

    const wrapper = shallow(<WeatherDetails data={data} />);
    wrapper.find(Typography).first().text(data.city);

    // TODO: Separate in a small component the Forecast section
  });
});
