/**
 * Header Component
 * Contains welcome text, search bar (TextInput), and settings switch
 */

import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  colors,
  typography,
  spacing,
  borderRadius,
  elevation,
} from "@/constants/design-tokens";
import { Switch } from "react-native-paper";

interface HeaderProps {
  userName?: string;
  searchQuery: string;
  onSearchChange: (text: string) => void;
  notificationsEnabled: boolean;
  onNotificationsToggle: (value: boolean) => void;
}

export default function Header({
  userName = "Cassandra Wellington",
  searchQuery,
  onSearchChange,
  notificationsEnabled,
  onNotificationsToggle,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.switchRow}>
        <Text style={styles.switchLabel}>Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={onNotificationsToggle}
        />
      </View>
      <Text style={styles.welcomeText}>Welcome back,</Text>
      <Text style={styles.nameText}>{userName}</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Hinted search text"
        value={searchQuery}
        onChangeText={onSearchChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#6750A4", padding: 20, paddingTop: 60 },
  switchRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  switchLabel: { color: "white", fontSize: 14 },
  welcomeText: { fontSize: 14, color: "white", opacity: 0.8, marginBottom: 4 },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 28,
    fontSize: 14,
  },
});
