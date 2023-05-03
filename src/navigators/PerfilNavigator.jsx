import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '../components';
import { optionHeader } from '../CONSTANTS/options';
import { PerfilScreen } from '../screens';

let options = optionHeader;
const Stack = createNativeStackNavigator();

const PerfilNavigator = () => {
      return (
            <Stack.Navigator initialRouteName="perfil">
                  <Stack.Screen
                        name="perfil"
                        component={PerfilScreen}
                        options={{
                              ...options,
                              headerTitle: (props) => (
                                    <Header {...props} title="Perfil" />
                              ),
                        }}
                  />
            </Stack.Navigator>
      );
};

export default PerfilNavigator;
