import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import backgroundImage from './assets/figure.png';
import image2 from './assets/image_36-removebg-preview.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CommonScreen = ({ route, navigation }) => {
  const { ageCategory } = route.params;
  const [questions, setQuestions] = useState([]);
  const [riskLevel, setRiskLevel] = useState('');

  useEffect(() => {
    fetchQuestions();
    setRiskLevel(getRiskLevel(ageCategory));
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(`http://192.168.79.26/php/chccat.php?category=${ageCategory}`);
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const getRiskLevel = (ageCategory) => {
    switch (ageCategory) {
      case 'age_less_than_21':
        return 'You are under a Low Risk';
      case 'age_between_21_to_34':
        return 'You are under a Moderate Risk';
      case 'age_more_than_35':
        return 'You are under a High Risk';
      default:
        return '';
    }
  };

  const startQuestionnaire = () => {
    let startIndex = 0;
    while (startIndex < questions.length && !questions[startIndex].paragraph) {
      startIndex++;
    }
    if (startIndex < questions.length) {
      navigation.navigate('QuestionScreen', { questions, currentQuestionIndex: startIndex, ageCategory });
    } else {
      console.log('No valid questions found');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <View style={styles.topLeftContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={windowWidth * 0.08} color="black" />
          </TouchableOpacity>
        </View>
        <Image source={image2} style={styles.image2} />
        <Text style={styles.text}>
          Screening is important to detect cervical cancer as early as possible
        </Text>
        <Text style={styles.riskLevelText}>{riskLevel}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={startQuestionnaire}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topLeftContainer: {
    position: 'absolute',
    top: windowHeight * 0.03,
    left: windowWidth * 0.02,
    zIndex: 1,
    padding: windowWidth * 0.03,
  },
  image2: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.3,
    marginBottom: windowHeight * 0.05,
    top: windowWidth * -0.15
  },
  text: {
    width: windowWidth * 0.75,
    fontSize: windowWidth * 0.05,
    fontWeight: '700',
    lineHeight: windowHeight * 0.04,
    textAlign: 'center',
    marginBottom: windowHeight * 0.05,
    top: windowWidth * -0.2
  },
  riskLevelText: {
    fontSize: windowWidth * 0.045,
    fontWeight: '700',
    color: 'black',
    marginBottom: windowHeight * 0.02,
  },
  button: {
    width: '40%',
    height: windowHeight * 0.05,
    borderRadius: windowWidth * 0.055,
    position: 'absolute',
    backgroundColor: '#39E6D1DE',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: windowHeight * 0.1,
    alignSelf: 'center',
    elevation: 4,
  },
  buttonText: {
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
    color: 'black',
  },
});

export default CommonScreen;
