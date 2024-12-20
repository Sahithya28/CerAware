import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import backgroundImage from './assets/questionitem.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HPVvaccineScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToSexualHistoryScreen = () => {
    navigation.navigate('SexualHistoryScreen');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.topLeftContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={windowWidth * 0.075} color="black" />
        </TouchableOpacity>
      </View>
      {/* Inserted text1 */}
      <Text style={styles.text1}>When to get HPV vaccination?</Text>
      {/* Box 1 */}
      <View style={styles.box1}></View>
      {/* Box 2 */}
      <View style={styles.box2}></View>
      {/* Inserted text2 */}
      <Text style={styles.text2}>2 Doses</Text>
      {/* Inserted text3 */}
      <Text style={styles.text3}>3 Doses</Text>
      {/* Inserted text4 */}
      <Text style={styles.text4}>If 9 to 14 years of age</Text>
      {/* Inserted text5 */}
      <Text style={styles.text5}>If 15 to 45 years of age</Text>
      {/* Inserted matter1 */}
      <Text style={styles.matter1}>
        - 1st dose at age 9
        {'\n'}
        - 2nd dose within 6-12 months
      </Text>
      {/* Inserted matter2 */}
      <Text style={styles.matter2}>
        - 1st dose : 15 years of age
        {'\n'}
        - 2nd dose : after 1-2 months
        {'\n'}
        - 3rd dose : after 6 months
      </Text>
      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={handleNavigateToSexualHistoryScreen}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: windowWidth,
    height: windowHeight * 1.1,
    top: windowHeight *0,
  },
  topLeftContainer: {
    position: 'absolute',
    top: windowWidth * 0.08,
    left: windowWidth * 0.02,
    zIndex: 1,
    padding: windowWidth * 0.03,
  },
  button: {
    width: windowWidth* 0.4, // Adjusted width for responsiveness
    height: 40,
    borderRadius: windowWidth * 0.055,
    position: 'absolute',
    backgroundColor: '#39E6D1DE',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: windowHeight * 0.1,
    alignSelf: 'center',
    elevation: 4, // Add elevation for drop shadow
  },
  buttonText: {
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
    color: 'black',
  },
  text1: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'left',
    position: 'absolute',
    width: 293,
    height: 30,
    top: windowHeight* 0.054,
    left: windowHeight* 0.1,
  },
  box1: {
    width: windowHeight * 0.35,
    height: windowHeight* 0.05,
    top: windowHeight* 0.2,
    left: windowHeight* 0.05,
    borderRadius: 20,
    backgroundColor: '#39E6D1DE',
    position: 'absolute',
  },
  box2: {
    width: windowHeight * 0.35,
    height: windowHeight* 0.05,
    top: windowHeight* 0.55,
    left: windowHeight* 0.05,
    borderRadius: 20,
    backgroundColor: '#39E6D1DE',
    position: 'absolute',
  },
  text2: {
    width: 94,
    height: 29,
    top: windowHeight* 0.27,
    left: 57,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'left',
    position: 'absolute',
  },
  text3: {
    width: 95,
    height: 29,
    top: windowHeight* 0.63,
    left: windowHeight* 0.05,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'left',
    position: 'absolute',
  },
  text4: {
    width: 256,
    height: 35,
    top: windowHeight* 0.205,
    left: windowHeight* 0.075,
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    position: 'absolute',
  },
  text5: {
    width: windowHeight* 0.5,
    height: 35,
    top: windowHeight* 0.555,
    left: windowHeight* -0.025,
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    position: 'absolute',
  },
  matter1: {
    width: 366,
    height: 87,
    top: windowHeight* 0.35,
    left: windowHeight* 0.05,
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'left',
    position: 'absolute',
  },
  matter2: {
    width: 353,
    height: 87,
    top: windowHeight* 0.7,
    left: windowHeight* 0.05,
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'left',
    position: 'absolute',
  },
});

export default HPVvaccineScreen;
