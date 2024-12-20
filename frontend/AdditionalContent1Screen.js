import React from 'react';
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import additionalBackgroundImage from './assets/questionitem.png'; // Assuming your additional background image file

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const getAdditionalImageStyle = (qns_id) => {
  switch (qns_id) {
    case 3:
      return { width: windowWidth * 0.6, height: windowHeight * 0.2, resizeMode: 'contain', top: windowHeight * 0.05 };
    case 4:
      return { width: windowWidth * 0.5, height: windowHeight * 0.25, resizeMode: 'contain', top: windowHeight * 0.1 };
    case 6:
      return { width: windowWidth * 0.65, height: windowHeight * 0.22, resizeMode: 'contain', top: windowHeight * 0.12 };
    case 10:
      return { width: windowWidth * 0.7, height: windowHeight * 0.25, resizeMode: 'contain', top: windowHeight * 0.12 };
    case 13:
      return { width: windowWidth * 0.7, height: windowHeight * 0.25, resizeMode: 'contain', top: windowHeight * 0.12 };
    case 16:
      return { width: windowWidth * 0.7, height: windowHeight * 0.25, resizeMode: 'contain', top: windowHeight * 0.12 };
    default:
      return { width: windowWidth * 0.5, height: windowHeight * 0.2, resizeMode: 'contain', top: windowHeight * 0.1 };
  }
};

const AdditionalContent1Screen = ({ qns_id, handleNextButton }) => {
  if (!qns_id) return null;

  let additionalContent = null;
  switch (qns_id) {
    case 3:
      additionalContent = (
        <View style={styles.imageContainer}>
          <Image source={require('./assets/sub_images/image7_2_-removebg-preview.png')} style={getAdditionalImageStyle(qns_id)} />
          <Text style={styles.text}>
            Bleeding after sex refers to vaginal bleeding that occurs after sexual intercourse. It can be caused by various factors, including infections, cervical abnormalities, or hormonal changes, and it is advisable for individuals experiencing this symptom to seek medical attention for proper evaluation and diagnosis.
          </Text>
        </View>
      );
      break;
    case 4:
      additionalContent = (
        <View style={styles.imageContainer}>
          <Image source={require('./assets/sub_images/image13_2_-removebg-preview.png')} style={getAdditionalImageStyle(qns_id)} />
          <Text style={styles.text}>
            Vaginal bleeding is the first noticeable symptom of cervical cancer. It usually occurs after having sex. Bleeding at any other time, other than your expected monthly period is also consider unusual. This includes bleeding after the menopause.(When a women’s monthly periods stop)
          </Text>
        </View>
      );
      break;
    case 6:
      additionalContent = (
        <View style={styles.imageContainer}>
          <Image source={require('./assets/sub_images/image14_2_-removebg-preview.png')} style={getAdditionalImageStyle(qns_id)} />
          <Text style={styles.text}>
            Vaginal discharge is normal or due to some infections or hormonal charges. But sudden increase of discharge which is pale , watery, pink, brown, blood mixed or foul-smelling is key sign of cervical cancer.
          </Text>
        </View>
      );
      break;
    case 10:
      additionalContent = (
        <View style={styles.imageContainer}>
          <Image source={require('./assets/sub_images/image16_2_-removebg-preview.png')} style={getAdditionalImageStyle(qns_id)} />
          <Text style={styles.text}>
            Abdominal cramps or pain in your belly can be another symptom of cervical cancer. Bleeding due to cervical cancer can cause pain in lower abdomen.
          </Text>
        </View>
      );
      break;
    case 13:
      additionalContent = (
        <View style={styles.imageContainer}>
          <Image source={require('./assets/sub_images/image16_2_-removebg-preview.png')} style={getAdditionalImageStyle(qns_id)} />
          <Text style={styles.text}>
            Pelvic pain is pain in the lowest part of your abdomen and pelvis. Sometimes, you may have pelvic pain only at certain times, such as when you urinate or during sexual activity. Although pelvic pain often refers to pain in the region of women's internal reproductive organs, pelvic pain can be present in men, too, and can stem from other causes.
          </Text>
        </View>
      );
      break;
    case 16:
      additionalContent = (
        <View style={styles.imageContainer}>
          <Image source={require('./assets/sub_images/image16_2_-removebg-preview.png')} style={getAdditionalImageStyle(qns_id)} />
          <Text style={styles.text}>
            Cervical cancer can cause leg pain or swelling, most commonly in just one leg. If cancer spreads, it blocks blood flow, causing swelling and pain.
          </Text>
        </View>
      );
      break;
    default:
      additionalContent = (
        <Text style={styles.text}>No additional content available.</Text>
      );
      break;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={additionalBackgroundImage} style={styles.background}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {additionalContent}
        </ScrollView>
        <TouchableOpacity style={styles.nextButton} onPress={handleNextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: windowWidth * 0.05,
    paddingBottom: windowHeight * 0.15, // Ensure space for the button
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: windowHeight * 0.03,
  },
  text: {
    fontSize: windowWidth * 0.04,
    textAlign: 'center',
    marginHorizontal: windowWidth * 0.04,
    marginVertical: windowHeight * 0.02,
    color: 'white',
  },
});

export default AdditionalContent1Screen;
