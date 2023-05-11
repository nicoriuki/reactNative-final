import SelectDropdown from 'react-native-select-dropdown';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPatient } from './../../store/actions/patientsActions';
import { styles } from './style';

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

export default SelectPatient;
