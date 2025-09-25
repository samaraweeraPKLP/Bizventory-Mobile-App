import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const notifications = new Array(6).fill({
  type: 'Notification Type',
  title: 'Notification Title : Notification Title Show Here',
  body: 'Notification Body : Notification Message Will appear Here',
  date: '17 March 2025 at 8.30 PM',
});



const NotificationScreen = ({ navigation }) => {
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
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.notificationIcon}>
            <Text style={styles.iconText}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileIcon}>
            <Text style={styles.iconText}>SS</Text>
          </TouchableOpacity>
        </View>
      </View>


      {/* Notification List */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {notifications.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.badge}>❌</Text>
              <Text style={styles.typeText}>{item.type}</Text>
            </View>

            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.bodyText}>{item.body}</Text>

            <View style={styles.dateRow}>
              <Text style={styles.dateText}>📅 {item.date}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
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

  scrollView: {
    padding: 16,
  },

  card: {
    backgroundColor: '#e9f0f2',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 1,
      },
    }),
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },

  badge: {
    fontSize: 16,
    marginRight: 6,
  },

  typeText: {
    fontWeight: '600',
    fontSize: 13,
    color: '#2d6a6a',
  },

  titleText: {
    fontWeight: '600',
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },

  bodyText: {
    fontSize: 13,
    color: '#666',
    marginBottom: 10,
  },

  dateRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  dateText: {
    fontSize: 12,
    color: '#999',
  },
});

export default NotificationScreen;
