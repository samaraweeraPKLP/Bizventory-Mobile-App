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

const ItemDetailsScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedItem, setSelectedItem] = useState(null); // track selected gear icon

  // Sample item data
  const items = [
    { id: 'ITM-001', name: 'Item A', description: 'Sample item A', price: '250.00', qty: '10', threshold: '5', category: 'Electronics', location: 'Shelf 1', supplier: 'Supplier X' },
    { id: 'ITM-002', name: 'Item B', description: 'Sample item B', price: '150.50', qty: '20', threshold: '8', category: 'Grocery', location: 'Shelf 2', supplier: 'Supplier Y' },
    { id: 'ITM-003', name: 'Item C', description: 'Sample item C', price: '99.99', qty: '5', threshold: '3', category: 'Stationery', location: 'Shelf 3', supplier: 'Supplier Z' },
  ];

  const handleMenuToggle = (id) => {
    if (selectedItem === id) {
      setSelectedItem(null); // close menu if clicked again
    } else {
      setSelectedItem(id); // open menu for this item
    }
  };

  const handleDelete = (id) => {
    console.log(`Delete Supplier for ${id}`);
    setSelectedItem(null);
  };

  const handleUpdate = (item) => {
  setSelectedItem(null);
  navigation.navigate('AddItemDetailsScreen', { item }); 
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
        <Text style={styles.headerTitle}>Item Details</Text>
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
          placeholder="Search Item"
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
            <Text style={[styles.headerCell, { flex: 2 }]}>Item ID</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Name</Text>
            <Text style={[styles.headerCell, { flex: 3 }]}>Description</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Price</Text>
            <Text style={[styles.headerCell, { flex: 1.5 }]}>Qty</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Threshold</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Category</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Location</Text>
            <Text style={[styles.headerCell, { flex: 2.5 }]}>Supplier Name</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Modify</Text>
          </View>

          {/* Table Rows */}
          <ScrollView style={styles.tableBody} showsVerticalScrollIndicator={true}>
            {items.map((item) => (
              <View key={item.id} style={styles.tableRow}>
                <Text style={[styles.cell, { flex: 2 }]}>{item.id}</Text>
                <Text style={[styles.cell, { flex: 2 }]}>{item.name}</Text>
                <Text style={[styles.cell, { flex: 3 }]}>{item.description}</Text>
                <Text style={[styles.cell, { flex: 2 }]}>Rs. {item.price}</Text>
                <Text style={[styles.cell, { flex: 1.5 }]}>{item.qty}</Text>
                <Text style={[styles.cell, { flex: 2 }]}>{item.threshold}</Text>
                <Text style={[styles.cell, { flex: 2 }]}>{item.category}</Text>
                <Text style={[styles.cell, { flex: 2 }]}>{item.location}</Text>
                <Text style={[styles.cell, { flex: 2.5 }]}>{item.supplier}</Text>

                {/* Modify Menu */}
                <View style={[styles.cell, { flex: 2, alignItems: 'center' }]}>
                  <TouchableOpacity onPress={() => handleMenuToggle(item.id)}>
                    <Text style={{ fontSize: 18 }}>⚙️</Text>
                  </TouchableOpacity>
                  {selectedItem === item.id && (
                    <View style={styles.dropdownMenu}>
                      <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.menuItem}>
                        <Text style={styles.menuText}>Delete Item</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleUpdate(item)} style={styles.menuItem}>
                        <Text style={styles.menuText}>Update Item</Text>
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
  searchContainer: { paddingHorizontal: 16, paddingVertical: 12, backgroundColor: 'white' },
  searchInput: {
    backgroundColor: '#f5f5f5', borderWidth: 1, borderColor: '#ddd', borderRadius: 8,
    paddingHorizontal: 12, paddingVertical: 10, fontSize: 14, color: '#333',
  },
  tableContainer: {
    flex: 1, margin: 16, backgroundColor: 'white', borderRadius: 8, minWidth: 800,
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
      android: { elevation: 2 },
    }),
  },
  tableHeader: {
    flexDirection: 'row', backgroundColor: '#2d6a6a',
    paddingVertical: 12, paddingHorizontal: 4, borderTopLeftRadius: 8, borderTopRightRadius: 8,
  },
  headerCell: { color: 'white', fontSize: 12, fontWeight: '600', textAlign: 'center', paddingHorizontal: 4 },
  tableBody: { flex: 1 },
  tableRow: { flexDirection: 'row', paddingVertical: 14, paddingHorizontal: 4, borderBottomWidth: 1, borderBottomColor: '#eee', minHeight: 50 },
  cell: { fontSize: 12, color: '#333', textAlign: 'center', paddingHorizontal: 4, flexWrap: 'wrap' },
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

export default ItemDetailsScreen;
