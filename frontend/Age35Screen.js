import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import backgroundImage from './assets/colour.png'; // Assuming your background image file is named 'image 39 (2).png'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Age35Screen = ({ route }) => {
  const { username } = route.params || {};

  const navigation = useNavigation(); // Use useNavigation hook to get the navigation object

  useEffect(() => {
    console.log('Username:', username);
  }, [username]);

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.topLeftContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={windowWidth * 0.075} color="black" />
        </TouchableOpacity>
      </View>
      {/* New Box with Text */}
      <View style={styles.textBox}>
        <Text style={styles.text}>You are under a High Risk</Text>
      </View>
      {/* Additional Text */}
      <Text style={styles.additionalText}>Start Screening</Text>
      {/* Forward Icon with Circular Border */}
      <TouchableOpacity 
        style={styles.forwardIconContainer}
        onPress={() => navigation.navigate('Similar3Screen', { username })} // Ensure username is passed correctly
      >
        <Ionicons name="arrow-forward" size={windowWidth * 0.075} color="white" />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  topLeftContainer: {
    position: 'absolute',
    top: '3%',
    left: '2%',
    zIndex: 1,
    padding: '3%',
  },
  textBox: {
    position: 'absolute',
    width: '80%',
    height: '14%',
    top: '30%',
    left: '10%',
    borderRadius: 20,
    backgroundColor: '#52CEBF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: windowWidth * 0.06,
    fontWeight: '600',
    color: 'black',
  },
  additionalText: {
    position: 'absolute',
    width: '50%',
    height: '5%',
    top: '50%',
    left: '25%',
    fontSize: windowWidth * 0.06,
    fontWeight: '600',
    lineHeight: windowWidth * 0.08,
    textAlign: 'center',
    color: 'black',
  },
  forwardIconContainer: {
    position: 'absolute',
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    top: '55%',
    left: '45%',
    borderRadius: windowWidth * 0.05,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Age35Screen;
