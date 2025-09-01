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

const UserDetailsScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  // Sample User Data
  const userList = [
    {
      id: 'USR-001',
      username: 'john_doe',
      email: 'john@example.com',
      role: 'Admin',
      lastLogin: '2025-08-30 14:22',
    },
    {
      id: 'USR-002',
      username: 'jane_smith',
      email: 'jane@example.com',
      role: 'Editor',
      lastLogin: '2025-08-29 09:15',
    },
    {
      id: 'USR-003',
      username: 'robert_brown',
      email: 'robert@example.com',
      role: 'Viewer',
      lastLogin: '2025-08-28 18:50',
    },
  ];

  const handleMenuToggle = (id) => {
    setSelectedUser(selectedUser === id ? null : id);
  };

  const handleDelete = (id) => {
    console.log('Delete User:', id);
    setSelectedUser(null);
  };

  const handleUpdate = (id) => {
    console.log('Update User:', id);
    setSelectedUser(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#2d6a6a" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>User Details</Text>
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
          <Text style={styles.addButtonText}>Add User</Text>
        </TouchableOpacity>
      </View>

      {/* Table */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.tableContainer}>
          {/* Header Row */}
          <View style={styles.tableHeader}>
            <Text style={[styles.headerCell, { flex: 2 }]}>User ID</Text>
            <Text style={[styles.headerCell, { flex: 3 }]}>Username</Text>
            <Text style={[styles.headerCell, { flex: 4 }]}>Email</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Role</Text>
            <Text style={[styles.headerCell, { flex: 3 }]}>Last Login</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Action</Text>
          </View>

          {/* Table Rows */}
          <ScrollView style={styles.tableBody}>
            {userList.map((user) => (
              <View key={user.id} style={styles.tableRow}>
                <Text style={[styles.cell, { flex: 2 }]}>{user.id}</Text>
                <Text style={[styles.cell, { flex: 3 }]}>{user.username}</Text>
                <Text style={[styles.cell, { flex: 4 }]}>{user.email}</Text>
                <Text style={[styles.cell, { flex: 2 }]}>{user.role}</Text>
                <Text style={[styles.cell, { flex: 3 }]}>{user.lastLogin}</Text>

                {/* Action Column */}
                <View style={[styles.cell, { flex: 2, alignItems: 'center' }]}>
                  <TouchableOpacity onPress={() => handleMenuToggle(user.id)}>
                    <Text style={{ fontSize: 18 }}>⚙️</Text>
                  </TouchableOpacity>
                  {selectedUser === user.id && (
                    <View style={styles.dropdownMenu}>
                      <TouchableOpacity onPress={() => handleDelete(user.id)} style={styles.menuItem}>
                        <Text style={styles.menuText}>Delete User</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleUpdate(user.id)} style={styles.menuItem}>
                        <Text style={styles.menuText}>Update User</Text>
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
      <View style={styles.bottomBar} />
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
    fontWeight: 'bold',
  },

  searchRow: {
    flexDirection: 'row',
    padding: 16,
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
    width: 140,
    zIndex: 10,
  },
  menuItem: { paddingVertical: 8, paddingHorizontal: 12 },
  menuText: { color: 'white', fontSize: 14 },
  bottomBar: { backgroundColor: '#1B4F56', minHeight: 60, width: '100%' },
});

export default UserDetailsScreen;
