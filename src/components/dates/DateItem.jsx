import { Text, View } from 'react-native';
import { styles } from './style';
const Item = ({ itemData }) => {
      return (
            <View style={styles.itemContainer}>
                  <Text style={styles.item}>
                        {`${itemData.item.nombre} \n ${itemData.item.fecha}`}
                  </Text>
            </View>
      );
};

export default Item;
