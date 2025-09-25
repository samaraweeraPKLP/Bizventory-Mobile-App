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

const AddItemDetailsScreen = ({ navigation }) => {
  const [itemData, setItemData] = useState({
    itemId: '',
    itemName: '',
    unitPrice: '',
    quantity: '',
    threshold: '',
    category: '',
    location: '',
    supplierName: '',
    description: '',
    isActive: true
  });

  const updateField = (field, value) => {
    setItemData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCancel = () => {
    // Handle cancel functionality
    console.log('Cancel pressed');
  };

  const handleSave = () => {
    // Handle save functionality
    console.log('Save pressed', itemData);
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
        <Text style={styles.headerTitle}>Add Item Details</Text>
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
          {/* Item ID */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Item ID</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Item Name"
              placeholderTextColor="#999"
              value={itemData.itemId}
              onChangeText={(value) => updateField('itemId', value)}
            />
          </View>

          {/* Item Name */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Item Name</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Item Name"
              placeholderTextColor="#999"
              value={itemData.itemName}
              onChangeText={(value) => updateField('itemName', value)}
            />
          </View>

          {/* Unit Price */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Unit Price</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Unit Price"
              placeholderTextColor="#999"
              value={itemData.unitPrice}
              keyboardType="numeric"
              onChangeText={(value) => updateField('unitPrice', value)}
            />
          </View>

          {/* Quantity */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Quantity</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Quantity"
              placeholderTextColor="#999"
              value={itemData.quantity}
              keyboardType="numeric"
              onChangeText={(value) => updateField('quantity', value)}
            />
          </View>

          {/* Threshold */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Threshold</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Threshold"
              placeholderTextColor="#999"
              value={itemData.threshold}
              keyboardType="numeric"
              onChangeText={(value) => updateField('threshold', value)}
            />
          </View>

          {/* Category */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Category</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Category"
              placeholderTextColor="#999"
              value={itemData.category}
              onChangeText={(value) => updateField('category', value)}
            />
          </View>

          {/* Location */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Location</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Location"
              placeholderTextColor="#999"
              value={itemData.location}
              onChangeText={(value) => updateField('location', value)}
            />
          </View>

          {/* Supplier Name */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Supplier Name</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Supplier Name"
              placeholderTextColor="#999"
              value={itemData.supplierName}
              onChangeText={(value) => updateField('supplierName', value)}
            />
          </View>

          {/* Description */}
          <View style={styles.descriptionRow}>
            <Text style={styles.rowLabel}>Description</Text>
          </View>
          <TextInput
            style={styles.descriptionInput}
            placeholder="Description"
            placeholderTextColor="#999"
            value={itemData.description}
            multiline={true}
            numberOfLines={4}
            textAlignVertical="top"
            onChangeText={(value) => updateField('description', value)}
          />

          {/* Is Active Checkbox */}
          <View style={styles.checkboxRow}>
            <TouchableOpacity 
              style={styles.checkboxContainer}
              onPress={() => updateField('isActive', !itemData.isActive)}
            >
              <View style={[styles.checkbox, itemData.isActive && styles.checkboxChecked]}>
                {itemData.isActive && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.checkboxLabel}>Is Active</Text>
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

      {/* Bottom Card */}
      <View style={styles.bottomCard}>
        {/* Additional content can be added here */}
      </View>
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
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 14,
    color: '#333',
  },
  descriptionRow: {
    marginBottom: 8,
  },
  descriptionInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 14,
    color: '#333',
    height: 80,
    marginBottom: 16,
  },
  checkboxRow: {
    marginBottom: 24,
  },
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
});

export default AddItemDetailsScreen;