import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import backgroundImage from './assets/figure.png';
import image2 from './assets/image_36-removebg-preview.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Common2Screen = () => {
  const navigation = useNavigation(); // Initialize navigation using useNavigation hook

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <View style={styles.topLeftContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={windowWidth * 0.08} color="black" />
          </TouchableOpacity>
        </View>
        <Image source={image2} style={styles.image2} />
        <Text style={styles.text}>
          Screening is important to detect cervical cancer as early as possible
        </Text>
        
        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Ques21')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topLeftContainer: {
    position: 'absolute',
    top: windowHeight * 0.03,
    left: windowWidth * 0.02,
    zIndex: 1,
    padding: windowWidth * 0.03,
  },
  image2: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.3,
    marginBottom: windowHeight * 0.05,
    top: windowWidth* -0.15
  },
  text: {
    width: windowWidth * 0.75,
    fontSize: windowWidth * 0.05,
    fontWeight: '700',
    lineHeight: windowHeight * 0.04,
    textAlign: 'center',
    marginBottom: windowHeight * 0.05,
    top: windowWidth * -0.2
  },
  button: {
    width: '40%', // Adjusted width for responsiveness
    height: windowHeight * 0.05,
    borderRadius: windowWidth * 0.055,
    position: 'absolute',
    backgroundColor: '#39E6D1DE',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: windowHeight * 0.1,
    alignSelf: 'center',
    elevation: 4, // Add elevation for drop shadow
  },
  buttonText: {
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
    color: 'black',
  },
});

export default Common2Screen;
