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

const SuppliersBankDetailsScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    supplierId: '',
    name: '',
    accountNo: '',
    bankName: '',
    branch: '',
  });

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleCancel = () => {
    setForm({
      supplierId: '',
      name: '',
      accountNo: '',
      bankName: '',
      branch: '',
    });
  };

  const handleSave = () => {
    console.log('Saved Data:', form);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#2d6a6a" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => navigation.openDrawer()}
        >
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Suppliers Bank Details</Text>

        <View style={styles.headerRight}>
          <TouchableOpacity
            style={styles.notificationIcon}
            onPress={() => navigation.navigate('Notifications')}
          >
            <Text style={styles.iconText}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileIcon}
            onPress={() => navigation.navigate('UserProfile')}
          >
            <Text style={styles.iconText}>SS</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Form */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.inputRow}>
          <Text style={styles.rowLabel}>Supplier ID</Text>
          <TextInput
            style={styles.rowInput}
            placeholder="Supplier ID"
            placeholderTextColor="#999"
            value={form.supplierId}
            onChangeText={(text) => updateField('supplierId', text)}
          />
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.rowLabel}>Name</Text>
          <TextInput
            style={styles.rowInput}
            placeholder="Name"
            placeholderTextColor="#999"
            value={form.name}
            onChangeText={(text) => updateField('name', text)}
          />
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.rowLabel}>Account No.</Text>
          <TextInput
            style={styles.rowInput}
            placeholder="Account Number"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={form.accountNo}
            onChangeText={(text) => updateField('accountNo', text)}
          />
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.rowLabel}>Bank Name</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={form.bankName}
              onValueChange={(value) => updateField('bankName', value)}
            >
              <Picker.Item label="Bank name" value="" />
              <Picker.Item label="Bank of America" value="BOA" />
              <Picker.Item label="Wells Fargo" value="WF" />
              <Picker.Item label="CitiBank" value="CITI" />
            </Picker>
          </View>
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.rowLabel}>Branch</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={form.branch}
              onValueChange={(value) => updateField('branch', value)}
            >
              <Picker.Item label="Bank Branch" value="" />
              <Picker.Item label="New York" value="NY" />
              <Picker.Item label="California" value="CA" />
              <Picker.Item label="Texas" value="TX" />
            </Picker>
          </View>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomCard}></View>
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
  menuIcon: {
    width: 24,
    height: 24,
    justifyContent: 'space-between',
    paddingVertical: 3,
  },
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
  iconText: { color: 'white', fontSize: 14 },
  content: { flex: 1, padding: 16 },
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
      android: {
        elevation: 1,
      },
    }),
  },
  pickerWrapper: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#2d6a6a',
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
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
  bottomCard: { backgroundColor: '#1B4F56', minHeight: 60, width: '100%' },
});

export default SuppliersBankDetailsScreen;
