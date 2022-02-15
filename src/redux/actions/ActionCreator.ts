import {
  ADD_ITEM,
  REMOVE_ITEM,
  ADD_QUANTITY_ITEM,
  SHOW_ALL_ITEM,
  DECREASE_QUANTITY_ITEM,
  SUMMARY_ITEM,
  CLEAR_ITEMS,
} from "./ActionTypes";

export const addItem = (payload: DataItem) => ({
  type: ADD_ITEM,
  payload,
});

export const removeItem = (payload: DataItem) => ({
  type: REMOVE_ITEM,
  payload,
});

export const addQuantityItem = (payload: DataItem) => ({
  type: ADD_QUANTITY_ITEM,
  payload,
});

export const decreaseQuantityItem = (payload: DataItem) => ({
  type: DECREASE_QUANTITY_ITEM,
  payload,
});

export const summaryItems = () => ({
  type: SUMMARY_ITEM,
});

export const showItem = (payload: DataItem) => ({
  type: SHOW_ALL_ITEM,
  payload,
});

export const clearItems = () => ({
  type: CLEAR_ITEMS,
});
