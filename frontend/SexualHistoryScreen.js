import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import backgroundImage from './assets/questionitem.png';
import image2 from './assets/image_27-removebg-preview.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SexualHistoryScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToSmokingScreen = () => {
    navigation.navigate('SmokingScreen');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.topLeftContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={windowWidth * 0.075} color="black" />
        </TouchableOpacity>
      </View>
      <Image source={image2} style={styles.image2} />
      <TouchableOpacity style={styles.button} onPress={handleNavigateToSmokingScreen}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Sexual History</Text>
      <Text style={styles.additionalText}>
        Several factors related to your sexual history can increase the risk of cervical cancer. The risk is most likely affected by increasing the chances of exposure to HPV.{'\n'}
        {'\n'}
        Becoming sexually active at a young age (especially younger than 18 years old).{'\n'}
        {'\n'}
        Having many sexual partners.{'\n'}
        {'\n'}
        Having one partner who is considered high risk (someone with HPV infection or who has many sexual partners)
      </Text>
      <View style={styles.ellipse1}></View>
      <View style={styles.ellipse2}></View>
      <View style={styles.ellipse3}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  topLeftContainer: {
    position: 'absolute',
    top: windowHeight * 0.035,
    left: windowWidth * 0.02,
    zIndex: 1,
    padding: windowWidth * 0.03,
  },
  image2: {
    width: windowWidth * 0.55,
    aspectRatio: 1,
    position: 'absolute',
    top: windowHeight * 0.23,
    left: windowWidth * 0.20,
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
  title: {
    width: '50%', // Adjusted width for responsiveness
    height: windowHeight * 0.09,
    top: windowHeight * 0.05,
    left: windowWidth * 0.19,
    fontSize: windowWidth * 0.06,
    fontWeight: '700',
    textAlign: 'left',
    position: 'absolute',
    color: 'black',
  },
  additionalText: {
    width: '100%', // Adjusted width for responsiveness
    alignSelf: 'center', // Center the text horizontally
    marginTop: '8%', // Adjusted margin from the top for responsiveness
    paddingHorizontal: '5%', // Adjusted horizontal padding for responsiveness
    fontSize: windowWidth * 0.05,
    fontWeight: '600',
    textAlign: 'left',
    color: 'black',
    top: windowHeight * 0.12,
    left:  windowHeight * 0.02
  },
  ellipse1: {
    width: '2.2%', // Adjusted width for responsiveness
    height: '1%', // Adjusted height for responsiveness
    borderRadius: 50, // Ensure it's a circle
    position: 'absolute',
    backgroundColor: 'black',
    top: windowHeight* 0.63, // Adjusted top position for responsiveness
    left: windowHeight* 0.025, // Adjusted left position for responsiveness
  },
  ellipse2: {
    width: '2.2%', // Adjusted width for responsiveness
    height: '1%', // Adjusted height for responsiveness
    borderRadius: 50, // Ensure it's a circle
    position: 'absolute',
    backgroundColor: 'black',
    top: windowHeight* 0.69, // Adjusted top position for responsiveness
    left: '5%', // Adjusted left position for responsiveness
  },
  ellipse3: {
    width: '2.2%', // Adjusted width for responsiveness
    height: '1%', // Adjusted height for responsiveness
    borderRadius: 50, // Ensure it's a circle
    position: 'absolute',
    backgroundColor: 'black',
    top: windowHeight* 0.8, // Adjusted top position for responsiveness
    left: '5%', // Adjusted left position for responsiveness
  },
});

export default SexualHistoryScreen;
