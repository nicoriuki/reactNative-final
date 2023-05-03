import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from '../styles/style';
import { PerfilNavigator, PatientsNavigator, DateNavigator } from './';

const BottomTabs = createBottomTabNavigator();

const TabsNavigator = () => {
      return (
            <BottomTabs.Navigator
                  screenOptions={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarStyle: styles.tabBar,
                  }}
            >
                  <BottomTabs.Screen
                        name="date"
                        component={DateNavigator}
                        options={{
                              tabBarIcon: ({ focused }) => (
                                    <View style={styles.tabBarIcon}>
                                          <Ionicons
                                                name="md-calendar"
                                                size={24}
                                                color={
                                                      focused
                                                            ? '#7F5DF0'
                                                            : '#748C94'
                                                }
                                          />
                                          <Text
                                                style={{
                                                      color: focused
                                                            ? '#7F5DF0'
                                                            : '#748C94',
                                                }}
                                          >
                                                Citas
                                          </Text>
                                    </View>
                              ),
                        }}
                  />
                  <BottomTabs.Screen
                        name="paciente"
                        component={PatientsNavigator}
                        options={{
                              tabBarIcon: ({ focused }) => (
                                    <View style={styles.tabBarIcon}>
                                          <Ionicons
                                                name="ios-people"
                                                size={24}
                                                color={
                                                      focused
                                                            ? '#7F5DF0'
                                                            : '#748C94'
                                                }
                                          />
                                          <Text
                                                style={{
                                                      color: focused
                                                            ? '#7F5DF0'
                                                            : '#748C94',
                                                }}
                                          >
                                                Pacientes
                                          </Text>
                                    </View>
                              ),
                        }}
                  />
                  <BottomTabs.Screen
                        name="Perfil"
                        component={PerfilNavigator}
                        options={{
                              tabBarIcon: ({ focused }) => (
                                    <View style={styles.tabBarIcon}>
                                          <Ionicons
                                                name="ios-camera"
                                                size={24}
                                                color={
                                                      focused
                                                            ? '#7F5DF0'
                                                            : '#748C94'
                                                }
                                          />
                                          <Text
                                                style={{
                                                      color: focused
                                                            ? '#7F5DF0'
                                                            : '#748C94',
                                                }}
                                          >
                                                Perfil
                                          </Text>
                                    </View>
                              ),
                        }}
                  />
            </BottomTabs.Navigator>
      );
};

export default TabsNavigator;
