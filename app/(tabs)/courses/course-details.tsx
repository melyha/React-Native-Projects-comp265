/**
 * Course Details Screen
 * Shows course info, schedule, and assignments
 */

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {
  colors,
  typography,
  spacing,
  borderRadius,
  elevation,
} from "@/constants/design-tokens";

export default function CourseDetailsScreen() {
  const params = useLocalSearchParams();
  const { courseCode, courseName, instructor, term, credits, progress } =
    params;

  const handleProfessorPress = () => {
    router.push({
      pathname: "/courses/professor-details",
      params: {
        professorName: instructor as string,
        courseCode: courseCode as string,
      },
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Ionicons name="chevron-back" size={24} color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.moreButton}>
            <Ionicons name="ellipsis-vertical" size={24} color={colors.white} />
          </TouchableOpacity>
        </View>

        <View style={styles.headerContent}>
          <Text style={styles.courseCode}>{courseCode}</Text>
          <Text style={styles.courseName}>{courseName}</Text>
        </View>

        {/* Professor Info (Tappable) */}
        <TouchableOpacity
          style={styles.professorSection}
          onPress={handleProfessorPress}
          activeOpacity={0.7}
        >
          <Text style={styles.professorName}>{instructor}</Text>
          <Ionicons name="chevron-forward" size={20} color={colors.primary} />
        </TouchableOpacity>

        {/* Course Info */}
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Credits</Text>
            <Text style={styles.infoValue}>{credits}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Term</Text>
            <Text style={styles.infoValue}>{term}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Progress</Text>
            <Text style={styles.infoValue}>{progress}%</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="document-text" size={24} color={colors.primary} />
            <Text style={styles.actionText}>Materials</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="people" size={24} color={colors.primary} />
            <Text style={styles.actionText}>Classmates</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="calendar" size={24} color={colors.primary} />
            <Text style={styles.actionText}>Calendar</Text>
          </TouchableOpacity>
        </View>

        {/* Class Schedule */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Class Schedule</Text>

          <View style={styles.scheduleItem}>
            <Ionicons
              name="calendar-outline"
              size={20}
              color={colors.textSecondary}
            />
            <View style={styles.scheduleContent}>
              <Text style={styles.scheduleDay}>Monday</Text>
              <Text style={styles.scheduleDetails}>
                9:00 AM - 12:00 PM Room B8.10
              </Text>
            </View>
          </View>

          <View style={styles.scheduleItem}>
            <Ionicons
              name="calendar-outline"
              size={20}
              color={colors.textSecondary}
            />
            <View style={styles.scheduleContent}>
              <Text style={styles.scheduleDay}>Wednesday</Text>
              <Text style={styles.scheduleDetails}>
                9:00 AM - 12:00 PM Room B8.10
              </Text>
            </View>
          </View>

          <View style={styles.scheduleItem}>
            <Ionicons
              name="calendar-outline"
              size={20}
              color={colors.textSecondary}
            />
            <View style={styles.scheduleContent}>
              <Text style={styles.scheduleDay}>Friday</Text>
              <Text style={styles.scheduleDetails}>
                9:00 AM - 12:00 PM Room B8.10
              </Text>
            </View>
          </View>
        </View>

        {/* Upcoming Assignments */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Assignments</Text>

          <View style={styles.assignmentCard}>
            <View style={styles.assignmentLeft}>
              <Ionicons
                name="checkbox-outline"
                size={20}
                color={colors.textSecondary}
              />
              <View style={styles.assignmentContent}>
                <Text style={styles.assignmentTitle}>Project Proposal</Text>
                <Text style={styles.assignmentDue}>Due: Feb 19, 2025</Text>
              </View>
            </View>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>pending</Text>
            </View>
          </View>

          <View style={styles.assignmentCard}>
            <View style={styles.assignmentLeft}>
              <Ionicons
                name="checkbox-outline"
                size={20}
                color={colors.textSecondary}
              />
              <View style={styles.assignmentContent}>
                <Text style={styles.assignmentTitle}>Assignment 3</Text>
                <Text style={styles.assignmentDue}>Due: Feb 19, 2025</Text>
              </View>
            </View>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>pending</Text>
            </View>
          </View>

          <View style={styles.assignmentCard}>
            <View style={styles.assignmentLeft}>
              <Ionicons
                name="checkmark-circle"
                size={20}
                color={colors.primary}
              />
              <View style={styles.assignmentContent}>
                <Text style={[styles.assignmentTitle, { opacity: 0.6 }]}>
                  Assignment 1
                </Text>
                <Text style={styles.assignmentDue}>Due: Jan 19, 2025</Text>
              </View>
            </View>
            <View style={[styles.statusBadge, { backgroundColor: "#E3F2FD" }]}>
              <Text style={[styles.statusText, { color: "#1976D2" }]}>
                submitted
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: spacing.md,
  },
  backButton: {
    padding: spacing.sm,
  },
  moreButton: {
    padding: spacing.sm,
  },
  headerContent: {
    backgroundColor: colors.primary,
    padding: spacing.lg,
    paddingTop: 0,
  },
  courseCode: {
    ...typography.labelLarge,
    color: colors.white,
    opacity: 0.9,
    marginBottom: spacing.xs,
  },
  courseName: {
    ...typography.headlineSmall,
    color: colors.white,
  },
  professorSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
  },
  professorName: {
    ...typography.bodyLarge,
    color: colors.white,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: colors.primary,
    paddingVertical: spacing.lg,
  },
  infoItem: {
    alignItems: "center",
  },
  infoLabel: {
    ...typography.bodySmall,
    color: colors.white,
    opacity: 0.8,
    marginBottom: spacing.xxs,
  },
  infoValue: {
    ...typography.titleMedium,
    color: colors.white,
  },
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: spacing.lg,
    backgroundColor: colors.white,
  },
  actionButton: {
    alignItems: "center",
    gap: spacing.xs,
  },
  actionText: {
    ...typography.bodySmall,
    color: colors.onSurface,
  },
  section: {
    padding: spacing.lg,
  },
  sectionTitle: {
    ...typography.titleLarge,
    color: colors.onSurface,
    marginBottom: spacing.md,
  },
  scheduleItem: {
    flexDirection: "row",
    gap: spacing.md,
    marginBottom: spacing.md,
    paddingVertical: spacing.sm,
  },
  scheduleContent: {
    flex: 1,
  },
  scheduleDay: {
    ...typography.titleMedium,
    color: colors.onSurface,
    marginBottom: spacing.xxs,
  },
  scheduleDetails: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
  },
  assignmentCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: spacing.md,
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    marginBottom: spacing.sm,
    ...elevation.level1,
  },
  assignmentLeft: {
    flexDirection: "row",
    gap: spacing.sm,
    flex: 1,
  },
  assignmentContent: {
    flex: 1,
  },
  assignmentTitle: {
    ...typography.bodyLarge,
    color: colors.onSurface,
    marginBottom: spacing.xxs,
  },
  assignmentDue: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  statusBadge: {
    backgroundColor: "#FFF3E0",
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xxs,
    borderRadius: borderRadius.xs,
  },
  statusText: {
    ...typography.labelSmall,
    color: "#E65100",
  },
});
