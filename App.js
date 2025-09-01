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

export default function App() {
  //return <LoginScreen />;
  //return <DashboardScreen />;
  // return <CreateInvoiceScreen />;
  // return <InvoiceHistoryScreen />;
  // return <AddItemDetailsScreen />;
  // return <ItemDetailsScreen />;
  // return <StockLevelScreen />;
  // return <CreateOrdersScreen />;
  return <OnlinePaymentScreen />;
}


