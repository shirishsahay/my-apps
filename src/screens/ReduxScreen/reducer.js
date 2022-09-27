import { DECREMENT, INCREMENT } from "../../redux/actionTypes";

const INITIAL_STATE = {
  value: 0,
};

export const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: action.payload, //state.value +
      };

    case DECREMENT:
      return {
        ...state,
        value: action.payload,
      };

    default:
      return state;
  }
};
