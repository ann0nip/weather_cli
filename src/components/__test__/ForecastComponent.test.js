import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { data } from "./ForecastComponent.mock";
import ForecastComponent from "../ForecastComponent";

import { CardMedia, ListItemText } from "@material-ui/core";

describe("<ForecastComponent />", () => {
  it("render <ForecastComponent /> component", () => {
    const tree = renderer.create(<ForecastComponent data={data} />).toJSON();
    expect(tree).toMatchSnapshot();

    const wrapper = shallow(<ForecastComponent data={data} />);
    wrapper.find(ListItemText).forEach((item) => {
      expect(item.prop("primary")).toBeDefined();
    });
    expect(wrapper.find(CardMedia)).toHaveLength(1);
  });
});
