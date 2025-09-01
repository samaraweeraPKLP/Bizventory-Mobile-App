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
  return <UpdateSupplierDetailsScreen />;
}


