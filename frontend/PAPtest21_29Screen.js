import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import backgroundImage from './assets/questionitem.png'; // Assuming your background image file is named '8761.jpg'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PAPtest21_29Screen = () => {
  const navigation = useNavigation(); // Use useNavigation hook to get the navigation object

  const handleNavigateToPAPtest21_29_29Screen = () => {
    navigation.navigate('PAPtest30_65'); // Navigate to "21_29 to 29" screen
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <View style={styles.topLeftContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={windowWidth * 0.075} color="black" />
          </TouchableOpacity>
        </View>
        {/* New Text 2 */}
        <Text style={styles.text2}>If you are 21 to 29</Text>
        {/* Black connecting line */}
        <View style={styles.connectingLine}></View>
        <View style={styles.connectingLine2}></View>
        <View style={styles.connectingLine3}></View>
        <View style={styles.connectingLine4}></View>
        <View style={styles.connectingLine5}></View>
      </ImageBackground>
      <TouchableOpacity
        style={styles.button}
        onPress={handleNavigateToPAPtest21_29_29Screen}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      {/* New Text */}
      <Text style={styles.text3}>Have you ever done pap test</Text>
      {/* New Buttons */}
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.buttonText1}>No</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.buttonText2}>Yes</Text>
      </TouchableOpacity>
      {/* New Texts */}
      <Text style={styles.text4}>Do pap test</Text>
      <Text style={styles.text5}>Normal</Text>
      <Text style={styles.text6}>Abnormal</Text>
      {/* Additional Texts */}
      <Text style={styles.text7}>Pap test every 3 years once.</Text>
      <Text style={styles.text8}>Have to consult a doctor.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: windowWidth,
    height: windowHeight * 1.1,
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
  text2: {
    position: 'absolute',
    width: windowWidth * 0.75,
    height: windowHeight * 0.1,
    top: windowHeight * 0.05,
    left: windowWidth * 0.1,
    fontSize: windowWidth * 0.06,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
  text3: {
    position: 'absolute',
    width: windowWidth * 0.9,
    height: windowHeight * 0.08,
    top: windowHeight * 0.28,
    left: windowWidth * 0.05,
    fontSize: windowWidth * 0.06,
    fontWeight: '700',
    textAlign: 'center',
    color: 'black',
  },
  text4: {
    position: 'absolute',
    width: windowWidth * 0.3,
    height: windowHeight * 0.06,
    top: windowHeight * 0.57,
    left: windowWidth * 0.1,
    fontSize: windowWidth * 0.05,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
  text5: {
    position: 'absolute',
    width: windowWidth * 0.15,
    height: windowHeight * 0.055,
    top: windowHeight * 0.47,
    left: windowWidth * 0.47,
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
  text6: {
    position: 'absolute',
    width: windowWidth * 0.2,
    height: windowHeight * 0.055,
    top: windowHeight * 0.47,
    left: windowWidth * 0.67,
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
  text7: {
    position: 'absolute',
    width: windowWidth * 0.25,
    height: windowHeight * 0.1,
    top: windowHeight * 0.60,
    left: windowWidth * 0.4,
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
  text8: {
    position: 'absolute',
    width: windowWidth * 0.25,
    height: windowHeight * 0.1,
    top: windowHeight * 0.60,
    left: windowWidth * 0.67,
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
  image2: {
    position: 'absolute',
    width: windowWidth * 0.8,
    height: windowHeight * 0.6,
    top: windowHeight * 0.25,
    left: windowWidth * 0.1,
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
  button1: {
    position: 'absolute',
    width: windowWidth * 0.13,
    height: windowHeight * 0.035,
    top: windowHeight * 0.35,
    left: windowWidth * 0.2,
    borderRadius: windowWidth * 0.02,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    position: 'absolute',
    width: windowWidth * 0.13,
    height: windowHeight * 0.035,
    top: windowHeight * 0.35,
    left: windowWidth * 0.6,
    borderRadius: windowWidth * 0.02,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: windowWidth * 0.04,
    color: 'black',
    fontWeight: '600',
  },
  buttonText1: {
    fontSize: windowWidth * 0.04,
    color: '#038373',
    fontWeight: '600',
  },
  buttonText2: {
    fontSize: windowWidth * 0.04,
    color: '#038373',
    fontWeight: '600',
  },
  connectingLine: {
    position: 'absolute',
    backgroundColor: 'black',
    width: windowWidth * 0.008,
    height: windowHeight * 0.20,
    top: windowHeight * 0.38,
    left: windowWidth * 0.25,
  },
  connectingLine2: {
    position: 'absolute',
    backgroundColor: 'black',
    width: windowWidth * 0.008,
    height: windowHeight * 0.1,
    top: windowHeight * 0.385,
    left: windowWidth * 0.595,
    transform: [{ rotate: '35deg' }],
  },
  connectingLine3: {
    position: 'absolute',
    backgroundColor: 'black',
    width: windowWidth * 0.008,
    height: windowHeight * 0.1,
    top: windowHeight * 0.385,
    left: windowWidth * 0.71,
    transform: [{ rotate: '-35deg' }],
  },
  connectingLine4: {
    position: 'absolute',
    backgroundColor: 'black',
    width: windowWidth * 0.008,
    height: windowHeight * 0.1,
    top: windowHeight * 0.5,
    left: windowWidth * 0.53,
  },
  connectingLine5: {
    position: 'absolute',
    backgroundColor: 'black',
    width: windowWidth * 0.008,
    height: windowHeight * 0.1,
    top: windowHeight * 0.5,
    left: windowWidth * 0.8,
  },
});

export default PAPtest21_29Screen;
