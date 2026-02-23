/**
 * DeadlineCard Component
 * Displays an assignment deadline with urgent badge
 * * Displays an assignment deadline with swipe-to-delete and complete button
 */

import React,  { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {
  colors,
  typography,
  spacing,
  borderRadius,
  elevation,
} from "@/constants/design-tokens";

interface DeadlineCardProps {
  courseCode: string;
  title: string;
  dueDate: string;
  isUrgent?: boolean;
  completed?: boolean;
  onPress?: () => void;
  onComplete?: () => void;
  onDelete?: () => void;
}

export default function DeadlineCard({
  courseCode,
  title,
  dueDate,
  isUrgent = false,
  completed = false,
  onPress,
  onComplete,
  onDelete,
}: DeadlineCardProps) {
  const swipeableRef = useRef<Swipeable>(null);

  // Right swipe action (delete)
  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>,
  ) => {
    const trans = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [0, 100],
      extrapolate: "clamp",
    });

    return (
      <Animated.View
        style={[
          styles.deleteAction,
          {
            transform: [{ translateX: trans }],
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            swipeableRef.current?.close();
            onDelete?.();
          }}
          style={styles.deleteButton}
        >
          <Ionicons name="trash-outline" size={24} color="white" />
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <Swipeable
      ref={swipeableRef}
      renderRightActions={onDelete ? renderRightActions : undefined}
      overshootRight={false}
      friction={2}
    >
      <TouchableOpacity
        style={[styles.card, completed && styles.cardCompleted]}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <Text
              style={[styles.courseCode, completed && styles.completedText]}
            >
              {courseCode}
            </Text>
            {isUrgent && !completed && (
              <View style={styles.urgentBadge}>
                <Text style={styles.urgentText}>Urgent</Text>
              </View>
            )}
            {completed && (
              <View style={styles.completedBadge}>
                <Text style={styles.completedBadgeText}>✓ Done</Text>
              </View>
            )}
          </View>
          <Text style={[styles.title, completed && styles.completedText]}>
            {title}
          </Text>
          <Text style={[styles.dueDate, completed && styles.completedText]}>
            Due: {dueDate}
          </Text>
        </View>

        {/* Complete Button */}
        {onComplete && !completed && (
          <TouchableOpacity
            onPress={(e) => {
              e.stopPropagation();
              onComplete();
            }}
            style={styles.completeButton}
          >
            <View style={styles.completeCircle}>
              <Ionicons name="checkmark" size={18} color="white" />
            </View>
          </TouchableOpacity>
        )}

        {/* Chevron for completed items */}
        {completed && (
          <Ionicons name="chevron-forward" size={20} color={colors.outline} />
        )}
      </TouchableOpacity>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    marginBottom: spacing.cardGap,
    ...elevation.level1,
  },
  cardCompleted: {
    opacity: 0.6,
    backgroundColor: colors.surfaceContainerLow,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
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
    fontWeight: "500",
  },
  completedBadge: {
    backgroundColor: "#E8F5E9",
    paddingHorizontal: spacing.xs,
    paddingVertical: spacing.xxs,
    borderRadius: borderRadius.xs,
  },
  completedBadgeText: {
    ...typography.labelSmall,
    color: "#2E7D32",
    fontWeight: "500",
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
  completedText: {
    textDecorationLine: "line-through",
    opacity: 0.7,
  },

  // Complete Button
  completeButton: {
    marginLeft: spacing.sm,
  },
  completeCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#4CAF50", // Green
    justifyContent: "center",
    alignItems: "center",
    ...elevation.level1,
  },

  // Swipe Delete Action
  deleteAction: {
    backgroundColor: "#F44336", // Red
    justifyContent: "center",
    alignItems: "flex-end",
    borderRadius: borderRadius.md,
    marginBottom: spacing.cardGap,
    paddingRight: spacing.lg,
  },
  deleteButton: {
    width: 80,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  deleteText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
    marginTop: 4,
  },
});
