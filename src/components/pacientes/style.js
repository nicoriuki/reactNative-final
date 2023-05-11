import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
      itemContainer: {
            borderWidth: 1,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            margin: 12,
            padding: 15,
            borderRadius: 10,
            backgroundColor: '#DAD3D3',
            shadowColor: 'black',
            shadowOffset: {
                  width: 5,
                  height: 10,
            },
            shadowRadius: 6,
            shadowOpacity: 0.5,
            elevation: 7,
      },

      item: {
            fontFamily: 'open-sans-bold',
            padding: 5,
            textAlign: 'center',
      },
      cardContainer: {
            marginTop: 10,
            marginBottom: 5,
            shadowColor: 'black',
            shadowOffset: {
                  width: 5,
                  height: 10,
            },
            shadowRadius: 6,
            shadowOpacity: 0.5,
            elevation: 7,
            borderRadius: 13,
            backgroundColor: 'white',
      },
});
