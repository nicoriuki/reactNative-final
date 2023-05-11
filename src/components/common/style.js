import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
      inputForm: {
            height: 30,
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            marginVertical: 10,
      },
      containerHeader: {
            width: '100%',
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'black',
            alignItems: 'center',
            justifyContent: 'flex-start',
      },
      textHeader: {
            fontFamily: 'AbrilFatface',
            fontSize: 25,
            color: 'white',
      },
      imageHeader: {
            width: 40,
            height: 40,
            marginStart: 20,
      },
      imageLogOut: {
            width: 40,
            height: 40,
            marginEnd: 10,
            marginRight: 10,
      },
      logout: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginTop: 15,
            marginEnd: 20,
            marginRight: 10,
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
      button: {
            marginHorizontal: 5,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 20,
            elevation: 3,
            backgroundColor: 'black',
      },
      textButton: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
      },
});
