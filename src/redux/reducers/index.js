import { combineReducers } from "redux";
import profileView from "./profileReducer";

const rootReducers = combineReducers({
    profileView: profileView,
    // singleproduct: singleProductView,
});
export default rootReducers;
