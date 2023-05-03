import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthScreen } from '../screens';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
      return (
            <Stack.Navigator
                  initialRouteName="Register"
                  screenOptions={{
                        headerShown: false,
                  }}
            >
                  <Stack.Screen name="Register" component={AuthScreen} />
            </Stack.Navigator>
      );
};

export default AuthNavigator;
