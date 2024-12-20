import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import backgroundImage from './assets/questionitem.png'; // Assuming your background image file is named '8761.jpg'
import image2 from './assets/image_44-removebg-preview.png'; // Assuming your second image file is named 'image2.png'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HPV16_18Screen = () => {
  const navigation = useNavigation(); // Use useNavigation hook to get the navigation object

  const handleNavigateToHPV16_18_29Screen = () => {
    navigation.navigate('HPVgenotypes'); // Navigate to "21 to 29" screen
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <View style={styles.topLeftContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={windowWidth * 0.075} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.text1}>Consult a doctor , do colposcopy</Text>
        {/* New Text 2 */}
        <Text style={styles.text2}>Positive for HPV 16 or 18 genotypes</Text>
      </ImageBackground>
      {/* Add image2 */}
      <ImageBackground source={image2} style={styles.image2} />
      {/* New Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleNavigateToHPV16_18_29Screen}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
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
    height: windowHeight* 1.05,
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
    width: windowWidth * 0.75,
    top: windowHeight * 0.44,
    left: windowWidth * 0.15,
    fontSize: windowWidth * 0.06,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
  text2: {
    position: 'absolute',
    width: windowWidth * 0.75,
    height: windowHeight * 0.09,
    top: windowHeight * 0.055,
    left: windowWidth * 0.15,
    fontSize: windowWidth * 0.06,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
  image2: {
    position: 'absolute',
    width: windowWidth * 0.9,
    height: windowHeight * 0.5,
    top: windowHeight * 0.22,
    left: windowWidth * 0.05,
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
});

export default HPV16_18Screen;
