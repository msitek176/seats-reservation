import {ActionTypes} from "../constants/action-types";

export const setSeats = (seats) => {
    return {
        type:ActionTypes.SET_SEATS,
        payload: seats,
    };
};

export const selectedSeat = (seatID,seatValue) => {
    return {
        type:ActionTypes.SELECTED_SEAT,
        payload: [seatID,seatValue],
    };
};

export const unselectedSeat = (seat) => {
    return {
        type:ActionTypes.UNSELECTED_SEAT,
        payload: seat,
    };
};
