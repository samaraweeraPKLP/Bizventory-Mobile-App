import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';

const VerificationScreen = ({ navigation }) => {
  const [code, setCode] = useState('');

  const handleVerifyCode = () => {
    if (!code) {
      Alert.alert('Error', 'Please enter the verification code.');
      return;
    }

    // Simulate verification logic
    Alert.alert('Success', 'Verification code accepted!');
    // navigation.navigate('ResetPassword'); // Replace with actual navigation
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo */}
        <Image
          source={require('../../assets/BizventoryLogo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Title */}
        <Text style={styles.title}>Reset Password Verification</Text>

        {/* Illustration */}
        <Image
          source={require('../../assets/forgot_password_illustration_code.png')} // Reuse or change image as needed
          style={styles.illustration}
          resizeMode="contain"
        />

        {/* Verification Code Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Verification Code</Text>
          <TextInput
            placeholder="Enter Your Code"
            placeholderTextColor="#999"
            value={code}
            onChangeText={setCode}
            style={styles.input}
            keyboardType="numeric"
          />
        </View>

        {/* Verify Button */}
        <TouchableOpacity style={styles.button} onPress={handleVerifyCode}>
          <Text style={styles.buttonText}>Verify</Text>
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
  logo: {
    width: 200,
    height: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  illustration: {
    width: 250,
    height: 180,
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    height: 48,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#D5A167',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: '#09404F',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default VerificationScreen;
