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


const StaffDetailsScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  // Sample data
  const staffList = [
    {
      id: 'STF-001',
      name: 'John Doe',
      email: 'john@example.com',
      contact: '1234567890',
      position: 'Manager',
      department: 'HR',
    },
    {
      id: 'STF-002',
      name: 'Jane Smith',
      email: 'jane@example.com',
      contact: '2345678901',
      position: 'Developer',
      department: 'IT',
    },
    {
      id: 'STF-003',
      name: 'Robert Brown',
      email: 'robert@example.com',
      contact: '3456789012',
      position: 'Analyst',
      department: 'Finance',
    },
  ];

  const handleMenuToggle = (id) => {
    setSelectedItem(selectedItem === id ? null : id);
  };

  const handleDelete = (id) => {
    console.log('Delete Member:', id);
    setSelectedItem(null);
  };

  const handleUpdate = (id) => {
    console.log('Update Member:', id);
    setSelectedItem(null);
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
        <Text style={styles.headerTitle}>Staff Details</Text>
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
          placeholder="Search Item"
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Member</Text>
        </TouchableOpacity>
      </View>

      {/* Table */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.tableContainer}>
          {/* Table Header */}
          <View style={styles.tableHeader}>
            <Text style={[styles.headerCell, { flex: 2 }]}>Staff ID</Text>
            <Text style={[styles.headerCell, { flex: 3 }]}>Name</Text>
            <Text style={[styles.headerCell, { flex: 3 }]}>Email</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Contact No.</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Position</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Department</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Modify</Text>
          </View>

          {/* Table Rows */}
          <ScrollView style={styles.tableBody} showsVerticalScrollIndicator={true}>
            {staffList.map((staff) => (
              <View key={staff.id} style={styles.tableRow}>
                <Text style={[styles.cell, { flex: 2 }]}>{staff.id}</Text>
                <Text style={[styles.cell, { flex: 3 }]}>{staff.name}</Text>
                <Text style={[styles.cell, { flex: 3 }]}>{staff.email}</Text>
                <Text style={[styles.cell, { flex: 2 }]}>{staff.contact}</Text>
                <Text style={[styles.cell, { flex: 2 }]}>{staff.position}</Text>
                <Text style={[styles.cell, { flex: 2 }]}>{staff.department}</Text>

                {/* Modify Column */}
                <View style={[styles.cell, { flex: 2, alignItems: 'center' }]}>
                  <TouchableOpacity onPress={() => handleMenuToggle(staff.id)}>
                    <Text style={{ fontSize: 18 }}>⚙️</Text>
                  </TouchableOpacity>
                  {selectedItem === staff.id && (
                    <View style={styles.dropdownMenu}>
                      <TouchableOpacity onPress={() => handleDelete(staff.id)} style={styles.menuItem}>
                        <Text style={styles.menuText}>Delete Member</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleUpdate(staff.id)} style={styles.menuItem}>
                        <Text style={styles.menuText}>Update Member</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomCard} />
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
    minWidth: 1000,
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

export default StaffDetailsScreen;

