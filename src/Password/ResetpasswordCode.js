// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   Image,
//   Alert,
// } from 'react-native';

// const VerificationScreen = ({ navigation }) => {
//   const [code, setCode] = useState('');

//   const handleVerifyCode = () => {
//     if (!code) {
//       Alert.alert('Error', 'Please enter the verification code.');
//       return;
//     }

//     // Simulate verification logic
//     Alert.alert('Success', 'Verification code accepted!');
//     // navigation.navigate('ResetPassword'); // Replace with actual navigation
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.content}>
//         {/* Logo */}
//         <Image
//           source={require('../../assets/BizventoryLogo.png')}
//           style={styles.logo}
//           resizeMode="contain"
//         />

//         {/* Title */}
//         <Text style={styles.title}>Reset Password Verification</Text>

//         {/* Illustration */}
//         <Image
//           source={require('../../assets/forgot_password_illustration_code.png')} // Reuse or change image as needed
//           style={styles.illustration}
//           resizeMode="contain"
//         />

//         {/* Verification Code Input */}
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Verification Code</Text>
//           <TextInput
//             placeholder="Enter Your Code"
//             placeholderTextColor="#999"
//             value={code}
//             onChangeText={setCode}
//             style={styles.input}
//             keyboardType="numeric"
//           />
//         </View>

//         {/* Verify Button */}
//         <TouchableOpacity style={styles.button} onPress={handleVerifyCode}>
//           <Text style={styles.buttonText}>Verify</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#09404F',
//   },
//   content: {
//     flex: 1,
//     paddingHorizontal: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 200,
//     height: 80,
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 18,
//     color: '#FFFFFF',
//     marginBottom: 20,
//   },
//   illustration: {
//     width: 250,
//     height: 180,
//     marginBottom: 30,
//   },
//   inputContainer: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 14,
//     color: '#FFFFFF',
//     marginBottom: 5,
//   },
//   input: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 8,
//     height: 48,
//     paddingHorizontal: 15,
//     fontSize: 16,
//     color: '#000',
//   },
//   button: {
//     backgroundColor: '#D5A167',
//     borderRadius: 6,
//     paddingVertical: 12,
//     paddingHorizontal: 40,
//   },
//   buttonText: {
//     color: '#09404F',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

// export default VerificationScreen;


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

const VerificationScreen = ({ navigation, route }) => {
  const [code, setCode] = useState('');
  const { email } = route.params || {}; // Get email from navigation params

  const handleVerifyCode = () => {
    if (!code.trim()) {
      Alert.alert('Error', 'Please enter the verification code.');
      return;
    }

    // Here you would typically verify the code with your backend
    // For now, simulating verification logic
    if (code.trim().length < 4) {
      Alert.alert('Error', 'Please enter a valid verification code.');
      return;
    }

    // Simulate verification logic
    Alert.alert('Success', 'Verification code accepted!', [
      {
        text: 'OK',
        onPress: () => {
          // Navigate to ResetPassword screen and pass email if needed
          navigation.navigate('ResetPassword', { email: email });
        }
      }
    ]);
  };

  const handleResendCode = () => {
    Alert.alert(
      'Resend Code', 
      `A new verification code has been sent to ${email || 'your email'}`,
      [{ text: 'OK' }]
    );
    // Here you would call the same email sending function from ForgotPasswordScreen
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

        {/* Email display */}
        {email && (
          <Text style={styles.emailText}>
            Code sent to: {email}
          </Text>
        )}

        {/* Illustration */}
        <Image
          source={require('../../assets/forgot_password_illustration_code.png')}
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
            maxLength={6} // Assuming 6-digit code
          />
        </View>

        {/* Verify Button */}
        <TouchableOpacity style={styles.button} onPress={handleVerifyCode}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>

        {/* Resend Code Link */}
        <TouchableOpacity style={styles.resendContainer} onPress={handleResendCode}>
          <Text style={styles.resendText}>
            Didn't receive the code? <Text style={styles.resendLink}>Resend</Text>
          </Text>
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
    marginBottom: 10,
  },
  emailText: {
    fontSize: 14,
    color: '#D5A167',
    marginBottom: 20,
    textAlign: 'center',
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
    textAlign: 'center',
    letterSpacing: 2,
  },
  button: {
    backgroundColor: '#D5A167',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginBottom: 20,
  },
  buttonText: {
    color: '#09404F',
    fontSize: 16,
    fontWeight: '600',
  },
  resendContainer: {
    marginTop: 10,
  },
  resendText: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
  },
  resendLink: {
    color: '#D5A167',
    textDecorationLine: 'underline',
  },
});

export default VerificationScreen;