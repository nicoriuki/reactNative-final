import { Text, View, Modal as RNmodal } from 'react-native';
import { styles } from './style';
import Button from '../common/Button';

const ConfirmDate = ({ modalVisible, onCancelDate, date, setDates }) => {
      return (
            <RNmodal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
            >
                  <View style={styles.modalMainView}>
                        <View style={styles.modalView}>
                              <Text style={styles.modalTitle}>Confirmar</Text>
                              <Text style={styles.modalText}>
                                    ¿Está seguro que desea confirmar la cita?
                                    {date.nombre}
                              </Text>
                              <View style={styles.modalActions}>
                                    <Button
                                          styleButtonType={
                                                styles.modalButtonCancel
                                          }
                                          title="Confirmar"
                                          onPress={setDates}
                                    />
                                    <Button
                                          styleButtonType={
                                                styles.modalButtonDelete
                                          }
                                          title="Cancelar"
                                          onPress={onCancelDate}
                                    />
                              </View>
                        </View>
                  </View>
            </RNmodal>
      );
};

export default ConfirmDate;
