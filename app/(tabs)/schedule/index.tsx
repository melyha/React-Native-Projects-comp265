import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Calendar } from '@marceloterreiro/flash-calendar';
import {
  colors,
  typography,
  spacing,
  borderRadius,
  elevation,
} from "@/constants/design-tokens";

const EVENTS_IMAGE = require("@/assets/images/events/bingo.png");

export default function ScheduleScreen() {
  const [selected, setSelected] = useState('2026-02-01');

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Schedule</Text>
          <Text style={styles.semester}>2025/2026 Fall Semester</Text>
        </View>

        <Text style={styles.todayLabel}>Today: Feb 1, 2026</Text>

        {/* Calendar */}
<View style={styles.calendarContainer}>
  <Calendar
    calendarMonthId="2026-02"
    onCalendarDayPress={(date) => setSelected(date)}
  />
</View>

        {/* Today's Classes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today</Text>

          {/* Class Cards */}
          {[
            {
              time: "9:00 AM",
              code: "INDG100",
              name: "Introduction to Indigenous Studies",
              room: "Room B8.10",
            },
            {
              time: "1:00 PM",
              code: "COMP265",
              name: "Introduction to Mobile Application Development",
              room: "Room B8.10",
            },
          ].map((cls, index) => (
            <View key={index} style={styles.classCard}>
              <View style={styles.timeColumn}>
                <Text style={styles.timeLabel}>Time</Text>
                <Text style={styles.timeValue}>{cls.time}</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.classInfo}>
                <View style={styles.codeBadge}>
                  <Text style={styles.codeText}>{cls.code}</Text>
                </View>
                <Text style={styles.className}>{cls.name}</Text>
                <Text style={styles.roomText}>{cls.room}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* SPSA Events */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Saskatoon SPSA Events</Text>
          <View style={styles.eventCard}>
            <Image source={EVENTS_IMAGE} style={styles.eventImage} />
            <View style={styles.eventContent}>
              <Text style={styles.eventTitle}>Lunch Hour Bingo</Text>
              <Text style={styles.eventDate}>Feb 01 - Feb 06</Text>
              <View style={styles.eventMeta}>
                <Text style={styles.eventLocation}>Student Lounge</Text>
                <Text style={styles.eventTime}>11:45 am - 1:00 pm</Text>
              </View>
              <Text style={styles.eventDescription}>
                Bingo, prizes, and bragging rights—come see if you've got the
                luck to win big!{"\n"}
                Free to play for all students.
              </Text>
            </View>
          </View>
        </View>

        {/* Upcoming Deadlines */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Deadlines</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllButton}>View All</Text>
            </TouchableOpacity>
          </View>

          {[
            {
              code: "MULT215",
              title: "Assignment 2: Create an Immersive Indoor Environment",
              due: "Feb 6",
              urgent: true,
            },
            {
              code: "MULT212",
              title:
                "Assignment 3: Use 3D Software to Create a 3D Print Design",
              due: "Feb 5",
              urgent: true,
            },
          ].map((deadline, index) => (
            <View key={index} style={styles.deadlineCard}>
              <View style={styles.deadlineBadges}>
                <View style={styles.courseBadge}>
                  <Text style={styles.courseBadgeText}>{deadline.code}</Text>
                </View>
                {deadline.urgent && (
                  <View style={styles.urgentBadge}>
                    <Text style={styles.urgentBadgeText}>Urgent</Text>
                  </View>
                )}
              </View>
              <Text style={styles.deadlineTitle}>{deadline.title}</Text>
              <Text style={styles.deadlineDue}>Due: {deadline.due}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { padding: spacing.lg },
  title: {
    ...typography.titleLarge,
    color: colors.onSurface,
    marginBottom: spacing.xs,
  },
  semester: { ...typography.labelLarge, color: colors.primary },
  todayLabel: {
    ...typography.labelLarge,
    color: colors.onSurface,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.md,
  },
  calendarContainer: {
    backgroundColor: colors.white,
    marginHorizontal: spacing.md,
    borderRadius: borderRadius.xl,
    overflow: "hidden",
    ...elevation.level1,
    marginBottom: spacing.lg,
  },
  section: { paddingHorizontal: spacing.lg, marginBottom: spacing.xl },
  sectionTitle: {
    ...typography.titleMedium,
    color: colors.onSurface,
    marginBottom: spacing.lg,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  viewAllButton: { ...typography.labelLarge, color: colors.primary },
  classCard: {
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    ...elevation.level1,
    marginBottom: spacing.sm,
  },
  timeColumn: { marginRight: spacing.md },
  timeLabel: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.xxs,
  },
  timeValue: { ...typography.bodyMedium, color: colors.onSurface },
  divider: {
    width: 1,
    backgroundColor: colors.outlineVariant,
    marginRight: spacing.md,
  },
  classInfo: { flex: 1 },
  codeBadge: {
    backgroundColor: "#DBEAFE",
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xxs,
    borderRadius: borderRadius.full,
    alignSelf: "flex-start",
    marginBottom: spacing.xs,
  },
  codeText: { ...typography.labelMedium, color: "#1447E6" },
  className: {
    ...typography.bodyMedium,
    color: colors.onSurface,
    marginBottom: spacing.xs,
  },
  roomText: { ...typography.bodySmall, color: colors.textSecondary },
  eventCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    overflow: "hidden",
    ...elevation.level1,
  },
  eventImage: { width: "100%", height: 188 },
  eventContent: { padding: spacing.lg },
  eventTitle: {
    ...typography.titleMedium,
    color: colors.onSurface,
    marginBottom: spacing.xxs,
  },
  eventDate: {
    ...typography.bodyMedium,
    color: colors.onSurfaceVariant,
    marginBottom: spacing.xs,
  },
  eventMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.lg,
  },
  eventLocation: { ...typography.bodyMedium, color: colors.onSurfaceVariant },
  eventTime: { ...typography.bodyMedium, color: colors.onSurfaceVariant },
  eventDescription: {
    ...typography.bodyMedium,
    color: colors.onSurfaceVariant,
  },
  deadlineCard: {
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    ...elevation.level1,
    marginBottom: spacing.sm,
  },
  deadlineBadges: {
    flexDirection: "row",
    gap: spacing.xs,
    marginBottom: spacing.xs,
  },
  courseBadge: {
    backgroundColor: "#F3E8FF",
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xxs,
    borderRadius: borderRadius.full,
  },
  courseBadgeText: { ...typography.labelSmall, color: "#8200DB" },
  urgentBadge: {
    backgroundColor: "#FFE2E2",
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xxs,
    borderRadius: borderRadius.full,
  },
  urgentBadgeText: { ...typography.labelSmall, color: "#C10007" },
  deadlineTitle: {
    ...typography.bodyMedium,
    color: colors.onSurface,
    marginBottom: spacing.xs,
  },
  deadlineDue: { ...typography.bodySmall, color: colors.textSecondary },
});
