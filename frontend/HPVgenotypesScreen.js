import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import backgroundImage from './assets/questionitem.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HPV16_18Screen = () => {
  const navigation = useNavigation();

  const handleNavigateToHPV16_18_29Screen = () => {
    navigation.navigate('HPVNegative');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={windowWidth * 0.075} color="black" />
        </TouchableOpacity>
        <Text style={styles.text1}>Do PAP test</Text>
        <Text style={styles.text2}>Positive for other than HPV 16 or 18 genotypes</Text>
        
        <View style={styles.boxContainer}>
          <View style={styles.box}>
            <Text style={styles.boxText}>Not Normal</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxText}>Normal</Text>
          </View>
        </View>

        <View style={styles.text3Container}>
          <Text style={styles.text3}>Consult a doctor</Text>
          <Text style={styles.text3}>Do Colposcopy</Text>
          <View style={styles.connectingLine} />
        </View>
        
        <View style={styles.text4Container}>
          <Text style={styles.text4}>Repeat PAP & HPV test every 12 months</Text>
          <View style={styles.connecting1Line} />
        </View>
      </ImageBackground>

      <TouchableOpacity style={styles.button} onPress={handleNavigateToHPV16_18_29Screen}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    top: windowHeight * 0.04,
    left: windowWidth * 0.01,
    padding: windowWidth * 0.03,
    zIndex: 1,
  },
  text1: {
    position: 'absolute',
    width: '75%',
    textAlign: 'center',
    fontSize: windowWidth * 0.065,
    fontWeight: '600',
    top: windowHeight * 0.35,
    left: windowWidth * 0.125,
  },
  text2: {
    position: 'absolute',
    width: '75%',
    textAlign: 'center',
    fontSize: windowWidth * 0.065,
    fontWeight: '600',
    top: windowHeight * 0.055,
    left: windowWidth * 0.15,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 0.1,
    marginTop: windowHeight * 0.4,
  },
  box: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.03,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    top: windowHeight * 0.05,
    elevation: 4, // Add elevation for drop shadow
  },
  boxText: {
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
    color: '#038373',
  },
  text3Container: {
    alignItems: 'center',
    marginTop: windowHeight * 0.05,
  },
  text3: {
    fontSize: windowWidth * 0.045,
    fontWeight: '600',
    lineHeight: windowHeight * 0.03,
    textAlign: 'center',
    top: windowHeight* 0.1,
    left: windowHeight* -0.12,
  },
  connectingLine: {
    backgroundColor: 'black',
    width: 4,
    height: windowHeight * 0.1,
    marginTop: windowHeight * 0.04,
    top: windowHeight* -0.097,
    left: windowHeight* -0.115,
  },
  connecting1Line: {
    backgroundColor: 'black',
    width: 4,
    height: windowHeight * 0.1,
    marginTop: windowHeight * 0.04,
    top: windowHeight* -0.345,
    left: windowHeight* 0.12,
  },
  text4Container: {
    alignItems: 'center',
    marginTop: windowHeight * 0.05,
  },
  text4: {
    fontSize: windowWidth * 0.045,
    fontWeight: '600',
    lineHeight: windowHeight * 0.03,
    textAlign: 'center',
    top: windowHeight* -0.15,
    left: windowHeight*0.1,
    width: windowHeight*0.25,
  },
  button: {
    position: 'absolute',
    bottom: windowHeight * 0.1,
    alignSelf: 'center',
    width: windowWidth * 0.4,
    height: windowHeight * 0.045,
    borderRadius: windowWidth * 0.055,
    backgroundColor: '#39E6D1DE',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, // Add elevation for drop shadow
  },
  buttonText: {
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
    color: 'black',
  },
});

export default HPV16_18Screen;
