import {ActionTypes} from "../constants/action-types";

const initialState={
    seats:[]
}

export const seatReducer = (state = initialState, {type,payload}) => {
    switch(type){
        case ActionTypes.SET_SEATS:
            return {...state, seats: payload};
        default:
            return state;
    }    
}