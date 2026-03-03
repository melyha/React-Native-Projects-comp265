import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
      <TouchableOpacity
        style={styles.overlay}
        onPress={onClose}
        activeOpacity={1}
      >
        <TouchableOpacity
          style={styles.drawer}
          activeOpacity={1}
          onPress={(e) => e.stopPropagation()}
        >
          <View style={styles.header}>
            <View style={styles.avatarContainer}>
              <Image
                source={require("@/assets/images/avatar.png")}
                style={styles.avatar}
              />
            </View>

            <View style={styles.userInfo}>
              <Text style={styles.name}>Melissa{"\n"}Wallace</Text>
              <Text style={styles.program}>
                Interactive Design and Technology
              </Text>
              <Text style={styles.studentId}>Student ID{"\n"}000 111 111</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.item}>
            <Ionicons name="person-outline" size={20} color="#364153" />
            <Text style={styles.itemText}>My Profile</Text>
            <Ionicons
              name="chevron-forward"
              size={16}
              color="#364153"
              style={styles.chevron}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Ionicons name="document-text-outline" size={20} color="#364153" />
            <Text style={styles.itemText}>Additional Resources</Text>
            <Ionicons
              name="chevron-forward"
              size={16}
              color="#364153"
              style={styles.chevron}
            />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.item}>
            <Ionicons name="notifications-outline" size={20} color="#364153" />
            <Text style={styles.itemText}>Notifications</Text>
            <Ionicons
              name="chevron-forward"
              size={16}
              color="#364153"
              style={styles.chevron}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Ionicons name="sunny-outline" size={20} color="#364153" />
            <Text style={styles.itemText}>Dark Mode</Text>
            <Ionicons
              name="chevron-forward"
              size={16}
              color="#364153"
              style={styles.chevron}
            />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.item}>
            <Image
              source={require("@/assets/images/spsa-logo.png")}
              style={styles.logo}
            />
            <Text style={styles.itemText}>SPSA Connect</Text>
            <Ionicons
              name="chevron-forward"
              size={16}
              color="#364153"
              style={styles.chevron}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Image
              source={require("@/assets/images/fitness-logo.png")}
              style={styles.logo}
            />
            <Text style={styles.itemText}>SaskPolytech Fitness & Rec</Text>
            <Ionicons
              name="chevron-forward"
              size={16}
              color="#364153"
              style={styles.chevron}
            />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.item}>
            <Ionicons name="settings-outline" size={20} color="#364153" />
            <Text style={styles.itemText}>Settings</Text>
            <Ionicons
              name="chevron-forward"
              size={16}
              color="#364153"
              style={styles.chevron}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Ionicons name="log-out-outline" size={20} color="#E7000B" />
            <Text style={[styles.itemText, styles.logoutText]}>Log Out</Text>
            <Ionicons
              name="chevron-forward"
              size={16}
              color="#364153"
              style={styles.chevron}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  drawer: {
    width: 305,
    height: "100%",
    backgroundColor: "white",

  },
  header: {
    backgroundColor: '#6B46C1',
    padding: 29,
  paddingTop: 68,
  height: 342,
  },

  avatarContainer: {
  marginBottom: 10,
},
avatar: {
  width: 83,
  height: 83,
  borderRadius: 41.5,
  marginLeft: 5,
},
userInfo: {
  gap: 3,
},

  name: {
     fontSize: 22,
  fontWeight: '400',
  color: 'white',
  lineHeight: 28,
    marginBottom: 4,
  },
  program: {
  fontSize: 12,
  color: 'white',
  lineHeight: 16,
},
studentId: {
  fontSize: 12,
  color: 'white',
  lineHeight: 16,
},
item: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 24,
  height: 44,
},
itemText: {
  fontSize: 14,
  color: '#364153',
  flex: 1,
  marginLeft: 12,
},
logoutText: {
  color: '#E7000B',
},
chevron: {
  opacity: 0.5,
},
divider: {
  height: 1,
  backgroundColor: '#E5E7EB',
  marginVertical: 17,
  marginHorizontal: 17,
},
logo: {
  width: 35,
  height: 35,
},
});
