import { DELDATE, EDITDATE, NEWDATE, ALLDATES } from '../types';

export const initialState = {
      list: [],
};

export function datesReducer(state = initialState, action) {
      switch (action.type) {
            case NEWDATE: {
                  return [...state, action.payload];
            }
            case ALLDATES: {
                  return {
                        ...state,
                        list: action.payload,
                  };
            }

            case EDITDATE: {
                  return {};
            }
            case DELDATE: {
                  return {};
            }

            default:
                  return state;
      }
}
