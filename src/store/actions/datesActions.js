import { URL_API } from '../../CONSTANTS/db';
import { DELDATE, EDITDATE, NEWDATE, ALLDATES } from '../types';
export const newDate = (data) => {
      return async (dispatch) => {
            try {
                  const response = await fetch(`${URL_API}dates.json`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                              date: new Date().toLocaleString(),
                              date: data,
                        }),
                  });
                  const result = await response.json();

                  dispatch({ type: NEWDATE, payload: data });
            } catch (error) {
                  console.log(error);
            }
      };
};
export const getDates = () => {
      return async (dispatch) => {
            try {
                  const response = await fetch(`${URL_API}/dates.json`, {
                        headers: { 'Content-Type': 'application/json' },
                  });
                  const result = await response.json();
                  const dates = Object.keys(result).map((key) => {
                        return {
                              ...result[key].date,
                              id: key,
                        };
                  });

                  dispatch({ type: ALLDATES, payload: dates });
            } catch (error) {
                  console.log(error);
            }
      };
};
export const editDate = (data) => ({
      type: EDITDATE,
      payload: date,
});
export const deleteDate = (data) => ({
      type: DELDATE,
      payload: data,
});
