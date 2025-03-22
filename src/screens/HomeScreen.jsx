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
import InfoModal from '../components/InfoModal';
import SearchBar from '../components/SearchBar';

// Data destinasi gunung
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
  // STATE: Menyimpan teks pencarian dari input
  const [search, setSearch] = useState('');

  // STATE: Menyimpan status modal (terbuka/tutup)
  const [modalVisible, setModalVisible] = useState(false);

  // FILTER: Menyaring destinasi berdasarkan input pencarian
  const filteredDestinations = destinations.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // STATE: Animasi Header (Fade In)
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
      {/* HEADER dengan animasi Fade In */}
      <Animated.View style={[styles.header, { opacity: headerOpacity }]}>
        <Text style={styles.headerTitle}>MountTrip Solutions</Text>
        <Text style={styles.headerSubtitle}>Jelajahi Keindahan Gunung di Jawa Timur</Text>
      </Animated.View>

      {/* SEARCH BAR - Menggunakan state `search` dan `setSearch` sebagai props */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* Jika hasil pencarian kosong, tampilkan pesan */}
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
              {/* MENGIRIM PROPS: `name` dan `image` ke DestinationCard */}
              <DestinationCard name={item.name} image={item.image} />
            </TouchableOpacity>
          )}
        />
      )}

      {/* MODAL INFO - Menggunakan state `modalVisible` dan `setModalVisible` sebagai props */}
      <InfoModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
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
  notFoundText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#777',
  },
});

