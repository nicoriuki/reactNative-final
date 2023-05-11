import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
      buttonSelectDropdown: {
            width: '80%',
            height: 50,
            backgroundColor: '#444',
            borderRadius: 8,
      },
      buttonTextSelectDropdown: {
            color: '#FFF',
            textAlign: 'center',
            fontWeight: 'bold',
      },
      DropdownStyle: {
            backgroundColor: '#444',
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
      },
      RowStyleDropdown: {
            backgroundColor: '#444',
            borderBottomColor: '#C5C5C5',
      },
      RowTxtStyleDropdown: {
            color: '#FFF',
            textAlign: 'center',
            fontWeight: 'bold',
      },
      modalMainView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
      },
      modalView: {
            margin: 20,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 35,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
                  width: 0,
                  height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
      },
      modalTitle: {
            padding: 10,
            borderRadius: 5,
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
      },
      modalText: {
            marginBottom: 15,
            textAlign: 'center',
      },
      modalBoldText: {
            fontWeight: 'bold',
            textDecorationLine: 'underline',
      },
      modalActions: {
            flexDirection: 'row',
            justifyContent: 'space-between',
      },

      modalButtonCancel: {
            backgroundColor: '#2196F3',
      },
      modalButtonDelete: {
            backgroundColor: '#f44336',
      },
});
