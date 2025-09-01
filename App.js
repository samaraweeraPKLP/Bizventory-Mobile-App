import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LoginScreen from './src/LoginScreen';
import DashboardScreen from './src/DashboardScreen';
import CreateInvoiceScreen from './src/Invoice/CreateInvoice';
import InvoiceHistoryScreen from './src/Invoice/InvoiceHistoryScreen';
import AddItemDetailsScreen from './src/Items/AddItemDetails';
import ItemDetailsScreen from './src/Items/ItemDetails';
import StockLevelScreen from './src/Items/StockLevelDetails';
import CreateOrdersScreen from './src/Order/CreateOrders';
import OnlinePaymentScreen from './src/Order/OnlinePayment';
import PendingOrdersDetails from './src/Order/PendingOrdersDetails';
import ShopBankDetails from './src/Bank/ShopBankDetails';
import ReOrdersScreen from './src/Order/ReOrders';
import ShopBankDetailsScreen from './src/Bank/ShopBankDetailsTable';
import SuppliersBankDetails from './src/Bank/SuppliersBankDetails';
import SuppliersBankDetailsScreen from './src/Bank/SuppliersBankDetailsTable';
import AddSupplierDetailsScreen from './src/Supplier/AddSupplierDetails';
import UpdateSupplierDetailsScreen from './src/Supplier/UpdateSupplierDetails';
import SupplierDetailsScreen from './src/Supplier/SupplierDetailsTable';
import AddStaffDetailsScreen from './src/Staff/AddStaffDetails';
import StaffDetailsScreen from './src/Staff/staffDetailsTable';
import AddUserDetailsScreen from './src/Users/AddUsersDetails';
import UserDetailsScreen from './src/Users/UserDtailsTable';
import StockReportScreen from './src/Reports/StockReport';
import SalesReportScreen from './src/Reports/SalesReport';
import StaffPerformanceReportScreen from './src/Reports/StaffPerformanceReport';
import NotificationScreen from './src/Notification';
import UserProfileScreen from './src/Userprofile';
import ChangePasswordScreen from './src/ChangePassword';
import ResetPasswordScreen from './src/Password/ResetPassword';
import PasswordUpdatedScreen from './src/Password/PasswordUpdated';
import ForgotPasswordScreen from './src/Password/ResetPasswordEmail';
import VerificationScreen from './src/Password/ResetpasswordCode';



export default function App() {
  //return <LoginScreen />;
  //return <DashboardScreen />;
  // return <CreateInvoiceScreen />;
  // return <InvoiceHistoryScreen />;
  // return <AddItemDetailsScreen />;
  // return <ItemDetailsScreen />;
  // return <StockLevelScreen />;
  // return <CreateOrdersScreen />;
  // return <OnlinePaymentScreen />;
  // return <PendingOrdersDetails />;
  // return <ShopBankDetails />;
  // return <ReOrdersScreen />;
  // return <ShopBankDetailsScreen />;
  // return <SuppliersBankDetailsScreen />;
  // return <AddSupplierDetailsScreen />;
  // return <UpdateSupplierDetailsScreen />;
  // return <SupplierDetailsScreen />;
  // return <AddStaffDetailsScreen />;
  // return <StaffDetailsScreen />;
  // return <AddUserDetailsScreen />;
  // return <UserDetailsScreen />;
  // return <StockReportScreen />;
  // return <SalesReportScreen />;
  // return <StaffPerformanceReportScreen />;
  // return <NotificationScreen />;
  // return <UserProfileScreen />;
  // return <ChangePasswordScreen />;
  return <ResetPasswordScreen />;
  // return <PasswordUpdatedScreen />;
  // return <ForgotPasswordScreen />;
  // return <VerificationScreen />;
}


