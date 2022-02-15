import * as React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import {
  addItem,
  showItem,
  summaryItems,
} from "../redux/actions/ActionCreator";
import { ShowItems } from "./ShowItems";
import { AddItem } from "./AddItem";
import { SummaryContainer } from "./SummaryContainer";
import { dataText, url } from "../configs/config";
import "../assets/App.css";

const App: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  React.useEffect(() => {
    var xhr = new XMLHttpRequest();
    xhr.open(url.methodGet, url.data, true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        let json = JSON.parse(xhr.responseText);
        let value = json.articles;
        dispatch(showItem(value));
      } else {
        console.error(xhr.statusText);
      }
    };
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null);
  }, [dispatch]);

  const saveFormData = React.useCallback(
    (newData: DataItem) => {
      dispatch(addItem(newData));
      dispatch(summaryItems());
    },
    [dispatch]
  );

  return (
    <main>
      <div className="block-show-summary-container">
        <div className="show-items">
          <h1 className="show-items__title">{dataText.cart}</h1>
          <ShowItems />
        </div>
        <div className="summary-container">
          <SummaryContainer />
        </div>
      </div>
      <AddItem saveFormData={saveFormData} />
    </main>
  );
};

export default App;
