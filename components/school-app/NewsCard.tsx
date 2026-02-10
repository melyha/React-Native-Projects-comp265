/**
 * NewsCard Component
 * Displays news with image and action button
 */

import React from "react";
import { Button } from "react-native-paper";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import {
  colors,
  typography,
  spacing,
  borderRadius,
  elevation,
} from "@/constants/design-tokens";

interface NewsCardProps {
  title: string;
  date: string;
  description: string;
  buttonText: string;
  imageUrl?: string;
  backgroundColor?: string;
  onPress?: () => void;
}

export default function NewsCard({
  title,
  date,
  description,
  buttonText,
  imageUrl,
  backgroundColor = colors.white,
  onPress,
}: NewsCardProps) {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      {/* Image (if provided) */}
      {imageUrl && (
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
      )}

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.description}>{description}</Text>

        {/* Button */}
        <Button
          mode={backgroundColor !== colors.white ? "contained" : "outlined"}
          onPress={onPress}
          style={{ marginTop: 8 }}
          labelStyle={{ fontSize: 14 }}
        >
          {buttonText}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: borderRadius.md,
    marginBottom: spacing.cardGap,
    overflow: "hidden",
    ...elevation.level1,
  },
  image: {
    width: "100%",
    height: 150,
    backgroundColor: colors.surfaceContainer,
  },
  content: {
    padding: spacing.md,
  },
  title: {
    ...typography.titleMedium,
    color: colors.onSurface,
    marginBottom: 4,
  },
  date: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  description: {
    ...typography.bodyMedium,
    color: colors.onSurfaceVariant,
    marginBottom: spacing.md,
  },
  button: {
    alignSelf: "flex-start",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.outline,
  },
  buttonText: {
    ...typography.labelLarge,
    color: colors.primary,
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  buttonTextPrimary: {
    color: colors.onPrimary,
  },
});
