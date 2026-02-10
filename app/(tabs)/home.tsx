/**
 * mySaskPoly Home Screen
 * Saskatchewan Polytechnic Student App
 */

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Switch,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, spacing } from "@/constants/design-tokens";

export default function HomeScreen() {

    // State for TextInput and Switch
  const [searchQuery, setSearchQuery] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.nameText}>Cassandra Wellington</Text>


{/* Switch Requirement */}
          <View style={styles.switchRow}>
            <Text>Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
            />
          </View>

   {/* TextInput Requirement */}
          <TextInput
            style={styles.searchInput}
            placeholder="Hinted search text"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

          {/* Schedule Section*/}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Schedule</Text>
            <Text>Schedule cards will go here</Text>
          </View>

          {/* Deadlines Section*/}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Upcoming Deadlines</Text>
            <Text>Deadline cards will go here</Text>
          </View>

          {/* News Section*/}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>News</Text>
            <Text>News cards will go here</Text>
          </View>

       
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#6750A4",
    padding: 20,
  },
  welcomeText: {
    fontSize: 14,
    color: "white",
    opacity: 0.8,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 16,
  },

  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  searchInput: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 28,
    fontSize: 14,
  },


  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  
});
