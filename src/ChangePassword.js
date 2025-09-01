import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  Platform,
} from 'react-native';

const ChangePasswordScreen = () => {
  const [form, setForm] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSave = () => {
    console.log('Password Change Data:', form);
    // Add validation or API call here
  };

  const handleCancel = () => {
    setForm({
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#2d6a6a" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuIcon}>
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Change Password</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.notificationIcon}>
            <Text style={styles.iconText}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileIcon}>
            <Text style={styles.iconText}>SS</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Image Placeholder */}
        <View style={styles.imageContainer}>
          <View style={styles.imageGradient}>
            <Text style={styles.imageIcon}>👤</Text>
          </View>
        </View>

        {/* Input Fields */}
        {[
          { label: 'Old Password', key: 'oldPassword' },
          { label: 'New Password', key: 'newPassword' },
          { label: 'Confirm Password', key: 'confirmPassword' },
        ].map(({ label, key }) => (
          <View key={key} style={styles.inputRow}>
            <Text style={styles.rowLabel}>{label}</Text>
            <TextInput
              style={styles.rowInput}
              placeholder={label}
              placeholderTextColor="#999"
              secureTextEntry
              value={form[key]}
              onChangeText={(text) => handleChange(key, text)}
            />
          </View>
        ))}

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomCard} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: {
    backgroundColor: '#2d6a6a',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  menuIcon: { width: 24, height: 24, justifyContent: 'space-between', paddingVertical: 3 },
  menuLine: { height: 2, backgroundColor: 'white', borderRadius: 1 },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 16,
  },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  notificationIcon: {
    width: 32, height: 32, borderRadius: 16, backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center', justifyContent: 'center', marginRight: 8
  },
  profileIcon: {
    width: 32, height: 32, borderRadius: 16, backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center', justifyContent: 'center',
  },
  iconText: { color: 'white', fontSize: 14 },
  content: { flex: 1, padding: 16 },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  imageGradient: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f37335',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageIcon: {
    fontSize: 40,
    color: '#fff',
  },
  inputRow: { marginBottom: 16 },
  rowLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2d6a6a',
    marginBottom: 6,
  },
  rowInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#2d6a6a',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 14,
    color: '#333',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: { elevation: 1 },
    }),
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 25,
  },
  cancelButton: {
    flex: 0.48,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#2d6a6a',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#2d6a6a',
    fontWeight: '600',
    fontSize: 14,
  },
  saveButton: {
    flex: 0.48,
    backgroundColor: '#2d6a6a',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  bottomCard: {
    backgroundColor: '#1B4F56',
    minHeight: 60,
    width: '100%',
  },
});

export default ChangePasswordScreen;
