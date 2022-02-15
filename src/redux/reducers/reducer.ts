import {
  ADD_ITEM,
  ADD_QUANTITY_ITEM,
  REMOVE_ITEM,
  SHOW_ALL_ITEM,
  DECREASE_QUANTITY_ITEM,
  SUMMARY_ITEM,
  CLEAR_ITEMS,
} from "../actions/ActionTypes";
import { v4 as uuidv4 } from "uuid";

const initialState: DataState = {
  items: [],
  summary: 0,
};

const reducer = (
  state: DataState = initialState,
  action: DataAction | any
): DataState => {
  switch (action.type) {
    case ADD_ITEM:
      const newItem: DataItem = {
        id: uuidv4(),
        name: action.payload.name,
        price: +action.payload.price,
        quantity: +action.payload.quantity,
        total: +action.payload.price * +action.payload.quantity,
      };

      return {
        items: [newItem, ...state.items],
        summary: state.summary,
      };

    case ADD_QUANTITY_ITEM:
      const addQuantity: DataItem[] = state.items.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: +item.quantity + 1,
              total: item.price * (item.quantity + 1),
            }
          : item
      );

      return {
        ...state,
        items: addQuantity,
      };

    case DECREASE_QUANTITY_ITEM:
      const decreaseQuantity: DataItem[] = state.items.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: item.quantity !== 1 ? item.quantity - 1 : 1,
              total: item.price * (item.quantity - 1),
            }
          : item
      );
      return {
        ...state,
        items: decreaseQuantity,
      };

    case REMOVE_ITEM:
      const updatedItems: DataItem[] = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        items: updatedItems,
      };

    case SUMMARY_ITEM:
      const updateSummary: number = state.items.reduce(
        (total: number, cartItem: DataItem): number => {
          return cartItem.total + total;
        },
        0
      );

      return {
        ...state,
        summary: updateSummary,
      };

    case CLEAR_ITEMS:
      return {
        ...state,
        items: [],
        summary: 0,
      };

    case SHOW_ALL_ITEM:
      const sum: number = action.payload.reduce(
        (sum: number, person: DataItem) => {
          return sum + person.total;
        },
        0
      );

      return {
        ...state,
        items: action.payload,
        summary: sum,
      };
  }
  return state;
};

export default reducer;
