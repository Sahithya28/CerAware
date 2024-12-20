import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const ProcedureColScreen = () => {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ImageBackground source={require('./assets/questionitem.png')} style={styles.background}>
      <View style={styles.container}>
      <Text style={styles.text1}>Procedure</Text>
        <View style={styles.topLeftContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={windowWidth * 0.08} color="black" />
          </TouchableOpacity>
        </View>

        {/* Add ImageBackground for image2 */}
        <ImageBackground source={require('./assets/image_41__4_-removebg-preview.png')} style={styles.image2} />

        {/* Add Text component for text2 */}
        <Text style={styles.text2}>During a colposcopy, a speculum is inserted into the vagina to hold it open, allowing the doctor to see the cervix, which resembles a microscope, is then used to magnify the cervix. A solution may be applied to the cervix to highlight any abnormal area.</Text>

        {/* Add TouchableOpacity for button4 */}
        <TouchableOpacity style={styles.button} onPress={() => handleNavigation('BiopsyColScreen')}>
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
    top: windowHeight * -0.41,
    left: windowHeight * -0.095,
  },
  image2: {
    position: 'absolute',
    width: windowWidth * 0.6,
    height: windowHeight * 0.2,
    top: windowHeight * 0.25,
    left: windowWidth * 0.22,
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

export default ProcedureColScreen;
