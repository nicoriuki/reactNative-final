import SelectDropdown from 'react-native-select-dropdown';
import React, { useEffect } from 'react';
/* import { styles } from '../../styles/style'; */
import { useDispatch, useSelector } from 'react-redux';
import { getPatient } from './../../store/actions/patientsActions';
import { StyleSheet } from 'react-native';

function SelectPatient({ setNombre }) {
      const dispatch = useDispatch();
      const patients = useSelector((state) => state.patients.list);
      const user = useSelector((state) => state.user.list[0].email);
      const patientsDates = patients.filter((patient) => patient.user === user);
      useEffect(() => {
            dispatch(getPatient());
      }, []);
      return (
            <SelectDropdown
                  data={patientsDates}
                  onSelect={(selectedItem) => {
                        setNombre(selectedItem);
                  }}
                  defaultButtonText={'Elegir Paciente'}
                  buttonTextAfterSelection={(selectedItem) => {
                        return selectedItem.nombre;
                  }}
                  rowTextForSelection={(item) => {
                        return item.nombre;
                  }}
                  buttonStyle={styles.buttonSelectDropdown}
                  buttonTextStyle={styles.buttonTextSelectDropdown}
                  dropdownIconPosition={'right'}
                  dropdownStyle={styles.DropdownStyle}
                  rowStyle={styles.RowStyleDropdown}
                  rowTextStyle={styles.RowTxtStyleDropdown}
            />
      );
}
const styles = StyleSheet.create({
      buttonSelectDropdown: {
            width: '80%',
            height: 50,
            backgroundColor: '#444',
            borderRadius: 8,
      },
      buttonTextSelectDropdown: {
            color: '#FFF',
            textAlign: 'center',
            fontWeight: 'bold',
      },
      DropdownStyle: {
            backgroundColor: '#444',
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
      },
      RowStyleDropdown: {
            backgroundColor: '#444',
            borderBottomColor: '#C5C5C5',
      },
      RowTxtStyleDropdown: {
            color: '#FFF',
            textAlign: 'center',
            fontWeight: 'bold',
      },
});
export default SelectPatient;
