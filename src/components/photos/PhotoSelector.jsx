import { Text, View, Image, Alert } from 'react-native';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { useSelector } from 'react-redux';
import { styles } from './style';
import Button from './../common/Button';

const PhotoSelector = ({ onImage }) => {
      const [pickedUri, setPickedUri] = useState();
      const photos = useSelector((state) => state.photo);

      const VerifyPermissions = async () => {
            const { status } =
                  await ImagePicker.requestCameraPermissionsAsync();
            if (status !== 'granted') {
                  Alert.alert('Permisos insuficientes');
                  return false;
            }
            return true;
      };

      const handlerTakeImage = async () => {
            const isCameraOk = await VerifyPermissions();
            if (!isCameraOk) return;

            const image = await ImagePicker.launchCameraAsync({
                  allowsEditing: true,
                  aspect: [16, 16],
                  quality: 1,
            });

            setPickedUri(image.assets[0].uri);
            onImage(image.assets[0].uri);
      };

      return (
            <View style={styles.container}>
                  <View style={styles.preview}>
                        {!pickedUri ? (
                              <Text>No hay imagen seleccionada...</Text>
                        ) : (
                              <Image
                                    style={styles.image}
                                    source={{ uri: pickedUri }}
                              />
                        )}
                  </View>
                  <Button
                        title="Tomar foto"
                        styleButtonType={{ backgroundColor: '#FFCC33' }}
                        onPress={handlerTakeImage}
                  />
            </View>
      );
};

export default PhotoSelector;
