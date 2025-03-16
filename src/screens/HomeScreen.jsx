import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TextInput,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import DestinationCard from '../components/DestinationCard';

const destinations = [
  { id: '1', name: 'Gunung Bromo', image: require('../assets/images/Bromo.jpg') },
  { id: '2', name: 'Gunung Semeru', image: require('../assets/images/Semeru.jpg') },
  { id: '3', name: 'Gunung Ijen', image: require('../assets/images/Ijen.jpg') },
  { id: '4', name: 'Gunung Arjuno', image: require('../assets/images/Arjuno.jpeg') },
  { id: '5', name: 'Gunung Raung', image: require('../assets/images/Raung.jpg') },
  { id: '6', name: 'Gunung Welirang', image: require('../assets/images/Welirang.jpg') },
  { id: '7', name: 'Gunung Kawi', image: require('../assets/images/Kawi.jpeg') },
];

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  // Filter destinasi berdasarkan input pencarian
  const filteredDestinations = destinations.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // Animasi Header (Fade In)
  const headerOpacity = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    Animated.timing(headerOpacity, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header dengan animasi Fade In */}
      <Animated.View style={[styles.header, { opacity: headerOpacity }]}>
        <Text style={styles.headerTitle}>MountTrip Solutions</Text>
        <Text style={styles.headerSubtitle}>Jelajahi Keindahan Gunung di Jawa Timur</Text>
      </Animated.View>

      {/* Search Box */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Cari destinasi gunung..."
          placeholderTextColor="#777"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Menampilkan pesan jika tidak ada hasil pencarian */}
      {filteredDestinations.length === 0 ? (
        <Text style={styles.notFoundText}>Gunung tidak ditemukan</Text>
      ) : (
        <FlatList
          data={filteredDestinations}
          keyExtractor={(item) => item.id}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => alert(`Kamu memilih ${item.name}`)}>
              <DestinationCard name={item.name} image={item.image} />
            </TouchableOpacity>
          )}
        />
      )}

      {/* Modal Info */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>MountTrip Solutions</Text>
            <Text style={styles.modalText}>
              Nikmati pengalaman wisata gunung yang lebih mudah dan menyenangkan dengan MountTrip Solutions!
            </Text>
            <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Tutup</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 15,
  },
  header: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'white',
    marginTop: 5,
  },
  searchContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: -20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  input: {
    fontSize: 16,
  },
  notFoundText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#777',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
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
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

