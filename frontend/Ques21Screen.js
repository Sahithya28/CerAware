import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Ques21Screen = ({ route, navigation }) => {
  const { questions, ageCategory } = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(route.params.currentQuestionIndex || 0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptionIndex(null);
    } else {
      navigation.navigate('CommonScreen');
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      navigation.replace('QuestionItem', {
        explanation: questions[currentQuestionIndex - 1].explanation,
        centerImageExplanation: questions[currentQuestionIndex - 1].centerImageExplanation,
        questions,
        currentQuestionIndex: currentQuestionIndex - 1,
        ageCategory,
      });
    } else {
      navigation.goBack();
    }
  };
  

  const handleOptionSelect = (optionIndex) => {
    setSelectedOptionIndex(optionIndex);
  
    let explanation, centerImageExplanation;
    if (optionIndex === 0) { // Assuming Yes is the first option
      explanation = questions[currentQuestionIndex].explanationYes;
      centerImageExplanation = require('./assets/image_21-removebg-preview.png'); // Replace with actual Yes image
    } else { // Assuming No is the second option
      explanation = questions[currentQuestionIndex].explanationNo;
      centerImageExplanation = require('./assets/image_26-removebg-preview.png'); // Replace with actual No image
    }
  
    navigation.navigate('QuestionItem', {
      explanation,
      centerImageExplanation,
      questions,
      currentQuestionIndex,
      ageCategory,
    });
  };
  const allQuestionImages = [
    require('./assets/image_2__1_-removebg-preview.png'),
    require('./assets/image_5__2_-removebg-preview.png'),
    require('./assets/image_4__2_-removebg-preview.png'),
    require('./assets/image_8__1_-removebg-preview.png'),
    require('./assets/image_8__3_-removebg-preview.png'),
    require('./assets/image_8__3_-removebg-preview.png'),
    require('./assets/image_12__1_-removebg-preview.png'),
    require('./assets/image_10__1_-removebg-preview.png'),
    require('./assets/image_10__3_-removebg-preview.png'),
    require('./assets/image_10__4_-removebg-preview.png'),
    require('./assets/image_10__5_-removebg-preview.png'),
    require('./assets/image_10__6_-removebg-preview.png'),
    require('./assets/image_10__7_-removebg-preview.png'),
    require('./assets/image_10__5_-removebg-preview.png'),
    require('./assets/image_10__8_-removebg-preview.png'),
    require('./assets/image_10__9_-removebg-preview.png'),
    require('./assets/image_9__1_-removebg-preview.png'),
  ];

  const ageLessThan21Images = [
    require('./assets/image_4__2_-removebg-preview.png'),
    require('./assets/image_8__1_-removebg-preview.png'),
    require('./assets/image_8__3_-removebg-preview.png'),
    require('./assets/image_8__3_-removebg-preview.png'),
    require('./assets/image_10__3_-removebg-preview.png'),
    require('./assets/image_10__4_-removebg-preview.png'),
    require('./assets/image_10__5_-removebg-preview.png'),
    require('./assets/image_10__6_-removebg-preview.png'),
    require('./assets/image_10__8_-removebg-preview.png'),
  ];

  const questionImages = ageCategory === 'age_less_than_21' ? ageLessThan21Images : allQuestionImages;

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/question.png')} style={styles.backgroundImage}>
        <View style={styles.questionContainer}>
          <Image source={questionImages[currentQuestionIndex]} style={styles.questionImage} />
          <Text style={styles.questionText}>{questions[currentQuestionIndex].question}</Text>
          <View style={styles.optionsContainer}>
            {questions[currentQuestionIndex].choices.map((option, index) => (
              option ? (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionButton,
                    selectedOptionIndex === index && styles.selectedOptionButton
                  ]}
                  onPress={() => handleOptionSelect(index)}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ) : null
            ))}
          </View>
        </View>
      </ImageBackground>
      <View style={styles.navigationButtons}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={windowWidth * 0.08} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: windowWidth,
    height: windowHeight * 1.04,
    position: 'relative',
  },
  questionContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  questionImage: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.3,
    marginBottom: 20,
    borderRadius: 10,
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  optionButton: {
    paddingVertical: 10,
    paddingHorizontal: 35,
    backgroundColor: '#39E6D1DE',
    borderRadius: 10,
    margin: 30,
    marginTop: 20,
    elevation: 2, // Add elevation for drop shadow
  },
  selectedOptionButton: {
    backgroundColor: '#2DAD9E',
  },
  optionText: {
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
    color: 'black',
  },
  navigationButtons: {
    position: 'absolute',
    bottom: windowHeight * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
    top: windowHeight * -0.87,
    left: windowHeight * 0.02,
  },
  backButton: {
    marginRight: 20,
  },
  nextButton: {
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
    top: windowHeight * -0.06,
    height: windowHeight * 0.05,
    width: windowHeight * 0.12,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    left: windowHeight * 0.03,
  },
});

export default Ques21Screen;
