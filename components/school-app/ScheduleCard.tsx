/**
 * ScheduleCard Component
 * Displays a single class schedule item
 */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  colors,
  typography,
  spacing,
  borderRadius,
  elevation,
} from "@/constants/design-tokens";

interface ScheduleCardProps {
  time: string;
  courseCode: string;
  courseName: string;
  room: string;
}

export default function ScheduleCard({
  time,
  courseCode,
  courseName,
  room,
}: ScheduleCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.timeContainer}>
        <Text style={styles.timeLabel}>Time</Text>
        <Text style={styles.timeValue}>{time}</Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.courseCode}>{courseCode}</Text>
        <Text style={styles.courseName}>{courseName}</Text>
        <Text style={styles.room}>{room}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    marginBottom: spacing.cardGap,
    ...elevation.level1,
  },
  timeContainer: {
    marginRight: spacing.md,
    alignItems: "center",
    minWidth: 60,
  },
  timeLabel: {
    ...typography.labelSmall,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  timeValue: {
    ...typography.bodyMedium,
    fontWeight: "500",
    color: colors.onSurface,
  },
  details: {
    flex: 1,
  },
  courseCode: {
    ...typography.labelLarge,
    color: colors.badgeCourse,
    marginBottom: 4,
  },
  courseName: {
    ...typography.titleMedium,
    color: colors.onSurface,
    marginBottom: 4,
  },
  room: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
});
