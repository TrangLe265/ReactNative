import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import History from './History';
import Calculator from './Calculator';

export default function App() {
  const Stack = createNativeStackNavigator(); 
 
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Calculator" component={Calculator}/>
          <Stack.Screen name="History" component={History} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}




