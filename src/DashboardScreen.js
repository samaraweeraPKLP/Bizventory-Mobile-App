import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DashboardScreen = ({ navigation }) => {
  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  const [stockValue, setStockValue] = useState(123456.00);
  const [unfulfilledOrders, setUnfulfilledOrders] = useState(3);
  const [receivedOrders, setReceivedOrders] = useState(1);

  // Stats data array
  const statsData = [
    {
      title: "Total Products",
      value: 105,
      icon: "basket-outline",
      color: "#FFFFFF"
    },
    {
      title: "Low Stock Items",
      value: 12,
      icon: "alert-circle-outline",
      color: "#FF6B6B"
    },
    {
      title: "Active Orders",
      value: 8,
      icon: "document-text-outline",
      color: "#4ECDC4"
    },
    {
      title: "Monthly Sales",
      value: 245,
      icon: "trending-up-outline",
      color: "#45B7D1"
    }
  ];

  // Auto-cycle through stats every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prevIndex) => 
        prevIndex === statsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [statsData.length]);

  // Simulate data loading
  useEffect(() => {
    // Here you would fetch real data from your API
    // fetchDashboardData();
  }, []);

  const handleMenuPress = () => {
    // Open the drawer
    navigation.openDrawer();
  };

  const handleNotificationPress = () => {
    // Alert.alert('Notifications', 'Show notifications');
    navigation.navigate('Notification');
  };

  const handleProfilePress = () => {
    // Alert.alert('Profile', 'User profile options');
    navigation.navigate('UserProfile');
  };

  // Navigation functions for stats arrows
  const handlePrevStat = () => {
    setCurrentStatIndex((prevIndex) => 
      prevIndex === 0 ? statsData.length - 1 : prevIndex - 1
    );
  };

  const handleNextStat = () => {
    setCurrentStatIndex((prevIndex) => 
      prevIndex === statsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Updated navigation handlers
  const handleCreateInvoice = () => {
    navigation.navigate('CreateInvoice');
  };

  const handleAddItem = () => {
    navigation.navigate('AddItemDetails');
  };

  const handleAddOrder = () => {
    navigation.navigate('CreateOrders');
  };

  const handleViewPendingOrders = () => {
    navigation.navigate('PendingOrdersDetails');
  };

  const handleUnfulfilledOrders = () => {
    Alert.alert('Unfulfilled Orders', 'Navigate to Unfulfilled Orders');
    // You can add navigation here if you have this screen
    // navigation.navigate('UnfulfilledOrders');
  };

  const handleReceivedOrders = () => {
    Alert.alert('Received Orders', 'Navigate to Received Orders');
    // You can add navigation here if you have this screen
    // navigation.navigate('ReceivedOrders');
  };

  const formatCurrency = (amount) => {
    return `Rs.${amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
            <Ionicons name="menu" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          
          <Text style={styles.headerTitle}>Dashboard</Text>
          
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={handleNotificationPress} style={styles.notificationButton}>
              <Ionicons name="notifications-outline" size={22} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleProfilePress} style={styles.profileButton}>
              <Ionicons name="person-circle-outline" size={26} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats Card with Carousel */}
        <View style={styles.statsCard}>
          <View style={styles.statsHeader}>
            <TouchableOpacity style={styles.arrowButton} onPress={handlePrevStat}>
              <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            
            <View style={styles.statsContent}>
              <Text style={styles.statsTitle}>{statsData[currentStatIndex].title}</Text>
              <View style={styles.statsValueContainer}>
                <Ionicons 
                  name={statsData[currentStatIndex].icon} 
                  size={40} 
                  color={statsData[currentStatIndex].color}
                  style={styles.basketIcon} 
                />
                <Text style={styles.statsValue}>{statsData[currentStatIndex].value}</Text>
              </View>
            </View>
            
            <TouchableOpacity style={styles.arrowButton} onPress={handleNextStat}>
              <Ionicons name="chevron-forward" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
          
          {/* Indicator Dots */}
          <View style={styles.indicatorContainer}>
            {statsData.map((_, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.indicator,
                  index === currentStatIndex && styles.activeIndicator
                ]}
                onPress={() => setCurrentStatIndex(index)}
              />
            ))}
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionSection}>
          <TouchableOpacity style={styles.primaryButton} onPress={handleCreateInvoice}>
            <Text style={styles.primaryButtonText}>Create Invoice</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} onPress={handleAddItem}>
            <Text style={styles.secondaryButtonText}>Add Item</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} onPress={handleAddOrder}>
            <Text style={styles.secondaryButtonText}>Add Order</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} onPress={handleViewPendingOrders}>
            <Text style={styles.secondaryButtonText}>View Pending Orders</Text>
          </TouchableOpacity>
        </View>

        {/* Stock Value Section */}
        <View style={styles.stockSection}>
          <View style={styles.stockHeader}>
            <Text style={styles.stockTitle}>Value of Stock</Text>
            <Text style={styles.stockValue}>{formatCurrency(stockValue)}</Text>
          </View>
          
          <View style={styles.stockStats}>
            <TouchableOpacity style={styles.stockStatItem} onPress={handleUnfulfilledOrders}>
              <Text style={styles.stockStatLabel}>Unfulfilled</Text>
              <View style={styles.stockStatValueContainer}>
                <Text style={styles.stockStatValue}>{unfulfilledOrders}</Text>
                <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.stockStatItem} onPress={handleReceivedOrders}>
              <Text style={styles.stockStatLabel}>Received</Text>
              <View style={styles.stockStatValueContainer}>
                <Text style={styles.stockStatValue}>{receivedOrders}</Text>
                <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Card (placeholder for additional content) */}
        <View style={styles.bottomCard}>
          {/* Additional content can be added here */}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F0F2',
  },
  scrollContainer: {
    flex: 1,
  },
  header: {
    backgroundColor: '#1B4F56',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 35,
  },
  menuButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationButton: {
    padding: 4,
    marginRight: 8,
  },
  profileButton: {
    padding: 4,
  },
  statsCard: {
    backgroundColor: '#1B4F56',
    // marginHorizontal: 16,
    marginTop: 8,
    // borderRadius: 12,
    paddingVertical: 20,
    paddingBottom: 15,
  },
  statsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  arrowButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  statsContent: {
    alignItems: 'center',
    flex: 1,
  },
  statsTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  statsValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  basketIcon: {
    marginRight: 15,
  },
  statsValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: '#FFFFFF',
    width: 24,
    borderRadius: 4,
  },
  actionSection: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  primaryButton: {
    backgroundColor: '#1B4F56',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
    height: 80,
    borderColor: '#ffffffff',
    borderWidth: 2,
    marginBottom: 25,
  },
  primaryButtonText: {
    fontSize: 25,
    fontWeight: '600',
    color: '#FFFFFF',
    margin:"1%"

  },
  secondaryButton: {
    backgroundColor: '#7B9FA3',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
    height: 80,
    borderColor: '#1B4F56',
    borderWidth: 2,
    marginBottom: 25,
  },
  secondaryButtonText: {
    fontSize: 25,
    fontWeight: '600',
    color: '#FFFFFF',
    margin:"1%"
  },
  stockSection: {
    backgroundColor: '#1B4F56',
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  stockHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  stockTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  stockValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  stockStats: {
    flexDirection: 'row',
    backgroundColor: '#0D3A3F',
  },
  stockStatItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRightWidth: 1,
    borderRightColor: '#1B4F56',
  },
  stockStatLabel: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  stockStatValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stockStatValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginRight: 8,
  },
  bottomCard: {
    backgroundColor: '#1B4F56',
    // marginHorizontal: 16,
    // borderRadius: 12,
    minHeight: 60,
    // marginBottom: 20,
    marginTop: 25,
  },
});

export default DashboardScreen;