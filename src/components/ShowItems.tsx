import * as React from "react";
import { Dispatch } from "redux";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  addQuantityItem,
  decreaseQuantityItem,
  removeItem,
  summaryItems,
} from "../redux/actions/ActionCreator";
import { v4 as uuidv4 } from "uuid";
import { dataText } from "../configs/config";

export const ShowItems: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const items = useSelector((state: DataState) => {
    return state?.items;
  }, shallowEqual);

  const deleteItem = (item: DataItem) => {
    dispatch(removeItem(item));
    dispatch(summaryItems());
  };

  const addQuantity = (plusQuantityItem: DataItem) => {
    dispatch(addQuantityItem(plusQuantityItem));
    dispatch(summaryItems());
  };

  const decreaseQuantity = (minusQuantityItem: DataItem) => {
    dispatch(decreaseQuantityItem(minusQuantityItem));
    dispatch(summaryItems());
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th colSpan={1} className="thead-name">
              {dataText.name}
            </th>
            <th className="thead-price">{dataText.price}</th>
            <th className="thead-quantity">{dataText.quantity}</th>
            <th className="thead-quantity">{dataText.total}</th>
            <th className="thead-remove">{dataText.remove}</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item: DataItem) => (
            <tr key={uuidv4()}>
              <td className="tbody-name">{item.name}</td>
              <td className="tbody-price">{item.price} $</td>
              <td className="tbody-quantity">
                <button
                  className="tbody-plus"
                  onClick={() => addQuantity(item)}
                >
                  {dataText.plus}
                </button>
                <p>{item.quantity}</p>
                <button
                  className="tbody-minus"
                  onClick={() => decreaseQuantity(item)}
                  disabled={item.quantity === 1 ? true : false}
                  style={{
                    background: item.quantity === 1 ? "#f8864d" : "#fb5301",
                  }}
                >
                  {dataText.minus}
                </button>
              </td>
              <td className="tbody-total">{item.total} $</td>
              <td>
                <button
                  className="tbody-remove"
                  onClick={() => deleteItem(item)}
                >
                  {dataText.delete}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
