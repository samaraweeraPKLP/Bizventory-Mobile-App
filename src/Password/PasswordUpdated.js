import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const PasswordUpdatedScreen = ({ navigation }) => {
  const handleLoginPress = () => {
    // Navigate to login screen or perform login action here
    // navigation.navigate('Login');
    console.log('Login button pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
  source={require('../../assets/BizventoryLogo.png')}
  style={styles.logoImage}
  resizeMode="contain"
/>
        {/* Logo and title */}

        <Text style={styles.heading}>Reset Password Verification</Text>

        {/* Image Illustration */}


        <Text style={styles.passwordUpdated}>Password Updated</Text>
        <Text style={styles.successText}>Your password Updated Successfully.</Text>

        <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09404F',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  subTitle: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 4,
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 30,
  },
  image: {
    width: 250,
    height: 150,
    marginBottom: 30,
  },
  passwordUpdated: {
    fontSize: 16,
    fontWeight: '700',
    color: '#D5A167', // same as #D5A167 from screenshot (golden-ish)
    marginBottom: 10,
  },
  successText: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#D5A167',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 60,
  },
  loginButtonText: {
    color: '#09404F',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PasswordUpdatedScreen;
