import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
      container: {
            marginBottom: 10,
      },
      preview: {
            width: '100%',
            height: 100,
            marginBottom: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'pink',
            borderWith: 1,
      },
      image: {
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: 'blue',
      },
      placeItem: {
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingVertical: 16,
            paddingHorizontal: 30,
            flexDirection: 'row',
            alignItems: 'center',
      },

      info: {
            marginLeft: 25,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
      },
      title: {
            color: 'red',
            fontSize: 18,
            marginBottom: 6,
      },
      address: {
            color: '#777',
            fontSize: 16,
      },
});
