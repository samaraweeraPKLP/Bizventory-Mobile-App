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
import { Ionicons } from '@expo/vector-icons';

const CreateOrderScreen = ({ navigation }) => {
  const [orderData, setOrderData] = useState({
    supplierId: '',
    supplierName: '',
    email: '',
    contact: '',
    itemName: '',
    quantity: '',
    unit: '',
    payment: '',
    paymentOnline: true,
    paymentCOD: true,
  });

  const updateField = (field, value) => {
    setOrderData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCancel = () => {
    console.log('Cancel pressed');
  };

  const handleSave = () => {
    console.log('Save pressed', orderData);
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
        <Text style={styles.headerTitle}>Create Orders</Text>
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
              placeholderTextColor="#999"
              value={orderData.supplierId}
              onChangeText={(value) => updateField('supplierId', value)}
            />
          </View>

          {/* Supplier Name */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Supplier Name</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Supplier Name"
              placeholderTextColor="#999"
              value={orderData.supplierName}
              onChangeText={(value) => updateField('supplierName', value)}
            />
          </View>

          {/* Email */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Email</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Email Address"
              placeholderTextColor="#999"
              value={orderData.email}
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
              placeholderTextColor="#999"
              value={orderData.contact}
              keyboardType="phone-pad"
              onChangeText={(value) => updateField('contact', value)}
            />
          </View>

          {/* Item Name */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Item Name</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Item Name"
              placeholderTextColor="#999"
              value={orderData.itemName}
              onChangeText={(value) => updateField('itemName', value)}
            />
          </View>

          {/* Quantity */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Quantity</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Quantity"
              placeholderTextColor="#999"
              value={orderData.quantity}
              keyboardType="numeric"
              onChangeText={(value) => updateField('quantity', value)}
            />
          </View>

          {/* Unit */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Unit</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Unit"
              placeholderTextColor="#999"
              value={orderData.unit}
              onChangeText={(value) => updateField('unit', value)}
            />
          </View>

          {/* Payment */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Payment (Rs.)</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Payment (Rs)"
              placeholderTextColor="#999"
              value={orderData.payment}
              keyboardType="numeric"
              onChangeText={(value) => updateField('payment', value)}
            />
          </View>

          {/* Payment Method */}
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <View style={styles.checkboxRow}>
            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => updateField('paymentOnline', !orderData.paymentOnline)}
            >
              <View style={[styles.checkbox, orderData.paymentOnline && styles.checkboxChecked]}>
                {orderData.paymentOnline && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.checkboxLabel}>Online</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => updateField('paymentCOD', !orderData.paymentCOD)}
            >
              <View style={[styles.checkbox, orderData.paymentCOD && styles.checkboxChecked]}>
                {orderData.paymentCOD && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.checkboxLabel}>Cash on Delivery</Text>
            </TouchableOpacity>
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
  menuButton: { padding: 4 },
  headerTitle: { color: 'white', fontSize: 18, fontWeight: '600', flex: 1, textAlign: 'center', marginHorizontal: 16 },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  notificationIcon: {
    width: 32, height: 32, borderRadius: 16, backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center', justifyContent: 'center', marginRight: 8,
  },
  profileIcon: {
    width: 32, height: 32, borderRadius: 16, backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center', justifyContent: 'center',
  },
  iconText: { color: 'white', fontSize: 14 },
  content: { flex: 1, padding: 16 },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
      android: { elevation: 2 },
    }),
  },
  inputRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  rowLabel: { fontSize: 16, fontWeight: '500', color: '#2d6a6a', width: 120, marginRight: 16 },
  rowInput: {
    flex: 1, backgroundColor: 'white', borderWidth: 1, borderColor: '#ddd',
    borderRadius: 8, paddingHorizontal: 12, paddingVertical: 12, fontSize: 14, color: '#333',
  },
  sectionTitle: { fontSize: 16, fontWeight: '600', color: '#2d6a6a', marginBottom: 8 },
  checkboxRow: { flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 24 },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginRight: 20 },
  checkbox: {
    width: 20, height: 20, borderWidth: 2, borderColor: '#2d6a6a', borderRadius: 3,
    marginRight: 8, alignItems: 'center', justifyContent: 'center',
  },
  checkboxChecked: { backgroundColor: '#2d6a6a' },
  checkmark: { color: 'white', fontSize: 12, fontWeight: 'bold' },
  checkboxLabel: { fontSize: 16, fontWeight: '500', color: '#2d6a6a' },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  cancelButton: {
    flex: 0.48, backgroundColor: 'white', borderWidth: 1, borderColor: '#2d6a6a',
    paddingVertical: 12, borderRadius: 6, alignItems: 'center',
  },
  cancelButtonText: { color: '#2d6a6a', fontWeight: '600', fontSize: 14 },
  saveButton: {
    flex: 0.48, backgroundColor: '#2d6a6a',
    paddingVertical: 12, borderRadius: 6, alignItems: 'center',
  },
  saveButtonText: { color: 'white', fontWeight: '600', fontSize: 14 },
  bottomCard: { backgroundColor: '#1B4F56', minHeight: 60, width: '100%' },
});

export default CreateOrderScreen;
