import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NativeRouter, Link } from 'react-router-native';
import { Navigation, Card } from 'react-router-navigation'

export default function Lopa() {
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
    },
    item: {
      width: 50, height: 50, backgroundColor: 'powderblue'
    }
  });
  var myLoop = [];

  for (let i = 0; i < 10; i++) {
    myLoop.push(
        <View style={styles.item}>

        </View>
    );
  }

  return (
    <View style={styles.container}>
      { myLoop }
    </View>
  );
}

/* 
<View style={styles.container}>
  <View style={styles.item}>
    ...
  </View>
</View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
  item: {
    width: '50%' // is 50% of container width
  }
})

*/