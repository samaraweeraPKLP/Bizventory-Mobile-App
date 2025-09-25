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
import { Ionicons } from '@expo/vector-icons';


const UserProfileScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    staffId: '',
    name: '',
    email: '',
    contact: '',
    position: '',
    department: '',
    hireDate: '',
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSave = () => {
    console.log('Saved Profile:', form);
  };

  const handleCancel = () => {
    setForm({
      staffId: '',
      name: '',
      email: '',
      contact: '',
      position: '',
      department: '',
      hireDate: '',
    });
  };

  const handleMenuPress = () => {
    navigation.openDrawer();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#2d6a6a" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
          <Ionicons name="menu" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>User Profile</Text>
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
        {/* Profile Image */}
        <View style={styles.imageContainer}>
          <View style={styles.imagePlaceholder}>
            <Text style={styles.imageIcon}>👤</Text>
          </View>
          <Text style={styles.imageText}>Add Profile Image</Text>
        </View>

        {/* Input Fields */}
        {[
          { label: 'Staff ID', key: 'staffId' },
          { label: 'Name', key: 'name' },
          { label: 'Email', key: 'email', keyboardType: 'email-address' },
          { label: 'Contact', key: 'contact', keyboardType: 'phone-pad' },
          { label: 'Position', key: 'position' },
          { label: 'Department', key: 'department' },
          { label: 'Hire Date', key: 'hireDate' },
        ].map(({ label, key, keyboardType }) => (
          <View key={key} style={styles.inputRow}>
            <Text style={styles.rowLabel}>{label}</Text>
            <TextInput
              style={styles.rowInput}
              placeholder={label}
              placeholderTextColor="#999"
              value={form[key]}
              keyboardType={keyboardType || 'default'}
              onChangeText={(text) => handleChange(key, text)}
            />
          </View>
        ))}

        {/* Action Buttons */}
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
  menuButton: { padding: 4 },
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
  imagePlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: '#e0e0e0',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  imageIcon: {
    fontSize: 32,
  },
  imageText: {
    fontSize: 14,
    color: '#888',
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
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 25 },
  cancelButton: {
    flex: 0.48, backgroundColor: 'white', borderWidth: 1, borderColor: '#2d6a6a',
    paddingVertical: 10, borderRadius: 6, alignItems: 'center'
  },
  cancelButtonText: { color: '#2d6a6a', fontWeight: '600', fontSize: 14 },
  saveButton: {
    flex: 0.48, backgroundColor: '#2d6a6a',
    paddingVertical: 10, borderRadius: 6, alignItems: 'center'
  },
  saveButtonText: { color: 'white', fontWeight: '600', fontSize: 14 },
  bottomCard: { backgroundColor: '#1B4F56', minHeight: 60, width: '100%' },
});

export default UserProfileScreen;
