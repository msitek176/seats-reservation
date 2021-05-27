import {combineReducers} from "redux";
import {seatReducer} from "./seatReducer";
import {selectReducer} from "./selectReducer";

const reducers = combineReducers({
    allSeats: seatReducer,
    allSelected: selectReducer,
});

export default reducers;