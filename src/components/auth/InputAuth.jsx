import { Text, View, TextInput } from 'react-native';
import { styles } from './style';
import Label from './Label';

const InputAuth = ({
      editable,
      children,
      value,
      onChangeText,
      onFocus,
      /* onBlur, */
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
                              /*  onBlur={onBlur} */
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
