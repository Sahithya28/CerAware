import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'; // Import Animated

import backgroundImage from './assets/8761.jpg'; // Assuming your background image file is named 'background.jpg'
import homeImage from './assets/Home.png';

const HomeScreen = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value
  const slideImageAnim = useRef(new Animated.Value(-windowHeight * 0.9)).current; // Initial position above original for image
  const slideTextAnim = useRef(new Animated.Value(windowHeight * 0.5)).current; // Initial position below original for text

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000, // Animation duration in milliseconds
        useNativeDriver: true,
      }),
      Animated.timing(slideImageAnim, {
        toValue: 0,
        duration: 1500, // Animation duration in milliseconds
        useNativeDriver: true,
      }),
      Animated.timing(slideTextAnim, {
        toValue: 0,
        duration: 1500, // Animation duration in milliseconds
        useNativeDriver: true,
      }),
    ]).start();

    // Navigate to the next page after 2 seconds
    const timeout = setTimeout(() => {
      navigation.navigate('WelcomePage'); // Navigate to the next page
    }, 5000);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timeout);
  }, [fadeAnim, slideImageAnim, slideTextAnim, navigation]);

  const handlePress = () => {
    navigation.navigate('WelcomePage'); // Navigate to the next page when clicked anywhere on the screen
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <TouchableOpacity onPress={handlePress}>
          <Animated.View style={[styles.homePanel, { opacity: fadeAnim }]}>
            <Animated.Image 
              source={homeImage} 
              style={[styles.image, { transform: [{ translateY: slideImageAnim }] }]} // Apply transform style for image
            />
            <Animated.Text 
              style={[styles.text, { transform: [{ translateY: slideTextAnim }] }]} // Apply transform style for text
            >
              Cervical Cancer are diagnosed at very early stage far more often than advanced cancer stage
            </Animated.Text>
          </Animated.View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Make the background transparent so the image background is visible
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: windowWidth, // Cover entire screen
    height: windowHeight *1.2, // Cover entire screen
    top: windowHeight *-0.1,
  },
  homePanel: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.35,
    top: windowHeight * 0.08,
    left: windowWidth * 0.0,
    resizeMode: 'contain',
  },
  text: {
    width: windowWidth * 0.6,
    fontSize: windowWidth * 0.06,
    fontWeight: '700',
    textAlign: 'center',
    top: windowHeight * 0.1,
    left: windowWidth * 0.0,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000000',
  },
});

export default HomeScreen;
