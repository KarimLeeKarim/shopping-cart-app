/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { InputContainer } from "../../../src/components/InputContainer";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { render, ShallowWrapper } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { mount, shallow } from "../../setup/test-setup";

const mockfn = jest.fn();

describe("<AddItem/>", () => {
  let wrapper: any;

  const props: any = {
    formData: mockfn,
    handleInputData: mockfn,
    addNewItem: mockfn,
  };

  beforeEach(() => {
    wrapper = shallow(<InputContainer {...props} />);
  });

  it("should match the snapshot", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  describe("define fields", () => {
    it("reder product name", () => {
      const productName = wrapper.find("input[id='name']");

      expect(productName.prop("type")).toBe("text");
      expect(productName.prop("id")).toBe("name");
      expect(productName.prop("placeholder")).toBe("Name");
      productName.simulate("change");
    });

    it("reder product price", () => {
      const productName = wrapper.find("input[id='price']");

      expect(productName.prop("type")).toBe("number");
      expect(productName.prop("id")).toBe("price");
      expect(productName.prop("placeholder")).toBe("Price");
      productName.simulate("change");
    });
    it("reder product quantity", () => {
      const productName = wrapper.find("input[id='quantity']");

      expect(productName.prop("type")).toBe("number");
      expect(productName.prop("id")).toBe("quantity");
      expect(productName.prop("placeholder")).toBe("Quantity");
      productName.simulate("change");
    });
    it("render product submit button", () => {
      const btn =wrapper.find("button").at(0);
      expect(btn.prop('type')).toBe('submit');
      expect(btn.text()).toEqual('Add item');
    });
  });
});
