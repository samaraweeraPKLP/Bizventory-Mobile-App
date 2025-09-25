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

// const ForgotPasswordScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');

//   const handleSendCode = () => {
//     if (!email) {
//       Alert.alert('Error', 'Please enter your email.');
//       return;
//     }

//     // Simulate verification process
//     Alert.alert('Verification Sent', `A verification code has been sent to ${email}`);
//     // navigation.navigate('VerificationScreen'); // Add your navigation logic here
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
//           source={require('../../assets/forgot_password_illustration.png')} // Your uploaded image
//           style={styles.illustration}
//           resizeMode="contain"
//         />

//         {/* Email Input */}
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Email</Text>
//           <TextInput
//             placeholder="Enter Your Email"
//             placeholderTextColor="#999"
//             value={email}
//             onChangeText={setEmail}
//             style={styles.input}
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />
//         </View>

//         {/* Button */}
//         <TouchableOpacity style={styles.button} onPress={handleSendCode}>
//           <Text style={styles.buttonText}>Send verification Code</Text>
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
//     marginBottom: 20,
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

// export default ForgotPasswordScreen;


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
  ActivityIndicator,
} from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Function to send email (you'll need to implement your actual email service)
  const sendVerificationEmail = async (emailAddress) => {
    try {
      // Replace this with your actual email service API call
      // Example using a hypothetical email service:
      
      const response = await fetch('YOUR_EMAIL_SERVICE_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add your API key or authentication headers here
          // 'Authorization': 'Bearer YOUR_API_KEY',
        },
        body: JSON.stringify({
          to: emailAddress,
          subject: 'Password Reset Verification Code',
          template: 'password-reset', // if using email templates
          // Or include the email content directly:
          // html: `<h1>Your verification code is: ${verificationCode}</h1>`,
          // text: `Your verification code is: ${verificationCode}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      return await response.json();
    } catch (error) {
      throw new Error('Email sending failed: ' + error.message);
    }
  };

  const handleSendCode = async () => {
    // Validate email input
    if (!email.trim()) {
      Alert.alert('Error', 'Please enter your email address.');
      return;
    }

    if (!isValidEmail(email.trim())) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    setIsLoading(true);

    try {
      // Send the verification email
      await sendVerificationEmail(email.trim());
      
      // Show success message
      Alert.alert(
        'Verification Sent', 
        `A verification code has been sent to ${email}`,
        [
          {
            text: 'OK',
            onPress: () => {
              // Navigate to VerificationScreen and pass the email
              navigation.navigate('VerificationScreen', { email: email.trim() });
            }
          }
        ]
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to send verification email. Please try again.');
      console.error('Email sending error:', error);
    } finally {
      setIsLoading(false);
    }
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
          source={require('../../assets/forgot_password_illustration.png')}
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
            editable={!isLoading}
          />
        </View>

        {/* Button */}
        <TouchableOpacity 
          style={[styles.button, isLoading && styles.buttonDisabled]} 
          onPress={handleSendCode}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#09404F" size="small" />
          ) : (
            <Text style={styles.buttonText}>Send verification Code</Text>
          )}
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
    minWidth: 200,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#09404F',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ForgotPasswordScreen;