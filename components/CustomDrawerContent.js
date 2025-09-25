// components/CustomDrawerContent.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomDrawerContent = (props) => {
  const { navigation } = props;
  
  // State for managing expanded sections
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionName) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            });
          },
        },
      ]
    );
  };

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
    navigation.closeDrawer();
  };

  const menuData = [
    {
      name: 'Dashboard',
      icon: 'home-outline',
      isExpandable: false,
      onPress: () => navigateToScreen('Dashboard'),
    },
    {
      name: 'Inventory',
      icon: 'cube-outline',
      isExpandable: true,
      subItems: [
        {
          name: 'Add New Item',
          screen: 'AddItemDetails',
          icon: 'add-circle-outline',
        },
        {
          name: 'View/Edit Items',
          screen: 'ItemDetails',
          icon: 'list-outline',
        },
        {
          name: 'Stock Levels',
          screen: 'StockLevel',
          icon: 'bar-chart-outline',
        },
      ],
    },
    {
      name: 'Billing & Invoices',
      icon: 'receipt-outline',
      isExpandable: true,
      subItems: [
        {
          name: 'Create Invoice',
          screen: 'CreateInvoice',
          icon: 'document-text-outline',
        },
        {
          name: 'Invoice History',
          screen: 'InvoiceHistory',
          icon: 'time-outline',
        },
        {
          name: 'Online Payment',
          screen: 'OnlinePayment',
          icon: 'card-outline',
        },
        {
          name: 'Shop Bank Details',
          screen: 'ShopBankDetails',
          icon: 'business-outline',
        },
        {
          name: 'Bank Details Table',
          screen: 'ShopBankDetailsTable',
          icon: 'grid-outline',
        },
      ],
    },
    {
      name: 'Staff',
      icon: 'people-outline',
      isExpandable: true,
      subItems: [
        {
          name: 'Add Staff',
          screen: 'AddStaffDetails',
          icon: 'person-add-outline',
        },
        {
          name: 'Staff List',
          screen: 'StaffDetails',
          icon: 'people-circle-outline',
        },
        {
          name: 'Performance Report',
          screen: 'StaffPerformanceReport',
          icon: 'analytics-outline',
        },
      ],
    },
    {
      name: 'Supplier Management',
      icon: 'business-outline',
      isExpandable: true,
      subItems: [
        {
          name: 'Add Supplier',
          screen: 'AddSupplierDetails',
          icon: 'add-outline',
        },
        {
          name: 'Update Supplier',
          screen: 'UpdateSupplierDetails',
          icon: 'create-outline',
        },
        {
          name: 'Supplier List',
          screen: 'SupplierDetails',
          icon: 'list-circle-outline',
        },
        {
          name: 'Supplier Bank Details',
          screen: 'SuppliersBankDetails',
          icon: 'card-outline',
        },
        {
          name: 'Bank Details Table',
          screen: 'SuppliersBankDetailsTable',
          icon: 'grid-outline',
        },
      ],
    },
    {
      name: 'Order Management',
      icon: 'basket-outline',
      isExpandable: true,
      subItems: [
        {
          name: 'Create Order',
          screen: 'CreateOrders',
          icon: 'add-circle-outline',
        },
        {
          name: 'Pending Orders',
          screen: 'PendingOrdersDetails',
          icon: 'hourglass-outline',
        },
        {
          name: 'Reorders',
          screen: 'ReOrders',
          icon: 'refresh-outline',
        },
      ],
    },
    {
      name: 'Configuration',
      icon: 'settings-outline',
      isExpandable: true,
      subItems: [
        {
          name: 'Add User',
          screen: 'AddUserDetails',
          icon: 'person-add-outline',
        },
        {
          name: 'User Details',
          screen: 'UserDetails',
          icon: 'person-outline',
        },
        {
          name: 'User Profile',
          screen: 'UserProfile',
          icon: 'person-circle-outline',
        },
        {
          name: 'Change Password',
          screen: 'ChangePassword',
          icon: 'key-outline',
        },
        {
          name: 'Reset Password',
          screen: 'ResetPassword',
          icon: 'refresh-circle-outline',
        },
        {
          name: 'Notifications',
          screen: 'Notification',
          icon: 'notifications-outline',
        },
      ],
    },
    {
      name: 'Reports',
      icon: 'bar-chart-outline',
      isExpandable: true,
      subItems: [
        {
          name: 'Stock Report',
          screen: 'StockReport',
          icon: 'cube-outline',
        },
        {
          name: 'Sales Report',
          screen: 'SalesReport',
          icon: 'trending-up-outline',
        },
      ],
    },
  ];

  const renderMenuItem = (item, index) => {
    if (!item.isExpandable) {
      // Simple menu item
      return (
        <TouchableOpacity
          key={index}
          style={[
            styles.menuItem,
            props.state.routeNames[props.state.index] === item.name && styles.activeMenuItem
          ]}
          onPress={item.onPress}
        >
          <Ionicons 
            name={item.icon} 
            size={22} 
            color={props.state.routeNames[props.state.index] === item.name ? '#E67E22' : '#FFFFFF'} 
            style={styles.menuIcon}
          />
          <Text style={[
            styles.menuText,
            props.state.routeNames[props.state.index] === item.name && styles.activeMenuText
          ]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    }

    // Expandable menu item
    const isExpanded = expandedSections[item.name];
    
    return (
      <View key={index}>
        {/* Main menu item */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => toggleSection(item.name)}
        >
          <Ionicons 
            name={item.icon} 
            size={22} 
            color="#FFFFFF" 
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>{item.name}</Text>
          <Ionicons 
            name={isExpanded ? 'chevron-up-outline' : 'chevron-down-outline'} 
            size={18} 
            color="#FFFFFF" 
            style={styles.expandIcon}
          />
        </TouchableOpacity>

        {/* Sub items */}
        {isExpanded && (
          <View style={styles.subMenuContainer}>
            {item.subItems.map((subItem, subIndex) => (
              <TouchableOpacity
                key={subIndex}
                style={[
                  styles.subMenuItem,
                  props.state.routeNames[props.state.index] === subItem.screen && styles.activeSubMenuItem
                ]}
                onPress={() => navigateToScreen(subItem.screen)}
              >
                <Ionicons 
                  name={subItem.icon} 
                  size={18} 
                  color={props.state.routeNames[props.state.index] === subItem.screen ? '#E67E22' : 'rgba(255,255,255,0.8)'} 
                  style={styles.subMenuIcon}
                />
                <Text style={[
                  styles.subMenuText,
                  props.state.routeNames[props.state.index] === subItem.screen && styles.activeSubMenuText
                ]}>
                  {subItem.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header Section */}
        <View style={styles.header}>
          <Image
            source={require('../assets/BizventoryLogo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          
          <View style={styles.divider} />
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          {menuData.map((item, index) => renderMenuItem(item, index))}
        </View>

      </ScrollView>

      {/* Footer Section */}
      <View style={styles.footer}>
        <View style={styles.divider} />
        
        {/* User Info */}
        <TouchableOpacity 
          style={styles.userInfo}
          onPress={() => navigateToScreen('UserProfile')}
        >
          <Ionicons name="person-circle-outline" size={40} color="#FFFFFF" />
          <View style={styles.userDetails}>
            <Text style={styles.userName}>User Name</Text>
            <Text style={styles.userEmail}>user@example.com</Text>
          </View>
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity 
          style={styles.footerButton}
          onPress={handleLogout}
        >
          <Ionicons name="log-out-outline" size={22} color="#FF6B6B" />
          <Text style={[styles.footerButtonText, { color: '#FF6B6B' }]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B4F56',
  },
  scrollContainer: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  logo: {
    width: "100%",
    height: 60,
    marginBottom: 10,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: '100%',
  },
  menuSection: {
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  activeMenuItem: {
    backgroundColor: 'rgba(230, 126, 34, 0.2)',
    borderLeftWidth: 4,
    borderLeftColor: '#E67E22',
  },
  menuIcon: {
    marginRight: 15,
    width: 22,
  },
  menuText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    flex: 1,
  },
  activeMenuText: {
    color: '#E67E22',
    fontWeight: '600',
  },
  expandIcon: {
    marginLeft: 10,
  },
  subMenuContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginHorizontal: 10,
    borderRadius: 8,
    paddingVertical: 5,
  },
  subMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    borderRadius: 6,
  },
  activeSubMenuItem: {
    backgroundColor: 'rgba(230, 126, 34, 0.3)',
  },
  subMenuIcon: {
    marginRight: 12,
    width: 18,
  },
  subMenuText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(255,255,255,0.8)',
  },
  activeSubMenuText: {
    color: '#E67E22',
    fontWeight: '500',
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  userDetails: {
    marginLeft: 12,
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  userEmail: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 2,
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  footerButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    marginLeft: 12,
  },
});

export default CustomDrawerContent;