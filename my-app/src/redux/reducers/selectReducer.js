import {ActionTypes} from "../constants/action-types";

const initialState={
    select:[]
}

export const selectReducer = (state = initialState, {type,payload}) => {
    switch(type){
        case ActionTypes.SELECTED_SEAT:
            return {
                ...state,
                select: [...state.select,payload]
            };
        case ActionTypes.UNSELECTED_SEAT:
            return {
                ...state,
                select: state.select.filter(seat=>seat[0]!==payload)
            };
        default:
            return state;
    }
}