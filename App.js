import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { globalStyles } from './style/globalStyles';
import Navigator from './routes/drawer';

export default function App(){

  return (
    <Navigator />
  );

}

