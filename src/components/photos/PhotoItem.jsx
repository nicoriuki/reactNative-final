import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './style';
const PhotoItem = ({ title, image }) => {
      return (
            <TouchableOpacity style={styles.placeItem}>
                  <Image style={styles.image} source={{ uri: image }} />
                  <View style={styles.info}>
                        <Text style={styles.title}>{title}</Text>
                  </View>
            </TouchableOpacity>
      );
};

export default PhotoItem;
