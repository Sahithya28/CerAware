import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import additionalBackgroundImage from './assets/questionitem.png'; // Assuming your additional background image file
import backgroundImage from './assets/question.png';
import backgroundImage1 from './assets/item.png';
import config from './file';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = ({route, navigation }) => {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentQnsId, setCurrentQnsId] = useState(null);
  const [score, setScore] = useState(0); // State for score
  const [showAdditionalContent, setShowAdditionalContent] = useState(false); // State for additional content visibility
  const [quizCompleted, setQuizCompleted] = useState(false);
   // State for quiz completion
  const category = 'age_less_than_21';

  const { username } = route.params || {};
  // Specify the category here

  useEffect(() => {
    fetchNextQuestion(null, null, category);
  }, [category]);

  const fetchNextQuestion = async (qns_id = null, answer = null, category,username) => {
    setLoading(true);
    setError(null);

    let url = config. getCategoryUrl(category);
    if (qns_id !== null && answer !== null) {
      url += `&qns_id=${qns_id}&answer=${answer}`;
    }

    try {
      const response = await axios.get(url);
      if (response.data && response.data.qns_id) {
        setQuestion(response.data);
        setCurrentQnsId(response.data.qns_id);
        setShowAdditionalContent(false); // Hide additional content when fetching a new question
      } else {
        setQuestion(null);
        setError(response.data.message || 'Unexpected response format');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };
  

  const handleNextQuestion = async (answer) => {
    if (currentQnsId !== null) {
      let scoreIncrement = 0;
  
      // Implement scoring rules based on qns_id
      if (currentQnsId === 6) {
        // For question ID 6, map answers to scores
        if (answer === 'GREEN' || answer === 'YELLOW' || answer === 'WHITE') {
          scoreIncrement = 0;
        } else if (answer === 'BLOODY') {
          scoreIncrement = 1;
        }
      } else if (currentQnsId === 5 || currentQnsId === 10 || currentQnsId === 11) {
        scoreIncrement = 0; // Always 0 for 'yes' or 'no'
      } else if (currentQnsId === 12) {
        // For question ID 12, map answers to scores
        scoreIncrement = answer === 'Positive' ? 1 : 0;
      } else {
        // Default scoring for other questions
        scoreIncrement = answer === 'yes' ? 1 : 0;
      }
  
      // Update score based on calculated scoreIncrement
      setScore(score => score + scoreIncrement);
  
      // Send data to the PHP script
      try {
        await axios.post(config.answerquestions, {
          category: category,
          question_text: question.questions,
          answer: answer,
          score: scoreIncrement,
          username: username // Pass the dynamic username here
        });
      } catch (error) {
        console.error('Error sending data:', error);
      }
  
      // Check if the current question is the last one (ID 16) and set quiz as completed
      if (currentQnsId === 16) {
        setQuizCompleted(true);
      } else {
        // Show additional content after answering, except for specific QNS_IDs
        if (![5, 11, 12, 16].includes(currentQnsId)) {
          setShowAdditionalContent(true);
        } else {
          fetchNextQuestion(currentQnsId, answer, category);
        }
      }
    }
  };
  
  const handleNextButton = () => {
    setShowAdditionalContent(false);
    fetchNextQuestion(currentQnsId, 'next', category);
  };
  const handleSeeResults = () => {
    if (score === 0) {
      navigation.navigate('Result1Screen'); // Navigate to Result1Screen if score is 0
    } else if (score >= 1 && score <= 6) {
      navigation.navigate('Result2Screen'); // Navigate to Result2Screen if score is between 1 and 6
    }
  };
  const renderImageAndText = () => {
    if (!question) return null;
    return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.background}>
          <View style={styles.container}>
            {!showAdditionalContent && (
              <>
                <Text style={styles.question}>{question.questions}</Text>
                {renderQuestionImage(question.qns_id)}
              </>
            )}
            {!showAdditionalContent && (
              <View style={styles.buttonContainer}>
                {question.qns_id === 6 ? (
                  <>
                    <TouchableOpacity style={styles.customButton1} onPress={() => handleNextQuestion('GREEN')}>
                      <Text style={styles.buttonText}>Green</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.customButton1} onPress={() => handleNextQuestion('YELLOW')}>
                      <Text style={styles.buttonText}>Yellow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.customButton1} onPress={() => handleNextQuestion('WHITE')}>
                      <Text style={styles.buttonText}>White</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.customButton1} onPress={() => handleNextQuestion('BLOODY')}>
                      <Text style={styles.buttonText}>Bloody</Text>
                    </TouchableOpacity>
                  </>
                ) : question.qns_id === 12 ? (
                  <>
                    <TouchableOpacity style={styles.customButton} onPress={() => handleNextQuestion('Positive')}>
                      <Text style={styles.buttonText}>Positive</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.customButton} onPress={() => handleNextQuestion('Negative')}>
                      <Text style={styles.buttonText}>Negative</Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    <TouchableOpacity style={styles.customButton} onPress={() => handleNextQuestion('yes')}>
                      <Text style={styles.buttonText}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.customButton} onPress={() => handleNextQuestion('no')}>
                      <Text style={styles.buttonText}>No</Text>
                    </TouchableOpacity>
                  </>
                )}
              </View>
              
            )}
            {renderAdditionalContent(question.qns_id)}
          </View>
        </ImageBackground>
        <View style={styles.topLeftContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={windowWidth * 0.075} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderQuestionImage = (qns_id) => {
    let imageSource = null;
    switch (qns_id) {
      case 3:
        imageSource = require('./assets/image_4__2_-removebg-preview.png');
        break;
      case 4:
        imageSource = require('./assets/image_8__1_-removebg-preview.png');
        break;
      case 5:
        imageSource = require('./assets/image_8__3_-removebg-preview.png');
        break;
      case 6:
        imageSource = require('./assets/image_8__3_-removebg-preview.png');
        break;
      case 10:
        imageSource = require('./assets/image_10__3_-removebg-preview.png');
        break;
      case 11:
        imageSource = require('./assets/image_10__4_-removebg-preview.png');
        break;
      case 12:
        imageSource = require('./assets/image_10__5_-removebg-preview.png');
        break;
      case 13:
        imageSource = require('./assets/image_10__6_-removebg-preview.png');
        break;
      case 16:
        imageSource = require('./assets/image_10__8_-removebg-preview.png');
        break;
      // Add more cases for other question IDs as needed
      default:
        return null;
    }
    return <Image source={imageSource} style={styles.image} />;
  };

  const getAdditionalImageStyle = (qns_id) => {
    switch (qns_id) {
      case 3:
        return { width: 251, height: 184, resizeMode: 'contain', top: -30, left: 10 };
      case 4:
        return { width: 181, height: 178, resizeMode: 'contain', top: -30, left: 10 };
      case 6:
        return { width: 252, height: 158, resizeMode: 'contain', top: -30, left: 10 };
      case 10:
        return { width: 283, height: 177, resizeMode: 'contain', top: -30, left: 10 };
      case 13:
        return { width: 283, height: 177, resizeMode: 'contain', top: -30, left: 10 };
      case 16:
        return { width: 283, height: 177, resizeMode: 'contain', top: -30, left: 10 };
      default:
        return { width: 150, height: 150, resizeMode: 'contain', top: -30, left: 10 };
    }
  };

  const renderAdditionalContent = (qns_id) => {
    if (!showAdditionalContent) return null;

    let additionalContent = null;
    switch (qns_id) {
      case 3:
        additionalContent = (
          <View style={styles.additionalContainer}>
            <ImageBackground source={additionalBackgroundImage} style={styles.additionalBackground}>
              <View style={styles.imageContainer}>
                <Image source={require('./assets/sub_images/image7_2_-removebg-preview.png')} style={getAdditionalImageStyle(qns_id)} />
                <Text style={styles.text}>
                  Bleeding after sex refers to vaginal bleeding that occurs after sexual intercourse. It can be caused by various factors, including infections, cervical abnormalities, or hormonal changes, and it is advisable for individuals experiencing this symptom to seek medical attention for proper evaluation and diagnosis.
                </Text>
                <TouchableOpacity style={styles.nextButton} onPress={handleNextButton}>
                <Text style={styles.nextButtonText}>Next</Text>
              </TouchableOpacity>
                </View>
            </ImageBackground>
          </View>
        );
        break;
      case 4:
        additionalContent = (
          <View style={styles.additionalContainer}>
            <ImageBackground source={additionalBackgroundImage} style={styles.additionalBackground}>
              <View style={styles.imageContainer}>
                <Image source={require('./assets/sub_images/image13_2_-removebg-preview.png')} style={getAdditionalImageStyle(qns_id)} />
                <Text style={styles.text}>
                  Vaginal bleeding is the first noticeable symptom of cervical cancer. It usually occurs after having sex. Bleeding at any other time, other than your expected monthly period is also consider unusual. This includes bleeding after the menopause.(When a women’s monthly periods stop)
                </Text>
                <TouchableOpacity style={styles.nextButton} onPress={handleNextButton}>
                <Text style={styles.nextButtonText}>Next</Text>
              </TouchableOpacity>     
                            </View>
            </ImageBackground>
          </View>
        );
        break;
      case 6:
        additionalContent = (
          <View style={styles.additionalContainer}>
            <ImageBackground source={additionalBackgroundImage} style={styles.additionalBackground}>
              <View style={styles.imageContainer}>
                <Image source={require('./assets/sub_images/image14_2_-removebg-preview.png')} style={getAdditionalImageStyle(qns_id)} />
                <Text style={styles.text}>
                Vaginal discharge is normal or due to some infections or hormonal charges. But sudden increase of discharge which is pale , watery, pink, brown, blood mixed or foul-smelling is key sign of cervical cancer.                </Text>
              </View>
              <TouchableOpacity style={styles.nextButton1} onPress={handleNextButton}>
                <Text style={styles.nextButton1Text}>Next</Text>
              </TouchableOpacity>     
                          </ImageBackground>
          </View>
        );
        break;
      case 10:
        additionalContent = (
          <View style={styles.additionalContainer}>
            <ImageBackground source={additionalBackgroundImage} style={styles.additionalBackground}>
              <View style={styles.imageContainer}>
                <Image source={require('./assets/sub_images/image15.png')} style={getAdditionalImageStyle(qns_id)} />
                <Text style={styles.text}>
                Protects against certain types of Human Papilloma Virus(HPV) than can lead to cancer or genital warts.                 </Text>
              </View>
              <TouchableOpacity style={styles.nextButton1} onPress={handleNextButton}>
                <Text style={styles.nextButton1Text}>Next</Text>
              </TouchableOpacity>     
                          </ImageBackground>
          </View>
        );
        break;
      case 13:
        additionalContent = (
          <View style={styles.additionalContainer}>
            <ImageBackground source={additionalBackgroundImage} style={styles.additionalBackground}>
              <View style={styles.imageContainer}>
                <Image source={require('./assets/sub_images/image15_8_-removebg-preview.png')} style={getAdditionalImageStyle(qns_id)} />
                <Text style={styles.text}>
                Having intercourse with many partners can increase exposure to Human Papilloma Virus(HPV), which is transmitted by sexual contact. It is increase the risk of cervical cancer.                </Text>
              </View>
              <TouchableOpacity style={styles.nextButton1} onPress={handleNextButton}>
                <Text style={styles.nextButton1Text}>Next</Text>
              </TouchableOpacity>     
                          </ImageBackground>
          </View>
        );
        break;
      default:
        return null;
    }

    return (
      <>
        {additionalContent}
      </>
    );
  };


  const renderContent = () => {
    if (loading) {
      return <Text style={styles.loadingText}>Loading...</Text>;
    } else if (error) {
      return <Text style={styles.errorText}>Error: {error}</Text>;
    } else if (quizCompleted) {
      // Render the total score and the appropriate button
      return (
        <View style={styles.container}>
        <ImageBackground source={backgroundImage1} style={styles.backgroundImage1}></ImageBackground>

          <Text style={styles.completionText}>Quiz Completed!</Text>
          <Text style={styles.completionText1}>Click here to see what tests you have to take based on your results:</Text>
          <Text style={styles.totalScoreText}>Total Score: {score}</Text>
          
          <TouchableOpacity
            style={styles.resultsButton}
            onPress={() => {
              if (score === 0) {
                navigation.navigate('Result1Screen'); // Navigate to Result1Screen if score is 0
              } else {
                navigation.navigate('Result2Screen'); // Navigate to Result2Screen if score is not 0
              }
            }}
          >
            <Text style={styles.resultsButtonText}>
              {score === 0 ? 'See Results' : `See Results`}
            </Text>
            
          </TouchableOpacity>
          
        </View>
        
      );
    } else {
      return renderImageAndText();
    }
  };
  
  return <View style={styles.container}>{renderContent()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: 450
  },
  image: {
    width: 600,
    height: 250,
    resizeMode: 'contain',
    marginTop: 10,
    top: -75
  },
  backgroundImage1: {
    width: 450,
    height: 1000,
    resizeMode: 'contain',
    marginTop: 10,
    top: -10,
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  question: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
    top: 250,
    fontWeight: '600',
    width: 400
  },
  customButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
    top: -20
  },
  customButton: {
    width: windowWidth * 0.25,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#39E6D1DE',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, // Add elevation for drop shadow
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
    color: 'black',
    top: 22
  },
  customButton1: {
    width: windowWidth * 0.23,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#39E6D1DE',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, // Add elevation for drop shadow
    fontSize: windowWidth * 0.035,
    fontWeight: '600',
    color: 'black',
    top: 22
  },
  nextButton: {
    backgroundColor: '#39E6D1DE',
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  nextButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
    top: -20
  },
  button: {
    width: windowWidth * 0.25,
    height: 40,
    borderRadius: 10,
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
  additionalBackground: {
    width: '100%',
    height: '104%',
    justifyContent: 'center',
    alignItems: 'center',
    left: -80
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
    top: 50,
    left: 70
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000000', // Default text color
    top: -25,
    width: 300,
    fontWeight: '600',
    left: 15
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF0000',
    textAlign: 'center',
    marginTop: 20,
  },
  completionText: {
    fontSize: 24,
    fontWeight: 'bold',
    top: -450
  },
  completionText1: {
    fontSize: 18,
    fontWeight: 'bold',
    top: -300,
    width: 350
  },
  totalScoreText: {
    fontSize: 20,
    marginVertical: 10,
    top: -480
  },
  resultsButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'black', // Or your desired color
    borderRadius: 20,
    top: -350
  },
  resultsButtonText: {
    color: '#FFF', // Button text color
    fontSize: 18,
  },
  topLeftContainer: {
    position: 'absolute',
    top: 45,
    left: 25,
  },
  nextButton: {
    width: windowWidth * 0.4, // Adjusted width for responsiveness
    height: windowHeight * 0.045, // Adjusted height for responsiveness
    borderRadius: windowWidth * 0.055, // Adjusted border radius for responsiveness
    position: 'absolute',
    backgroundColor: '#39E6D1DE',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: windowHeight * 0.1, // Adjusted bottom position for responsiveness
    alignSelf: 'center', // Centered horizontally
    elevation: 4, // Add elevation for drop shadow
    top: windowHeight* 0.55,
    left: windowHeight* 0.1
  },
  nextButtonText: {
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
    color: 'black',
  },
  nextButton1: {
    width: windowWidth * 0.4, // Adjusted width for responsiveness
    height: windowHeight * 0.045, // Adjusted height for responsiveness
    borderRadius: windowWidth * 0.055, // Adjusted border radius for responsiveness
    position: 'absolute',
    backgroundColor: '#39E6D1DE',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: windowHeight * 0.1, // Adjusted bottom position for responsiveness
    alignSelf: 'center', // Centered horizontally
    elevation: 4, // Add elevation for drop shadow
    top: windowHeight* 0.9,
    left: windowHeight* 0.18
  },
  nextButton1Text: {
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
    color: 'black',
  },
});

export default App;
