import thunkMiddleWare from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/index";

const loggerMiddleWare = createLogger();
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));
