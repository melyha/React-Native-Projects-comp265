/**
 * DeadlineCard Component
 * Displays an assignment deadline with urgent badge
 */

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, borderRadius, elevation } from '@/constants/design-tokens';

interface DeadlineCardProps {
  courseCode: string;
  title: string;
  dueDate: string;
  isUrgent?: boolean;
  onPress?: () => void;
}

export default function DeadlineCard({ 
  courseCode, 
  title, 
  dueDate, 
  isUrgent = false,
  onPress 
}: DeadlineCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.courseCode}>{courseCode}</Text>
          {isUrgent && (
            <View style={styles.urgentBadge}>
              <Text style={styles.urgentText}>Urgent</Text>
            </View>
          )}
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.dueDate}>Due: {dueDate}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color={colors.outline} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    marginBottom: spacing.cardGap,
    ...elevation.level1,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  courseCode: {
    ...typography.labelLarge,
    color: colors.badgeCourse,
    marginRight: spacing.xs,
  },
  urgentBadge: {
    backgroundColor: colors.errorContainer,
    paddingHorizontal: spacing.xs,
    paddingVertical: spacing.xxs,
    borderRadius: borderRadius.xs,
  },
  urgentText: {
    ...typography.labelSmall,
    color: colors.badgeUrgent,
    fontWeight: '500',
  },
  title: {
    ...typography.bodyLarge,
    color: colors.onSurface,
    marginBottom: 4,
  },
  dueDate: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
});