import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import backgroundImage from './assets/questionitem.png';
import image2 from './assets/image_19-removebg-preview.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AgeRFScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToHPVScreen = () => {
    navigation.navigate('HPVScreen');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.topLeftContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={windowWidth * 0.075} color="black" />
        </TouchableOpacity>
      </View>
      <Image source={image2} style={styles.image2} />
      <Text style={styles.ageText}>Age</Text>
      <Text style={styles.cervicalText}>
        Cervical cancer is most frequently diagnosed in women between the age of 35 and 44, with the average age being 50.
        It rarely develops in women younger than 20. These cancers rarely occur in women who have been getting regular
        tests to screen for cervical cancer before they were 65.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleNavigateToHPVScreen}>
        <Text style={styles.buttonText}>Next</Text>
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
  ageText: {
    fontSize: windowWidth * 0.06,
    fontWeight: '700',
    position: 'absolute',
    top: windowHeight * 0.05,
    left: windowWidth * 0.2,
  },
  cervicalText: {
    fontSize: windowWidth * 0.05,
    fontWeight: '600',
    textAlign: 'center',
    position: 'absolute',
    top: windowHeight * 0.55,
    left: windowWidth * 0.09,
    width: windowWidth * 0.83,
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
});

export default AgeRFScreen;
