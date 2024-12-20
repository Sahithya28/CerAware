import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import backgroundImage from './assets/image.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Calculate the base font size based on screen dimensions
const baseFontSize = Math.min(windowWidth, windowHeight) * 0.05;

const HPVtestScreen = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.topLeftContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={Math.min(windowWidth, windowHeight) * 0.08} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.box, { top: windowHeight * 0.36 }]}
          onPress={() => navigateToScreen('HPV16_18')}
        >
          <Text style={[styles.text, { top: windowHeight * 0.01 }]}>
            Positive for HPV 16 or 18 genotypes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, { top: windowHeight * 0.49 }]}
          onPress={() => navigateToScreen('HPVgenotypes')}
        >
          <Text style={[styles.text, { top: windowHeight * 0.0 }]}>
            Positive for other than HPV 16 or 18{'\n'} genotypes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, { top: windowHeight * 0.63 }]}
          onPress={() => navigateToScreen('HPVNegative')}
        >
          <Text style={[styles.text, { top: windowHeight * 0.01 }]}>
            Negative
          </Text>
        </TouchableOpacity>
        <Text style={[styles, { top: windowHeight * 0.05, left: windowWidth * 0.2, fontSize: windowHeight* 0.028, fontWeight: '600' }]}>
          HPV Test
        </Text>
        <Text style={[styles, { top: windowHeight * 0.25, left: windowWidth * 0.09, fontSize: windowHeight* 0.025, fontWeight: '600'}]}>
          Click here:
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  topLeftContainer: {
    position: 'absolute',
    top: windowHeight * 0.05,
    left: windowWidth * 0.04,
    zIndex: 1,
  },
  box: {
    position: 'absolute',
    width: windowWidth * 0.8,
    height: windowHeight * 0.06,
    borderRadius: 15,
    backgroundColor: '#39E6D1DE',
    left: windowWidth * 0.1,
    elevation: 4,
  },
  text: {
    fontSize: baseFontSize * 0.9, // Adjusted for each specific text
    fontWeight: '600',
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
 },
});

export default HPVtestScreen;
