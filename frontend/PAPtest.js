import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import backgroundImage from './assets/image.png';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const PAPtestScreen = ({ age }) => { // Remove navigation prop

  const navigation = useNavigation(); // Hook for navigation

  const navigateToScreen = (ageRange) => {
    switch(ageRange) {
      case 'PAPtest21':
        navigation.navigate('PAPtest21');
        break;
      case 'PAPtest21_29':
        navigation.navigate('PAPtest21_29');
        break;
      case 'PAPtest30_65':
        navigation.navigate('PAPtest30_65');
        break;
      case 'PAPtest65':
        navigation.navigate('PAPtest65');
        break;
      default:
        break;
    }
  };
  

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.topLeftContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={Math.min(screenWidth, screenHeight) * 0.08} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.agePAPtestContainer}>
        </View>
        <TouchableOpacity
          style={[styles.box, { top: screenHeight * 0.32 }]}
          onPress={() => navigateToScreen('PAPtest21')}
        ><Text style={[styles.text, { top: screenHeight * 0.01, left: screenWidth * 0.1 }]}>If you are younger than 21</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, { top: screenHeight * 0.44 }]}
          onPress={() => navigateToScreen('PAPtest21_29')}
        ><Text style={[styles.text, { top: screenHeight * 0.01, left: screenWidth * 0.2 }]}>If you are 21 to 29  </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, { top: screenHeight * 0.56 }]}
          onPress={() => navigateToScreen('PAPtest30_65')}
        ><Text style={[styles.text, { top: screenHeight * 0.01, left: screenWidth * 0.2 }]}>If you are 30 to 65  </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, { top: screenHeight * 0.68 }]}
          onPress={() => navigateToScreen('PAPtest65')}
        ><Text style={[styles.text, { top: screenHeight * 0.01, left: screenWidth * 0.17 }]}>If you are  65 or older  </Text>
        </TouchableOpacity>
        {/* Inserting the new Text component without changing any dimensions or styles */}
        <Text style={{ width: screenWidth * 0.3, height: screenHeight * 0.05, top: screenHeight * 0.050, left: screenWidth * 0.15, fontSize: Math.min(screenWidth, screenHeight) * 0.06, fontWeight: '700', textAlign: 'center' }}>PAP Test</Text>
        {/* Inserting the new Text component without changing any dimensions or styles */}
        <Text style={{ width: screenWidth * 0.25, height: screenHeight * 0.04, top: screenHeight * 0.20, left: screenWidth * 0.09, fontSize: Math.min(screenWidth, screenHeight) * 0.05, fontWeight: '600' }}>Click here:</Text>
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
    top: screenHeight * 0.05,
    left: screenWidth * 0.04,
    zIndex: 1,
  },
  agePAPtestText: {
    fontSize: Math.min(screenWidth, screenHeight) * 0.03,
    fontWeight: '700',
    textAlign: 'center',
  },
  box: {
    position: 'absolute',
    width: screenWidth * 0.8,
    height: screenHeight * 0.06,
    borderRadius: 15,
    backgroundColor: '#39E6D1DE',
    left: screenWidth * 0.1,
    elevation: 4, // Add elevation for drop shadow
  },
  text: {
    fontSize: Math.min(screenWidth, screenHeight) * 0.05,
    fontWeight: '600',
    textAlign: 'center',
    position: 'absolute',
    // left: screenWidth * 0.23,
  },
});

export default PAPtestScreen;
