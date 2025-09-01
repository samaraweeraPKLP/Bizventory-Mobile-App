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

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSendCode = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email.');
      return;
    }

    // Simulate verification process
    Alert.alert('Verification Sent', `A verification code has been sent to ${email}`);
    // navigation.navigate('VerificationScreen'); // Add your navigation logic here
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
          source={require('../../assets/forgot_password_illustration.png')} // Your uploaded image
          style={styles.illustration}
          resizeMode="contain"
        />

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Enter Your Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={handleSendCode}>
          <Text style={styles.buttonText}>Send verification Code</Text>
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
    marginBottom: 20,
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

export default ForgotPasswordScreen;
