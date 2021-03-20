import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import { NativeRouter, Link } from 'react-router-native';
// import { Navigation, Card } from 'react-router-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Test from './pages/test/Test';
import Test1 from './pages/test/Test1';


export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      {/* Rest of your app code <Test />*/}
      <Stack.Navigator initialRouteName="Test">
        <Stack.Screen name="Test" component={Test} options={{ headerShown: false }}/>
        <Stack.Screen name="Test1" component={Test1} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    /*
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    <NativeRouter>
      <Navigation>
        <Card
          exact
          path="/"
          render={() => (
            <Text> Press it </Text>
          )} 
        />
      </Navigation>
    </NativeRouter>
    <Button
      onPress={() => {
        navigate('Test');
      }}
      title="Go Home"
    />
    */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
