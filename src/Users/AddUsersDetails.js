import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AddUserDetailsScreen = () => {
  const [userData, setUserData] = useState({
    userId: '',
    username: '',
    email: '',
    role: '',
  });

  const updateField = (field, value) => {
    setUserData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCancel = () => {
    console.log('Cancel pressed');
  };

  const handleSave = () => {
    console.log('Save pressed', userData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0a3c4c" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuIcon}>
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add User Details</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.notificationIcon}>
            <Text style={styles.iconText}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileIcon}>
            <Text style={styles.iconText}>👤</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.formContainer}>
          {/* User ID */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>User ID</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="User ID"
              value={userData.userId}
              onChangeText={text => updateField('userId', text)}
            />
          </View>

          {/* Username */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Username</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Username"
              value={userData.username}
              onChangeText={text => updateField('username', text)}
            />
          </View>

          {/* Email */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Email</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Email Address"
              value={userData.email}
              onChangeText={text => updateField('email', text)}
            />
          </View>

          {/* Role Picker */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Role</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={userData.role}
                onValueChange={(value) => updateField('role', value)}
                style={styles.picker}
              >
                <Picker.Item label="Select Role" value="" />
                <Picker.Item label="Admin" value="admin" />
                <Picker.Item label="User" value="user" />
                <Picker.Item label="Manager" value="manager" />
              </Picker>
            </View>
          </View>

          {/* Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomCard} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaf0f6',
  },
  header: {
    backgroundColor: '#0a3c4c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  menuIcon: {
    width: 24,
    height: 24,
    justifyContent: 'space-between',
    paddingVertical: 3,
  },
  menuLine: {
    height: 2,
    backgroundColor: 'white',
    borderRadius: 1,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 16,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  profileIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    color: 'white',
    fontSize: 14,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  rowLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0a3c4c',
    width: 100,
    marginRight: 16,
  },
  rowInput: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#0a3c4c',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 14,
    color: '#333',
  },
  pickerContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#0a3c4c',
    borderRadius: 8,
    overflow: 'hidden',
  },
  picker: {
    height: 48,
    width: '100%',
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  cancelButton: {
    flex: 0.48,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#0a3c4c',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#0a3c4c',
    fontWeight: '600',
    fontSize: 14,
  },
  saveButton: {
    flex: 0.48,
    backgroundColor: '#0a3c4c',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  bottomCard: {
    backgroundColor: '#08303a',
    minHeight: 60,
    width: '100%',
  },
});

export default AddUserDetailsScreen;
