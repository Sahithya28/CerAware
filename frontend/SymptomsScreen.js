import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import backgroundImage from './assets/image.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const SymptomsScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.topLeftContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={windowWidth * 0.075} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.SymptomsContainer}>
        <Text style={styles.SymptomsText}>Symptoms</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('VaginalBleeding')} style={[styles.box, { top: windowHeight * 0.32 }]}>
        <Text style={styles.boxText}>Vaginal Bleeding</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('VaginalDischarge')} style={[styles.box, { top: windowHeight * 0.40 }]}>
        <Text style={styles.boxText}>Vaginal  Discharge</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles, { top: windowHeight * 0.2, left: windowHeight* 0 }]}>
        <Text style={styles.Text1}>{"->"} Pain during Sex</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={[styles, { top: windowHeight * 0.22, left: windowHeight* 0 }]}>
        <Text style={styles.Text1}>{"->"} Pain in pelvic region</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={[styles, { top: windowHeight * 0.24, left: windowHeight* 0 }]}>
        <Text style={styles.Text1}>{"->"} Legs Swelling</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={[styles, { top: windowHeight * 0.26, left: windowHeight* 0 }]}>
        <Text style={styles.Text1}>{"->"} Urine problems</Text>
      </TouchableOpacity>
      <Text style={{ width: screenWidth * 0.25, height: screenHeight * 0.04, top: screenHeight * -0.3, left: windowHeight * 0.04, fontSize: Math.min(screenWidth, screenHeight) * 0.05, fontWeight: '600' }}>Click here:</Text>
      <Text style={{ width: screenWidth * 1, height: screenHeight * 0.04, top: screenHeight * -0.1, left: windowHeight * 0.04, fontSize: Math.min(screenWidth, screenHeight) * 0.05, fontWeight: '600' }}>here you can see another symptoms:</Text>

    </ImageBackground>
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
    width: '100%', // Adjusted to cover entire screen
    height: '100%', // Adjusted to cover entire screen
  },
  topLeftContainer: {
    position: 'absolute',
    top: windowHeight * 0.045,
    left: windowWidth * 0.01,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: windowWidth * 0.03,
  },
  SymptomsContainer: {
    position: 'absolute',
    top: windowHeight * 0.06,
    left: windowWidth * 0.15,
    zIndex: 1,
  },
  SymptomsText: {
    fontSize: windowWidth * 0.06, // Adjusted font size
    fontWeight: 'bold',
  },
  box: {
    position: 'absolute',
    width: windowWidth * 0.75, // Adjusted width
    height: windowHeight * 0.04, // Adjusted height
    left: windowWidth * 0.125, // Adjusted left position
    borderRadius: 20, // Adjusted border radius
    backgroundColor: '#39E6D1DE',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontSize: windowWidth * 0.04, // Adjusted font size
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    fontSize: Math.min(screenWidth, screenHeight) * 0.05,
    fontWeight: '600',
    textAlign: 'center',
    position: 'absolute',
    // left: screenWidth * 0.23,
  },
  box1: {
    position: 'absolute',
    width: windowWidth * 0.75, // Adjusted width
    height: windowHeight * 0.04, // Adjusted height
    left: windowWidth * 0.125, // Adjusted left position
    borderRadius: 20, // Adjusted border radius
    backgroundColor: '#39E6D1DE',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text1: {
    fontSize: windowWidth * 0.04, // Adjusted font size
    fontWeight: 'bold',
    color: 'black',
    width: windowWidth * 0.75, // Adjusted width
    height: windowHeight * 0.04, // Adjusted height
    left: windowWidth * 0.125, // Adjusted left position

  },
});

export default SymptomsScreen;
