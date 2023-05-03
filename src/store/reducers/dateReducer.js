import {
      SETEMAILDATE,
      SETNAMEDATE,
      SETTIMEDATE,
      SETIDDATE,
      NODATA,
      SETUSERDATE,
} from '../types';

export const initialState = {
      nombre: '',
      email: '',
      fecha: '',
      id: '',
      user: '',
};

export function dateReducer(state = initialState, action) {
      switch (action.type) {
            case SETNAMEDATE: {
                  return {
                        ...state,
                        nombre: action.payload,
                  };
            }

            case SETEMAILDATE: {
                  return {
                        ...state,
                        email: action.payload,
                  };
            }
            case SETUSERDATE: {
                  return {
                        ...state,
                        user: action.payload,
                  };
            }
            case SETTIMEDATE: {
                  return {
                        ...state,
                        fecha: action.payload,
                  };
            }
            case SETIDDATE: {
                  return {
                        ...state,
                        id: action.payload,
                  };
            }
            case NODATA: {
                  return {
                        state: initialState,
                  };
            }

            default:
                  return state;
      }
}
