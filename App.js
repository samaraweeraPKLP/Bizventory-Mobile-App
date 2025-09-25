// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import LoginScreen from './src/LoginScreen';
// import DashboardScreen from './src/DashboardScreen';
// import CreateInvoiceScreen from './src/Invoice/CreateInvoice';
// import InvoiceHistoryScreen from './src/Invoice/InvoiceHistoryScreen';
// import AddItemDetailsScreen from './src/Items/AddItemDetails';
// import ItemDetailsScreen from './src/Items/ItemDetails';
// import StockLevelScreen from './src/Items/StockLevelDetails';
// import CreateOrdersScreen from './src/Order/CreateOrders';
// import OnlinePaymentScreen from './src/Order/OnlinePayment';
// import PendingOrdersDetails from './src/Order/PendingOrdersDetails';
// import ShopBankDetails from './src/Bank/ShopBankDetails';
// import ReOrdersScreen from './src/Order/ReOrders';
// import ShopBankDetailsScreen from './src/Bank/ShopBankDetailsTable';
// import SuppliersBankDetails from './src/Bank/SuppliersBankDetails';
// import SuppliersBankDetailsScreen from './src/Bank/SuppliersBankDetailsTable';
// import AddSupplierDetailsScreen from './src/Supplier/AddSupplierDetails';
// import UpdateSupplierDetailsScreen from './src/Supplier/UpdateSupplierDetails';
// import SupplierDetailsScreen from './src/Supplier/SupplierDetailsTable';
// import AddStaffDetailsScreen from './src/Staff/AddStaffDetails';
// import StaffDetailsScreen from './src/Staff/staffDetailsTable';
// import AddUserDetailsScreen from './src/Users/AddUsersDetails';
// import UserDetailsScreen from './src/Users/UserDtailsTable';
// import StockReportScreen from './src/Reports/StockReport';
// import SalesReportScreen from './src/Reports/SalesReport';
// import StaffPerformanceReportScreen from './src/Reports/StaffPerformanceReport';
// import NotificationScreen from './src/Notification';
// import UserProfileScreen from './src/Userprofile';
// import ChangePasswordScreen from './src/ChangePassword';
// import ResetPasswordScreen from './src/Password/ResetPassword';
// import PasswordUpdatedScreen from './src/Password/PasswordUpdated';
// import ForgotPasswordScreen from './src/Password/ResetPasswordEmail';
// import VerificationScreen from './src/Password/ResetpasswordCode';



// export default function App() {
//   //return <LoginScreen />;
//   //return <DashboardScreen />;
//   // return <CreateInvoiceScreen />;
//   // return <InvoiceHistoryScreen />;
//   // return <AddItemDetailsScreen />;
//   // return <ItemDetailsScreen />;
//   // return <StockLevelScreen />;
//   // return <CreateOrdersScreen />;
//   // return <OnlinePaymentScreen />;
//   // return <PendingOrdersDetails />;
//   // return <ShopBankDetails />;
//   // return <ReOrdersScreen />;
//   // return <ShopBankDetailsScreen />;
//   // return <SuppliersBankDetailsScreen />;
//   // return <AddSupplierDetailsScreen />;
//   // return <UpdateSupplierDetailsScreen />;
//   // return <SupplierDetailsScreen />;
//   // return <AddStaffDetailsScreen />;
//   // return <StaffDetailsScreen />;
//   // return <AddUserDetailsScreen />;
//   // return <UserDetailsScreen />;
//   // return <StockReportScreen />;
//   // return <SalesReportScreen />;
//   // return <StaffPerformanceReportScreen />;
//   // return <NotificationScreen />;
//   // return <UserProfileScreen />;
//   // return <ChangePasswordScreen />;
//   return <ResetPasswordScreen />;
//   // return <PasswordUpdatedScreen />;
//   // return <ForgotPasswordScreen />;
//   // return <VerificationScreen />;
// }

// App.js - Main navigation setup with Drawer
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Auth Screens
import LoginScreen from './src/LoginScreen';
import DashboardScreen from './src/DashboardScreen';

// Invoice Screens
import CreateInvoiceScreen from './src/Invoice/CreateInvoice';
import InvoiceHistoryScreen from './src/Invoice/InvoiceHistoryScreen';

// Item Screens
import AddItemDetailsScreen from './src/Items/AddItemDetails';
import ItemDetailsScreen from './src/Items/ItemDetails';
import UpdateItemDetailsScreen from './src/Items/UpdateItemDetails';
import StockLevelScreen from './src/Items/StockLevelDetails';

// Order Screens
import CreateOrdersScreen from './src/Order/CreateOrders';
import OnlinePaymentScreen from './src/Order/OnlinePayment';
import PendingOrdersDetails from './src/Order/PendingOrdersDetails';
import ReOrdersScreen from './src/Order/ReOrders';

// Bank Details Screens
import ShopBankDetails from './src/Bank/ShopBankDetails';
import ShopBankDetailsScreen from './src/Bank/ShopBankDetailsTable';
import SuppliersBankDetails from './src/Bank/SuppliersBankDetails';
import SuppliersBankDetailsScreen from './src/Bank/SuppliersBankDetailsTable';

// Supplier Screens
import AddSupplierDetailsScreen from './src/Supplier/AddSupplierDetails';
import UpdateSupplierDetailsScreen from './src/Supplier/UpdateSupplierDetails';
import SupplierDetailsScreen from './src/Supplier/SupplierDetailsTable';

// Staff Screens
import AddStaffDetailsScreen from './src/Staff/AddStaffDetails';
import StaffDetailsScreen from './src/Staff/staffDetailsTable';
import StaffPerformanceReportScreen from './src/Reports/StaffPerformanceReport';

// User Management Screens
import AddUserDetailsScreen from './src/Users/AddUsersDetails';
import UserDetailsScreen from './src/Users/UserDtailsTable';
import UserProfileScreen from './src/Userprofile';

// Password Management Screens
import ChangePasswordScreen from './src/ChangePassword';
import ResetPasswordScreen from './src/Password/ResetPassword';
import PasswordUpdatedScreen from './src/Password/PasswordUpdated';
import ForgotPasswordScreen from './src/Password/ResetPasswordEmail';
import VerificationScreen from './src/Password/ResetpasswordCode';

// Report Screens
import StockReportScreen from './src/Reports/StockReport';
import SalesReportScreen from './src/Reports/SalesReport';

// Other Screens
import NotificationScreen from './src/Notification';

import CustomDrawerContent from './components/CustomDrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Drawer Navigator for main app screens
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#1B4F56',
          width: 300,
        },
      }}
    >
      {/* Main Screens */}
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      
      {/* Inventory Screens */}
      <Drawer.Screen name="AddItemDetails" component={AddItemDetailsScreen} />
      <Drawer.Screen name="ItemDetails" component={ItemDetailsScreen} />
      <Drawer.Screen name="UpdateItemDetailsScreen" component={UpdateItemDetailsScreen} />
      <Drawer.Screen name="StockLevel" component={StockLevelScreen} />
      
      {/* Billing & Invoice Screens */}
      <Drawer.Screen name="CreateInvoice" component={CreateInvoiceScreen} />
      <Drawer.Screen name="InvoiceHistory" component={InvoiceHistoryScreen} />
      <Drawer.Screen name="OnlinePayment" component={OnlinePaymentScreen} />
      <Drawer.Screen name="ShopBankDetails" component={ShopBankDetails} />
      <Drawer.Screen name="ShopBankDetailsTable" component={ShopBankDetailsScreen} />
      
      {/* Staff Screens */}
      <Drawer.Screen name="AddStaffDetails" component={AddStaffDetailsScreen} />
      <Drawer.Screen name="StaffDetails" component={StaffDetailsScreen} />
      <Drawer.Screen name="StaffPerformanceReport" component={StaffPerformanceReportScreen} />
      
      {/* Supplier Management Screens */}
      <Drawer.Screen name="AddSupplierDetails" component={AddSupplierDetailsScreen} />
      <Drawer.Screen name="UpdateSupplierDetails" component={UpdateSupplierDetailsScreen} />
      <Drawer.Screen name="SupplierDetails" component={SupplierDetailsScreen} />
      <Drawer.Screen name="SuppliersBankDetails" component={SuppliersBankDetails} />
      <Drawer.Screen name="SuppliersBankDetailsTable" component={SuppliersBankDetailsScreen} />
      
      {/* Order Management Screens */}
      <Drawer.Screen name="CreateOrders" component={CreateOrdersScreen} />
      <Drawer.Screen name="PendingOrdersDetails" component={PendingOrdersDetails} />
      <Drawer.Screen name="ReOrders" component={ReOrdersScreen} />
      
      {/* Configuration Screens */}
      <Drawer.Screen name="AddUserDetails" component={AddUserDetailsScreen} />
      <Drawer.Screen name="UserDetails" component={UserDetailsScreen} />
      <Drawer.Screen name="UserProfile" component={UserProfileScreen} />
      <Drawer.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Drawer.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Drawer.Screen name="PasswordUpdated" component={PasswordUpdatedScreen} />
      <Drawer.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Drawer.Screen name="Verification" component={VerificationScreen} />
      <Drawer.Screen name="Notification" component={NotificationScreen} />
      
      {/* Reports Screens */}
      <Drawer.Screen name="StockReport" component={StockReportScreen} />
      <Drawer.Screen name="SalesReport" component={SalesReportScreen} />

      <Stack.Screen name="ItemDetailsScreen" component={ItemDetailsScreen} />
      <Stack.Screen name="AddItemDetailsScreen" component={AddItemDetailsScreen} />

    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
        />
        <Stack.Screen 
          name="Main" 
          component={DrawerNavigator}
        />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// package.json dependencies you'll need:
/*
{
  "dependencies": {
    "@react-navigation/native": "^6.1.7",
    "@react-navigation/stack": "^6.3.17",
    "@react-navigation/drawer": "^6.6.3",
    "react-native-screens": "~3.22.0",
    "react-native-safe-area-context": "4.6.3",
    "react-native-gesture-handler": "~2.12.0",
    "react-native-reanimated": "~3.3.0"
  }
}
*/