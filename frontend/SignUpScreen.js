import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Dimensions, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import backgroundImage from './assets/8761.jpg';
import config from './file';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const PatientDetailsScreen = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    Name: '',
    Gender: '',
    Age: '',
    Date: '',
    phonenumber: '',
    username: '',
    password: '',
    re_enter_password: ''
  });

  const handlePatientDetails = () => {
    if (!formData.Name || !formData.Gender || !formData.Age || !formData.Date || !formData.phonenumber || !formData.username || !formData.password || !formData.re_enter_password) {
      Alert.alert('Error', 'Please provide all the information.');
      return;
    }

    if (formData.password !== formData.re_enter_password) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    fetch(config.signup, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.text()) // Change to text() to handle plain text response
    .then(data => {
      if (data.includes("Error")) { // Check for 'Error' keyword in the response
        Alert.alert('Error', data);
      } else {
        Alert.alert('Success', 'Registration successful');
        console.log("User signed up successfully");
        navigation.navigate('LoginScreen'); // Navigate to LoginScreen on success
      }
    })
    .catch(error => {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred. Please try again later.');
    });
  }

  return (
    <View style={styles.outerContainer}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
          <View style={styles.innerContainer}>
            <Text style={styles.signUpText}>SIGN UP</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={text => setFormData({ ...formData, Name: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Gender"
                onChangeText={text => setFormData({ ...formData, Gender: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Age"
                onChangeText={text => setFormData({ ...formData, Age: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="dd/mm/yyyy"
                onChangeText={text => setFormData({ ...formData, Date: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                onChangeText={text => setFormData({ ...formData, phonenumber: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={text => setFormData({ ...formData, username: text })}
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
            </View>
            <TouchableOpacity style={styles.button} onPress={handlePatientDetails}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.topLeftContainer} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={windowWidth * 0.08} color="black" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: windowWidth,
    height: windowHeight * 1.05,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: windowWidth * 0.04,
  },
  innerContainer: {
    width: '100%',
    maxWidth: 400,
    padding: windowWidth * 0.04,
    borderRadius: 0,
    marginVertical: windowHeight * 0.02,
  },
  inputContainer: {
    width: '100%',
    marginBottom: windowHeight * 0.01,
  },
  signUpText: {
    fontSize: windowWidth * 0.07,
    fontWeight: '700',
    color: '#000000',
    marginBottom: windowHeight * 0.03,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: windowWidth * 0.03,
    marginBottom: windowHeight * 0.015,
    borderWidth: 1.5,
    borderColor: 'black',
    fontSize: windowWidth * 0.04,
  },
  button: {
    backgroundColor: 'rgba(56, 231, 210, 0.5)',
    paddingVertical: windowHeight * 0.01,
    borderRadius: 10,
    alignItems: 'center',
    width: '40%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: windowWidth * 0.045,
    fontWeight: 'bold',
  },
  topLeftContainer: {
    position: 'absolute',
    top: windowHeight * 0.05,
    left: windowWidth * 0.05,
  },
});

export default PatientDetailsScreen;
