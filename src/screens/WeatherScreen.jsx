import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const weatherData = [
  {
    id: '1',
    name: 'Gunung Bromo',
    condition: 'Cerah',
    icon: require('../assets/icons/sunny.png'),
    temp: '22°C',
  },
  {
    id: '2',
    name: 'Gunung Semeru',
    condition: 'Berkabut',
    icon: require('../assets/icons/foggy.png'),
    temp: '17°C',
  },
  {
    id: '3',
    name: 'Gunung Ijen',
    condition: 'Hujan',
    icon: require('../assets/icons/rainy.png'),
    temp: '18°C',
  },
  {
    id: '4',
    name: 'Gunung Arjuna',
    condition: 'Cerah',
    icon: require('../assets/icons/sunny.png'),
    temp: '20°C',
  },
  {
    id: '5',
    name: 'Gunung Raung',
    condition: 'Berkabut',
    icon: require('../assets/icons/foggy.png'),
    temp: '15°C',
  },
  {
    id: '6',
    name: 'Gunung Welirang',
    condition: 'Hujan',
    icon: require('../assets/icons/rainy.png'),
    temp: '16°C',
  },
  {
    id: '7',
    name: 'Gunung Kawi',
    condition: 'Cerah',
    icon: require('../assets/icons/sunny.png'),
    temp: '19°C',
  },
];

export default function WeatherScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cuaca dan Kondisi Gunung</Text>
      <FlatList
        data={weatherData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.icon} style={styles.icon} />
            <View style={styles.info}>
              <Text style={styles.gunungName}>{item.name}</Text>
              <Text style={styles.condition}>{item.condition}</Text>
              <Text style={styles.temp}>{item.temp}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 18,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
  },
  icon: {
    width: 60,
    height: 60,
    marginRight: 20,
  },
  info: {
    flex: 1,
  },
  gunungName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2D3D',
    marginBottom: 4,
  },
  condition: {
    fontSize: 16,
    color: '#5D6D7E',
  },
  temp: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007BFF',
    marginTop: 4,
  },
});
