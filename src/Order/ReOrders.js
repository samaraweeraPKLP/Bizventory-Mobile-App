import React, { useState } from "react";
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
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

const ReOrdersScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    supplierId: "",
    supplierName: "",
    email: "",
    contact: "",
    itemName: "",
    quantity: "",
    unit: "",
    payment: "",
    online: true,
    cashOnDelivery: true,
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleCheckbox = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleCancel = () => {
    console.log("Cancel pressed");
  };

  const handleSave = () => {
    console.log("Save pressed", formData);
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
        <Text style={styles.headerTitle}>Re-Orders</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.notificationIcon}>
            <Text style={styles.iconText}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileIcon}>
            <Text style={styles.iconText}>SS</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>

          {[
            { label: "Supplier ID", field: "supplierId", placeholder: "Supplier ID" },
            { label: "Supplier Name", field: "supplierName", placeholder: "Supplier Name" },
            { label: "Email", field: "email", placeholder: "Email Address", keyboardType: "email-address" },
            { label: "Contact", field: "contact", placeholder: "Contact Number", keyboardType: "phone-pad" },
            { label: "Item Name", field: "itemName", placeholder: "Item Name" },
            { label: "Quantity", field: "quantity", placeholder: "Quantity", keyboardType: "numeric" },
            { label: "Unit", field: "unit", placeholder: "Unit" },
            { label: "Payment (Rs.)", field: "payment", placeholder: "Payment", keyboardType: "numeric" },
          ].map(({ label, field, placeholder, keyboardType }) => (
            <View style={styles.inputRow} key={field}>
              <Text style={styles.rowLabel}>{label}</Text>
              <TextInput
                style={styles.rowInput}
                placeholder={placeholder}
                placeholderTextColor="#999"
                value={formData[field]}
                keyboardType={keyboardType}
                onChangeText={(value) => updateField(field, value)}
              />
            </View>
          ))}

          {/* Payment Method */}
          <Text style={[styles.rowLabel, { marginBottom: 8 }]}>Payment Method</Text>
          <View style={styles.checkboxRow}>
            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => toggleCheckbox("online")}
            >
              <View style={styles.checkbox}>
                {formData.online && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.checkboxLabel}>Online</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => toggleCheckbox("cashOnDelivery")}
            >
              <View style={styles.checkbox}>
                {formData.cashOnDelivery && <Text style={styles.checkmark}>✓</Text>}
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
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  header: {
    backgroundColor: "#2d6a6a",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  menuButton: { padding: 4 },
  headerTitle: {
    color: "white", fontSize: 18, fontWeight: "600",
    flex: 1, textAlign: "center", marginHorizontal: 16,
  },
  headerRight: { flexDirection: "row", alignItems: "center" },
  notificationIcon: {
    width: 32, height: 32, borderRadius: 16, backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center", justifyContent: "center", marginRight: 8,
  },
  profileIcon: {
    width: 32, height: 32, borderRadius: 16, backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center", justifyContent: "center",
  },
  iconText: { color: "white", fontSize: 14 },
  content: { flex: 1, padding: 16 },
  formContainer: {
    backgroundColor: "white", borderRadius: 8, padding: 16, marginBottom: 16,
    ...Platform.select({
      ios: { shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
      android: { elevation: 2 },
    }),
  },
  inputRow: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  rowLabel: { fontSize: 16, fontWeight: "500", color: "#2d6a6a", width: 120, marginRight: 16 },
  rowInput: {
    flex: 1, backgroundColor: "white", borderWidth: 1, borderColor: "#2d6a6a",
    borderRadius: 8, paddingHorizontal: 12, paddingVertical: 12, fontSize: 14, color: "#333",
  },
  checkboxRow: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  checkboxContainer: { flexDirection: "row", alignItems: "center", marginRight: 20 },
  checkbox: {
    width: 20, height: 20, borderWidth: 1, borderColor: "#2d6a6a", borderRadius: 4,
    justifyContent: "center", alignItems: "center", marginRight: 6,
  },
  checkmark: { color: "#2d6a6a", fontSize: 14 },
  checkboxLabel: { fontSize: 14, color: "#333" },
  buttonRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 12 },
  cancelButton: {
    flex: 0.48, backgroundColor: "white", borderWidth: 1, borderColor: "#2d6a6a",
    paddingVertical: 12, borderRadius: 6, alignItems: "center",
  },
  cancelButtonText: { color: "#2d6a6a", fontWeight: "600", fontSize: 14 },
  saveButton: {
    flex: 0.48, backgroundColor: "#2d6a6a",
    paddingVertical: 12, borderRadius: 6, alignItems: "center",
  },
  saveButtonText: { color: "white", fontWeight: "600", fontSize: 14 },
  bottomCard: { backgroundColor: "#1B4F56", minHeight: 60, width: "100%" },
});

export default ReOrdersScreen;
