import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomePage = () => {
  const navigation = useNavigation();
  const animation = useRef(new Animated.Value(-windowWidth)).current;
  const textAnimation = useRef(new Animated.Value(windowWidth)).current;

  useEffect(() => {
    const animationDuration = 1000;
    const delayDuration = 2000;

    const animate = () => {
      Animated.timing(animation, {
        toValue: 0,
        duration: animationDuration,
        useNativeDriver: true,
      }).start();

      Animated.timing(textAnimation, {
        toValue: 0,
        duration: animationDuration,
        useNativeDriver: true,
        delay: animationDuration / 2,
      }).start();
    };

    const navigateToNextPage = () => {
      setTimeout(() => {
        navigation.navigate('DetailsScreen');
      }, 3000);
    };

    animate();
    navigateToNextPage();
  }, []);

  const handleScreenPress = () => {
    navigation.navigate('DetailsScreen');
  };

  return (
    <ImageBackground source={require('./assets/8761.jpg')} style={styles.background}>
      <TouchableOpacity style={styles.container} onPress={handleScreenPress}>
        <Animated.View style={[styles.additionalTextContainer, { transform: [{ translateY: animation }] }]}>
          <Animated.Text style={[styles.additionalText, { transform: [{ translateX: textAnimation }] }]}>
            Cervical Cancer diagnosed at early stage 5 years survival rate 91%
          </Animated.Text>
        </Animated.View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: windowWidth, // Cover entire screen
    height: windowHeight * 1.2, // Cover entire screen with additional height
    top: windowHeight * -0.1, // Offset to adjust background position
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  additionalTextContainer: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.28,
    top: '10%', // Center vertically
    backgroundColor: 'rgba(56, 231, 210, 0.5)', // Semi-transparent background color
    borderRadius: windowWidth * 0.04, // Semi-transparent background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  additionalText: {
    fontSize: windowWidth * 0.06, // Make it responsive
    fontWeight: '700',
    textAlign: 'center',
    color: '#000000',
  },
});

export default WelcomePage;
