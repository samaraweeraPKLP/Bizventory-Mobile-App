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
  Alert
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

const ShopBankDetailsScreen = ({ navigation }) => {
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
    Alert.alert('Success', 'Bank details saved successfully!');
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

  // Navigation handlers
  const handleMenuPress = () => {
    navigation.openDrawer();
  };

  const handleNotificationPress = () => {
    navigation.navigate('Notification');
  };

  const handleProfilePress = () => {
    navigation.navigate('UserProfile');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#2d6a6a" barStyle="light-content" />

      {/* Header with Drawer Navigation */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
          <Ionicons name="menu" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Shop Bank Details</Text>
        
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={handleNotificationPress} style={styles.notificationButton}>
            <Ionicons name="notifications-outline" size={22} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleProfilePress} style={styles.profileButton}>
            <Ionicons name="person-circle-outline" size={26} color="#FFFFFF" />
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
              style={styles.picker}
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
              style={styles.picker}
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
            secureTextEntry={true}
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
  container: { 
    flex: 1, 
    backgroundColor: '#f5f5f5' 
  },
  header: {
    backgroundColor: '#2d6a6a',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 35,
  },
  menuButton: {
    padding: 4,
  },
  headerTitle: { 
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationButton: {
    padding: 4,
    marginRight: 8,
  },
  profileButton: {
    padding: 4,
  },
  content: { 
    flex: 1, 
    padding: 16 
  },
  inputRow: { 
    marginBottom: 16 
  },
  rowLabel: { 
    fontSize: 16,
    fontWeight: '600',
    color: '#2d6a6a',
    marginBottom: 8
  },
  rowInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#2d6a6a',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
    ...Platform.select({
      ios: { 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.1, 
        shadowRadius: 4 
      },
      android: { elevation: 2 },
    }),
  },
  pickerWrapper: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#2d6a6a',
    borderRadius: 8,
    ...Platform.select({
      ios: { 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.1, 
        shadowRadius: 4 
      },
      android: { elevation: 2 },
    }),
  },
  picker: {
    height: 50,
    color: '#333',
  },
  row: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 16 
  },
  halfWidth: { 
    flex: 0.48 
  },
  label: { 
    fontSize: 16,
    fontWeight: '600',
    color: '#2d6a6a',
    marginBottom: 8
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#2d6a6a',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
    ...Platform.select({
      ios: { 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.1, 
        shadowRadius: 4 
      },
      android: { elevation: 2 },
    }),
  },
  buttonRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 30, 
    marginBottom: 25 
  },
  cancelButton: {
    flex: 0.48, 
    backgroundColor: 'white', 
    borderWidth: 2, 
    borderColor: '#2d6a6a',
    paddingVertical: 15, 
    borderRadius: 8, 
    alignItems: 'center',
    ...Platform.select({
      ios: { 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.1, 
        shadowRadius: 4 
      },
      android: { elevation: 2 },
    }),
  },
  cancelButtonText: { 
    color: '#2d6a6a', 
    fontWeight: '600', 
    fontSize: 16 
  },
  saveButton: {
    flex: 0.48, 
    backgroundColor: '#2d6a6a',
    paddingVertical: 15, 
    borderRadius: 8, 
    alignItems: 'center',
    ...Platform.select({
      ios: { 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.1, 
        shadowRadius: 4 
      },
      android: { elevation: 2 },
    }),
  },
  saveButtonText: { 
    color: 'white', 
    fontWeight: '600', 
    fontSize: 16 
  },
  bottomCard: { 
    backgroundColor: '#2d6a6a', 
    minHeight: 60, 
    width: '100%' 
  },
});

export default ShopBankDetailsScreen;