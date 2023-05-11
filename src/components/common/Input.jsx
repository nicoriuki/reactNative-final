import { TextInput } from 'react-native';
import { styles } from './style';

const Input = ({ style, ...otherPros }) => {
      return <TextInput style={[styles.inputForm, style]} {...otherPros} />;
};

export default Input;
