import { Ionicons } from '@expo/vector-icons';
import { styles } from '../../styles/style';
import { Image, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { logOut } from './../../store/actions/authActions';
const Header = ({ title }) => {
      const dispatch = useDispatch();

      const logOutUser = async () => {
            dispatch(logOut());
      };
      return (
            <View style={styles.containerHeader}>
                  <Text style={styles.textHeader}>{title}</Text>
                  <Image
                        style={styles.imageHeader}
                        source={require('../../../assets/agenda.png')}
                  />
                  <View style={styles.logout}>
                        <Ionicons
                              name="md-create"
                              style={styles.imageLogOut}
                              size={24}
                              color={'white'}
                              onPress={() => logOutUser()}
                        />
                  </View>
            </View>
      );
};

export default Header;
