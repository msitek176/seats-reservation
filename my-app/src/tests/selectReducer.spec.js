import {selectReducer} from '../redux/reducers/selectReducer';
import {ActionTypes} from "../redux/constants/action-types";

describe('selectReducer', () => {
    const initialState = {
        select:[]
    };
    const initialState2 = {
        select:[["s02", "rząd x1, miejsce y3"]]
    };
    const seatPayload = [
        "s02", "rząd x1, miejsce y3"
    ];
    const seatId = "s02"
    it('select seat', () => {
        expect(selectReducer(initialState, { type: ActionTypes.SELECTED_SEAT, payload: seatPayload })).toEqual(
            {"select": [["s02", "rząd x1, miejsce y3"]]}
        );
    });

    it('unselect seat', () => {
        expect(selectReducer(initialState2, { type: ActionTypes.UNSELECTED_SEAT, payload: seatId })).toEqual(
            {"select": []}

        );
    });

});