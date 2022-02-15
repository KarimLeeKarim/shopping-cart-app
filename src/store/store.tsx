import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import ReduxThunk from "redux-thunk";
import reducer from "../redux/reducers/reducer";

const store: Store<DataState, DataAction> = createStore(reducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

export default store;
