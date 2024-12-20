import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Dimensions, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import backgroundImage from './assets/8761.jpg';
import config from './file';

const DO = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    username: '',
    phonenumber: '',
    password: '',
    re_enter_password: '',
    specialization: '',
    experience: '',
    name: '',
    email: ''
  });

  const handleSignup = () => {
    // Validate phone number
    const phoneNumberRegex = /^[0-9]+$/;
    if (!formData.phonenumber || !phoneNumberRegex.test(formData.phonenumber)) {
      Alert.alert('Error', 'Please provide a valid phone number.');
      return;
    }
  
    // Validate username, password, and re-entered password
    if (!formData.username || !/^[a-zA-Z]+$/.test(formData.username)) {
      Alert.alert('Error', 'Please provide a valid username containing only letters.');
      return;
    }
  
    if (!formData.password || !formData.re_enter_password) {
      Alert.alert('Error', 'Please provide all the information.');
      return;
    }
  
    if (formData.password !== formData.re_enter_password) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
  
    fetch(config.docsign, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success === false) {
          Alert.alert('Error', data.message);
        } else {
          Alert.alert('Success', 'Registration successful');
          console.log("User signed up successfully");
          navigation.navigate('DocloginScreen'); // Navigate to DocLoginScreen
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  
  return (
    <View style={styles.outerContainer}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
          <View style={styles.innerContainer}>
            <Text style={styles.signUpText}>SIGN UP</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={text => setFormData({ ...formData, username: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                onChangeText={text => setFormData({ ...formData, phonenumber: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={text => setFormData({ ...formData, password: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Re-enter Password"
                secureTextEntry={true}
                onChangeText={text => setFormData({ ...formData, re_enter_password: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Specialization"
                onChangeText={text => setFormData({ ...formData, specialization: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Experience"
                keyboardType="numeric"
                onChangeText={text => setFormData({ ...formData, experience: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={text => setFormData({ ...formData, name: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={text => setFormData({ ...formData, email: text })}
              />
              <TouchableOpacity style={styles.button} onPress={handleSignup}>
                <Text style={styles.buttonText}>Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.topLeftContainer} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: windowWidth,
    height: windowHeight * 1.05,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
    marginTop: windowHeight * 0.1,
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  input: {
    width: windowWidth * 0.9,
    height: 50,
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: 'black',
    paddingHorizontal: 10,
    fontSize: 18,
  },
  button: {
    width: windowWidth * 0.4,
    height: 40,
    backgroundColor: 'rgba(56, 231, 210, 0.5)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    elevation: 4, // Add elevation for drop shadow
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  topLeftContainer: {
    position: 'absolute',
    top: 47,
    left: 20,
    zIndex: 999,
  },
});

export default DO;
