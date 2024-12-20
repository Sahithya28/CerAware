import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TkmColposcopyScreen = () => {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ImageBackground source={require('./assets/questionitem.png')} style={styles.background}>
      <View style={styles.container}>
        {/* Colposcopy Test title */}
        <Text style={styles.text1}>Colposcopy</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={windowWidth * 0.08} color="black" />
        </TouchableOpacity>

        {/* Add ImageBackground for image2 */}
        <ImageBackground source={require('./assets/image_40__1_-removebg-preview.png')} style={styles.image2} />

        {/* Add Text component for text2 */}
        <Text style={styles.text2}>
        Colposcopy is a medical procedure used to closely examine the cervix vagina, and vulva for sign of disease, particularly cervical cancer or precancerous changes. It’s often performed if a pap smear or other screening test suggests abnormalities. 
        </Text>
        <Text style={styles.text}>Click here:</Text>
        {/* Buttons */}
        <TouchableOpacity style={styles.button1} onPress={() => handleNavigation('ProcedureCol')}>
          <Text style={styles.buttonText}>Procedure</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.button2]} onPress={() => handleNavigation('BiopsyColScreen')}>
          <Text style={styles.buttonText}>Biopsy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.button3]} onPress={() => handleNavigation('AfterCareCol')}>
          <Text style={styles.buttonText}>After Care</Text>
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
    top: windowHeight * -0.01,
    left: windowWidth * -0.19,
    marginTop: windowHeight * 0.03,
    marginBottom: windowHeight * 0.03,
  },
  backButton: {
    position: 'absolute',
    top: windowHeight * 0.06,
    left: windowWidth * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  
  image2: {
    width: windowWidth * 0.7,
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
    top: windowHeight * 0.045,
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
    top: windowHeight * 0.02,
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
    top: windowHeight * 0.035,
    left: windowWidth * 0.03,
    elevation: 4, // Add elevation for drop shadow
  },
  button3: {
    backgroundColor: '#39E6D1DE', // Adjusted opacity for responsiveness
    top: windowHeight * 0.04,
    left: windowWidth * 0.24,
    elevation: 4, // Add elevation for drop shadow
  },
});

export default TkmColposcopyScreen;
