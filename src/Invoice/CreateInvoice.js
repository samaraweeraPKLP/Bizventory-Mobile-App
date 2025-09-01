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

const CreateInvoiceScreen = () => {
  const [invoiceData, setInvoiceData] = useState({
    date: '',
    invoiceNo: '',
    customerDetails: '',
    items: [{
      itemId: '',
      itemName: '',
      unitPrice: '',
      quantity: ''
    }],
    totalAmount: '',
    discount: '',
    netAmount: '',
    payment: '',
    balance: ''
  });

  const addItem = () => {
    setInvoiceData(prev => ({
      ...prev,
      items: [...prev.items, {
        itemId: '',
        itemName: '',
        unitPrice: '',
        quantity: ''
      }]
    }));
  };

  const updateItem = (index, field, value) => {
    setInvoiceData(prev => ({
      ...prev,
      items: prev.items.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const updateField = (field, value) => {
    setInvoiceData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleViewBill = (index) => {
    // Handle view bill functionality
    console.log('View bill for item:', index);
  };

  const handleAddBill = (index) => {
    // Handle add bill functionality
    console.log('Add bill for item:', index);
  };

  const handleAddCustomer = () => {
    // Handle add customer functionality
    console.log('Add customer details');
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
        <Text style={styles.headerTitle}>Create Invoice</Text>
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
        {/* Date and Invoice Number */}
        <View style={styles.row}>
          <View style={styles.halfWidth}>
            <Text style={styles.label}>Date</Text>
            <TextInput
              style={styles.input}
              placeholder="Date"
              placeholderTextColor="#999"
              value={invoiceData.date}
              onChangeText={(value) => updateField('date', value)}
            />
          </View>
          <View style={styles.halfWidth}>
            <Text style={styles.label}>Invoice No</Text>
            <TextInput
              style={styles.input}
              placeholder="Invoice No"
              placeholderTextColor="#999"
              value={invoiceData.invoiceNo}
              onChangeText={(value) => updateField('invoiceNo', value)}
            />
          </View>
        </View>

        {/* Customer Details */}
        <View style={styles.customerSection}>
          <View style={styles.customerRow}>
            <Text style={styles.label}>Add Customer Details</Text>
            <TouchableOpacity style={styles.addButton} onPress={handleAddCustomer}>
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Item Details */}
        <Text style={styles.sectionTitle}>Add Item Details</Text>
        
        {invoiceData.items.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <View style={styles.row}>
              <View style={styles.halfWidth}>
                <Text style={styles.label}>Item ID</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Item ID"
                  placeholderTextColor="#999"
                  value={item.itemId}
                  onChangeText={(value) => updateItem(index, 'itemId', value)}
                />
              </View>
              <View style={styles.halfWidth}>
                <Text style={styles.label}>Item Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Item Name"
                  placeholderTextColor="#999"
                  value={item.itemName}
                  onChangeText={(value) => updateItem(index, 'itemName', value)}
                />
              </View>
            </View>
            
            <View style={styles.row}>
              <View style={styles.halfWidth}>
                <Text style={styles.label}>Unit Price</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Unit Price"
                  placeholderTextColor="#999"
                  value={item.unitPrice}
                  keyboardType="numeric"
                  onChangeText={(value) => updateItem(index, 'unitPrice', value)}
                />
              </View>
              <View style={styles.halfWidth}>
                <Text style={styles.label}>Quantity</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Quantity"
                  placeholderTextColor="#999"
                  value={item.quantity}
                  keyboardType="numeric"
                  onChangeText={(value) => updateItem(index, 'quantity', value)}
                />
              </View>
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity 
                style={styles.viewBillButton}
                onPress={() => handleViewBill(index)}
              >
                <Text style={styles.viewBillText}>View Bill</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.addBillButton}
                onPress={() => handleAddBill(index)}
              >
                <Text style={styles.addBillText}>Add Bill</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* Add More Items Button */}
          <Text style={styles.sectionTitle}>Add Item Details</Text>


        {/* Summary Section */}
        <View style={styles.summarySection}>
          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Total Amount</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Total amount"
              placeholderTextColor="#999"
              value={invoiceData.totalAmount}
              keyboardType="numeric"
              onChangeText={(value) => updateField('totalAmount', value)}
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Discount</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Discount"
              placeholderTextColor="#999"
              value={invoiceData.discount}
              keyboardType="numeric"
              onChangeText={(value) => updateField('discount', value)}
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Net Amount</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Net Amount"
              placeholderTextColor="#999"
              value={invoiceData.netAmount}
              keyboardType="numeric"
              onChangeText={(value) => updateField('netAmount', value)}
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Payment</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Payment"
              placeholderTextColor="#999"
              value={invoiceData.payment}
              keyboardType="numeric"
              onChangeText={(value) => updateField('payment', value)}
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.rowLabel}>Balance</Text>
            <TextInput
              style={styles.rowInput}
              placeholder="Balance"
              placeholderTextColor="#999"
              value={invoiceData.balance}
              keyboardType="numeric"
              onChangeText={(value) => updateField('balance', value)}
            />
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          <View style={styles.topButtonRow}>
            <TouchableOpacity style={styles.borrowerButton}>
              <Text style={styles.borrowerButtonText}>Add Borrower</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.borrowerButton}>
              <Text style={styles.borrowerButtonText}>Print</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.bottomButtonRow}>
            <TouchableOpacity style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.borrowerButton}>
              <Text style={styles.borrowerButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer Caption */}

      </ScrollView>
      
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
    marginTop:55,

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
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 4,
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
  row: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  halfWidth: {
    flex: 0.48,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2d6a6a',
    marginBottom: 6,
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
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
  customerSection: {
    marginBottom: 20,
  },
  customerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#2d6a6a',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 6,
  },
  addButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#2d6a6a',
    marginBottom: 16,
  },
  itemContainer: {
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
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  viewBillButton: {
    flex: 0.48,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#2d6a6a',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  viewBillText: {
    color: '#2d6a6a',
    fontWeight: '600',
    fontSize: 14,
  },
  addBillButton: {
    flex: 0.48,
    backgroundColor: '#2d6a6a',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  addBillText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  addItemButton: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    alignItems: 'center',
  },
  summarySection: {
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
  footerCaption: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'left',
    marginBottom: 8,
  },
  bottomSpacer: {
    height: 20,
  },

  borrowerButton: {
    flex: 0.48,
    backgroundColor: '#2d6a6a',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  borrowerButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
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
    topButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
    bottomButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 25,
    },
  bottomCard: {
    backgroundColor: '#1B4F56',
    // marginHorizontal: 16,
    // borderRadius: 12,
    minHeight: 60,
    // marginBottom: 20,
    
    width: '100%',
  },
  
});

export default CreateInvoiceScreen;