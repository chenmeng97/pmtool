import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
    user: {},
    validToken: false,
};

const booleanActionPayload = (payload) => {
    return payload !== null;
}

export default function(state = initialState, action){
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                ...state,
                validToken: booleanActionPayload(action.payload),
                user: action.payload,
            };
        default:
            return state;
    }
}