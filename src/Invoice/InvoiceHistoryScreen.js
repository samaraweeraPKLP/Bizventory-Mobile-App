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

const InvoiceHistoryScreen = () => {
  const [searchText, setSearchText] = useState('');

  // Sample invoice data
  const invoices = [
    { invoiceNo: 'INV-001', customerId: 'C001', totalAmount: '2,500.00', payment: '2,500.00', balance: '0.00' },
    { invoiceNo: 'INV-002', customerId: 'C002', totalAmount: '1,750.50', payment: '1,000.00', balance: '750.50' },
    { invoiceNo: 'INV-003', customerId: 'C003', totalAmount: '3,200.75', payment: '3,200.75', balance: '0.00' },
    { invoiceNo: 'INV-004', customerId: 'C004', totalAmount: '950.00', payment: '500.00', balance: '450.00' },
    { invoiceNo: 'INV-005', customerId: 'C005', totalAmount: '4,100.25', payment: '4,100.25', balance: '0.00' },
    { invoiceNo: 'INV-006', customerId: 'C006', totalAmount: '1,800.00', payment: '1,200.00', balance: '600.00' }
  ];

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
        <Text style={styles.headerTitle}>Invoice History</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.notificationIcon}>
            <Text style={styles.iconText}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileIcon}>
            <Text style={styles.iconText}>👤</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search here"
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Table */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.tableContainer}>
          {/* Table Header */}
          <View style={styles.tableHeader}>
            <Text style={[styles.headerCell, styles.invoiceHeader]}>Invoice Number</Text>
            <Text style={[styles.headerCell, styles.customerIdHeader]}>Customer ID</Text>
            <Text style={[styles.headerCell, styles.totalAmountHeader]}>Total Amount</Text>
            <Text style={[styles.headerCell, styles.paymentHeader]}>Payment</Text>
            <Text style={[styles.headerCell, styles.balanceHeader]}>Balance</Text>
          </View>

          {/* Table Rows */}
          <ScrollView style={styles.tableBody} showsVerticalScrollIndicator={true}>
            {invoices.map((invoice, index) => (
              <View key={invoice.invoiceNo} style={styles.tableRow}>
                <Text style={[styles.cell, styles.invoiceCell]}>{invoice.invoiceNo}</Text>
                <Text style={[styles.cell, styles.customerIdCell]}>{invoice.customerId}</Text>
                <Text style={[styles.cell, styles.totalAmountCell]}>Rs. {invoice.totalAmount}</Text>
                <Text style={[styles.cell, styles.paymentCell]}>Rs. {invoice.payment}</Text>
                <Text style={[styles.cell, styles.balanceCell]}>Rs. {invoice.balance}</Text>
              </View>
            ))}
          </ScrollView>
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
    // marginTop: 30,
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
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
  },
  searchInput: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#333',
  },
  tableContainer: {
    flex: 1,
    margin: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    minWidth: 600,
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
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#2d6a6a',
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  headerCell: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 4,
  },
  invoiceHeader: {
    flex: 2.5,
  },
  customerIdHeader: {
    flex: 2,
  },
  totalAmountHeader: {
    flex: 2.5,
  },
  paymentHeader: {
    flex: 2.5,
  },
  balanceHeader: {
    flex: 2.5,
  },
  tableBody: {
    flex: 1,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    minHeight: 50,
  },
  cell: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 4,
    flexWrap: 'wrap',
  },
  invoiceCell: {
    flex: 2.5,
  },
  customerIdCell: {
    flex: 2,
  },
  totalAmountCell: {
    flex: 2.5,
  },
  paymentCell: {
    flex: 2.5,
  },
  balanceCell: {
    flex: 2.5,
  },
  bottomCard: {
    backgroundColor: '#1B4F56',
    minHeight: 60,
    width: '100%',
  },
});

export default InvoiceHistoryScreen;