import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';

const routesData = {
  'Gunung Bromo': ['Jalur Cemoro Lawang', 'Jalur Tosari', 'Jalur Ngadas'],
  'Gunung Semeru': ['Jalur Ranu Pani', 'Jalur Kalimati'],
  'Gunung Ijen': ['Jalur Paltuding'],
  'Gunung Arjuna': ['Jalur Tretes', 'Jalur Lawang'],
  'Gunung Raung': ['Jalur Kalibaru', 'Jalur Sumberwringin'],
  'Gunung Welirang': ['Jalur Cangar', 'Jalur Tretes'],
  'Gunung Kawi': ['Jalur Wonosari', 'Jalur Pesarean'],
};

const gunungList = Object.keys(routesData);

export default function RouteScreen() {
  const [selectedGunung, setSelectedGunung] = useState(null);

  const renderJalur = () => {
    if (!selectedGunung) return null;

    return (
      <View style={styles.jalurContainer}>
        <Text style={styles.jalurTitle}>Jalur Pendakian {selectedGunung}</Text>
        {routesData[selectedGunung].map((jalur, index) => (
          <Text key={index} style={styles.jalurItem}>
            • {jalur}
          </Text>
        ))}
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Daftar Gunung</Text>
      {gunungList.map((gunung, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.gunungBox,
            selectedGunung === gunung && styles.selectedBox,
          ]}
          onPress={() =>
            setSelectedGunung((prev) => (prev === gunung ? null : gunung))
          }
        >
          <Text
            style={[
              styles.gunungText,
              selectedGunung === gunung && styles.selectedText,
            ]}
          >
            {gunung}
          </Text>
        </TouchableOpacity>
      ))}
      {renderJalur()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F2F6FC',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2C3E50',
  },
  gunungBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 2,
  },
  selectedBox: {
    backgroundColor: '#007BFF',
  },
  gunungText: {
    fontSize: 18,
    color: '#34495E',
    fontWeight: '500',
  },
  selectedText: {
    color: '#fff',
    fontWeight: '700',
  },
  jalurContainer: {
    marginTop: 25,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    elevation: 2,
  },
  jalurTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2C3E50',
  },
  jalurItem: {
    fontSize: 16,
    color: '#34495E',
    marginBottom: 6,
  },
});
