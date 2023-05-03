const formatEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const formatPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

export const validateInput = (name, value) => {
      let hasError = false;
      let error = '';
      switch (name) {
            case 'email':
                  if (value?.trim() === '') {
                        hasError = true;
                        error = `el ${name} es requerido`;
                  } else if (!formatEmail.test(value)) {
                        hasError = true;
                        error = 'el email no es valido';
                  } else {
                        hasError = false;
                        error = '';
                  }
                  break;
            case 'password':
                  if (value?.trim() === '') {
                        hasError = true;
                        error = `el ${name} es requerido`;
                  } else if (!formatPass.test(value)) {
                        hasError = true;
                        error = `La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.
NO puede tener otros símbolos.`;
                  } else {
                        hasError = false;
                        error = '';
                  }
                  break;
            default:
                  break;
      }
      return { hasError, error };
};
export const UPDATED_FORM = 'UPDATED_FORM';

export const onInputChange = (name, value, dispatch, formState) => {
      const { hasError, error } = validateInput(name, value);
      let isFormValid = true;
      for (const key in formState) {
            const item = formState[key];
            if (key !== name && hasError) {
                  isFormValid = false;
                  break;
            } else if (key !== name && item.hasError) {
                  isFormValid = false;
                  break;
            }
      }

      dispatch({
            type: UPDATED_FORM,
            data: {
                  name,
                  value,
                  hasError,
                  error,
                  touched: false,
                  isFormValid,
            },
      });
};

export const onFocusOut = (name, value, dispatch, formState) => {
      const { hasError, error } = validateInput(name, value);
      let isFormValid = true;
      for (const key in formState) {
            const item = formState[key];
            if (key !== name && hasError) {
                  isFormValid = false;
                  break;
            } else if (key !== name && item.hasError) {
                  isFormValid = false;
                  break;
            }
      }

      dispatch({
            type: UPDATED_FORM,
            data: {
                  name,
                  value,
                  hasError,
                  error,
                  touched: false,
                  isFormValid,
            },
      });
};
