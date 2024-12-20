import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TkmpapScreen = () => {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ImageBackground source={require('./assets/questionitem.png')} style={styles.background}>
      <View style={styles.container}>
        {/* Pap Test title */}
        <Text style={styles.text1}>Pap Test</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={windowWidth * 0.08} color="black" />
        </TouchableOpacity>

        {/* Add ImageBackground for image2 */}
        <ImageBackground source={require('./assets/image_40-removebg-preview.png')} style={styles.image2} />

        {/* Add Text component for text2 */}
        <Text style={styles.text2}>
          A pap test, also known as pap smear, is a screening procedure for cervical cancer. During the test, a healthcare provider collects cells from the cervix to check for any abnormalities or signs of cancer.
        </Text>
        <Text style={styles.text}>Click here:</Text>
        {/* Buttons */}
        <TouchableOpacity style={styles.button1} onPress={() => handleNavigation('ProcedurePap')}>
          <Text style={styles.buttonText}>Procedure</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.button2]} onPress={() => handleNavigation('PreparationPap')}>
          <Text style={styles.buttonText}>Preparation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.button3]} onPress={() => handleNavigation('ResultsPap')}>
          <Text style={styles.buttonText}>Results</Text>
        </TouchableOpacity>
      </View>
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
  },
  text1: {
    fontSize: windowWidth * 0.06,
    fontWeight: '700',
    textAlign: 'center',
    color: 'black',
    top: windowHeight * -0.083,
    left: windowWidth * -0.19,
    marginTop: windowHeight * 0.03,
    marginBottom: windowHeight * 0.03,
  },
  backButton: {
    position: 'absolute',
    top: windowHeight * 0.05,
    left: windowWidth * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  
  image2: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.2,
    borderRadius: windowWidth * 0.05,
    marginBottom: windowHeight * 0.03,
    top: windowHeight* 0.05,
  },
  text2: {
    width: windowWidth * 0.75,
    fontSize: windowWidth * 0.05,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
    marginBottom: windowHeight * 0.03,
    top: windowHeight* 0.05,
  },
  text: {
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: windowHeight * 0.03,
    top: windowHeight * 0.07,
    left: windowWidth * -0.36,
  },
  buttonText: {
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  button: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.06,
    borderRadius: windowWidth * 0.055,
    backgroundColor: '#39E6D1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: windowHeight * 0.02,
    top: windowHeight * 0.05,
    elevation: 4, // Add elevation for drop shadow
  },
  button1: {
    backgroundColor: '#39E6D1DE', // Adjusted opacity for responsiveness
    top: windowHeight * 0.04,
    left: windowWidth * -0.26,
    width: windowWidth * 0.4,
    height: windowHeight * 0.06,
    borderRadius: windowWidth * 0.055,
    backgroundColor: '#39E6D1',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, // Add elevation for drop shadow
  },
  button2: {
    backgroundColor: '#39E6D1DE', // Adjusted opacity for responsiveness
    top: windowHeight * 0.06,
    left: windowWidth * 0.03,
    elevation: 4, // Add elevation for drop shadow
  },
  button3: {
    backgroundColor: '#39E6D1DE', // Adjusted opacity for responsiveness
    top: windowHeight * 0.06,
    left: windowWidth * 0.24,
    elevation: 4, // Add elevation for drop shadow
  },
});

export default TkmpapScreen;
