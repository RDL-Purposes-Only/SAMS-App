import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

export default function ProfileTab() {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <SafeAreaView style={styles.container}>
      {/* Profile Info */}
      {activeTab === "Profile" && (
        <View style={styles.profileSection}>
          <Image
            source={{
              uri: "https://i.pravatar.cc/200",
            }}
            style={styles.avatar}
          />
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.email}>johndoe@example.com</Text>
        </View>
      )}

      {/* Settings Info */}
      {activeTab === "Settings" && (
        <View style={styles.settingsSection}>
          <Text style={styles.settingsTitle}>Settings</Text>
          <Text>- Change Password</Text>
          <Text>- Privacy Policy</Text>
          <Text>- Logout</Text>
        </View>
      )}

      {/* Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "Profile" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("Profile")}
        >
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "Settings" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("Settings")}
        >
          <Text style={styles.tabText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    justifyContent: "space-between",
  },
  profileSection: {
    alignItems: "center",
    marginTop: 50,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#ddd",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 15,
  },
  email: {
    fontSize: 16,
    color: "#555",
  },
  settingsSection: {
    padding: 20,
  },
  settingsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  tabBar: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "#fff",
  },
  tabButton: {
    flex: 1,
    padding: 15,
    alignItems: "center",
  },
  activeTab: {
    borderTopWidth: 3,
    borderTopColor: "#007AFF",
  },
  tabText: {
    fontSize: 16,
  },
});
