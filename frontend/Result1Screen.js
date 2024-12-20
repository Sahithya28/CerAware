import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const Result1Screen = () => {
  const navigation = useNavigation(); // Get the navigation object

  // Function to navigate to the PAPtest screen
  const navigateToPAPtest = () => {
    navigation.navigate('PAPtest'); // Replace with the name of your PAPtest screen
  };

  return (
    <ImageBackground
      source={require('./assets/item.png')} // Replace with the path to your background image
      style={styles.resultScreenContainer}
    >
      <View style={styles.overlay}>
        <Image 
          source={require('./assets/result.png')} // Replace with the path to your additional image
          style={styles.additionalImage}
        />
        
        <Text style={styles.title}>You have to consult doctor and do PAP Smear</Text>
        <Text style={styles.subtitle}>Pap Smear instructions</Text>
        
        <TouchableOpacity style={styles.button} onPress={navigateToPAPtest}>
          <Text style={styles.buttonText}>Pap Test</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  resultScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  additionalImage: {
    position: 'absolute',
    width: windowWidth * 1, // 70% of the screen width
    height: windowHeight * 0.7, // 40% of the screen height
    top: windowHeight * 0.13, // 25% from the top of the screen
    left: windowWidth * 0, // Slightly offset to the left
  },
  title: {
    width: windowWidth * 0.8, // 80% of the screen width
    fontSize: windowWidth * 0.06, // 6% of the screen width
    fontWeight: '600',
    lineHeight: windowHeight * 0.04, // 4% of the screen height
    textAlign: 'center',
    position: 'absolute',
    top: windowHeight * 0.4, // 45% from the top of the screen
    left: windowWidth * 0.1, // Centered horizontally
    color: '#000',
  },
  subtitle: {
    fontSize: windowWidth * 0.055, // 5.5% of the screen width
    fontWeight: 'bold',
    color: '#000',
    marginBottom: windowHeight * 0.02, // 2% of the screen height
    top: windowHeight * 0.05, // 7% below the title
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: windowHeight * 0.01, // 1.5% of the screen height
    paddingHorizontal: windowWidth * 0.1, // 10% of the screen width
    borderRadius: 20,
    marginBottom: windowHeight * 0.02, // 2% of the screen height
    top: windowHeight * 0.07, // 7% below the subtitle
  },
  buttonText: {
    color: '#fff',
    fontSize: windowWidth * 0.045, // 4.5% of the screen width
  },
});

export default Result1Screen;
