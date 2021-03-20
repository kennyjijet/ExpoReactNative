import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NativeRouter, Link } from 'react-router-native';
import { Navigation, Card } from 'react-router-navigation'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Test({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Test1')}
      />
      <StatusBar style="auto" />
    </View>
  );
}
export default Test;
/*
export default function Test() {
  return (
    <View>
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }
      />
      <Text>Test!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
*/