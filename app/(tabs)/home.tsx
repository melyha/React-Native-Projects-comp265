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
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, spacing } from "@/constants/design-tokens";
import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import { Storage } from "@/components/utilities/db";

// Import components
import Header from "@/components/school-app/Header";
import ScheduleCard from "@/components/school-app/ScheduleCard";
import DeadlineCard from "@/components/school-app/DeadlineCard";
import NewsCard from "@/components/school-app/NewsCard";
import Drawer from "@/components/school-app/Drawer";

// Default deadline data structure
const DEFAULT_DEADLINES = [
  {
    id: "1",
    courseCode: "DSGN210",
    title: "Assignment 3: Build Web Applications",
    dueDate: "Dec 18",
    isUrgent: true,
    completed: false,
  },
  {
    id: "2",
    courseCode: "COMP265",
    title: "React Native Navigation Exercise",
    dueDate: "Dec 20",
    isUrgent: true,
    completed: false,
  },
];

// State for TextInput and Switch
export default function HomeScreen() {
  // State for TextInput and Switch
  const [searchQuery, setSearchQuery] = useState("");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [deadlines, setDeadlines] = useState(DEFAULT_DEADLINES);

  // Load deadlines from storage on mount
  useEffect(() => {
    const savedDeadlines = Storage.loadDataSync("deadlines");
    if (savedDeadlines) {
      console.log("Loaded deadlines from storage:", savedDeadlines);
      setDeadlines(savedDeadlines as any[]);
    } else {
      console.log("No saved deadlines, using defaults");
      Storage.saveDataSync("deadlines", DEFAULT_DEADLINES);
    }
  }, []);

  // Helper to update deadlines and save to storage
  const updateDeadlines = (newDeadlines: any[]) => {
    console.log("Updating deadlines:", newDeadlines);
    setDeadlines(newDeadlines);
    Storage.saveDataSync("deadlines", newDeadlines);
  };

  // Mark deadline as complete
  const handleDeadlinePress = (deadlineId: string) => {
    const updated = deadlines.map((d) =>
      d.id === deadlineId ? { ...d, completed: true } : d,
    );
    updateDeadlines(updated);
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section/ Header Component */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.nameText}>Cassandra Wellington</Text>

          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: "#3e1b85", true: "#f4f3f4" }}
              thumbColor={notificationsEnabled ? "#4e21a8" : "#C7C7C7"}
            />
          </View>

          <View style={styles.searchContainer}>
            <TouchableOpacity
              style={styles.menuIcon}
              onPress={() => setDrawerVisible(true)}
            >
              <Ionicons name="menu" size={20} color="#49454F" />
            </TouchableOpacity>
            <TextInput
              style={styles.searchInput}
              placeholder="Hinted search text"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <Ionicons name="search" size={20} color="#49454F" />
          </View>
        </View>

        {/* Schedule Section/ ScheduleCard Component*/}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Schedule</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          <ScheduleCard
            time="9:00 AM"
            courseCode="MULT213"
            courseName="Web Development 5"
            room="Room B8.10"
          />
          <ScheduleCard
            time="9:00 AM"
            courseCode="MULT213"
            courseName="Web Development 5"
            room="Room B8.10"
          />
        </View>

        {/* Deadlines Section/ DeadlineCard Component*/}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Deadlines</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          {deadlines
            .filter((d) => !d.completed) // Only show incomplete deadlines
            .slice(0, 2) // Show first 2
            .map((deadline) => (
              <DeadlineCard
                key={deadline.id}
                courseCode={deadline.courseCode}
                title={deadline.title}
                dueDate={deadline.dueDate}
                isUrgent={deadline.isUrgent}
                onPress={() => handleDeadlinePress(deadline.id)}
              />
            ))}
        </View>

        {/* News Section/ NewsCard Component*/}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>News</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          {/* News Card 1 */}
          <NewsCard
            title="SaskInteractive Digital Showcase"
            date="Nov 21, 2025"
            description="Join us Friday November 28 from 5:00 pm - 8:00 pm at Innovation Place!"
            buttonText="View Details"
            imageUrl="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop"
            onPress={() => console.log("News 1 pressed")}
          />

          {/* News Card 2 */}
          <NewsCard
            title="Refund and Withdrawal Deadlines for Fall Semester"
            date="Nov 24, 2025"
            description="Check out the full details below."
            buttonText="Check Deadlines"
            backgroundColor={colors.primaryContainer}
            onPress={() => console.log("News 2 pressed")}
          />

          {/* News Card 3 */}
          <NewsCard
            title="Winter Break Schedule"
            date="Dec 10, 2025"
            description="Important information about campus hours during winter break."
            buttonText="View Schedule"
            imageUrl="https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=400&h=200&fit=crop"
            onPress={() => console.log("News 3 pressed")}
          />
        </View>
      </ScrollView>
      <Drawer visible={drawerVisible} onClose={() => setDrawerVisible(false)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollView: {
    flex: 1,
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  switchLabel: {
    color: "white",
    fontSize: 14,
  },

  searchInput: {
    flex: 1,
    backgroundColor: "white",
    padding: 12,
    borderRadius: 28,
    fontSize: 14,
    marginLeft: 8,
  },

  section: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },

  viewAllText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.primary,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 28,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  menuIcon: {
    padding: 4,
  },
});
