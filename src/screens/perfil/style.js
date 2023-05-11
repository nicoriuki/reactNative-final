import { StyleSheet } from 'react-native';
import colors from '../../CONSTANTS/colors';

export const styles = StyleSheet.create({
      containerPatientScreen: {
            flex: 1,
            margin: 30,
      },
      label: {
            fontSize: 18,
            marginBottom: 16,
      },
      input: {
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            marginBottom: 16,
            paddingHorizontal: 2,
            paddingVertical: 4,
      },
      image: {
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: 'blue',
      },
      screen: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
      },
      title: {
            fontSize: 24,
            marginBottom: 12,
            textAlign: 'center',
      },
      container: {
            width: '80%',
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
      /* label: {
            fontSize: 16,
      }, */
      textInput: {
            width: '100%',
            height: 40,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            marginBottom: 12,
      },
      loginButton: {
            width: '100%',
            justifyContent: 'center',
            height: 40,
            backgroundColor: colors.primary,
            marginVertical: 12,
      },
      loginButtonText: {
            fontSize: 18,
            textAlign: 'center',
            color: '#fff',
      },
      prompt: {
            alignItems: 'center',
      },
      promptMessage: {
            fontSize: 16,
            color: '#333',
      },
      promptButton: {
            fontSize: 16,
            color: colors.primary,
      },
      button: {
            backgroundColor: colors.primary,
            marginVertical: 20,
      },
      inputR: {
            borderBottomColor: '#726E97',
            width: '100%',
            marginBottom: 10,
      },
});
