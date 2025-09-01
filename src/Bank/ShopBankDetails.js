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

const ShopBankDetailsScreen = () => {
  const [bankDetails, setBankDetails] = useState({
    invoiceNo: '',
    cardType: '',
    nameOnCard: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    vcc: ''
  });

  const updateField = (field, value) => {
    setBankDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log('Saved details:', bankDetails);
  };

  const handleCancel = () => {
    setBankDetails({
      invoiceNo: '',
      cardType: '',
      nameOnCard: '',
      cardNumber: '',
      expMonth: '',
      expYear: '',
      vcc: ''
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
        <Text style={styles.headerTitle}>Shop Bank Details</Text>
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
        {/* Invoice No */}
        <View style={styles.inputRow}>
          <Text style={styles.rowLabel}>Invoice No</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={bankDetails.invoiceNo}
              onValueChange={(value) => updateField('invoiceNo', value)}
            >
              <Picker.Item label="Select Invoice" value="" />
              <Picker.Item label="INV-1001" value="INV-1001" />
              <Picker.Item label="INV-1002" value="INV-1002" />
              <Picker.Item label="INV-1003" value="INV-1003" />
            </Picker>
          </View>
        </View>

        {/* Card Type */}
        <View style={styles.inputRow}>
          <Text style={styles.rowLabel}>Card Type</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={bankDetails.cardType}
              onValueChange={(value) => updateField('cardType', value)}
            >
              <Picker.Item label="Select Card Type" value="" />
              <Picker.Item label="Visa" value="Visa" />
              <Picker.Item label="MasterCard" value="MasterCard" />
              <Picker.Item label="Amex" value="Amex" />
            </Picker>
          </View>
        </View>

        {/* Name on Card */}
        <View style={styles.inputRow}>
          <Text style={styles.rowLabel}>Name on Card</Text>
          <TextInput
            style={styles.rowInput}
            placeholder="Name on Card"
            placeholderTextColor="#999"
            value={bankDetails.nameOnCard}
            onChangeText={(value) => updateField('nameOnCard', value)}
          />
        </View>

        {/* Card Number */}
        <View style={styles.inputRow}>
          <Text style={styles.rowLabel}>Card Number</Text>
          <TextInput
            style={styles.rowInput}
            placeholder="Card Number"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={bankDetails.cardNumber}
            onChangeText={(value) => updateField('cardNumber', value)}
          />
        </View>

        {/* Expiry Row */}
        <View style={styles.row}>
          <View style={styles.halfWidth}>
            <Text style={styles.label}>Exp Month</Text>
            <TextInput
              style={styles.input}
              placeholder="Exp Month"
              placeholderTextColor="#999"
              keyboardType="numeric"
              value={bankDetails.expMonth}
              onChangeText={(value) => updateField('expMonth', value)}
            />
          </View>
          <View style={styles.halfWidth}>
            <Text style={styles.label}>Exp Year</Text>
            <TextInput
              style={styles.input}
              placeholder="Exp Year"
              placeholderTextColor="#999"
              keyboardType="numeric"
              value={bankDetails.expYear}
              onChangeText={(value) => updateField('expYear', value)}
            />
          </View>
        </View>

        {/* VCC */}
        <View style={styles.inputRow}>
          <Text style={styles.rowLabel}>Vcc</Text>
          <TextInput
            style={styles.rowInput}
            placeholder="Vcc"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={bankDetails.vcc}
            onChangeText={(value) => updateField('vcc', value)}
          />
        </View>

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
  menuIcon: { width: 24, height: 24, justifyContent: 'space-between', paddingVertical: 3 },
  menuLine: { height: 2, backgroundColor: 'white', borderRadius: 1 },
  headerTitle: { color: 'white', fontSize: 18, fontWeight: '600', flex: 1, textAlign: 'center', marginHorizontal: 16 },
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
  inputRow: { marginBottom: 16 },
  rowLabel: { fontSize: 14, fontWeight: '500', color: '#2d6a6a', marginBottom: 6 },
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
      ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2 },
      android: { elevation: 1 },
    }),
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  halfWidth: { flex: 0.48 },
  label: { fontSize: 14, fontWeight: '500', color: '#2d6a6a', marginBottom: 6 },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#2d6a6a',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 14,
    color: '#333',
  },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginBottom: 25 },
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

export default ShopBankDetailsScreen;
