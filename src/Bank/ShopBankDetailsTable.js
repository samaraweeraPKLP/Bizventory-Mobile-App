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

const ShopBankDetailsScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = new Array(15).fill({
    cardNo: '**** **** **** 1234',
    nameOnCard: 'John Doe',
    cardType: 'Visa',
    expMonth: '09',
    expYear: '25',
    vccCode: '123',
  });

  const handleMenuToggle = (index) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  const handleDelete = (index) => {
    console.log(`Delete Account at index ${index}`);
    setSelectedCard(null);
  };

  const handleUpdate = (index) => {
    console.log(`Update Account at index ${index}`);
    setSelectedCard(null);
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
        <Text style={styles.headerTitle}>Shop Bank details</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.notificationIcon}>
            <Text style={styles.iconText}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileIcon}>
            <Text style={styles.iconText}>SS</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
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
          <View style={styles.tableHeader}>
            <Text style={[styles.headerCell, { flex: 2 }]}>Card No</Text>
            <Text style={[styles.headerCell, { flex: 2 }]}>Name on Card</Text>
            <Text style={[styles.headerCell, { flex: 1.5 }]}>Card Type</Text>
            <Text style={[styles.headerCell, { flex: 1.5 }]}>Exp Month</Text>
            <Text style={[styles.headerCell, { flex: 1.5 }]}>Exp Year</Text>
            <Text style={[styles.headerCell, { flex: 1.5 }]}>VCC Code</Text>
            <Text style={[styles.headerCell, { flex: 1 }]}>Modify</Text>
          </View>

          <ScrollView style={styles.tableBody} showsVerticalScrollIndicator>
            {cards.map((card, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={[styles.cell, { flex: 2 }]}>{card.cardNo}</Text>
                <Text style={[styles.cell, { flex: 2 }]}>{card.nameOnCard}</Text>
                <Text style={[styles.cell, { flex: 1.5 }]}>{card.cardType}</Text>
                <Text style={[styles.cell, { flex: 1.5 }]}>{card.expMonth}</Text>
                <Text style={[styles.cell, { flex: 1.5 }]}>{card.expYear}</Text>
                <Text style={[styles.cell, { flex: 1.5 }]}>{card.vccCode}</Text>

                <View style={[styles.cell, { flex: 1, alignItems: 'center' }]}>
                  <TouchableOpacity onPress={() => handleMenuToggle(index)}>
                    <Text style={{ fontSize: 18 }}>⚙️</Text>
                  </TouchableOpacity>
                  {selectedCard === index && (
                    <View style={styles.dropdownMenu}>
                      <TouchableOpacity onPress={() => handleDelete(index)} style={styles.menuItem}>
                        <Text style={styles.menuText}>Delete Account</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleUpdate(index)} style={styles.menuItem}>
                        <Text style={styles.menuText}>Update Account</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Bottom card */}
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
    minWidth: 700,
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
  bottomCard: { backgroundColor: '#1B4F56', minHeight: 60, width: '100%' },
});

export default ShopBankDetailsScreen;
