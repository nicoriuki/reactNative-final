import { URL_API } from '../../CONSTANTS/db';

import {
      ALLPATIENTS,
      SETPATIENT,
      EDITPATIENT,
      DELPATIENT,
} from '../types';

export const getAllPatients = (data) => ({
      type: ALLPATIENTS,
      payload: data,
});
export const setPatients = (data) => {
      return async (dispatch) => {
            try {
                  const response = await fetch(`${URL_API}patients.json`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                              date: new Date().toLocaleString(),
                              patient: data,
                        }),
                  });
                  const result = await response.json();

                  dispatch({ type: SETPATIENT, payload: data });
            } catch (error) {
                  console.log(error);
            }
      };
};
export const getPatient = () => {
      return async (dispatch) => {
            try {
                  const response = await fetch(`${URL_API}/patients.json`, {
                        headers: { 'Content-Type': 'application/json' },
                  });
                  const result = await response.json();
                  const patients = Object.keys(result).map((key) => {
                        return {
                              ...result[key].patient,
                              id: key,
                
                        };
                  });
                  dispatch({ type: ALLPATIENTS, payload: patients });
            } catch (error) {
                  console.log(error);
            }
      };
};
export const editPatient = (data) => ({
      type: EDITPATIENT,
      payload: data,
});
export const delPatient = (id) => ({
      type: DELPATIENT,
      payload: id,
});
