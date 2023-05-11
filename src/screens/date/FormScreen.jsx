import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setName, setUser } from '../../store/actions/dateActions';
import { Button, Card, SelectPatient } from '../../components';

import { styles } from './style';

const FormScreen = ({ navigation }) => {
      const dispatch = useDispatch();
      const user = useSelector((state) => state.user.list[0].email);

      const setNombre = (patient) => {
            dispatch(setUser(user));
            dispatch(setName(patient.nombre));
            dispatch(setEmail(patient.email));
      };

      return (
            <View style={styles.container}>
                  <Card style={styles.inputContainer}>
                        <SelectPatient setNombre={setNombre} />
                  </Card>

                  <View style={styles.buttonsContainer}>
                        <Button
                              onPress={() => navigation.navigate('Select')}
                              title="Buscar Horario"
                        />
                  </View>
            </View>
      );
};

export default FormScreen;
