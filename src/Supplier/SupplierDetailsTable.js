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

const SupplierDetailsScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  const suppliers = new Array(15).fill({
    supplierID: 'SUP001',
    name: 'ABC Supplies',
    email: 'abc@example.com',
    contact: '1234567890',
    rating: '5',
    accountNumber: '123456789012',
  });

  const handleMenuToggle = (index) => {
    setSelectedSupplier(selectedSupplier === index ? null : index);
  };

  const handleDelete = (index) => {
    console.log(`Delete Supplier at index ${index}`);
    setSelectedSupplier(null);
  };

  const handleUpdate = (index) => {
    console.log(`Update Supplier at index ${index}`);
    setSelectedSupplier(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#2d6a6a" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Supplier Details</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Supplier"
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Supplier</Text>
        </TouchableOpacity>
      </View>

      {/* Table */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={[styles.headerCell, { flex: 1.5 }]}>Supplier ID</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Name</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Email</Text>
            <Text style={[styles.headerCell, { flex: 1.5 }]}>Contact</Text>
            <Text style={[styles.headerCell, { flex: 1 }]}>Rating</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Account No</Text>
            <Text style={[styles.headerCell, { flex: 1 }]}>Modify</Text>
          </View>

          <ScrollView style={styles.tableBody} showsVerticalScrollIndicator>
            {suppliers.map((supplier, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={[styles.cell, { flex: 1.5 }]}>{supplier.supplierID}</Text>
                <Text style={[styles.cell, { flex: 2 }]}>{supplier.name}</Text>
                <Text style={[styles.cell, { flex: 2 }]}>{supplier.email}</Text>
                <Text style={[styles.cell, { flex: 1.5 }]}>{supplier.contact}</Text>
                <Text style={[styles.cell, { flex: 1 }]}>{supplier.rating}</Text>
                <Text style={[styles.cell, { flex: 2 }]}>{supplier.accountNumber}</Text>

                <View style={[styles.cell, { flex: 1, alignItems: 'center' }]}>
                  <TouchableOpacity onPress={() => handleMenuToggle(index)}>
                    <Text style={{ fontSize: 18 }}>⚙️</Text>
                  </TouchableOpacity>
                  {selectedSupplier === index && (
                    <View style={styles.dropdownMenu}>
                      <TouchableOpacity onPress={() => handleDelete(index)} style={styles.menuItem}>
                        <Text style={styles.menuText}>Delete Supplier</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleUpdate(index)} style={styles.menuItem}>
                        <Text style={styles.menuText}>Update Supplier</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: {
    backgroundColor: '#2d6a6a',
    padding: 16,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
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
    minWidth: 900,
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
});

export default SupplierDetailsScreen;
