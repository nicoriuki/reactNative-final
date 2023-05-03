import { StyleSheet, Text, View, TextInput } from 'react-native';
import Label from './Label';

const InputAuth = ({
      editable,
      children,
      value,
      onChangeText,
      onFocus,
      onBlur,
      maxLength,
      placeholder,
      placeholderTextColor,
      keyboardType,
      hasError,
      error,
      touched,
      ...props
}) => {
      return (
            <View style={styles.container}>
                  <Label {...props}>
                        <TextInput
                              {...props}
                              style={styles.input}
                              editable={editable}
                              value={value}
                              onChangeText={onChangeText}
                              onFocus={onFocus}
                              onBlur={onBlur}
                              maxLength={maxLength}
                              placeholder={placeholder}
                              placeholderTextColor={placeholderTextColor}
                              keyboardType={keyboardType}
                        />
                  </Label>
                  {hasError && touched && (
                        <View style={styles.message}>
                              <Text style={styles.helperText}>{error}</Text>
                        </View>
                  )}
            </View>
      );
};

export default InputAuth;

export const styles = StyleSheet.create({
      container: {
            flex: 1,
      },
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
            /*  fontFamily: 'Poppins-Bold', */
            color: '#ff0000',
      },
});
