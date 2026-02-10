import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface DrawerProps {
  visible: boolean;
  onClose: () => void;
}

export default function Drawer({ visible, onClose }: DrawerProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.overlay} onPress={onClose}>
        <View style={styles.drawer}>
          <View style={styles.header}>
            <Text style={styles.name}>Cassandra Wellington</Text>
            <Text style={styles.program}>Interactive Design and Technology</Text>
          </View>

          <TouchableOpacity style={styles.item}>
            <Ionicons name="person-outline" size={20} color="#1D1B20" />
            <Text style={styles.itemText}>My Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Ionicons name="settings-outline" size={20} color="#1D1B20" />
            <Text style={styles.itemText}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Ionicons name="log-out-outline" size={20} color="#B3261E" />
            <Text style={[styles.itemText, { color: '#B3261E' }]}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  drawer: {
    width: '80%',
    height: '100%',
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E0E9',
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1D1B20',
    marginBottom: 4,
  },
  program: {
    fontSize: 14,
    color: '#79747E',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    gap: 16,
  },
  itemText: {
    fontSize: 16,
    color: '#1D1B20',
  },
});