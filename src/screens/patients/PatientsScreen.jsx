import { View, Button } from 'react-native';
import { styles } from '../../styles/style';
import { useDispatch } from 'react-redux';
import { getPatient } from '../../store/actions/patientsActions';
import { useEffect } from 'react';
import { PatientsList } from '../../components';

const PatientsScreen = ({ navigation }) => {
      const dispatch = useDispatch();

      useEffect(() => {
            dispatch(getPatient());
      }, []);
      return (
            <View style={styles.container}>
                  <View style={styles.botonHome}>
                        <Button
                              title="Agregar paciente"
                              color="black"
                              onPress={() =>
                                    navigation.navigate('nuevoPaciente')
                              }
                        />
                  </View>
                  <PatientsList />
            </View>
      );
};

export default PatientsScreen;
