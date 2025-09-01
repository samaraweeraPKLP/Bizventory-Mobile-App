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
  Platform
} from 'react-native';

const AddStaffDetailsScreen = () => {
  const [staffData, setStaffData] = useState({
    staffId: '',
    name: '',
    email: '',
    contact: '',
    position: '',
    department: '',
    hireDate: ''
  });

  const updateField = (field, value) => {
    setStaffData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCancel = () => {
    console.log('Cancel pressed');
  };

  const handleSave = () => {
    console.log('Save pressed', staffData);
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
        <Text style={styles.headerTitle}>Add Staff Details</Text>
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
          {/* Input Fields */}
          {[
            { label: 'Staff ID', field: 'staffId', placeholder: 'Staff ID' },
            { label: 'Name', field: 'name', placeholder: 'Name' },
            { label: 'Email', field: 'email', placeholder: 'Email Address' },
            { label: 'Contact', field: 'contact', placeholder: 'Contact Number' },
            { label: 'Position', field: 'position', placeholder: 'Position' },
            { label: 'Department', field: 'department', placeholder: 'Department' },
            { label: 'Hire Date', field: 'hireDate', placeholder: 'Hire Date' },
          ].map(({ label, field, placeholder }) => (
            <View style={styles.inputRow} key={field}>
              <Text style={styles.rowLabel}>{label}</Text>
              <TextInput
                style={styles.rowInput}
                placeholder={placeholder}
                placeholderTextColor="#999"
                value={staffData[field]}
                onChangeText={(value) => updateField(field, value)}
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
        </View>
      </ScrollView>

      <View style={styles.bottomCard} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2d6a6a',
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
    marginBottom: 16,
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
    color: '#2d6a6a',
    width: 120,
    marginRight: 16,
  },
  rowInput: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#2d6a6a',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 14,
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
    borderColor: '#2d6a6a',
    paddingVertical: 12,
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
    backgroundColor: '#1B4F56',
    minHeight: 60,
    width: '100%',
  },
});

export default AddStaffDetailsScreen;
