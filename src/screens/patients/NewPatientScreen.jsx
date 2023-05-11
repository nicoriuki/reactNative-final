import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Button, InputAuth } from './../../components';
import { useReducer } from 'react';
import { getPatient, setPatients } from '../../store/actions/patientsActions';
import { UPDATED_FORM, onFocusOut, onInputChange } from '../../utils/form';
import { styles } from './style';

const initialState = {
      email: { value: '', error: '', touched: false, hasError: true },
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

const NewPatientScreen = ({ navigation }) => {
      const dispatch = useDispatch();
      const user = useSelector((state) => state.user.list[0].email);
      const [formState, dispatchFormState] = useReducer(
            formReducer,
            initialState
      );

      const confirmedPatient = () => {
            let patient = {
                  nombre: formState.nombre.value,
                  email: formState.email.value,
                  telefono: formState.telefono.value,
                  user: user,
            };
            dispatch(setPatients(patient));
            dispatch(getPatient());
            navigation.navigate('Pacientes');
      };
      const onHandleChange = (value, type) => {
            onInputChange(type, value, dispatchFormState, formState);
      };
      /*   const onHandleBlur = (value, type) => {
            onFocusOut(type, value, dispatchFormState, formState);
      }; */
      return (
            <ScrollView>
                  <KeyboardAvoidingView
                        style={styles.screen}
                        behavior="padding"
                  >
                        <View style={styles.container}>
                              <Text style={styles.title}>AGREGAR PACIENTE</Text>
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
                                          /*  onBlur={(e) =>
                                                onHandleBlur(
                                                      e.target
                                                            ._internalFiberInstanceHandleDEV
                                                            .memoizedProps
                                                            .value,
                                                      'email'
                                                )
                                          } */
                                          hasError={formState.email.hasError}
                                          error={formState.email.error}
                                          touched={formState.email.touched}
                                    />
                                    <InputAuth
                                          label="Nombre"
                                          placeholderTextColor={'#726E97'}
                                          value={formState.nombre.value}
                                          placeholder="ingrese su nombre"
                                          autoCapitalize="none"
                                          autoCorrect={false}
                                          onChangeText={(text) =>
                                                onHandleChange(text, 'nombre')
                                          }
                                          /* onBlur={(e) =>
                                                onHandleBlur(
                                                      e.target
                                                            ._internalFiberInstanceHandleDEV
                                                            .memoizedProps
                                                            .value,
                                                      'nombre'
                                                )
                                          } */
                                          hasError={formState.nombre.hasError}
                                          error={formState.nombre.error}
                                          touched={formState.nombre.touched}
                                    />
                                    <InputAuth
                                          label="Telefono"
                                          placeholderTextColor={'#726E97'}
                                          value={formState.telefono.value}
                                          placeholder="ingrese su telefono"
                                          autoCapitalize="none"
                                          keyboardType="phone-pad"
                                          autoCorrect={false}
                                          onChangeText={(text) =>
                                                onHandleChange(text, 'telefono')
                                          }
                                          /*       onBlur={(e) =>
                                                onHandleBlur(
                                                      e.target
                                                            ._internalFiberInstanceHandleDEV
                                                            .memoizedProps
                                                            .value,
                                                      'telefono'
                                                )
                                          } */
                                          hasError={formState.telefono.hasError}
                                          error={formState.telefono.error}
                                          touched={formState.telefono.touched}
                                    />
                                    <View style={styles.buttonsContainer}>
                                          <Button
                                                title="Aceptar"
                                                onPress={() =>
                                                      confirmedPatient()
                                                }
                                          />
                                    </View>
                              </View>
                        </View>
                  </KeyboardAvoidingView>
            </ScrollView>
      );
};
export default NewPatientScreen;
