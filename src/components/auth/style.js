import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
      container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
      },
      label: {
            textAlign: 'center',
            fontSize: 14,
            marginVertical: 5,
            color: '#000000',
      },
      /*  container: {
            flex: 1,
      }, */
      input: {
            marginBottom: 10,
            width: 300,
            height: 40,
            backgroundColor: '#fff',
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 15,
            fontSize: 16,
            shadowColor: 'black',
            shadowOffset: {
                  width: 5,
                  height: 10,
            },
            shadowRadius: 6,
            shadowOpacity: 0.5,
            elevation: 7,
      },
      message: {
            marginVertical: 5,
      },
      helperText: {
            fontSize: 12,

            color: '#ff0000',
      },
});
