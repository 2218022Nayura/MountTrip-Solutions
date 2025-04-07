import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
<<<<<<< HEAD
  TextInput,
  Modal,
  Pressable,
=======
>>>>>>> 47be7a8 ([BAB 4] LAYOUT)
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
<<<<<<< HEAD
=======
import { useNavigation } from '@react-navigation/native';
>>>>>>> 47be7a8 ([BAB 4] LAYOUT)
import DestinationCard from '../components/DestinationCard';
import InfoModal from '../components/InfoModal';
import SearchBar from '../components/SearchBar';

<<<<<<< HEAD
// Data destinasi gunung
=======
>>>>>>> 47be7a8 ([BAB 4] LAYOUT)
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
<<<<<<< HEAD
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
  
=======
  const [search, setSearch] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const headerOpacity = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

>>>>>>> 47be7a8 ([BAB 4] LAYOUT)
  useEffect(() => {
    Animated.timing(headerOpacity, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

<<<<<<< HEAD
  return (
    <View style={styles.container}>
      {/* HEADER dengan animasi Fade In */}
=======
  const filteredDestinations = destinations.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
>>>>>>> 47be7a8 ([BAB 4] LAYOUT)
      <Animated.View style={[styles.header, { opacity: headerOpacity }]}>
        <Text style={styles.headerTitle}>MountTrip Solutions</Text>
        <Text style={styles.headerSubtitle}>Jelajahi Keindahan Gunung di Jawa Timur</Text>
      </Animated.View>

<<<<<<< HEAD
      {/* SEARCH BAR - Menggunakan state `search` dan `setSearch` sebagai props */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* Jika hasil pencarian kosong, tampilkan pesan */}
=======
      {/* TOMBOL MODAL INFO */}
      <TouchableOpacity
        style={styles.infoButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.infoButtonText}>Lihat Informasi Tambahan</Text>
      </TouchableOpacity>

      {/* SEARCH BAR */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* LIST GUNUNG */}
>>>>>>> 47be7a8 ([BAB 4] LAYOUT)
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
<<<<<<< HEAD
              {/* MENGIRIM PROPS: `name` dan `image` ke DestinationCard */}
=======
>>>>>>> 47be7a8 ([BAB 4] LAYOUT)
              <DestinationCard name={item.name} image={item.image} />
            </TouchableOpacity>
          )}
        />
      )}

<<<<<<< HEAD
      {/* MODAL INFO - Menggunakan state `modalVisible` dan `setModalVisible` sebagai props */}
      <InfoModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
=======
      {/* MODAL */}
      <InfoModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onSelect={(option) => {
          setModalVisible(false);
          if (option === 'Jalur') {
            navigation.navigate('RouteScreen');
          } else if (option === 'Cuaca') {
            navigation.navigate('WeatherScreen');
          } else if (option === 'Ulasan') {
            navigation.navigate('StoryScreen');
          }
        }}
      />
>>>>>>> 47be7a8 ([BAB 4] LAYOUT)
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
<<<<<<< HEAD
=======
  infoButton: {
    backgroundColor: '#FF9800',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: 'stretch',
  },
  infoButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
>>>>>>> 47be7a8 ([BAB 4] LAYOUT)
  notFoundText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#777',
  },
});
<<<<<<< HEAD

=======
>>>>>>> 47be7a8 ([BAB 4] LAYOUT)
