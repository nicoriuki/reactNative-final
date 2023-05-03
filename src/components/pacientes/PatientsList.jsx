import { FlatList } from 'react-native';
import Item from './Patient';
import { useSelector } from 'react-redux';

const PatientsList = () => {
      const patients = useSelector((state) => state.patients.list);
      const user = useSelector((state) => state.user.list[0].email);
      const patientsDates = patients.filter((patient) => patient.user === user);

      return (
            <FlatList
                  data={patientsDates}
                  renderItem={(itemData) => {
                        return <Item itemData={itemData} />;
                  }}
                  keyExtractor={(item) => item.id.toString()}
            />
      );
};

export default PatientsList;
