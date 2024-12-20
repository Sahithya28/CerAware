import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const ProcedurePapScreen = () => {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ImageBackground source={require('./assets/questionitem.png')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.topLeftContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={windowWidth * 0.08} color="black" />
          </TouchableOpacity>
          <Text style={styles.text1}>Procedure</Text>
        </View>

        {/* Add ImageBackground for image2 */}
        <ImageBackground source={require('./assets/image_41__1_-removebg-preview.png')} style={styles.image2} />

        {/* Add Text component for text2 */}
        <Text style={styles.text2}>Healthcare provider will  use a speculum to gently open the vagina and then collect a small sample of cells from the cervix using a soft brush or spatula. The cells are then sent to a laboratory for examination under a microscope.</Text>

        {/* Add TouchableOpacity for button4 */}
        <TouchableOpacity style={styles.button} onPress={() => handleNavigation('PreparationPap')}>
        <Text style={styles.buttonText}>Next</Text>
          {/* You can add text or icon inside the button here */}
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
    width: windowWidth,
    height: windowHeight * 1.04,
  },
  topLeftContainer: {
    position: 'absolute',
    top: windowHeight * 0.06,
    left: windowWidth * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  text1: {
    marginLeft: windowWidth * 0.02,
    fontSize: windowWidth * 0.06,
    fontWeight: '700',
    textAlign: 'center',
    color: 'black', // Assuming the color should be black
    width: windowWidth * 0.65,
    top: windowHeight * 0,
    left: windowHeight * -0.065,
  },
  image2: {
    position: 'absolute',
    width: windowWidth * 0.5,
    height: windowHeight * 0.2,
    top: windowHeight * 0.25,
    left: windowWidth * 0.25,
    borderRadius: 15,
  },
  text2: {
    position: 'absolute',
    width: windowWidth * 0.75,
    height: windowHeight * 0.3,
    top: windowHeight * 0.47,
    left: windowWidth * 0.125,
    fontSize: windowWidth * 0.05,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
    lineHeight: windowHeight * 0.03,
  },
  button: {
    width: windowWidth * 0.4, // Adjusted width for responsiveness
    height: windowHeight * 0.045, // Adjusted height for responsiveness
    borderRadius: windowWidth * 0.055, // Adjusted border radius for responsiveness
    position: 'absolute',
    backgroundColor: '#39E6D1DE',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: windowHeight * 0.1, // Adjusted bottom position for responsiveness
    alignSelf: 'center', // Centered horizontally
    elevation: 4, // Add elevation for drop shadow
  },
  buttonText: {
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
    color: 'black',
  },
});

export default ProcedurePapScreen;
