import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { clearItems } from "../redux/actions/ActionCreator";
import { v4 as uuidv4 } from "uuid";
import { dataText } from "../configs/config";

export const SummaryContainer: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const items = useSelector((state: DataState) => {
    return state?.items;
  }, shallowEqual);

  const summary = useSelector((state: any) => {
    return state.summary;
  }, shallowEqual);

  const clicked = () => {
    dispatch(clearItems());
  };

  return (
    <>
      <div className="block">
        <h1 className="summary-container__title">{dataText.summary}</h1>
        <div className="summary-container__subtitle">
          <div className="summary-container__subtitle__count">
            <p>{dataText.countProduct}</p>
            <p>{items.length}</p>
          </div>
          <div className="summary-container__subtitle__total">
            <p> {dataText.totalProduct}</p> <p>{summary} $</p>
          </div>
          <hr></hr>
        </div>
      </div>
      <button className="summary-container__checkout-btn" onClick={clicked}>
        {dataText.checkout}
      </button>
    </>
  );
};
