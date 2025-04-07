import React from 'react';
import { View, Text, Modal, Pressable, StyleSheet } from 'react-native';

<<<<<<< HEAD
export default function InfoModal({ modalVisible, setModalVisible }) {
=======
export default function InfoModal({ modalVisible, setModalVisible, onSelect }) {
>>>>>>> 47be7a8 ([BAB 4] LAYOUT)
  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>MountTrip Solutions</Text>
          <Text style={styles.modalText}>
<<<<<<< HEAD
            Nikmati pengalaman wisata gunung yang lebih mudah dan menyenangkan dengan MountTrip Solutions!
          </Text>
          <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
=======
            Nikmati pengalaman wisata gunung yang lebih mudah dan menyenangkan dengan MountTrip!
          </Text>

          <Pressable style={[styles.optionButton, { backgroundColor: '#000' }]} onPress={() => onSelect('Jalur')}>
            <Text style={styles.buttonText}>Lihat Jalur Pendakian</Text>
          </Pressable>
          <Pressable style={[styles.optionButton, { backgroundColor: '#000' }]} onPress={() => onSelect('Cuaca')}>
            <Text style={styles.buttonText}>Lihat Cuaca Gunung</Text>
          </Pressable>
          <Pressable style={[styles.optionButton, { backgroundColor: '#000' }]} onPress={() => onSelect('Ulasan')}>
            <Text style={styles.buttonText}>Lihat Ulasan Pendaki</Text>
          </Pressable>

          <Pressable style={[styles.closeButton, { backgroundColor: '#D32F2F' }]} onPress={() => setModalVisible(false)}>
>>>>>>> 47be7a8 ([BAB 4] LAYOUT)
            <Text style={styles.buttonText}>Tutup</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
<<<<<<< HEAD
    borderRadius: 10,
    width: '80%',
=======
    borderRadius: 14,
    width: '85%',
>>>>>>> 47be7a8 ([BAB 4] LAYOUT)
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
<<<<<<< HEAD
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: '#555',
  },
  closeButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
=======
    color: '#007BFF',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
    color: '#555',
  },
  optionButton: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    width: '100%',
  },
  closeButton: {
    padding: 10,
    borderRadius: 8,
    width: '100%',
    marginTop: 5,
>>>>>>> 47be7a8 ([BAB 4] LAYOUT)
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
<<<<<<< HEAD
=======
    textAlign: 'center',
>>>>>>> 47be7a8 ([BAB 4] LAYOUT)
  },
});
