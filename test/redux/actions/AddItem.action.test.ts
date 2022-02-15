import configureStore from "redux-mock-store";
import { addItem } from "../../../src/redux/actions/ActionCreator";
import { ADD_ITEM } from "../../../src/redux/actions/ActionTypes";
import { itemAddResponse, itemReducerData } from "../../fixtures/Add/AddItemData";

describe("add user redux", () => {
  const mockStore = configureStore();
  const reduxStore = mockStore();

  beforeEach(() => {
    reduxStore.clearActions();
  });

  describe("add user action", () => {
    it("should dispatch the addItem action", () => {
      const expectedAction = [
        {
          type: ADD_ITEM,
          payload: itemAddResponse,
        },
      ];

      reduxStore.dispatch(addItem(itemReducerData));

      expect(reduxStore.getActions()).toEqual(expectedAction);
    });
  });
});
