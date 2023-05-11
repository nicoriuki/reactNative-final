import { View, Button } from 'react-native';
import { styles } from './style';
import { List } from '../../components';
const Home = ({ navigation }) => {
      return (
            <View style={styles.container}>
                  <View style={styles.botonHome}>
                        <Button
                              title="Agendar Cita"
                              color="black"
                              onPress={() => navigation.navigate('Form')}
                        />
                  </View>

                  <List />
            </View>
      );
};

export default Home;
