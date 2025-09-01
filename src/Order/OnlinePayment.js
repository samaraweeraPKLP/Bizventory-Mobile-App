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

const OnlinePaymentScreen = () => {
  const [paymentData, setPaymentData] = useState({
    invoiceNo: "",
    cardType: "",
    nameOnCard: "",
    cardNumber: "",
    itemName: "",
    quantity: "",
    expMonth: "",
    expYear: "",
    vcc: "",
    accountNumber: "",
    accountOwner: "",
    payment: "",
    email: "",
  });

  const updateField = (field, value) => {
    setPaymentData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCancel = () => {
    console.log("Cancel pressed");
  };

  const handleSave = () => {
    console.log("Save pressed", paymentData);
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
        <Text style={styles.headerTitle}>Online Payment</Text>
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
          {/* Invoice Number */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Invoice No</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Invoice Number"
              placeholderTextColor="#999"
              value={paymentData.invoiceNo}
              onChangeText={(value) => updateField("invoiceNo", value)}
            />
          </View>

          {/* Card Type */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Card Type</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Card Type"
              placeholderTextColor="#999"
              value={paymentData.cardType}
              onChangeText={(value) => updateField("cardType", value)}
            />
          </View>

          {/* Name on Card */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Name on Card</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Name on Card"
              placeholderTextColor="#999"
              value={paymentData.nameOnCard}
              onChangeText={(value) => updateField("nameOnCard", value)}
            />
          </View>

          {/* Card Number */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Card Number</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Card Number"
              placeholderTextColor="#999"
              value={paymentData.cardNumber}
              keyboardType="numeric"
              onChangeText={(value) => updateField("cardNumber", value)}
            />
          </View>

          {/* Item Name */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Item Name</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Item Name"
              placeholderTextColor="#999"
              value={paymentData.itemName}
              onChangeText={(value) => updateField("itemName", value)}
            />
          </View>

          {/* Quantity */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Quantity</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Quantity"
              placeholderTextColor="#999"
              value={paymentData.quantity}
              keyboardType="numeric"
              onChangeText={(value) => updateField("quantity", value)}
            />
          </View>

          {/* Exp Month - Exp Year - VCC (Inline Row) */}
          <View style={styles.inlineRow}>
            <TextInput
              style={[styles.inlineInput, { flex: 1 }]}
              placeholder="Exp Month"
              placeholderTextColor="#999"
              value={paymentData.expMonth}
              keyboardType="numeric"
              onChangeText={(value) => updateField("expMonth", value)}
            />
            <TextInput
              style={[styles.inlineInput, { flex: 1, marginHorizontal: 8 }]}
              placeholder="Exp Year"
              placeholderTextColor="#999"
              value={paymentData.expYear}
              keyboardType="numeric"
              onChangeText={(value) => updateField("expYear", value)}
            />
            <TextInput
              style={[styles.inlineInput, { flex: 1 }]}
              placeholder="Vcc"
              placeholderTextColor="#999"
              value={paymentData.vcc}
              keyboardType="numeric"
              onChangeText={(value) => updateField("vcc", value)}
            />
          </View>

          {/* Account Number */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Account Number</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Account Number"
              placeholderTextColor="#999"
              value={paymentData.accountNumber}
              keyboardType="numeric"
              onChangeText={(value) => updateField("accountNumber", value)}
            />
          </View>

          {/* Account Owner */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Account Owner</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Account Owner"
              placeholderTextColor="#999"
              value={paymentData.accountOwner}
              onChangeText={(value) => updateField("accountOwner", value)}
            />
          </View>

          {/* Payment */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Payment (Rs.)</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Payment"
              placeholderTextColor="#999"
              value={paymentData.payment}
              keyboardType="numeric"
              onChangeText={(value) => updateField("payment", value)}
            />
          </View>

          {/* Email */}
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Email Address</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Email Address"
              placeholderTextColor="#999"
              value={paymentData.email}
              keyboardType="email-address"
              onChangeText={(value) => updateField("email", value)}
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
  menuIcon: { width: 24, height: 24, justifyContent: "space-between", paddingVertical: 3 },
  menuLine: { height: 2, backgroundColor: "white", borderRadius: 1 },
  headerTitle: { color: "white", fontSize: 18, fontWeight: "600", flex: 1, textAlign: "center", marginHorizontal: 16 },
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
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
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
  inlineRow: { flexDirection: "row", marginBottom: 16 },
  inlineInput: {
    backgroundColor: "white", borderWidth: 1, borderColor: "#2d6a6a",
    borderRadius: 8, paddingHorizontal: 12, paddingVertical: 12, fontSize: 14, color: "#333",
  },
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

export default OnlinePaymentScreen;
