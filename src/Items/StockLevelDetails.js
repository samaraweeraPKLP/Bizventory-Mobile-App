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

const StockLevelScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const handleMenuPress = () => {
    navigation.openDrawer();
  };

  // Sample stock data
  const stockItems = [
    { id: 'ITM-001', name: 'Item A', qty: 10, threshold: 20, inStock: 14, percentage: 70 },
    { id: 'ITM-002', name: 'Item B', qty: 5, threshold: 15, inStock: 5, percentage: 30 },
    { id: 'ITM-003', name: 'Item C', qty: 12, threshold: 20, inStock: 14, percentage: 70 },
    { id: 'ITM-004', name: 'Item D', qty: 3, threshold: 10, inStock: 3, percentage: 30 },
    { id: 'ITM-005', name: 'Item E', qty: 25, threshold: 30, inStock: 21, percentage: 70 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#2d6a6a" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
          <Ionicons name="menu" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Stock Level Details</Text>
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
            <Text style={[styles.headerCell, { flex: 1.5 }]}>Qty</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Threshold</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>In Stock</Text>
            <Text style={[styles.headerCell, { flex: 3 }]}>Percentage</Text>
          </View>

          {/* Table Rows */}
          <ScrollView style={styles.tableBody} showsVerticalScrollIndicator={true}>
            {stockItems.map((item) => (
              <View key={item.id} style={styles.tableRow}>
                <Text style={[styles.cell, { flex: 2 }]}>{item.id}</Text>
                <Text style={[styles.cell, { flex: 2 }]}>{item.name}</Text>
                <Text style={[styles.cell, { flex: 1.5 }]}>{item.qty}</Text>
                <Text style={[styles.cell, { flex: 2 }]}>{item.threshold}</Text>
                <Text style={[styles.cell, { flex: 2 }]}>{item.inStock}</Text>

                {/* Progress Bar for Percentage */}
                <View style={[styles.cell, { flex: 3, alignItems: 'center' }]}>
                  <View style={styles.progressBarBackground}>
                    <View
                      style={[
                        styles.progressBarFill,
                        {
                          width: `${item.percentage}%`,
                          backgroundColor: item.percentage < 50 ? '#f4a261' : '#2d6a6a',
                        },
                      ]}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '600',
                      color: item.percentage < 50 ? '#f4a261' : '#2d6a6a',
                      marginTop: 2,
                    }}
                  >
                    {item.percentage}%
                  </Text>
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
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    minHeight: 50,
  },
  cell: { fontSize: 12, color: '#333', textAlign: 'center', paddingHorizontal: 4, flexWrap: 'wrap' },
  progressBarBackground: {
    width: '90%',
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  bottomCard: { backgroundColor: '#1B4F56', minHeight: 60, width: '100%' },
});

export default StockLevelScreen;
