import { URL_API } from '../../CONSTANTS/db';
import { fetchUser } from '../../db';

import { SETUSER, GETUSER } from '../types';

export const storeUser = (data) => {
      return async (dispatch) => {
            try {
                  const userDb = await fetchUser(data.email);

                  dispatch({ type: SETUSER, payload: userDb.rows._array });
            } catch (error) {
                  console.log('error storeUser', error);
            }
      };
};

export const setUser = (data) => {
      return async (dispatch) => {
            try {
                  const response = await fetch(`${URL_API}users.json`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                              date: new Date().toLocaleString(),
                              user: data,
                        }),
                  });
                  const result = await response.json();

                  dispatch({ type: SETUSER, payload: data });
            } catch (error) {
                  console.log('error setUser', error);
            }
      };
};
export const getUser = (email) => {
      return async (dispatch) => {
            try {
                  const response = await fetch(`${URL_API}/users.json`, {
                        headers: { 'Content-Type': 'application/json' },
                  });
                  const result = await response.json();
                  const users = Object.keys(result).map((key) => {
                        return {
                              ...result[key].patient,
                              id: key,
                        };
                  });
                  const userDb = await fetchUser(email);
                  dispatch({ type: GETUSER, payload: userDb });
            } catch (error) {
                  console.log('error getUser', error);
            }
      };
};
