import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const WeatherApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Weather App</Text>
      <Button title='Toggle to '></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 20,
    color: 'Black',
  },
});

export default WeatherApp;