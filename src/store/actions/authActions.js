import { URL_AUTH_SIGN_UP, URL_AUTH_SIGN_IN } from '../../CONSTANTS/db';
import { insertUser } from '../../db';
import { LOGOUT, SIGN_UP, SIGN_UP_FAIL, SIGN_UP_START } from '../types';
import { storeUser } from './userActions';

export const signUp = (email, password, nombre, telefono, photo) => {
      return async (dispatch) => {
            try {
                  dispatch({
                        type: SIGN_UP_START,
                  });

                  const response = await fetch(URL_AUTH_SIGN_UP, {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                              email,
                              password,
                              returnSecureToken: true,
                        }),
                  });
                  if (!response.ok) {
                        const errorResData = await response.json();

                        const errorId = errorResData.error.message;
                        let message = 'No se pudo registrar!';

                        if (errorId === 'EMAIL_EXISTS') {
                              message = 'Este email ya existe!';
                        }
                        throw new Error(message);
                  }

                  const dbResult = await insertUser(
                        nombre,
                        email,
                        telefono,
                        photo
                  );

                  let user = {
                        email: email,
                  };
                  await dispatch(storeUser(user));
                  const data = await response.json();

                  dispatch({
                        type: SIGN_UP,
                        token: data.idToken,
                        userId: data.localId,
                  });
            } catch (error) {
                  dispatch({
                        type: SIGN_UP_FAIL,
                  });
                  alert(error);
            }
      };
};

export const signIn = (email, password) => {
      return async (dispatch) => {
            try {
                  dispatch({
                        type: SIGN_UP_START,
                  });
                  /*   console.log(email);
                  let user = {
                        email: email,
                  };
                  dispatch(storeUser(user)); */
                  const response = await fetch(URL_AUTH_SIGN_IN, {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                              email,
                              password,
                              returnSecureToken: true,
                        }),
                  });

                  if (!response.ok) {
                        const errorResData = await response.json();
                        console.log('error', errorResData);
                  }

                  const data = await response.json();

                  dispatch({
                        type: SIGN_UP,
                        token: data.idToken,
                        userId: data.localId,
                  });
            } catch (error) {
                  dispatch({
                        type: SIGN_UP_FAIL,
                  });
                  alert(error);
            }
      };
};
export const logOut = () => ({
      type: LOGOUT,
});
