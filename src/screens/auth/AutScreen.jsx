import {
      Text,
      View,
      KeyboardAvoidingView,
      TouchableOpacity,
      ScrollView,
} from 'react-native';
import { useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signUp } from '../../store/actions/authActions';
import { UPDATED_FORM, onFocusOut, onInputChange } from '../../utils/form';
import { Button, InputAuth, PhotoSelector } from '../../components';
import { styles } from './style';
import { storeUser } from '../../store/actions/userActions';

const initialState = {
      email: { value: '', error: '', touched: false, hasError: true },
      password: { value: '', error: '', touched: false, hasError: true },
      nombre: { value: '', error: '', touched: false, hasError: true },
      telefono: { value: '', error: '', touched: false, hasError: true },
      isFormValid: false,
};

const formReducer = (state, action) => {
      switch (action.type) {
            case UPDATED_FORM:
                  const { name, value, hasError, error, touched, isFormValid } =
                        action.data;
                  return {
                        ...state,
                        [name]: {
                              ...state[name],
                              value,
                              hasError,
                              error,
                              touched,
                        },
                        isFormValid,
                  };
            default:
                  return state;
      }
};

const AuthScreen = () => {
      const dispatch = useDispatch();
      const isAuthLoading = useSelector((state) => state.auth.isLoading);
      const [imageValue, setImageValue] = useState('');
      const [loginScreen, setLoginScreen] = useState(false);
      const [formState, dispatchFormState] = useReducer(
            formReducer,
            initialState
      );
      const title = !loginScreen ? 'Registro' : 'Login';
      const mensage = !loginScreen
            ? '¿Ya tienes una cuenta?'
            : '¿No tienes una cuenta?';
      const mensageAction = loginScreen ? 'Inciar Sesion' : 'Registrase';

      const register = () => {
            dispatch(
                  signUp(
                        formState.email.value,
                        formState.password.value,
                        formState.nombre.value,
                        formState.telefono.value,
                        imageValue
                  )
            );
      };
      const login = () => {
            let user = {
                  email: formState.email.value,
            };
            dispatch(storeUser(user));
            dispatch(signIn(formState.email.value, formState.password.value));
      };
      const onHandleRegister = () => {
            !loginScreen ? register() : login();
      };

      const onHandleScreen = () => {
            !loginScreen ? setLoginScreen(true) : setLoginScreen(false);
      };

      const onHandleChange = (value, type) => {
            onInputChange(type, value, dispatchFormState, formState);
      };
      const onHandleBlur = (value, type) => {
            onFocusOut(type, value, dispatchFormState, formState);
      };
      return (
            <ScrollView>
                  <KeyboardAvoidingView
                        style={styles.screen}
                        behavior="padding"
                  >
                        <View style={styles.container}>
                              <Text style={styles.title}>{title}</Text>
                              <View style={styles.form}>
                                    <InputAuth
                                          style={styles.inputR}
                                          label="Email"
                                          placeholder="ingrese su email"
                                          value={formState.email.value}
                                          placeholderTextColor={'#726E97'}
                                          keyboardType="email-address"
                                          autoCapitalize="none"
                                          autoCorrect={false}
                                          onChangeText={(text) =>
                                                onHandleChange(text, 'email')
                                          }
                                          onBlur={(e) =>
                                                onHandleBlur(
                                                      e.target
                                                            ._internalFiberInstanceHandleDEV
                                                            .memoizedProps
                                                            .value,
                                                      'email'
                                                )
                                          }
                                          hasError={formState.email.hasError}
                                          error={formState.email.error}
                                          touched={formState.email.touched}
                                    />
                                    <InputAuth
                                          style={styles.inputR}
                                          label="Password"
                                          placeholderTextColor={'#726E97'}
                                          value={formState.password.value}
                                          placeholder="ingrese su contraseña"
                                          secureTextEntry={true}
                                          autoCapitalize="none"
                                          autoCorrect={false}
                                          onChangeText={(text) =>
                                                onHandleChange(text, 'password')
                                          }
                                          onBlur={(e) =>
                                                onHandleBlur(
                                                      e.target
                                                            ._internalFiberInstanceHandleDEV
                                                            .memoizedProps
                                                            .value,
                                                      'password'
                                                )
                                          }
                                          hasError={formState.password.hasError}
                                          error={formState.password.error}
                                          touched={formState.password.touched}
                                    />
                                    {!loginScreen && (
                                          <InputAuth
                                                style={styles.inputR}
                                                label="Nombre"
                                                placeholderTextColor={'#726E97'}
                                                value={formState.nombre.value}
                                                placeholder="ingrese su nombre"
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                onChangeText={(text) =>
                                                      onHandleChange(
                                                            text,
                                                            'nombre'
                                                      )
                                                }
                                                onBlur={(e) =>
                                                      onHandleBlur(
                                                            e.target
                                                                  ._internalFiberInstanceHandleDEV
                                                                  .memoizedProps
                                                                  .value,
                                                            'nombre'
                                                      )
                                                }
                                                hasError={
                                                      formState.nombre.hasError
                                                }
                                                error={formState.nombre.error}
                                                touched={
                                                      formState.nombre.touched
                                                }
                                          />
                                    )}
                                    {!loginScreen && (
                                          <InputAuth
                                                style={styles.inputR}
                                                label="Telefono"
                                                placeholderTextColor={'#726E97'}
                                                value={formState.telefono.value}
                                                placeholder="ingrese su telefono"
                                                autoCapitalize="none"
                                                keyboardType="phone-pad"
                                                autoCorrect={false}
                                                onChangeText={(text) =>
                                                      onHandleChange(
                                                            text,
                                                            'telefono'
                                                      )
                                                }
                                                onBlur={(e) =>
                                                      onHandleBlur(
                                                            e.target
                                                                  ._internalFiberInstanceHandleDEV
                                                                  .memoizedProps
                                                                  .value,
                                                            'telefono'
                                                      )
                                                }
                                                hasError={
                                                      formState.telefono
                                                            .hasError
                                                }
                                                error={formState.telefono.error}
                                                touched={
                                                      formState.telefono.touched
                                                }
                                          />
                                    )}

                                    {!loginScreen && (
                                          <PhotoSelector
                                                onImage={(image) =>
                                                      setImageValue(image)
                                                }
                                          />
                                    )}
                                    <View style={styles.buttonConteinr}>
                                          <Button
                                                title={
                                                      isAuthLoading
                                                            ? 'Loading...'
                                                            : mensageAction
                                                }
                                                onPress={() =>
                                                      onHandleRegister()
                                                }
                                          />
                                    </View>
                              </View>
                              <View style={styles.prompt}>
                                    <Text style={styles.promptMessage}>
                                          {mensage}
                                    </Text>
                                    <TouchableOpacity onPress={onHandleScreen}>
                                          <Text style={styles.promptButton}>
                                                {loginScreen
                                                      ? 'Registrarse'
                                                      : 'Iniciar sesión?'}
                                          </Text>
                                    </TouchableOpacity>
                              </View>
                        </View>
                  </KeyboardAvoidingView>
            </ScrollView>
      );
};

export default AuthScreen;
