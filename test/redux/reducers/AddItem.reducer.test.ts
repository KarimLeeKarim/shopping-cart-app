import { ADD_ITEM } from "../../../src/redux/actions/ActionTypes";
import reducer from "../../../src/redux/reducers/reducer";
import { itemReducerData } from "../../fixtures/Add/AddItemData";


jest.mock('uuid', () => ({ v4: () => 'adfd01fb-309b-4e1c-9117-44d003f5d7fc' }));


describe("item reducer", () => {
  it("item reducer expected state", () => {
    const action = {
      type: ADD_ITEM,
      payload: itemReducerData,
    };

    const updatedState = reducer(undefined, action);

    expect(updatedState.items).toHaveLength(1);
    expect(updatedState.items).toEqual([itemReducerData]);
  });
});
