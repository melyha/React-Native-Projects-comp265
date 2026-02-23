import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Storage } from "@/components/utilities/db";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StorageDebugger() {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const keys = await AsyncStorage.getAllKeys();
    const entries = await AsyncStorage.multiGet(keys);
    const obj: any = {};
    entries.forEach(([k, v]) => {
      try {
        obj[k] = JSON.parse(v as string);
      } catch {
        obj[k] = v;
      }
    });
    setData(obj);
  };

  const clearStorage = () => {
    Storage.clearAllSync();
    setData({});
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Storage Debugger</Text>
        <Text style={styles.subtitle}>View all persisted data</Text>
        
        <View style={styles.dataContainer}>
          <Text selectable style={styles.data}>
            {JSON.stringify(data, null, 2) || "No data stored"}
          </Text>
        </View>

        <Button mode="contained" onPress={clearStorage} style={styles.button}>
          Clear All Storage
        </Button>
        <Button mode="outlined" onPress={loadData} style={styles.button}>
          Refresh Data
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  content: { padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 4 },
  subtitle: { fontSize: 14, color: "#666", marginBottom: 20 },
  dataContainer: {
    backgroundColor: "#1e1e1e",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  data: { fontSize: 12, fontFamily: "monospace", color: "#d4d4d4" },
  button: { marginBottom: 12 },
});