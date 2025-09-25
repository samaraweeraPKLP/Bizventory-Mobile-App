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
import { Ionicons } from '@expo/vector-icons';

const PendingOrdersScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const handleMenuPress = () => {
    navigation.openDrawer();
  };

  // Sample pending orders data
  const orders = [
    { id: 'ORD-001', supplierId: 'SUP-001', supplierName: 'Supplier A', itemId: 'ITM-001', itemName: 'Item A', qty: 10, payment: 'Rs. 2500', method: 'Card' },
    { id: 'ORD-002', supplierId: 'SUP-002', supplierName: 'Supplier B', itemId: 'ITM-002', itemName: 'Item B', qty: 5, payment: 'Rs. 1250', method: 'Cash' },
    { id: 'ORD-003', supplierId: 'SUP-003', supplierName: 'Supplier C', itemId: 'ITM-003', itemName: 'Item C', qty: 8, payment: 'Rs. 2000', method: 'UPI' },
  ];

  const filteredOrders = orders.filter(
    (order) =>
      order.itemName.toLowerCase().includes(searchText.toLowerCase()) ||
      order.supplierName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#2d6a6a" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
          <Ionicons name="menu" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pending Orders</Text>
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
          placeholder="Search Orders"
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
            <Text style={[styles.headerCell, { flex: 2 }]}>Supplier ID</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Sup. Name</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Item ID</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Item Name</Text>
            <Text style={[styles.headerCell, { flex: 1.5 }]}>Qty</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Payment</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Method</Text>
          </View>

          {/* Table Rows */}
          <ScrollView style={styles.tableBody} showsVerticalScrollIndicator={true}>
            {filteredOrders.map((order) => (
              <View key={order.id} style={styles.tableRow}>
                <Text style={[styles.cell, { flex: 2 }]}>{order.supplierId}</Text>
                <Text style={[styles.cell, { flex: 2 }]}>{order.supplierName}</Text>
                <Text style={[styles.cell, { flex: 2 }]}>{order.itemId}</Text>
                <Text style={[styles.cell, { flex: 2 }]}>{order.itemName}</Text>
                <Text style={[styles.cell, { flex: 1.5 }]}>{order.qty}</Text>
                <Text style={[styles.cell, { flex: 2 }]}>{order.payment}</Text>
                <Text style={[styles.cell, { flex: 2 }]}>{order.method}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Bottom Bar */}
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
    flex: 1, margin: 16, backgroundColor: 'white', borderRadius: 8, minWidth: 700,
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
  bottomCard: { backgroundColor: '#1B4F56', minHeight: 60, width: '100%' },
});

export default PendingOrdersScreen;
