import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import backgroundImage from './assets/questionitem.png';
import image2 from './assets/image_25-removebg-preview.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LowfibreScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToFamilyhistoryScreen = () => {
    navigation.navigate('FamilyhistoryScreen');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.topLeftContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={windowWidth * 0.075} color="black" />
        </TouchableOpacity>
      </View>
      <Image source={image2} style={styles.image2} />
      <TouchableOpacity style={styles.button} onPress={handleNavigateToFamilyhistoryScreen}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      {/* Text Elements */}
      <Text style={styles.text1}>Low Fibre Diet</Text>
      <Text style={styles.text2}>
      A diet low in fruits and vegetables. Women where diets don’t include enough fruits and vegetables may be at increased risk for cervical cancer.
      </Text>
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
    top: windowHeight *0,
  },
  topLeftContainer: {
    position: 'absolute',
    top: windowWidth * 0.08,
    left: windowWidth * 0.02,
    zIndex: 1,
    padding: windowWidth * 0.03,
  },
  image2: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.17,
    position: 'absolute',
    top: windowHeight * 0.32,
    left: windowWidth * 0.25,
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
  text1: {
    fontSize: windowWidth * 0.06,
    fontWeight: '700',
    position: 'absolute',
    top: windowHeight * 0.05,
    left: windowWidth * 0.2,
  },
  text2: {
    fontSize: windowWidth * 0.05,
    fontWeight: '600',
    textAlign: 'center',
    position: 'absolute',
    top: windowHeight * 0.55,
    left: windowWidth * 0.09,
    width: windowWidth * 0.83,
  },
});

export default LowfibreScreen;
