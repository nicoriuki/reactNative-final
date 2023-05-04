import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

const Label = ({ label, children, style, subLabel, subLabelStyle }) => {
      return (
            <View style={styles.container}>
                  <Text style={[styles.label, style]}>{label}</Text>
                  {children}
                  {subLabel && (
                        <Text style={[styles.subLabel, subLabelStyle]}>
                              {subLabel}
                        </Text>
                  )}
            </View>
      );
};

export default Label;

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
});
