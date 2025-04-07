import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function StoryScreen() {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      const savedReviews = await AsyncStorage.getItem('reviews');
      if (savedReviews) {
        setReviews(JSON.parse(savedReviews));
      }
    } catch (e) {
      console.error('Failed to load reviews', e);
    }
  };

  const saveReviews = async (newReviews) => {
    try {
      await AsyncStorage.setItem('reviews', JSON.stringify(newReviews));
    } catch (e) {
      console.error('Failed to save reviews', e);
    }
  };

  const handleSend = () => {
    if (name.trim() === '' || review.trim() === '') return;
    const newReview = { id: Date.now().toString(), name, review };
    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    saveReviews(updatedReviews);
    setName('');
    setReview('');
  };

  const renderReview = ({ item }) => (
    <View style={styles.reviewCard}>
      <Text style={styles.reviewName}>{item.name}</Text>
      <Text style={styles.reviewText}>{item.review}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>Ulasan Pendaki</Text>

      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={renderReview}
        contentContainerStyle={styles.reviewList}
      />

      <View style={styles.form}>
        <TextInput
          placeholder="Nama kamu"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Tulis ulasanmu di sini"
          value={review}
          onChangeText={setReview}
          style={[styles.input, styles.textArea]}
          multiline
        />
        <TouchableOpacity onPress={handleSend} style={styles.button}>
          <Text style={styles.buttonText}>Kirim Ulasan</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  reviewList: {
    paddingBottom: 20,
  },
  reviewCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
  },
  reviewName: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
  },
  reviewText: {
    fontSize: 15,
    color: '#555',
  },
  form: {
    marginTop: 10,
  },
  input: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
