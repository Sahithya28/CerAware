import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import backgroundImage from './assets/questionitem.png';
import image2 from './assets/image_19__1_-removebg-preview.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HPVScreen= () => {
  const navigation = useNavigation();

  const handleNavigateToSexualHistoryScreen = () => {
    navigation.navigate('SexualHistoryScreen');
  };

  const handleNavigateToHPVvaccineScreen = () => {
    navigation.navigate('HPVvaccineScreen');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.topLeftContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={windowWidth * 0.075} color="black" />
        </TouchableOpacity>
      </View>
      <Image source={image2} style={styles.image2} />
      <Text style={styles.hpvText}>Human papilloma virus infection</Text>
      <TouchableOpacity style={styles.button} onPress={handleNavigateToSexualHistoryScreen}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      {/* Additional Text */}
      <Text style={styles.text2}>
        HPV is the most important Risk factor for cervical cancer. It can spread from one person to another during skin to skin contact. One way HPV spreads is through sexual activity including vaginal, anal and even oral sex. HPV vaccines are available to prevent infection.
      </Text>
      {/* Additional Text 3 */}
      <TouchableOpacity style={styles.text3Container}>
        <Text style={styles.text3}>click here:</Text>
      </TouchableOpacity>
      {/* Button2 */}
      <TouchableOpacity style={styles.button2} onPress={handleNavigateToHPVvaccineScreen}>
        <Text style={styles.button2Text}>When to get HPV vaccine?</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: windowWidth,
    height: windowHeight * 1.1,
    top: windowHeight * 0,
  },
  topLeftContainer: {
    position: 'absolute',
    top: windowWidth * 0.08,
    left: windowWidth * 0.02,
    zIndex: 1,
    padding: windowWidth * 0.03,
  },
  image2: {
    width: windowWidth * 0.62,
    height: windowHeight * 0.3,
    position: 'absolute',
    top: windowHeight * 0.15,
    left: windowWidth * 0.20,
  },
  hpvText: {
    width: '70%', // Adjust the width as a percentage of the screen width
    height: windowHeight * 0.1, // Use a percentage of the window height
    top: windowHeight * 0.05, // Use a percentage of the window height for top position
    left: windowWidth * 0.15, // Use a percentage of the window width for left position
    fontSize: windowWidth * 0.06, // Use a percentage of the window width for font size
    fontWeight: '700',
    lineHeight: windowHeight * 0.04, // Use a percentage of the window height for line height
    textAlign: 'center',
    position: 'absolute',
  },  
  button: {
    width: windowWidth* 0.4, // Adjusted width for responsiveness
    height: 40,
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
  text2: {
    width: '85%', // Adjust the width as a percentage of the screen width
    height: windowHeight * 0.4, // Use a percentage of the window height
    top: windowHeight * 0.45, // Use a percentage of the window height for top position
    left: windowWidth * 0.08, // Use a percentage of the window width for left position
    fontSize: windowWidth * 0.05, // Use a percentage of the window width for font size
    fontWeight: '600',
    lineHeight: windowHeight * 0.029, // Use a percentage of the window height for line height
    textAlign: 'center',
    position: 'absolute',
  },
  text3Container: {
    position: 'absolute',
    width: windowWidth * 0.5, // Use a percentage of the window width
    height: windowHeight * 0.02, // Use a percentage of the window height
    top: windowHeight * 0.72, // Use a percentage of the window height for top position
    left: windowWidth * 0.075, // Use a percentage of the window width for left position
  },
  text3: {
    fontSize: windowWidth * 0.04, // Use a percentage of the window width for font size
    fontWeight: '600',
    lineHeight: windowHeight * 0.022, // Use a percentage of the window height for line height
    textAlign: 'left',
  },
  button2: {
    width: windowWidth* 0.6, // Adjusted width for responsiveness
    height:windowHeight* 0.07,
    top: windowHeight  *0.75,
    left: windowWidth* 0.2,
    borderRadius: windowWidth * 0.06,
    position: 'absolute',
    backgroundColor: '#52CEBF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    elevation: 4, // Add elevation for drop shadow
  },
  button2Text: {
    fontSize: windowWidth * 0.036, // Use a percentage of the window width for font size
    fontWeight: '600',
    lineHeight: windowHeight * 0.022, // Use a percentage of the window height for line height
    textAlign: 'center',
  },  
});

export default HPVScreen;
