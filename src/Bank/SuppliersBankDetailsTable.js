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

const SuppliersBankDetailsScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  // Sample data
  const supplierAccounts = [
    {
      id: 'SUP-001',
      name: 'ABC Supplies',
      accountNo: '1234567890',
      bankName: 'Bank of America',
      branch: 'New York',
    },
    {
      id: 'SUP-002',
      name: 'XYZ Traders',
      accountNo: '9876543210',
      bankName: 'CitiBank',
      branch: 'California',
    },
    {
      id: 'SUP-003',
      name: 'Global Goods',
      accountNo: '5678901234',
      bankName: 'Wells Fargo',
      branch: 'Texas',
    },
  ];

  const handleMenuToggle = (id) => {
    setSelectedItem(selectedItem === id ? null : id);
  };

  const handleDelete = (id) => {
    console.log('Delete Account:', id);
    setSelectedItem(null);
  };

  const handleUpdate = (id) => {
    console.log('Update Account:', id);
    setSelectedItem(null);
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
        <Text style={styles.headerTitle}>Suppliers Bank Details</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.notificationIcon}>
            <Text style={styles.iconText}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileIcon}>
            <Text style={styles.iconText}>SS</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search & Add */}
      <View style={styles.searchRow}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Account"
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Account</Text>
        </TouchableOpacity>
      </View>

      {/* Table */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.tableContainer}>
          {/* Table Header */}
          <View style={styles.tableHeader}>
            <Text style={[styles.headerCell, { flex: 2 }]}>Supplier ID</Text>
            <Text style={[styles.headerCell, { flex: 3 }]}>Name</Text>
            <Text style={[styles.headerCell, { flex: 3 }]}>Account No.</Text>
            <Text style={[styles.headerCell, { flex: 3 }]}>Bank Name</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Branch</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Modify</Text>
          </View>

          {/* Table Rows */}
          <ScrollView style={styles.tableBody} showsVerticalScrollIndicator={true}>
            {supplierAccounts.map((item) => (
              <View key={item.id} style={styles.tableRow}>
                <Text style={[styles.cell, { flex: 2 }]}>{item.id}</Text>
                <Text style={[styles.cell, { flex: 3 }]}>{item.name}</Text>
                <Text style={[styles.cell, { flex: 3 }]}>{item.accountNo}</Text>
                <Text style={[styles.cell, { flex: 3 }]}>{item.bankName}</Text>
                <Text style={[styles.cell, { flex: 2 }]}>{item.branch}</Text>

                {/* Modify Column */}
                <View style={[styles.cell, { flex: 2, alignItems: 'center' }]}>
                  <TouchableOpacity onPress={() => handleMenuToggle(item.id)}>
                    <Text style={{ fontSize: 18 }}>⚙️</Text>
                  </TouchableOpacity>
                  {selectedItem === item.id && (
                    <View style={styles.dropdownMenu}>
                      <TouchableOpacity onPress={() => handleUpdate(item.id)} style={styles.menuItem}>
                        <Text style={styles.menuText}>Update Account</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.menuItem}>
                        <Text style={styles.menuText}>Delete Account</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
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

  searchRow: {
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
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#2d6a6a',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  addButtonText: { color: 'white', fontWeight: '600', fontSize: 14 },

  tableContainer: {
    flex: 1,
    margin: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    minWidth: 800,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: { elevation: 2 },
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
  dropdownMenu: {
    position: 'absolute',
    top: 25,
    right: 10,
    backgroundColor: '#2d6a6a',
    borderRadius: 6,
    paddingVertical: 4,
    width: 150,
    zIndex: 10,
  },
  menuItem: { paddingVertical: 8, paddingHorizontal: 12 },
  menuText: { color: 'white', fontSize: 14 },
  bottomCard: { backgroundColor: '#1B4F56', minHeight: 60, width: '100%' },
});

export default SuppliersBankDetailsScreen;

