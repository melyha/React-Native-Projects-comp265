/**
 * Courses List Screen
 * Shows all enrolled courses with search and filter
 */

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {
  colors,
  typography,
  spacing,
  borderRadius,
  elevation,
} from "@/constants/design-tokens";
import { Modal } from "react-native";

// Sample course data (later from storage/API)
const COURSES_DATA = [
  {
    id: "1",
    code: "COMP265",
    name: "Introduction to Mobile Application Development",
    instructor: "Jesse Rolheiser",
    term: "Winter 2025/2026",
    credits: 3,
    progress: 65,
  },
  {
    id: "2",
    code: "MULT215",
    name: "Immersive Technologies 1",
    instructor: "Arlin Schaffel",
    term: "Winter 2025/2026",
    credits: 3,
    progress: 72,
  },
  {
    id: "3",
    code: "MULT208",
    name: "Emerging Interactive Technologies",
    instructor: "Arlin Schaffel",
    term: "Winter 2025/2026",
    credits: 3,
    progress: 68,
  },
  {
    id: "4",
    code: "MULT212",
    name: "3D Fundamentals 2",
    instructor: "Jesse Rolheiser",
    term: "Winter 2025/2026",
    credits: 3,
    progress: 81,
  },
  {
    id: "5",
    code: "INDG100",
    name: "Introduction to Indigenous Studies",
    instructor: "Ashtyn Newell-Olson",
    term: "Winter 2025/2026",
    credits: 3,
    progress: 75,
  },
  {
    id: "6",
    code: "MULT216",
    name: "Immersive Technologies 2",
    instructor: "Arlin Schaffel",
    term: "Winter 2025/2026",
    credits: 3,
    progress: 88,
  },
  {
    id: "7",
    code: "DGTL206",
    name: "Video 2",
    instructor: "Jesse Rolheiser",
    term: "Winter 2025/2026",
    credits: 3,
    progress: 79,
  },
  {
    id: "8",
    code: "MULT217",
    name: "Creative Computing",
    instructor: "Jesse Rolheiser",
    term: "Winter 2025/2026",
    credits: 3,
    progress: 92,
  },
  {
    id: "9",
    code: "PROJ202",
    name: "Interactive Media Project",
    instructor: "Arlin Schaffel & Jesse Rolheiser",
    term: "Winter 2025/2026",
    credits: 6,
    progress: 84,
  },
];

export default function CoursesScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(COURSES_DATA);
  const [semesterModalVisible, setSemesterModalVisible] = useState(false);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState(
    "2025/2026 Winter Semester",
  );

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text.trim() === "") {
      setFilteredCourses(COURSES_DATA);
    } else {
      const filtered = COURSES_DATA.filter(
        (course) =>
          course.code.toLowerCase().includes(text.toLowerCase()) ||
          course.name.toLowerCase().includes(text.toLowerCase()) ||
          course.instructor.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredCourses(filtered);
    }
  };

  const handleCoursePress = (course: any) => {
    router.push({
      pathname: "/courses/course-details",
      params: {
        courseId: course.id,
        courseCode: course.code,
        courseName: course.name,
        instructor: course.instructor,
        term: course.term,
        credits: course.credits,
        progress: course.progress,
      },
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>My Courses</Text>
          <TouchableOpacity onPress={() => setSemesterModalVisible(true)}>
            <Text style={styles.semester}>{selectedSemester}</Text>
          </TouchableOpacity>
        </View>

        {/* Filter Button */}
        <TouchableOpacity
          style={styles.filterButton}
          activeOpacity={0.7}
          onPress={() => setFilterModalVisible(true)}
        >
          <Text style={styles.filterButtonText}>Filter Courses</Text>
        </TouchableOpacity>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={20}
            color={colors.outline}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Courses..."
            value={searchQuery}
            onChangeText={handleSearch}
            placeholderTextColor={colors.outline}
          />
        </View>

        {/* Course Cards */}
        <View style={styles.coursesList}>
          {filteredCourses.map((course) => (
            <TouchableOpacity
              key={course.id}
              style={styles.courseCard}
              onPress={() => handleCoursePress(course)}
              activeOpacity={0.7}
            >
              <View style={styles.courseContent}>
                <Text style={styles.courseCode}>{course.code}</Text>
                <Text style={styles.courseName}>{course.name}</Text>
                <Text style={styles.instructorName}>{course.instructor}</Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={colors.outline}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );

  {
    /* Semester Selector Modal */
  }
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
  </Modal>;

  {
    /* Filter Modal */
  }
  <Modal
    visible={filterModalVisible}
    animationType="slide"
    transparent={true}
    onRequestClose={() => setFilterModalVisible(false)}
  >
    <View style={styles.modalOverlay}>
      <View style={styles.filterModal}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>Filter Courses</Text>
          <TouchableOpacity onPress={() => setFilterModalVisible(false)}>
            <Ionicons name="close" size={24} color={colors.onSurface} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.filterOption}>
          <Text style={styles.filterOptionText}>By Term</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterOption}>
          <Text style={styles.filterOptionText}>By Instructor</Text>
        </TouchableOpacity>

        <View style={styles.filterActions}>
          <TouchableOpacity
            style={styles.resetButton}
            onPress={() => setFilterModalVisible(false)}
          >
            <Text style={styles.resetButtonText}>Reset</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.applyButton}
            onPress={() => setFilterModalVisible(false)}
          >
            <Text style={styles.applyButtonText}>Apply Filters (0)</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: spacing.lg,
    paddingTop: spacing.md,
  },
  title: {
    ...typography.headlineMedium,
    color: colors.onSurface,
    marginBottom: spacing.xs,
  },
  semester: {
    ...typography.bodyMedium,
    color: colors.primary,
  },
  filterButton: {
    marginHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: colors.outline,
    alignItems: "center",
    marginBottom: spacing.md,
  },
  filterButtonText: {
    ...typography.labelLarge,
    color: colors.onSurface,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surfaceContainerLow,
    marginHorizontal: spacing.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.full,
    marginBottom: spacing.lg,
  },
  searchIcon: {
    marginRight: spacing.sm,
  },
  searchInput: {
    flex: 1,
    ...typography.bodyLarge,
    color: colors.onSurface,
  },
  coursesList: {
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
    paddingBottom: spacing.xxl,
  },
  courseCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    padding: spacing.lg,
    borderRadius: borderRadius.lg,
    ...elevation.level1,
  },
  courseContent: {
    flex: 1,
  },
  courseCode: {
    ...typography.labelLarge,
    color: colors.primary,
    marginBottom: spacing.xxs,
  },
  courseName: {
    ...typography.titleMedium,
    color: colors.onSurface,
    marginBottom: spacing.xs,
  },
  instructorName: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  semesterModal: {
    backgroundColor: colors.white,
    borderTopLeftRadius: borderRadius.xl,
    borderTopRightRadius: borderRadius.xl,
    padding: spacing.xl,
    paddingBottom: spacing.xxl,
  },
  filterModal: {
    backgroundColor: colors.white,
    borderTopLeftRadius: borderRadius.xl,
    borderTopRightRadius: borderRadius.xl,
    padding: spacing.xl,
    maxHeight: "40%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.lg,
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
  filterOption: {
    paddingVertical: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.outlineVariant,
  },
  filterOptionText: {
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
  filterActions: {
    flexDirection: "row",
    gap: spacing.md,
    marginTop: spacing.xl,
  },
  resetButton: {
    flex: 1,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: colors.outline,
    alignItems: "center",
  },
  resetButtonText: {
    ...typography.labelLarge,
    color: colors.onSurface,
  },
  applyButton: {
    flex: 2,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
    alignItems: "center",
  },
  applyButtonText: {
    ...typography.labelLarge,
    color: colors.white,
  },
});
