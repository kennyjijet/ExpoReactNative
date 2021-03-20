import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Lopa from '../test/Lopa';
import { NativeRouter, Link } from 'react-router-native';
import { Navigation, Card } from 'react-router-navigation'

export default function Test({ navigation }) {
  return (
    <View>
      <StatusBar style="auto" />
      <Lopa />
    </View>
  );
}