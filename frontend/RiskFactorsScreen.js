import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import backgroundImage from './assets/image.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const RiskFactorsScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.topLeftContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={windowWidth * 0.075} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.riskFactorsContainer}>
        <Text style={styles.riskFactorsText}>Risk factors</Text>
        <Text style={{ width: screenWidth * 0.25, height: screenHeight * 0.04, top: screenHeight * 0.025, left: windowHeight * -0.05, fontSize: Math.min(screenWidth, screenHeight) * 0.05, fontWeight: '600' }}>Click here:</Text>

      </View>
      <TouchableOpacity onPress={() => navigation.navigate('AgeRFScreen')} style={[styles.box, { top: windowHeight * 0.16 }]}>
        <Text style={styles.boxText}>Age</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('HPVScreen')} style={[styles.box, { top: windowHeight * 0.24 }]}>
        <Text style={styles.boxText}>Human papillomavirus infection</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SexualHistoryScreen')} style={[styles.box, { top: windowHeight * 0.32 }]}>
        <Text style={styles.boxText}>Sexual History</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SmokingScreen')} style={[styles.box, { top: windowHeight * 0.40 }]}>
        <Text style={styles.boxText}>Smoking</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ImmuneScreen')} style={[styles.box, { top: windowHeight * 0.48 }]}>
        <Text style={styles.boxText}>Having a weakened immune system</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LTBCScreen')} style={[styles.box, { top: windowHeight * 0.56 }]}>
        <Text style={styles.boxText}>Long-term use of Birth control pills</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ChlamydiaScreen')} style={[styles.box, { top: windowHeight * 0.64 }]}>
        <Text style={styles.boxText}>Chlamydia Infection</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('EconomicScreen')} style={[styles.box, { top: windowHeight * 0.72 }]}>
        <Text style={styles.boxText}>Economic Status</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LowfibreScreen')} style={[styles.box, { top: windowHeight * 0.80 }]}>
        <Text style={styles.boxText}>Low Fibre Diet</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('FamilyhistoryScreen')} style={[styles.box, { top: windowHeight * 0.88 }]}>
        <Text style={styles.boxText}>Family History</Text>
      </TouchableOpacity>
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
  riskFactorsContainer: {
    position: 'absolute',
    top: windowHeight * 0.06,
    left: windowWidth * 0.15,
    zIndex: 1,
  },
  riskFactorsText: {
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
    elevation: 4, // Add elevation for drop shadow
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
});

export default RiskFactorsScreen;
