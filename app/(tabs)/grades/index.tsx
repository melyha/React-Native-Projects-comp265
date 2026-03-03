/**
 * Grades Screen
 * Displays all course grades with GPA summary and trend indicators
 */

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  colors,
  typography,
  spacing,
  borderRadius,
  elevation,
} from "@/constants/design-tokens";
import { Modal } from "react-native";

// Sample grade data
const GRADES_DATA = [
  {
    id: "1",
    courseCode: "MULT213",
    courseName: "Web Development 5",
    letterGrade: "A-",
    percentage: 84,
    trend: "up",
  },
  {
    id: "2",
    courseCode: "DSGN210",
    courseName: "Introduction to Mobile Application Design",
    letterGrade: "C+",
    percentage: 65,
    trend: "down",
  },
  {
    id: "3",
    courseCode: "MKTG206",
    courseName: "Digital Marketing 2",
    letterGrade: "C",
    percentage: 60,
    trend: "up",
  },
  {
    id: "4",
    courseCode: "GRPH201",
    courseName: "Advanced Vector Graphics",
    letterGrade: "A+",
    percentage: 98,
    trend: "up",
  },
  {
    id: "5",
    courseCode: "GRPH202",
    courseName: "Electronic Publishing",
    letterGrade: "A+",
    percentage: 93,
    trend: "up",
  },
  {
    id: "6",
    courseCode: "MULT123",
    courseName: "3D Fundamentals 1",
    letterGrade: "A+",
    percentage: 98,
    trend: "up",
  },
  {
    id: "7",
    courseCode: "MULT205",
    courseName: "Content Management Systems",
    letterGrade: "A-",
    percentage: 84,
    trend: "up",
  },
  {
    id: "8",
    courseCode: "PROF200",
    courseName: "Professional Practices 2",
    letterGrade: "A+",
    percentage: 97,
    trend: "up",
  },
];

export default function GradesScreen() {
  const [gpa] = useState(3.67); // Calculated GPA
  const [semesterModalVisible, setSemesterModalVisible] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState(
    "2025/2026 Winter Semester",
  );

  const handleGradePress = (grade: any) => {
    router.push({
      pathname: "/grades/grade-details",
      params: {
        gradeId: grade.id,
        courseCode: grade.courseCode,
        courseName: grade.courseName,
        letterGrade: grade.letterGrade,
        percentage: grade.percentage,
      },
    });
  };

  const getTrendIcon = (trend: string) => {
    return trend === "up" ? "trending-up" : "trending-down";
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>My Grades</Text>
          <TouchableOpacity onPress={() => setSemesterModalVisible(true)}>
            <Text style={styles.semester}>{selectedSemester}</Text>
          </TouchableOpacity>
        </View>

        {/* GPA Card */}
        <TouchableOpacity style={styles.gpaCard} activeOpacity={0.8}>
          <LinearGradient
            colors={["#615FFF", "#9810FA"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gpaGradient}
          >
            <View style={styles.gpaContent}>
              <Text style={styles.gpaLabel}>Current GPA</Text>
              <View style={styles.gpaIconContainer}>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={colors.white}
                />
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* Grade Cards */}
        <View style={styles.gradesList}>
          {GRADES_DATA.map((grade) => (
            <TouchableOpacity
              key={grade.id}
              style={styles.gradeCard}
              onPress={() => handleGradePress(grade)}
              activeOpacity={0.7}
            >
              <View style={styles.gradeCardContent}>
                {/* Course Code with Trend */}
                <View style={styles.courseCodeRow}>
                  <View style={styles.courseCodeBadge}>
                    <Text style={styles.courseCodeText}>
                      {grade.courseCode}
                    </Text>
                  </View>
                  <Ionicons
                    name={getTrendIcon(grade.trend)}
                    size={14}
                    color={grade.trend === "up" ? "#10B981" : "#EF4444"}
                  />
                </View>

                {/* Course Name */}
                <Text style={styles.courseName}>{grade.courseName}</Text>

                {/* Grade Display */}
                <View style={styles.gradeDisplay}>
                  <Text style={styles.letterGrade}>{grade.letterGrade}</Text>
                  <Text style={styles.percentage}>{grade.percentage}%</Text>
                </View>
              </View>

              {/* Chevron Icon */}
              <Ionicons
                name="chevron-forward"
                size={24}
                color={colors.outline}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Semester Selector Modal */}
      <Modal
        visible={semesterModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setSemesterModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.semesterModal}>
            <Text style={styles.modalTitle}>Select Semester</Text>

            {[
              "2025/2026 Spring/Summer Semester",
              "2025/2026 Winter Semester",
              "2025/2026 Fall Semester",
              "2024/2025 Winter Semester",
              "2024/2025 Fall Semester",
            ].map((semester) => (
              <TouchableOpacity
                key={semester}
                style={styles.semesterOption}
                onPress={() => {
                  setSelectedSemester(semester);
                  setSemesterModalVisible(false);
                }}
              >
                <Text style={styles.semesterOptionText}>{semester}</Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setSemesterModalVisible(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: spacing.lg,
    paddingTop: spacing.md,
  },
  title: {
    ...typography.titleLarge,
    color: colors.onSurface,
    marginBottom: spacing.xs,
  },
  semester: {
    ...typography.labelLarge,
    color: colors.primary,
  },
  gpaCard: {
    marginHorizontal: spacing.md,
    marginBottom: spacing.lg,
    borderRadius: borderRadius.lg,
    overflow: "hidden",
    ...elevation.level2,
  },
  gpaGradient: {
    padding: spacing.md,
  },
  gpaContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  gpaLabel: {
    ...typography.labelLarge,
    color: colors.white,
  },
  gpaIconContainer: {
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  gradesList: {
    paddingHorizontal: spacing.lg,
    gap: spacing.sm,
    paddingBottom: spacing.xxl,
  },
  gradeCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    padding: spacing.lg,
    borderRadius: borderRadius.md,
    ...elevation.level1,
  },
  gradeCardContent: {
    flex: 1,
  },
  courseCodeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    marginBottom: spacing.xs,
  },
  courseCodeBadge: {
    backgroundColor: "#F3F4F6",
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xxs,
    borderRadius: borderRadius.full,
  },
  courseCodeText: {
    ...typography.labelMedium,
    color: "#364153",
  },
  courseName: {
    ...typography.bodyMedium,
    color: colors.onSurface,
    marginBottom: spacing.xs,
  },
  gradeDisplay: {
    position: "absolute",
    right: spacing.xl,
    top: spacing.xxs,
    alignItems: "flex-end",
  },
  letterGrade: {
    ...typography.titleLarge,
    color: colors.onSurface,
    marginBottom: spacing.xxs,
  },
  percentage: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.lg,
  },

  semesterModal: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    paddingBottom: spacing.xxl,
    width: "100%",
    maxWidth: 400,
  },

  modalTitle: {
    ...typography.titleLarge,
    color: colors.onSurface,
  },
  semesterOption: {
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.outlineVariant,
  },
  semesterOptionText: {
    ...typography.bodyLarge,
    color: colors.onSurface,
  },

  cancelButton: {
    marginTop: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: colors.outline,
    alignItems: "center",
  },
  cancelButtonText: {
    ...typography.labelLarge,
    color: colors.onSurface,
  },
});
