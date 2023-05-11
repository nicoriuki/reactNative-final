import { View, Text, ScrollView, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './style';

const PerfilScreen = () => {
      const user = useSelector((state) => state.user.list);
      return (
            <ScrollView>
                  <View style={styles.container}>
                        <Text style={styles.label}>{user[0].nombre}</Text>
                        <Text style={styles.label}>{user[0].email}</Text>
                        <Text style={styles.label}>{user[0].telefono}</Text>
                        <Image
                              style={styles.image}
                              source={{ uri: user[0].photo }}
                        />
                  </View>
            </ScrollView>
      );
};

export default PerfilScreen;
