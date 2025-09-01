import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LoginScreen from './src/LoginScreen';
import DashboardScreen from './src/DashboardScreen';


export default function App() {
  //return <LoginScreen />;
  return <DashboardScreen />;
}


