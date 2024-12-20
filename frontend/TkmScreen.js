import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import backgroundImage from './assets/image.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const TkmScreen = ({ navigation }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.topLeftContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={windowWidth * 0.08} color="black" />
          </TouchableOpacity>
          <Text style={styles.investigationText}>To Know More</Text>
        </View>
        
        {/* Box 1 */}
        <TouchableOpacity
          style={styles.box1}
          onPress={() => navigation.navigate('Tkmpap')}>
          {/* Text 1 */}
          <Text style={styles.text}>What is pap test?</Text>
          {/* Add any content inside the box if needed */}
        </TouchableOpacity>
        
        {/* Box 2 */}
        <TouchableOpacity
          style={styles.box2}
          onPress={() => navigation.navigate('Tkmcolposcopy')}>
          {/* Text 2 */}
          <Text style={styles.text}>What is Colposcopy?</Text>
          {/* Add any content inside the box if needed */}
        </TouchableOpacity>
        <Text style={{ width: screenWidth * 0.25, height: screenHeight * 0.04, top: screenHeight * -0.45, left: windowHeight * -0.14, fontSize: Math.min(screenWidth, screenHeight) * 0.05, fontWeight: '600' }}>Click here:</Text>
        {/* Add your TkmS content here */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
 background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: windowWidth, // Cover entire screen
    height: windowHeight * 1.045, // Cover entire screen
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topLeftContainer: {
    position: 'absolute',
    top: windowHeight * 0.06,
    left: windowWidth * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  investigationText: {
    marginLeft: windowWidth * 0.02,
    fontSize: windowWidth * 0.06,
    fontWeight: '700',
    textAlign: 'center',
    color: 'black', // Assuming the color should be black
    width: windowWidth * 0.65,
    top: windowHeight* 0,
    left: windowHeight* -0.02,
  },
  box1: {
    marginTop: windowHeight * 0.35,
    width: windowWidth * 0.8,
    height: windowHeight * 0.06,
    borderRadius: windowWidth * 0.06,
    backgroundColor: '#39E6D1DE',
    justifyContent: 'center',
    alignItems: 'center',
    top: windowHeight* -0.2,
    elevation: 4, // Add elevation for drop shadow
  },
  box2: {
    marginTop: windowHeight * 0.08,
    width: windowWidth * 0.8,
    height: windowHeight * 0.06,
    borderRadius: windowWidth * 0.06,
    backgroundColor: '#39E6D1DE',
    justifyContent: 'center',
    alignItems: 'center',
    top: windowHeight* -0.2,
    elevation: 4, // Add elevation for drop shadow
  },
  text: {
    fontSize: windowWidth * 0.055,
    fontWeight: '700',
    textAlign: 'center',
    color: 'black', // Assuming the color should be black
  },
  text1: {
    fontSize: Math.min(screenWidth, screenHeight) * 0.05,
    fontWeight: '600',
    textAlign: 'center',
    position: 'absolute',
    // left: screenWidth * 0.23,
  },
});

export default TkmScreen;
