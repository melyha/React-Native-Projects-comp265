/**
 * Grade Details Screen
 * Shows detailed grade breakdown for a specific course
 */

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, borderRadius, elevation } from '@/constants/design-tokens';

// Sample evaluation data
const EVALUATION_DATA = [
  {
    id: '1',
    title: 'Exercise 1',
    type: 'Exercise',
    date: 'Oct 31, 2025',
    score: 90,
    maxScore: 100,
    percentage: 90,
  },
  {
    id: '2',
    title: 'Quiz 1',
    type: 'Quiz',
    date: 'Nov 1, 2025',
    score: 78,
    maxScore: 100,
    percentage: 78,
  },
  {
    id: '3',
    title: 'Quiz 2',
    type: 'Quiz',
    date: 'Nov 7, 2025',
    score: 82,
    maxScore: 100,
    percentage: 82,
  },
  {
    id: '4',
    title: 'Quiz 3',
    type: 'Quiz',
    date: 'Nov 19, 2025',
    score: 80,
    maxScore: 100,
    percentage: 80,
  },
  {
    id: '5',
    title: 'Quiz 4',
    type: 'Quiz',
    date: 'Nov 24, 2025',
    score: 79,
    maxScore: 100,
    percentage: 79,
  },
  {
    id: '6',
    title: 'Assignment 1',
    type: 'Assignment',
    date: 'Nov 27, 2025',
    score: 75,
    maxScore: 100,
    percentage: 75,
  },
  {
    id: '7',
    title: 'Quiz 5',
    type: 'Quiz',
    date: 'Dec 7, 2025',
    score: 81,
    maxScore: 100,
    percentage: 81,
  },
  {
    id: '8',
    title: 'Assignment 2',
    type: 'Assignment',
    date: 'Dec 8, 2025',
    score: 88,
    maxScore: 100,
    percentage: 88,
  },
  {
    id: '9',
    title: 'Assignment 3',
    type: 'Assignment',
    date: 'Dec 19, 2025',
    score: 84,
    maxScore: 100,
    percentage: 84,
  },
];

export default function GradeDetailsScreen() {
  const params = useLocalSearchParams();
  const { courseCode, courseName, percentage } = params;

  const getScoreColor = (score: number) => {
    if (score >= 90) return '#00C950'; // Green for A
    if (score >= 80) return '#00C950'; // Green for B
    if (score >= 70) return '#FFA500'; // Orange for C
    if (score >= 60) return '#FFA500'; // Orange for D
    return '#EF4444'; // Red for F
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color={colors.white} />
          </TouchableOpacity>
        </View>

        {/* Course Info */}
        <View style={styles.courseInfo}>
          <Text style={styles.courseCode}>{courseCode}</Text>
          <Text style={styles.courseName}>{courseName}</Text>
        </View>

        {/* Current Grade Display */}
        <View style={styles.currentGradeSection}>
          <Text style={styles.currentGradeLabel}>Current Grade</Text>
          <Text style={styles.currentGradeValue}>{percentage}%</Text>
        </View>

        {/* Evaluation Summary */}
        <View style={styles.summarySection}>
          <Text style={styles.sectionTitle}>Evaluation Summary</Text>

          <View style={styles.evaluationsList}>
            {EVALUATION_DATA.map((evaluation) => (
              <View key={evaluation.id} style={styles.evaluationCard}>
                <View style={styles.evaluationContent}>
                  <Text style={styles.evaluationTitle}>{evaluation.title}</Text>
                  <Text style={styles.evaluationMeta}>
                    {evaluation.type} • {evaluation.date}
                  </Text>
                </View>

                <View style={styles.scoreDisplay}>
                  <Text
                    style={[
                      styles.scoreText,
                      { color: getScoreColor(evaluation.percentage) },
                    ]}
                  >
                    {evaluation.score}/{evaluation.maxScore}
                  </Text>
                  <Text style={styles.percentageText}>{evaluation.percentage}%</Text>
                </View>
              </View>
            ))}
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
    padding: spacing.md,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  courseInfo: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
  },
  courseCode: {
    ...typography.labelMedium,
    color: colors.white,
    opacity: 0.9,
    marginBottom: spacing.xxs,
  },
  courseName: {
    ...typography.titleLarge,
    color: colors.white,
  },
  currentGradeSection: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  currentGradeLabel: {
    ...typography.bodyMedium,
    color: colors.white,
    opacity: 0.75,
    marginBottom: spacing.xxs,
  },
  currentGradeValue: {
    ...typography.headlineLarge,
    color: colors.white,
    fontSize: 32,
  },
  summarySection: {
    backgroundColor: colors.white,
    padding: spacing.lg,
    paddingTop: spacing.xl,
  },
  sectionTitle: {
    ...typography.titleMedium,
    color: colors.onSurface,
    marginBottom: spacing.md,
  },
  evaluationsList: {
    gap: spacing.sm,
  },
  evaluationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: spacing.lg,
    borderRadius: borderRadius.md,
    ...elevation.level1,
  },
  evaluationContent: {
    flex: 1,
  },
  evaluationTitle: {
    ...typography.bodyMedium,
    color: colors.onSurface,
    marginBottom: spacing.xxs,
  },
  evaluationMeta: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  scoreDisplay: {
    alignItems: 'flex-end',
  },
  scoreText: {
    ...typography.titleMedium,
    marginBottom: spacing.xxs,
  },
  percentageText: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
  },
});