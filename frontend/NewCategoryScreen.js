import Ionicons from 'react-native-vector-icons/Ionicons';
import NetInfo from '@react-native-community/netinfo'; // Import NetInfo for network checking
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import config from './file';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const NewCategoryScreen = ({ route, navigation }) => {
  const { username } = route.params || {};
  const [canSubmit, setCanSubmit] = useState({
    age_less_than_21: false,
    age_between_21_35: false,
    age_more_than_35: false,
  });

  useEffect(() => {
    checkNetworkAndFetchStatus();
  }, [route.params]);

  const checkNetworkAndFetchStatus = async () => {
    // Check for network connection before proceeding
    const state = await NetInfo.fetch();
    if (!state.isConnected) {
      Alert.alert('Error', 'No internet connection.');
      return;
    }
    
    // Fetch submission status for each category
    checkSubmissionStatus('age_less_than_21');
    checkSubmissionStatus('age_between_21_35');
    checkSubmissionStatus('age_more_than_35');
  };

  const checkSubmissionStatus = async (category) => {
    try {
      const response = await axios.get(config.time, {
        params: { username, category }
      });
      console.log(response.data); // Debugging line to see the response

      if (response.data.includes('You can submit your questions.')) {
        setCanSubmit(prevState => ({ ...prevState, [category]: true }));
      } else {
        Alert.alert('Notice', response.data);
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Error response:', error.response.data);
        Alert.alert('Error', `Server error: ${error.response.data}`);
      } else if (error.request) {
        // Request was made but no response received
        console.error('Error request:', error.request);
        Alert.alert('Error', 'No response received from server.');
      } else {
        // Something else caused the error
        console.error('Error message:', error.message);
        Alert.alert('Error', 'An error occurred while checking submission status.');
      }
    }
  };

  const navigateToScreen = (category, screenName) => {
    if (canSubmit[category]) {
      console.log(`${screenName}:`, route.params);
      navigation.navigate(screenName, { username });
    } else {
      Alert.alert('Notice', 'You have already submitted questions for this category today. Please wait 24 hours before submitting again.');
    }
  };

  return (
    <ImageBackground
      source={require('./assets/colour.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.topLeftContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={windowWidth * 0.075} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.instructionText}>
          Click according to your age to start screening
        </Text>
        <TouchableOpacity style={styles.box1} onPress={() => navigateToScreen('age_less_than_21', 'Age21Screen')}>
          <Text style={styles.boxText}>Age less than 21</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box2} onPress={() => navigateToScreen('age_between_21_35', 'Age21to34Screen')}>
          <Text style={styles.boxText}>Age between 21-35</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box3} onPress={() => navigateToScreen('age_more_than_35', 'Age35Screen')}>
          <Text style={styles.boxText}>Age more than 35</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topLeftContainer: {
    position: 'absolute',
    top: windowHeight * 0.035,
    left: windowWidth * 0.02,
    zIndex: 1,
    padding: windowWidth * 0.03,
  },
  instructionText: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.1,
    top: windowHeight * 0.25,
    fontSize: windowWidth * 0.062,
    fontWeight: '700',
    lineHeight: windowWidth * 0.08,
    textAlign: 'center',
    position: 'absolute',
    color: 'black',
  },
  box1: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.06,
    top: windowHeight * 0.40,
    backgroundColor: '#52CEBF',
    borderRadius: 15,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.06,
    top: windowHeight * 0.53,
    backgroundColor: '#52CEBF',
    borderRadius: 15,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box3: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.06,
    top: windowHeight * 0.66,
    backgroundColor: '#52CEBF',
    borderRadius: 15,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontSize: windowWidth * 0.06,
    fontWeight: '600',
    lineHeight: windowWidth * 0.08,
    textAlign: 'center',
    color: 'black',
  }
});

export default NewCategoryScreen;
