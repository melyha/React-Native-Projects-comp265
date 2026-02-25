/**
 * Courses List Screen
 * Shows all enrolled courses with search and filter
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, borderRadius, elevation } from '@/constants/design-tokens';

// Sample course data (later from storage/API)
const COURSES_DATA = [
  {
    id: '1',
    code: 'COMP265',
    name: 'Introduction to Mobile Application Development',
    instructor: 'Jesse Rolheiser',
    term: 'Winter 2025/2026',
    credits: 3,
    progress: 65,
  },
  {
    id: '2',
    code: 'MULT215',
    name: 'Immersive Technologies 1',
    instructor: 'Arlin Schaffel',
    term: 'Winter 2025/2026',
    credits: 3,
    progress: 72,
  },
  {
    id: '3',
    code: 'MULT208',
    name: 'Emerging Interactive Technologies',
    instructor: 'Arlin Schaffel',
    term: 'Winter 2025/2026',
    credits: 3,
    progress: 68,
  },
  {
    id: '4',
    code: 'MULT212',
    name: '3D Fundamentals 2',
    instructor: 'Jesse Rolheiser',
    term: 'Winter 2025/2026',
    credits: 3,
    progress: 81,
  },
];

export default function CoursesScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(COURSES_DATA);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text.trim() === '') {
      setFilteredCourses(COURSES_DATA);
    } else {
      const filtered = COURSES_DATA.filter(
        (course) =>
          course.code.toLowerCase().includes(text.toLowerCase()) ||
          course.name.toLowerCase().includes(text.toLowerCase()) ||
          course.instructor.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredCourses(filtered);
    }
  };

  const handleCoursePress = (course: any) => {
    router.push({
      pathname: '/course-details',
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
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>My Courses</Text>
          <Text style={styles.semester}>2025/2026 Winter Semester</Text>
        </View>

        {/* Filter Button */}
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Filter Courses</Text>
        </TouchableOpacity>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={colors.outline} style={styles.searchIcon} />
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
              <Ionicons name="chevron-forward" size={20} color={colors.outline} />
            </TouchableOpacity>
          ))}
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
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  filterButtonText: {
    ...typography.labelLarge,
    color: colors.onSurface,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    color: colors.badgeCourse,
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
});