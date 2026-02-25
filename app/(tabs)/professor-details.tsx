/**
 * Professor Details Screen
 * Shows professor contact info, office hours, and courses
 */

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, borderRadius, elevation } from '@/constants/design-tokens';

export default function ProfessorDetailsScreen() {
  const params = useLocalSearchParams();
  const { professorName, courseCode } = params;

  // Generic email format
  const email = 'john.doe@saskpolytech.ca';
  const zoomLink = 'https://zoom.us/j/123456789';
  const officeRoom = '243.7';
  const campus = 'Saskatoon Campus';

  const handleSendEmail = () => {
    Linking.openURL(`mailto:${email}`);
  };

  const handleJoinZoom = () => {
    Linking.openURL(zoomLink).catch(() => {
      Alert.alert('Error', 'Could not open Zoom link');
    });
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

        {/* Professor Info */}
        <View style={styles.profileSection}>
          <View style={styles.avatarPlaceholder}>
            <Ionicons name="person" size={48} color={colors.white} />
          </View>
          <Text style={styles.professorName}>{professorName}</Text>
          <Text style={styles.professorTitle}>Professor</Text>
        </View>

        {/* Contact Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Information</Text>

          <View style={styles.contactCard}>
            <View style={styles.contactItem}>
              <Ionicons name="mail" size={20} color={colors.primary} />
              <View style={styles.contactContent}>
                <Text style={styles.contactLabel}>Email</Text>
                <Text style={styles.contactValue}>{email}</Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.contactItem}>
              <Ionicons name="videocam" size={20} color={colors.primary} />
              <View style={styles.contactContent}>
                <Text style={styles.contactLabel}>Zoom</Text>
                <Text style={styles.contactValue}>Also available on Zoom</Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.contactItem}>
              <Ionicons name="business" size={20} color={colors.primary} />
              <View style={styles.contactContent}>
                <Text style={styles.contactLabel}>Office</Text>
                <Text style={styles.contactValue}>Room {officeRoom}</Text>
                <Text style={styles.contactSubtext}>{campus}</Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.contactItem}>
              <Ionicons name="map" size={20} color={colors.primary} />
              <View style={styles.contactContent}>
                <Text style={styles.contactLabel}>Campus Map</Text>
                <Text style={styles.contactValue}>View office location</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Office Hours */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Office Hours</Text>

          <View style={styles.officeHoursCard}>
            <View style={styles.officeHourItem}>
              <View style={styles.dayDot} />
              <View style={styles.officeHourContent}>
                <Text style={styles.dayText}>Monday</Text>
                <Text style={styles.timeText}>2:00 PM - 4:00 PM</Text>
              </View>
            </View>

            <View style={styles.officeHourItem}>
              <View style={styles.dayDot} />
              <View style={styles.officeHourContent}>
                <Text style={styles.dayText}>Wednesday</Text>
                <Text style={styles.timeText}>2:00 PM - 4:00 PM</Text>
              </View>
            </View>

            <View style={styles.officeHourItem}>
              <View style={styles.dayDot} />
              <View style={styles.officeHourContent}>
                <Text style={styles.dayText}>By Appointment</Text>
                <Text style={styles.timeText}>Contact via email</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Courses Teaching */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Courses Teaching (This Semester)</Text>

          <TouchableOpacity style={styles.courseItem}>
            <View style={styles.courseContent}>
              <Text style={styles.courseCode}>COMP265</Text>
              <Text style={styles.courseTitle}>Mobile Application Development</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.outline} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.courseItem}>
            <View style={styles.courseContent}>
              <Text style={styles.courseCode}>MULT213</Text>
              <Text style={styles.courseTitle}>Web Development 5</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.outline} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.courseItem}>
            <View style={styles.courseContent}>
              <Text style={styles.courseCode}>MULT212</Text>
              <Text style={styles.courseTitle}>3D Fundamentals 2</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.outline} />
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionButton} onPress={handleSendEmail}>
            <Ionicons name="mail" size={24} color={colors.white} />
            <Text style={styles.actionButtonText}>Send Email</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButtonOutline} onPress={handleJoinZoom}>
            <Ionicons name="videocam" size={24} color={colors.primary} />
            <Text style={styles.actionButtonTextOutline}>Join Zoom</Text>
          </TouchableOpacity>
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
    padding: spacing.sm,
    alignSelf: 'flex-start',
  },
  profileSection: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    paddingBottom: spacing.xl,
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primaryContainer,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  professorName: {
    ...typography.headlineSmall,
    color: colors.white,
    marginBottom: spacing.xxs,
  },
  professorTitle: {
    ...typography.bodyMedium,
    color: colors.white,
    opacity: 0.9,
  },
  section: {
    padding: spacing.lg,
  },
  sectionTitle: {
    ...typography.titleLarge,
    color: colors.onSurface,
    marginBottom: spacing.md,
  },
  contactCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    ...elevation.level1,
  },
  contactItem: {
    flexDirection: 'row',
    gap: spacing.md,
    paddingVertical: spacing.sm,
  },
  contactContent: {
    flex: 1,
  },
  contactLabel: {
    ...typography.labelMedium,
    color: colors.textSecondary,
    marginBottom: spacing.xxs,
  },
  contactValue: {
    ...typography.bodyLarge,
    color: colors.onSurface,
  },
  contactSubtext: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginTop: spacing.xxs,
  },
  divider: {
    height: 1,
    backgroundColor: colors.outlineVariant,
    marginVertical: spacing.xs,
  },
  officeHoursCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    ...elevation.level1,
  },
  officeHourItem: {
    flexDirection: 'row',
    gap: spacing.md,
    paddingVertical: spacing.sm,
    alignItems: 'center',
  },
  dayDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  officeHourContent: {
    flex: 1,
  },
  dayText: {
    ...typography.bodyLarge,
    color: colors.onSurface,
    marginBottom: spacing.xxs,
  },
  timeText: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
  },
  courseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    marginBottom: spacing.sm,
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
  courseTitle: {
    ...typography.bodyLarge,
    color: colors.onSurface,
  },
  quickActions: {
    padding: spacing.lg,
    gap: spacing.md,
    paddingBottom: spacing.xxl,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.lg,
    ...elevation.level1,
  },
  actionButtonText: {
    ...typography.labelLarge,
    color: colors.white,
  },
  actionButtonOutline: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    backgroundColor: colors.white,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.primary,
    ...elevation.level1,
  },
  actionButtonTextOutline: {
    ...typography.labelLarge,
    color: colors.primary,
  },
});
