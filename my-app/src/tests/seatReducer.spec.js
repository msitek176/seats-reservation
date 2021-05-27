import {seatReducer} from '../redux/reducers/seatReducer';
import {ActionTypes} from "../redux/constants/action-types";

describe('seat reducer', () => {
    const initialState = {
        seats:[]
    };
    const seatPayload = {
        "id": "s03",
        "cords": {
        "x": 0,
            "y": 3
        },
        "reserved": false

    };
    it('should handle payload', () => {
        expect(seatReducer(initialState, { type: ActionTypes.SET_SEATS, payload: seatPayload })).toEqual(
            {"seats": {
                "id": "s03",
                "cords": {
                    "x": 0,
                    "y": 3
                },
                "reserved": false

            }}
        );
    });

});