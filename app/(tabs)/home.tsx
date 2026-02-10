/**
 * mySaskPoly Home Screen
 * Saskatchewan Polytechnic Student App
*/


import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Switch, TouchableOpacity, StatusBar} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing } from '@/constants/design-tokens';

export default function HomeScreen() {
  return (
     <SafeAreaView style={styles.container}>
        <ScrollView>
 {/* Header */}
        <View style={styles.header}>
            <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.nameText}>Cassandra Wellington</Text>
          



        </View>
        </ScrollView>
     </SafeAreaView>
  
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6750A4',
    padding: 20,
  },
  welcomeText: {
    fontSize: 14,
    color: 'white',
    opacity: 0.8,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
});
