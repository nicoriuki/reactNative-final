import {
      SETEMAILDATE,
      SETNAMEDATE,
      SETTIMEDATE,
      SETIDDATE,
      NODATA,
      SETUSERDATE,
} from './../types/index';

export const setUser = (data) => ({
      type: SETUSERDATE,
      payload: data,
});
export const setName = (data) => ({
      type: SETNAMEDATE,
      payload: data,
});
export const setEmail = (data) => ({
      type: SETEMAILDATE,
      payload: data,
});
export const setTime = (data) => ({
      type: SETTIMEDATE,
      payload: data,
});
export const setId = (data) => ({
      type: SETIDDATE,
      payload: data,
});
export const delDate = () => ({
      type: NODATA,
});
