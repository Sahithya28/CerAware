import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react';
import { Alert, Dimensions, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import config from './file';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function DocloginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [roleId, setRoleId] = useState('');

  const handleLogin = () => {
    // Your login API URL
    const loginApiUrl = config.doclog;

    // Make a POST request to the login API
    fetch(loginApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password}),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Login Response:', data);
        if (data.status === 'success') {
          // Alert the user about successful login
          Alert.alert('Success', 'Login successful!', [
            {
              text: 'OK',
              onPress: () => {
                // Navigate to the Dashboard screen after successful login
                navigation.navigate('DocSearchScreen');
              },
            },
          ]);
        } else {
          // Alert the user about invalid credentials
          Alert.alert('Error', 'Invalid username, or password. Please try again.');
        }
      })
      .catch(error => {
        console.error('Login Error:', error);
        // Alert the user about login failure
        Alert.alert('Error', 'Login failed. Please try again later.');
      });
  };

  const handleSignUp = () => {
    // Navigate to the Sign Up screen
    navigation.navigate('DocsignScreen');
  };

  return (
    <ImageBackground source={require('./assets/8761.jpg')} style={styles.background}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null} enabled>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled" // Scrolls when tapping on TextInput
        >
          {/* Text element */}
          <Text style={styles.textStyle}>WELCOME</Text>
          {/* Patient name */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={username}
              onChangeText={text => setUsername(text)}
            />
          </View>
          {/* Password */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>
 
          {/* LOGIN */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          {/* SIGN UP */}
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
          {/* Back Button */}
          <View style={styles.topLeftContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: windowWidth * 0.05,
    paddingVertical: windowHeight * 0.1,
  },
  textStyle: {
    fontSize: windowWidth * 0.08,
    fontWeight: '700',
    marginBottom: windowHeight * 0.05,
  },
  inputContainer: {
    width: '100%',
    marginBottom: windowHeight * 0.03,
  },
  input: {
    width: '100%',
    height: windowHeight * 0.06,
    borderWidth: 1.5,
    borderColor: 'black',
    paddingHorizontal: windowWidth * 0.04,
    fontSize: windowWidth * 0.04,
  },
  loginButton: {
    width: '35%',
    height: windowHeight * 0.045,
    backgroundColor: 'rgba(56, 231, 210, 0.5)', // Semi-transparent background color
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight * 0.03,
    marginBottom: windowHeight * 0.03,
    left: windowHeight * -0.1,
    top: windowHeight * 0.04,
    elevation: 4, // Add elevation for drop shadow
  },
  signUpButton: {
    width: '35%',
    height: windowHeight * 0.045,
    backgroundColor: 'rgba(56, 231, 210, 0.5)', // Semi-transparent background color
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight * 0.03,
    marginBottom: windowHeight * 0.03,
    right: windowHeight * -0.1,
    top: windowHeight * -0.035,
    elevation: 4, // Add elevation for drop shadow
  },
  buttonText: {
    fontSize: windowHeight * 0.02, // Corrected from window to windowHeight
    fontWeight: '600',
    color: 'black',
  },
  topLeftContainer: {
    position: 'absolute',
    top: 49,
    left: 20,
  },
});
