import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import backgroundImage from './assets/questionitem.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PAPtest30_65Screen = () => {
  const navigation = useNavigation();

  const handleNavigateToPAPtest30_65_29Screen = () => {
    navigation.navigate('PAPtest65');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <View style={styles.topLeftContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={windowWidth * 0.075} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.text1}>If you are 30 to 65  </Text>
        <Text style={styles.text2}>
          Have pap test and HPV test every 5 years.
        </Text>
        <Text style={styles.text3}>
          Have pap test alone every 3 years.
        </Text>
        <Text style={styles.text4}>
          Have an HPV test alone every 5 years.
        </Text>
        <View style={styles.ellipse1}></View>
        <View style={styles.ellipse2}></View>
        <View style={styles.ellipse3}></View>
      </ImageBackground>
      <TouchableOpacity
        style={styles.button}
        onPress={handleNavigateToPAPtest30_65_29Screen}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
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
    height: windowHeight*1.1,
  },
  topLeftContainer: {
    position: 'absolute',
    top: windowHeight * 0.04,
    left: windowWidth * 0.01,
    zIndex: 1,
    padding: windowWidth * 0.03,
  },
  text1: {
    position: 'absolute',
    width: '75%',
    top: windowHeight * 0.055,
    left: windowWidth * 0.1,
    fontSize: windowWidth * 0.06,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
  text2: {
    position: 'absolute',
    width: '70%',
    top: windowHeight * 0.34,
    left: windowWidth * 0.2,
    fontSize: windowWidth * 0.06,
    fontWeight: '600',
    lineHeight: windowHeight * 0.03,
    textAlign: 'left',
    color: 'black',
  },
  text3: {
    position: 'absolute',
    width: '70%',
    top: windowHeight * 0.47,
    left: windowWidth * 0.2,
    fontSize: windowWidth * 0.06,
    fontWeight: '600',
    lineHeight: windowHeight * 0.03,
    textAlign: 'left',
    color: 'black',
  },
  text4: {
    position: 'absolute',
    width: '70%',
    top: windowHeight * 0.58,
    left: windowWidth * 0.2,
    fontSize: windowWidth * 0.06,
    fontWeight: '600',
    lineHeight: windowHeight * 0.03,
    textAlign: 'left',
    color: 'black',
  },
  ellipse1: {
    position: 'absolute',
    width: windowWidth * 0.022,
    height: windowHeight * 0.01,
    borderRadius: windowWidth * 0.011,
    top: windowHeight * 0.35,
    left: windowWidth * 0.12,
    backgroundColor: 'black',
  },
  ellipse2: {
    position: 'absolute',
    width: windowWidth * 0.022,
    height: windowHeight * 0.01,
    borderRadius: windowWidth * 0.011,
    top: windowHeight * 0.485,
    left: windowWidth * 0.12,
    backgroundColor: 'black',
  },
  ellipse3: {
    position: 'absolute',
    width: windowWidth * 0.022,
    height: windowHeight * 0.01,
    borderRadius: windowWidth * 0.011,
    top: windowHeight * 0.585,
    left: windowWidth * 0.12,
    backgroundColor: 'black',
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

export default PAPtest30_65Screen;
