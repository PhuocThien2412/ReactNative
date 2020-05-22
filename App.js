import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WindyIcon from './components/WindyIcon';

export default function App() {
  return (
    <View style={styles.container}>
      <WindyIcon/>
    </View>
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
