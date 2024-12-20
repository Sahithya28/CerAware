import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useEffect } from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Similar2Screen = ({ route, navigation }) => {
  const { username } = route.params || {};

  useEffect(() => {
    console.log('Username:', username);
  }, [username]);

  return (
    <ImageBackground
      source={require('./assets/figure.png')} // Adjust the path as per your project structure
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.topLeftContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={windowWidth * 0.075} color="black" />
          </TouchableOpacity>
        </View>
        <Image
          source={require('./assets/image_36-removebg-preview.png')} // Replace with the path to your middle image
          style={styles.middleImage}
        />
        <Text style={styles.text}>
          Screening is important to detect
          cervical cancer as early as possible
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AgeMoreThan35', { username })}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' as per your preference
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topLeftContainer: {
    position: 'absolute',
    top: '3.5%',
    left: '2%',
    zIndex: 1,
    padding: '3%',
  },
  middleImage: {
    width: windowWidth * 0.55,
    height: windowHeight * 0.28,
    position: 'absolute',
    top: windowHeight * 0.18,
    alignSelf: 'center',
  },
  text: {
    position: 'absolute',
    width: windowWidth * 0.9,
    textAlign: 'center',
    fontSize: windowWidth * 0.06,
    fontWeight: '700',
    lineHeight: windowWidth * 0.07,
    color: 'black',
    top: windowHeight * 0.5,
  },
  button: {
    position: 'absolute',
    width: windowWidth * 0.45,
    height: windowHeight * 0.05,
    borderRadius: windowWidth * 0.09,
    backgroundColor: '#39E6D1DE',
    justifyContent: 'center',
    alignItems: 'center',
    top: windowHeight * 0.879,
  },
  buttonText: {
    fontSize: windowWidth * 0.04,
    fontWeight: '700',
    color: 'black',
  },
});
export default Similar2Screen;
