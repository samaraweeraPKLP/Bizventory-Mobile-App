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
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

const AddSupplierDetailsScreen = ({ navigation }) => {
  const [supplierData, setSupplierData] = useState({
    supplierId: '',
    supplierName: '',
    email: '',
    contact: '',
    rating: '',
    accountNumber: '',
    accountOwner: '',
    bankName: '',
    branchName: '',
    isActive: true
  });

  const updateField = (field, value) => {
    setSupplierData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCancel = () => {
    console.log('Cancel pressed');
  };

  const handleSave = () => {
    console.log('Save pressed', supplierData);
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
        <Text style={styles.headerTitle}>Add Supplier Details</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.notificationIcon}>
            <Text style={styles.iconText}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileIcon}>
            <Text style={styles.iconText}>👤</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          {/* Supplier ID */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Supplier ID</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Supplier ID"
              value={supplierData.supplierId}
              onChangeText={(value) => updateField('supplierId', value)}
            />
          </View>

          {/* Supplier Name */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Supplier Name</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Supplier Name"
              value={supplierData.supplierName}
              onChangeText={(value) => updateField('supplierName', value)}
            />
          </View>

          {/* Email */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Email</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Email Address"
              value={supplierData.email}
              keyboardType="email-address"
              onChangeText={(value) => updateField('email', value)}
            />
          </View>

          {/* Contact */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Contact</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Contact Number"
              value={supplierData.contact}
              keyboardType="phone-pad"
              onChangeText={(value) => updateField('contact', value)}
            />
          </View>

            {/* Rating */}
            <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Rating (0-5)</Text>
            <View style={styles.pickerWrapper}>
                <Picker
                selectedValue={supplierData.rating}
                onValueChange={(value) => updateField('rating', value)}
                style={styles.picker}
                >
                <Picker.Item label="Select Rating" value="" />
                <Picker.Item label="0" value="0" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                </Picker>
            </View>
            </View>


          {/* Account Number */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Account Number</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Account Number"
              value={supplierData.accountNumber}
              keyboardType="numeric"
              onChangeText={(value) => updateField('accountNumber', value)}
            />
          </View>

          {/* Account Owner */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Account Owner</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Account Owner"
              value={supplierData.accountOwner}
              onChangeText={(value) => updateField('accountOwner', value)}
            />
          </View>

          {/* Bank Name */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Bank Name</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Select Bank"
              value={supplierData.bankName}
              onChangeText={(value) => updateField('bankName', value)}
            />
          </View>

          {/* Branch Name */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Branch Name</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Select Branch"
              value={supplierData.branchName}
              onChangeText={(value) => updateField('branchName', value)}
            />
          </View>

          {/* Is Active Checkbox */}
          <View style={styles.checkboxRow}>
            <TouchableOpacity 
              style={styles.checkboxContainer}
              onPress={() => updateField('isActive', !supplierData.isActive)}
            >
              <View style={[styles.checkbox, supplierData.isActive && styles.checkboxChecked]}>
                {supplierData.isActive && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.checkboxLabel}>Is Active</Text>
            </TouchableOpacity>
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
  content: { flex: 1, padding: 16 },
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
  checkboxRow: { marginBottom: 24 },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#2d6a6a',
    borderRadius: 3,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#2d6a6a',
  },
  checkmark: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  checkboxLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2d6a6a',
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
  pickerWrapper: {
  flex: 1,
  borderWidth: 1,
  borderColor: '#2d6a6a',
  borderRadius: 8,
  overflow: 'hidden',
},
picker: {
  height: 50,
  width: '100%',
  color: '#333',
},

});

export default AddSupplierDetailsScreen;