import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      {/* Tab 1: Home */}
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons size={28} name="home" color={color} />
          ),
        }}
      />
      {/* Tab 2: Courses */}
      <Tabs.Screen
        name="courses"
        options={{
          title: "Courses",
          tabBarIcon: ({ color }) => (
            <Ionicons name="book" size={24} color={color} />
          ),
        }}
      />
      {/* Tab 3: Grades */}
      <Tabs.Screen
        name="grades"
        options={{
          title: "Grades",
          tabBarIcon: ({ color }) => (
            <Ionicons name="bar-chart" size={24} color={color} />
          ),
        }}
      />
      {/* Tab 4: Schedule */}
      <Tabs.Screen
        name="schedule"
        options={{
          title: "Schedule",
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar" size={24} color={color} />
          ),
        }}
      />
      // Debug Tab (hidden from tab bar)
      <Tabs.Screen
        name="storage-debug"
        options={{
          title: "Debug",
          tabBarIcon: ({ color }) => (
            <Ionicons name="bug" size={24} color={color} />
          ),
        }}
      />

         {/* Stack Screens (hidden from tabs) */}
      <Tabs.Screen
        name="profile"
        options={{
          href: null, // Hidden from tab bar
          title: "My Profile",
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          href: null, // Hidden from tab bar
          title: "Settings",
        }}
      />


      <Tabs.Screen
        name="grade-details"
        options={{
          href: null, // Hidden from tab bar
          title: "Grade Details",
        }}
      />

    </Tabs>
  );
}
