// DetailsScreen.js
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import backgroundImage from './assets/8761.jpg';
import image2 from './assets/doctor.png';
import deviceImage from './assets/patient.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function DetailsScreen() {
  const navigation = useNavigation();

  const handleDeviceImagePress = () => {
    navigation.navigate('LoginScreen');
  };

  const handleImage2Press = () => {
    navigation.navigate('DocloginScreen');
  };
  
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleDeviceImagePress}>
          <Image source={deviceImage} style={styles.deviceImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleImage2Press}>
          <Image source={image2} style={styles.image2} />
        </TouchableOpacity>
      </View>
      <View style={styles.topLeftContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={windowWidth * 0.08} color="black" />
        </TouchableOpacity>
      </View>
      {/* User and Doctor text components */}
      <Text style={styles.userText}>User</Text>
      <Text style={styles.doctorText}>Doctor</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: windowWidth * 1,
    height: windowHeight* 1.05,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deviceImage: {
    width: windowWidth * 0.58,
    height: windowHeight * 0.27,
    marginBottom: windowHeight * 0.1,
    top: windowHeight * 0.05,
  },
  image2: {
    width: windowWidth * 0.56,
    height: windowHeight * 0.27,
    marginBottom: windowHeight * 0.1,
    top: windowHeight * 0.04,
  },
  topLeftContainer: {
    position: 'absolute',
    top: windowHeight * 0.05,
    left: windowWidth * 0.05,
    zIndex: 1,
  },
  userText: {
    position: 'absolute',
    width: windowWidth * 0.2,
    height: windowHeight * 0.05,
    top: windowHeight * 0.47,
    left: windowWidth * 0.4,
    fontSize: windowWidth * 0.05,
    fontWeight: '600',
    textAlign: 'center',
  },
  doctorText: {
    position: 'absolute',
    width: windowWidth * 0.3,
    height: windowHeight * 0.07,
    top: windowHeight * 0.84,
    left: windowWidth * 0.35,
    fontSize: windowWidth * 0.05,
    fontWeight: '600',
    textAlign: 'center',
  },
});
