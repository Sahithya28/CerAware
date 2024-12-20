import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Import your background image
import backgroundImage from './assets/questionitem.png';

const AdditionalContentScreen = ({ route }) => {
  const { qnsId, imageSource, contentText } = route.params;
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.goBack(); // Navigate back to the MainScreen
  };

  const getImageStyle = (qnsId) => {
    switch (qnsId) {
      case 1:
        return { width: windowWidth * 0.65, height: windowHeight * 0.2, resizeMode: 'contain', marginTop: windowHeight * 0.02, top: windowHeight * -0.15 };
      case 2:
        return { width: windowWidth * 0.65, height: windowHeight * 0.2, resizeMode: 'cover', marginTop: windowHeight * 0.03, top: -windowHeight * 0.3 };
      case 3:
        return { width: windowWidth * 0.64, height: windowHeight * 0.24, resizeMode: 'stretch', marginTop: windowHeight * 0.03, top: -windowHeight * 0.3 };
      case 4:
        return { width: windowWidth * 0.46, height: windowHeight * 0.24, resizeMode: 'stretch', marginTop: windowHeight * 0.03, top: -windowHeight * 0.3 };
      case 6:
        return { width: windowWidth * 0.65, height: windowHeight * 0.2, resizeMode: 'stretch', marginTop: windowHeight * 0.03, top: windowHeight* -0.3 };
      case 7:
        return { width: windowWidth * 0.75, height: windowHeight * 0.22, resizeMode: 'stretch', marginTop: windowHeight * 0.03, top: windowHeight * -0.25 };
      case 9:
        return { width: windowWidth * 0.75, height: windowHeight * 0.22, resizeMode: 'stretch', marginTop: windowHeight * 0.03, top: windowHeight * -0.25 };
      case 13:
        return { width: windowWidth * 0.75, height: windowHeight * 0.22, resizeMode: 'stretch', marginTop: windowHeight * 0.03, top: windowHeight * -0.25 };
      case 18:
        return { width: windowWidth * 0.75, height: windowHeight * 0.22, resizeMode: 'stretch', marginTop: windowHeight * 0.03, top: windowHeight * -0.25 };
      // Add more cases for other qnsId with their respective styles
      default:
        return { width: windowWidth * 0.7, height: windowHeight * 0.25, resizeMode: 'contain', marginTop: windowHeight * 0.02, top: -windowHeight * 0.2 };
    }
  };

  const getTextStyle = (qnsId) => {
    switch (qnsId) {
      case 1:
        return { fontSize: windowWidth * 0.05, color: '#000000', marginBottom: windowHeight * 0.02, textAlign: 'center', top: windowHeight * 0.25, width: windowWidth * 0.8, fontWeight: '600' };
      case 2:
        return { fontSize: windowWidth * 0.05, color: '#000000', marginBottom: windowHeight * 0.03, textAlign: 'center', top: windowHeight * 0.25, width: windowWidth * 0.8, fontWeight: '600' };
      case 3:
        return { fontSize: windowWidth * 0.05, color: '#000000', marginBottom: windowHeight * 0.03, textAlign: 'center', top: windowHeight * 0.25, width: windowWidth * 0.8, fontWeight: '600' };
      case 4:
        return { fontSize: windowWidth * 0.05, color: '#000000', marginBottom: windowHeight * 0.03, textAlign: 'center', top: windowHeight * 0.25, width: windowWidth * 0.8, fontWeight: '600' };
      case 6:
        return { fontSize: windowWidth * 0.05, color: '#000000', marginBottom: windowHeight * 0.04, textAlign: 'center', top: windowHeight * 0.25, width: windowWidth * 0.8, fontWeight: '600' };
      case 7:
        return { fontSize: windowWidth * 0.05, color: '#000000', marginBottom: windowHeight * 0.05, textAlign: 'center', top: windowHeight * 0.25, width: windowWidth * 0.8, fontWeight: '600' };
      case 9:
        return { fontSize: windowWidth * 0.05, color: '#000000', marginBottom: windowHeight * 0.05, textAlign: 'center', top: windowHeight * 0.25, width: windowWidth * 0.8, fontWeight: '600' };
      case 13:
        return { fontSize: windowWidth * 0.05, color: '#000000', marginBottom: windowHeight * 0.06, textAlign: 'center', top: windowHeight * 0.25, width: windowWidth * 0.8, fontWeight: '600' };
      case 18:
        return { fontSize: windowWidth * 0.05, color: '#000000', marginBottom: windowHeight * 0.06, textAlign: 'center', top: windowHeight * 0.25, width: windowWidth * 0.8, fontWeight: '600' };
      // Add more cases for other qnsId with their respective styles
      default:
        return { fontSize: windowWidth * 0.045, color: '#333', marginBottom: windowHeight * 0.02, textAlign: 'center', top: windowHeight * 0.25, width: windowWidth * 0.8, fontWeight: '500' };
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={[styles.contentText, getTextStyle(qnsId)]}>{contentText}</Text>
        <Image source={imageSource} style={getImageStyle(qnsId)} />
        
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
        <View style={styles.topLeftContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={windowWidth * 0.075} color="black" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  topLeftContainer: {
    position: 'absolute',
    top: windowWidth * 0.08,
    left: windowWidth * 0.02,
    zIndex: 1,
    padding: windowWidth * 0.03,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: windowWidth * 0.05,
  },
  contentText: {
    fontSize: windowWidth * 0.045,
    textAlign: 'center',
    marginBottom: windowHeight * 0.02,
    color: '#000000', // Default text color
    top: windowHeight * 0.25,
    width: windowWidth * 0.8,
    fontWeight: '500',
  },
  nextButton: {
    width: windowWidth * 0.35,
    height: windowHeight* 0.045,
    borderRadius: 20,
    backgroundColor: '#39E6D1DE',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, // Add elevation for drop shadow
    left: windowWidth* 0.33,
    top: windowHeight* -0.09
  },
  nextButtonText: {
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
    color: 'black',
  },
});

export default AdditionalContentScreen;
