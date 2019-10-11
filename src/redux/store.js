import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import errorHandler from "./middlewares/errorHandler";

const store = createStore(rootReducer, applyMiddleware(errorHandler));

export default store;
