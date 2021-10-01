import {
  ADD_ITEM,
  ALL_ITEMS,
  DELETE_ITEM,
  DRAGGBLE_ITEMS,
  FILTER_ITEMS,
  REDACT_ITEM,
} from "../types/types";

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case ALL_ITEMS:
      return action.payload;

    case DRAGGBLE_ITEMS:
      return action.payload;

    case ADD_ITEM:
      return [
        ...state,
        {
          ...action.payload,
          order: state[state.length - 1].order + 1,
        },
      ];

    case DELETE_ITEM:
      return state.filter((el) => el.id !== action.payload);

    case REDACT_ITEM:
      return state.map((el) => {
        if (el.id === action.payload.id) {
          return {
            ...state,
            ...action.payload,
          };
        }
        return el;
      });

    case FILTER_ITEMS:
      return state.filter((el) => el.marker === Number(action.payload));

    default:
      return state;
  }
};

export default itemsReducer;
