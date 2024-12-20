import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import backgroundImage from './assets/item.png';

const QuestionItem = ({ route }) => {
  const navigation = useNavigation();
  const { questions, currentQuestionIndex, ageCategory } = route.params;
  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      navigation.replace('Ques21Screen', {
        questions,
        currentQuestionIndex: currentQuestionIndex + 1,
        ageCategory,
      });
    } else {
      navigation.navigate('CommonScreen');
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      navigation.replace('Ques21Screen', {
        questions,
        currentQuestionIndex: currentQuestionIndex - 1,
        ageCategory,
      });
    } else {
      navigation.navigate('Ques21Screen', { questions, currentQuestionIndex: 0, ageCategory });
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.topLeftContainer}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back" size={windowWidth * 0.08} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Image source={{ uri: currentQuestion.image_url }} style={styles.centerLocalImage} />
          {currentQuestionIndex !== 4 && currentQuestion.paragraph && currentQuestion.paragraph !== "No paragraph available" ? (
            <Text style={styles.additionalParagraph}>
              {currentQuestion.paragraph}
            </Text>
          ) : null}
        </View>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    padding: 20,
  },
  centerLocalImage: {
    width: 270,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 20,
    top: windowHeight * -0.12,
  },
  additionalParagraph: {
    width: windowWidth * 0.78,
    height: windowHeight * 0.3,
    fontSize: windowWidth * 0.05,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
    lineHeight: windowHeight * 0.03,
    position: 'absolute',
    top: windowHeight * 0.1,
    left: windowWidth * 0.1,
  },
  topLeftContainer: {
    position: 'absolute',
    top: windowHeight * 0.04,
    left: windowWidth * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  button: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.045,
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

export default QuestionItem;
