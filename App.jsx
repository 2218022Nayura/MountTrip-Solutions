import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
<<<<<<< HEAD
=======
import RouteScreen from './src/screens/RouteScreen';
import StoryScreen from './src/screens/StoryScreen';
import WeatherScreen from './src/screens/WeatherScreen'; // ← Tambahin ini
>>>>>>> 47be7a8 ([BAB 4] LAYOUT)

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
<<<<<<< HEAD
=======
        <Stack.Screen 
          name="RouteScreen" 
          component={RouteScreen} 
          options={{ title: 'Jalur Pendakian' }}
        />
        <Stack.Screen 
          name="StoryScreen" 
          component={StoryScreen} 
          options={{ title: 'Cerita Pendaki' }}
        />
        <Stack.Screen 
          name="WeatherScreen" 
          component={WeatherScreen} 
          options={{ title: 'Cuaca & Kondisi Gunung' }}
        />
>>>>>>> 47be7a8 ([BAB 4] LAYOUT)
      </Stack.Navigator>
    </NavigationContainer>
  );
}
