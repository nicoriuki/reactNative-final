import { StyleSheet } from 'react-native';
import colors from '../../CONSTANTS/colors';

export const styles = StyleSheet.create({
      screen: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
      },
      title: {
            fontSize: 24,
            fontFamily: 'open-sans-bold',
            marginBottom: 12,
            textAlign: 'center',
      },
      container: {
            width: '95%',
            maxWidth: 400,
            padding: 12,
            margin: 12,
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: '#fff',
      },
      form: {
            width: '100%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
      },
      label: {
            fontSize: 16,
            fontFamily: 'open-sans-bold',
      },
      textInput: {
            width: '100%',
            height: 40,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            marginBottom: 12,
      },
      image: {
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: 'blue',
      },
      loginButton: {
            width: '100%',
            justifyContent: 'center',
            height: 40,
            backgroundColor: colors.primary,
            marginVertical: 12,
      },

      buttonConteinr: {
            marginTop: 12,
            marginBottom: 12,
      },
      prompt: {
            alignItems: 'center',
      },
      promptMessage: {
            fontSize: 16,
            fontFamily: 'open-sans',
            color: '#333',
      },
      promptButton: {
            fontSize: 16,
            fontFamily: 'open-sans-bold',
            color: colors.primary,
      },
      button: {
            backgroundColor: colors.primary,
            marginVertical: 20,
      },
      inputR: {
            borderBottomColor: '#726E97',
            fontSize: 20,
            width: '100%',
            fontFamily: 'AbrilFatface',
            marginBottom: 10,
      },
});
