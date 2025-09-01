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

const SalesReportScreen = () => {
  const [searchText, setSearchText] = useState('');

  const salesData = new Array(20).fill({
    date: '01/09/2025',
    invoice: 'INV001',
    customerId: 'CUST123',
    cashierName: 'John Doe',
    hierName: 'Manager A',
    totalExpenses: 500.0,
    totalPayment: 600.0,
    balance: 100.0,
  });

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
        <Text style={styles.headerTitle}>Sales Report</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.notificationIcon}>
            <Text style={styles.iconText}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileIcon}>
            <Text style={styles.iconText}>SR</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.searchIcon}>
          <Text style={styles.iconText}>🔍</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.printButton}>
          <Text style={styles.addButtonText}>Print</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Generate</Text>
        </TouchableOpacity>
      </View>

      {/* Table */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={[styles.headerCell, { flex: 2 }]}>Date</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Invoice</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Customer ID</Text>
            <Text style={[styles.headerCell, { flex: 3 }]}>Cashier Name</Text>
            <Text style={[styles.headerCell, { flex: 3 }]}>Hier Name</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Expenses</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Payment</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Balance</Text>
          </View>

          <ScrollView style={styles.tableBody} showsVerticalScrollIndicator>
            {salesData.map((item, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={[styles.cell, { flex: 2 }]}>{item.date}</Text>
                <Text style={[styles.cell, { flex: 2 }]}>{item.invoice}</Text>
                <Text style={[styles.cell, { flex: 2 }]}>{item.customerId}</Text>
                <Text style={[styles.cell, { flex: 3 }]}>{item.cashierName}</Text>
                <Text style={[styles.cell, { flex: 3 }]}>{item.hierName}</Text>
                <Text style={[styles.cell, { flex: 2 }]}>{item.totalExpenses}</Text>
                <Text style={[styles.cell, { flex: 2 }]}>{item.totalPayment}</Text>
                <Text style={[styles.cell, { flex: 2 }]}>{item.balance}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Bottom Card */}
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
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#333',
    marginRight: 8,
  },
  searchIcon: {
    backgroundColor: '#2d6a6a',
    padding: 10,
    borderRadius: 8,
    marginRight: 8,
  },
  printButton: {
    backgroundColor: '#2d6a6a',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  addButton: {
    backgroundColor: '#2d6a6a',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  addButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  tableContainer: {
    flex: 1,
    margin: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    minWidth: 1000,
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
  tableBody: { flex: 1 },
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
  bottomCard: { backgroundColor: '#1B4F56', minHeight: 60, width: '100%' },
});

export default SalesReportScreen;
