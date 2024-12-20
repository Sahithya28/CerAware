import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import backgroundImage from './assets/questionitem.png';
import newImage from './assets/result.png'; // Import your new image here

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const guidelineBaseWidth = 375; // base width for guideline
const guidelineBaseHeight = 667; // base height for guideline

// Function to scale a value based on the screen width
const scaleWidth = (size) => (windowWidth / guidelineBaseWidth) * size;

// Function to scale a value based on the screen height
const scaleHeight = (size) => (windowHeight / guidelineBaseHeight) * size;

const HPVNegativeScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToHPVNegativeScreen = () => {
    navigation.navigate('Toolscreen');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <View style={styles.topLeftContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={scaleWidth(30)} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.text1}>Negative</Text>
        {/* New Text 2 */}
        <Text style={styles.text4}>
        If not taken HPV vaccine
        </Text>
        <Text style={styles.text2}>
        You are in High Risk
        </Text>
        <View style={styles.connectingLine}></View>
        {/* New Text 3 */}
        <Text style={styles.text3}>
        Do HPV test every 3 or 5 years
        </Text>
        {/* New Image */}
        <Image source={newImage} style={styles.newImage} />
      </ImageBackground>
      <TouchableOpacity
        style={styles.button}
        onPress={handleNavigateToHPVNegativeScreen}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  topLeftContainer: {
    position: 'absolute',
    top: windowHeight * 0.04,
    left: windowWidth * 0.01,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: windowWidth * 0.03,
  },
  text1: {
    position: 'absolute',
    width: '75%',
    top: scaleHeight(37),
    left: scaleWidth(35),
    fontSize: scaleWidth(22),
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
  text2: {
    position: 'absolute',
    width: scaleWidth(277),
    height: scaleHeight(29),
    top: scaleHeight(250),
    left: scaleWidth(50),
    fontSize: scaleWidth(24),
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
  text3: {
    position: 'absolute',
    width: scaleWidth(230),
    height: scaleHeight(29),
    top: scaleHeight(385),
    left: scaleWidth(65),
    fontSize: scaleWidth(24),
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
  text4: {
    position: 'absolute',
    width: scaleWidth(230),
    height: scaleHeight(29),
    top: scaleHeight(300),
    left: scaleWidth(65),
    fontSize: scaleWidth(24),
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
  button: {
    width: windowWidth * 0.4, // Adjusted width for responsiveness
    height: windowHeight * 0.045, // Adjusted height for responsiveness
    borderRadius: windowWidth * 0.055, // Adjusted border radius for responsiveness
    position: 'absolute',
    backgroundColor: '#39E6D1DE',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: windowHeight * 0.1, // Adjusted bottom position for responsiveness
    alignSelf: 'center', // Centered horizontally
    elevation: 4, // Add elevation for drop shadow
  },
  buttonText: {
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
    color: 'black',
  },
  connectingLine: {
    position: 'absolute',
    backgroundColor: 'black',
    width: scaleWidth(4),
    height: scaleHeight(60),
    top: scaleHeight(325),
    left: scaleWidth(187),
  },
  newImage: {
    width: scaleWidth(400),
    height: scaleHeight(450),
    top: scaleHeight(105),
    left: scaleWidth(-10),
    position: 'absolute',
  },
});

export default HPVNegativeScreen;
