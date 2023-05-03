import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { AuthNavigator } from './';
import TabsNavigator from './TabsNavigator';

const MainNavigator = () => {
      const isAuth = useSelector((state) => state.auth.userId);
      return (
            <NavigationContainer>
                  {isAuth ? <TabsNavigator /> : <AuthNavigator />}
            </NavigationContainer>
      );
};

export default MainNavigator;
