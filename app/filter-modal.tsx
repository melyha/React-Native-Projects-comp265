import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import {
  colors,
  typography,
  spacing,
  borderRadius,
} from "@/constants/design-tokens";

export default function FilterModal() {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.title}>Filter Courses</Text>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>By Term</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>By Instructor</Text>
        </TouchableOpacity>

        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.resetButton}
            onPress={() => router.back()}
          >
            <Text style={styles.resetText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.applyButton}
            onPress={() => router.back()}
          >
            <Text style={styles.applyText}>Apply Filters</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modal: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    width: "90%",
    maxWidth: 400,
  },
  title: {
    ...typography.titleLarge,
    color: colors.onSurface,
    marginBottom: spacing.lg,
  },
  option: {
    paddingVertical: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.outlineVariant,
  },
  optionText: { ...typography.bodyLarge, color: colors.onSurface },
  actions: { flexDirection: "row", gap: spacing.md, marginTop: spacing.xl },
  resetButton: {
    flex: 1,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: colors.outline,
    alignItems: "center",
  },
  resetText: { ...typography.labelLarge, color: colors.onSurface },
  applyButton: {
    flex: 2,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
    alignItems: "center",
  },
  applyText: { ...typography.labelLarge, color: colors.white },
});
