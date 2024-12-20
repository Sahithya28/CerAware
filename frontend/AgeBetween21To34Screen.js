import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import config from './file';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import backgroundImage from './assets/question.png';
import backgroundImage1 from './assets/item.png';
import additionalContentImage4 from './assets/sub_images/image13_2_-removebg-preview.png';
import additionalContentImage6 from './assets/sub_images/image14_2_-removebg-preview.png';
import additionalContentImage7 from './assets/sub_images/image15_6_-removebg-preview.png';
import additionalContentImage9 from './assets/sub_images/image15.png';
import additionalContentImage13 from './assets/sub_images/image15_8_-removebg-preview.png';
import additionalContentImage18 from './assets/sub_images/image15_9_-removebg-preview.png';
import additionalContentImage2 from './assets/sub_images/image16_3_-removebg-preview.png';
import additionalContentImage3 from './assets/sub_images/image7_2_-removebg-preview.png';
import additionalContentImage1 from './assets/sub_images/image_16__1_-removebg-preview.png';

// Import all question images
import questionImage8 from './assets/image_10__1_-removebg-preview.png';
import questionImage9 from './assets/image_10__3_-removebg-preview.png';
import questionImage11 from './assets/image_10__4_-removebg-preview.png';
import { default as questionImage12, default as questionImage15 } from './assets/image_10__5_-removebg-preview.png';
import questionImage13 from './assets/image_10__6_-removebg-preview.png';
import questionImage14 from './assets/image_10__7_-removebg-preview.png';
import questionImage16 from './assets/image_10__8_-removebg-preview.png';
import questionImage17 from './assets/image_10__9_-removebg-preview.png';
import questionImage7 from './assets/image_12-removebg-preview.png';
import questionImage1 from './assets/image_2__1_-removebg-preview.png';
import questionImage3 from './assets/image_4__2_-removebg-preview.png';
import questionImage2 from './assets/image_5__2_-removebg-preview.png';
import questionImage4 from './assets/image_8__1_-removebg-preview.png';
import { default as questionImage5, default as questionImage6 } from './assets/image_8__3_-removebg-preview.png';
import questionImage18 from './assets/image_9__1_-removebg-preview.png';
const MainScreen = ({ route }) => {
  const navigation = useNavigation();
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentQnsId, setCurrentQnsId] = useState(null);
  const [score, setScore] = useState(0);
  const category = 'age_between_21_35';
  const { username } = route.params || {}; // Ensure this is retrieved correctly

  useEffect(() => {
    fetchNextQuestion();
  }, []);

  const fetchNextQuestion = async (qns_id = null, answer = null) => {
    setLoading(true);
    setError(null);

    let url = config.age21to34;
    if (qns_id !== null && answer !== null) {
      url += `?qns_id=${qns_id}&answer=${answer}`;
    }

    try {
      const response = await axios.get(url);
      console.log('API Response:', response.data);
      if (response.data && response.data.qns_id) {
        setQuestion(response.data);
        setCurrentQnsId(response.data.qns_id);
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

      if ([1, 5, 7, 8, 11, 14, 17].includes(currentQnsId)) {
        scoreIncrement = 0;
      } else if (currentQnsId === 6) {
        if (answer === 'GREEN' || answer === 'YELLOW' || answer === 'WHITE') {
          scoreIncrement = 0;
        } else if (answer === 'BLOODY') {
          scoreIncrement = 1;
        }
      } else if (currentQnsId === 12) {
        scoreIncrement = answer === 'Positive' ? 1 : 0;
      } else if (currentQnsId === 16) {
        scoreIncrement = answer === 'Abnormal' ? 1 : 0;
      } else {
        scoreIncrement = answer === 'yes' ? 1 : 0;
      }

      setScore(score => score + scoreIncrement);

      try {
        console.log('Sending data to PHP script:', {
          category: category,
          question_text: question.questions,
          answer: answer,
          score: scoreIncrement,
          username: username // Ensure username is correctly passed
        });

        const response = await axios.post(config.answerquestions, {
          category: category,
          question_text: question.questions,
          answer: answer,
          score: scoreIncrement,
          username: username
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        console.log('Server response:', response.data);

        if (response.status === 200) {
          console.log('Response from PHP script:', response.data);

          if (currentQnsId === 18) {
            setQuestion(null);
          } else {
            fetchNextQuestion(currentQnsId, answer);
          }

          const additionalContent = getAdditionalContent(currentQnsId);
          if (additionalContent) {
            navigation.navigate('AdditionalContentScreen', additionalContent);
          }
        } else {
          console.error('Error in response from PHP script:', response);
          alert('There was a problem processing your request. Please try again.');
        }
      } catch (error) {
        console.error('Error sending data to PHP script:', error);
        alert('An error occurred while sending data. Please check your connection and try again.');
      }
    }
  };
  
  const getAdditionalContent = (qnsId) => {
    switch (qnsId) {
      case 1:
        return { qnsId, imageSource: additionalContentImage1, contentText: 'Cervical Cancer is most frequently diagnosed in women the age of 35 and 44, with the average age being 50. It rarely develops in women younger than 20.' };
      case 2:
        return { qnsId, imageSource: additionalContentImage2, contentText: 'Menopause is a natural biological process in women, typically occurring in their late 40s or early 50s, marked by the cessation of menstrual periods and the end of reproductive capability. It is associated with hormonal changes, leading to various symptoms such as hot flashes, mood swings, and changes in bone density.' };
      case 3:
        return { qnsId, imageSource: additionalContentImage3, contentText: 'Bleeding after sex refers to vaginal bleeding that occurs after sexual intercourse. It can be caused by various factors, including infections, cervical abnormalities, or hormonal changes, and it is advisable for individuals experiencing this symptom to seek medical attention for proper evaluation and diagnosis.' };
      case 4:
        return { qnsId, imageSource: additionalContentImage4, contentText: 'Vaginal bleeding is the first noticeable symptom of cervical cancer. It usually occurs after having sex. Bleeding at any other time, other than your expected monthly period is also considered unusual. This includes bleeding after the menopause (when a women’s monthly periods stop).' };
      case 6:
        return { qnsId, imageSource: additionalContentImage6, contentText: 'Vaginal discharge is normal or due to some infections or hormonal changes. But sudden increase of discharge which is pale, watery, pink, brown, blood mixed or foul-smelling is key sign of cervical cancer.' };
      case 7:
        return { qnsId, imageSource: additionalContentImage7, contentText: 'In more advanced cancer, weight loss is common and people may feel tired and weak.' };
      case 9:
        return { qnsId, imageSource: additionalContentImage9, contentText: 'Protects against certain types of Human Papilloma Virus (HPV) that can lead to cancer or genital warts.' };
      case 13:
        return { qnsId, imageSource: additionalContentImage13, contentText: 'Having intercourse with many partners can increase exposure to Human Papilloma Virus (HPV), which is transmitted by sexual contact. It increases the risk of cervical cancer.' };
      case 18:
        return { qnsId, imageSource: additionalContentImage18, contentText: 'Obese women have higher risk of cervical cancer than women of normal weight. This might be caused by a lower participation rate in cervical cancer screening.' };
      default:
        return null;
    }
  };

  const getQuestionImage = (qnsId) => {
    switch (qnsId) {
      case 1:
        return questionImage1;
      case 2:
        return questionImage2;
      case 3:
        return questionImage3;
      case 4:
        return questionImage4;
      case 5:
        return questionImage5;
      case 6:
        return questionImage6;
      case 7:
        return questionImage7;
      case 8:
        return questionImage8;
      case 9:
        return questionImage9;
      case 11:
        return questionImage11;
      case 12:
        return questionImage12;
      case 13:
        return questionImage13;
      case 14:
        return questionImage14;
      case 15:
        return questionImage15;
      case 16:
        return questionImage16;
      case 17:
        return questionImage17;
      case 18:
        return questionImage18;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
        <Button title="Retry" onPress={fetchNextQuestion} />
      </View>
    );
  }

  if (!question) {
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
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{question.questions}</Text>
        </View>

        <View style={styles.imageContainer}>
          {getQuestionImage(currentQnsId) && (
            <Image
              source={getQuestionImage(currentQnsId)}
              style={styles.questionImage}
              resizeMode="contain"
            />
          )}
        </View>

        {question.qns_id === 6 ? (
          <View style={styles.customButtonContainer}>
            <TouchableOpacity style={styles.customButton} onPress={() => handleNextQuestion('GREEN')}>
              <Text style={styles.customButtonText}>Green</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.customButton} onPress={() => handleNextQuestion('YELLOW')}>
              <Text style={styles.customButtonText}>Yellow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.customButton} onPress={() => handleNextQuestion('WHITE')}>
              <Text style={styles.customButtonText}>White</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.customButton} onPress={() => handleNextQuestion('BLOODY')}>
              <Text style={styles.customButtonText}>Bloody</Text>
            </TouchableOpacity>
          </View>
        ) : question.qns_id === 15 ? (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleNextQuestion('Normal')}
            >
              <Text style={styles.buttonText}>Abnormal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleNextQuestion('Abnormal')}
            >
              <Text style={styles.buttonText}>Normal</Text>
            </TouchableOpacity>
          </View>
        ) : question.qns_id === 12 ? (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleNextQuestion('Positive')}
            >
              <Text style={styles.buttonText}>Positive</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleNextQuestion('Negative')}
            >
              <Text style={styles.buttonText}>Negative</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleNextQuestion('yes')}
            >
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleNextQuestion('no')}
            >
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.topLeftContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={windowWidth * 0.075} color="black" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
    width: 450
  },
  backgroundImage1: {
    width: 450,
    height: 1000,
    resizeMode: 'contain',
    marginTop: 10,
    top: windowHeight* -0.01,
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  completionText: {
    fontSize: 24,
    fontWeight: 'bold',
    top:  windowHeight* -0.52
  },
  completionText1: {
    fontSize: 18,
    fontWeight: 'bold',
    top: windowHeight* -0.31,
    width: 350
  },
  totalScoreText: {
    fontSize: 20,
    marginVertical: 10,
    top: windowHeight* -0.53
  },
  resultsButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'black', // Or your desired color
    borderRadius: 20,
    top: windowHeight* -0.37
  },
  resultsButtonText: {
    color: '#FFF', // Button text color
    fontSize: 18,
  },
  questionContainer: {
    marginBottom: 16,
  },
  questionText: {
    fontSize: windowWidth* 0.045,
    textAlign: 'center',
    marginBottom: 16,
    top: windowHeight * 0.33,
    left: windowHeight*0.01,
    fontWeight: '600',
    width: windowWidth* 1.1
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
    top: windowWidth* -0.05
  },
  button: {
    width: windowWidth * 0.25,
    height: windowHeight* 0.045,
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
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  questionImage: {
    width: windowWidth* 2,
    height: windowHeight* 0.3,
    resizeMode: 'contain',
    marginTop: 10,
    top: windowHeight* -0.1
  },
  choicesContainer: {
    marginVertical: 20,
  },
  topLeftContainer: {
    position: 'absolute',
    top: windowWidth * 0.08,
    left: windowWidth * 0.03,
    zIndex: 1,
    padding: windowWidth * 0.03,
  },
  customButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  customButton: {
    width: windowWidth * 0.25,
    height: windowHeight* 0.045,
    borderRadius: 10,
    backgroundColor: '#39E6D1DE',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, // Add elevation for drop shadow
  },
  customButtonText: {
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
    color: 'black',
  },
});

export default MainScreen;
