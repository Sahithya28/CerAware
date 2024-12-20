import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import boxImage2 from './assets/Ask Question.png';
import boxImage3 from './assets/Medium Risk.png';
import boxImage5 from './assets/Shaking.png';
import boxImage1 from './assets/Vector.png';
import boxImage6 from './assets/Zoom In (1).png';
import boxImage4 from './assets/Zoom In.png';
import backgroundImage from './assets/image 38.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Dashboard1Screen = ({ route }) => {
  const navigation = useNavigation();
  const { username } = route.params;

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);
  const width = Dimensions.get('window').width;

  const navigateTo = (route, params = {}) => {
    console.log(`Navigating to ${route} with params`, params);
    navigation.navigate(route, params);
  };
  

  useEffect(() => {
    const scrollTimer = setInterval(() => {
      if (scrollRef.current) {
        const nextIndex = (currentIndex + 1) % images.length;
        if (nextIndex === 0) {
          // If nextIndex is the first image, scroll to the first image instantly without animation
          scrollRef.current.scrollTo({
            x: 0,
            animated: false,
          });
        } else {
          // Otherwise, scroll to the next image normally
          scrollRef.current.scrollTo({
            x: width * nextIndex,
            animated: true,
          });
        }
        setCurrentIndex(nextIndex);
      }
    }, 3000); // Change the duration as needed

    return () => clearInterval(scrollTimer);
  }, [currentIndex]);

  const images = [
    require('./assets/image_10__10_-removebg-preview.png'),
    require('./assets/image_15__5_-removebg-preview.png'),
    require('./assets/image_5__2_-removebg-preview.png'),
    // Add more images as needed
  ];

  const renderDots = () => {
    return images.map((image, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => {
          // Handle dot press
          if (scrollRef.current) {
            scrollRef.current.scrollTo({
              x: width * index,
              animated: true,
            });
            setCurrentIndex(index);
          }
        }}
      >
        <View style={[styles.dot, currentIndex === index && styles.activeDot]} />
      </TouchableOpacity>
    ));
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>

      </View>
      <View style={styles.rectangle}>
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          {images.map((image, index) => (
            <View key={index} style={{ width: windowWidth * 0.9, height: windowHeight * 0.17, left:windowHeight* 0.02 }}>
              <Image source={image} style={{ width: '100%', height: '100%' }} />
            </View>
          ))}
        </ScrollView>
      </View>
      <TouchableOpacity style={[styles.box, { top: windowHeight * 0.40, left: windowWidth * 0.13 }]} onPress={() => navigateTo("PatientDetailsScreen", { username })}>
        <Image source={boxImage1} style={styles.boxImage} />
        <Text style={styles.text}>Patient Details</Text>
      </TouchableOpacity>
      <TouchableOpacity
  style={[styles.box, { top: windowHeight * 0.40, left: windowWidth * 0.57 }]}
  onPress={() => navigateTo('NewCategoryScreen', { username })}
>
  <Image source={boxImage2} style={styles.boxImage} />
  <Text style={styles.text}>Screening Quiz</Text>
</TouchableOpacity>

      <TouchableOpacity style={[styles.box, { top: windowHeight * 0.60, left: windowWidth * 0.13 }]} onPress={() => navigateTo("RiskFactorsScreen")}>
        <Image source={boxImage3} style={styles.boxImage} />
        <Text style={styles.text}>Risk Factors</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.box, { top: windowHeight * 0.60, left: windowWidth * 0.57 }]} onPress={() => navigateTo("Toolscreen")}>
        <Image source={boxImage4} style={styles.boxImage} />
        <Text style={styles.investigationToolsText}>Investigation Tools</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.box, { top: windowHeight * 0.80, left: windowWidth * 0.13 }]} onPress={() => navigateTo("SymptomsScreen")}>
        <Image source={boxImage5} style={styles.boxImage} />
        <Text style={styles.text}>Symptoms</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.box, { top: windowHeight * 0.80, left: windowWidth * 0.57 }]} onPress={() => navigateTo("TkmScreen")}>
        <Image source={boxImage6} style={styles.boxImage} />
        <Text style={styles.text}>To know more</Text>
      </TouchableOpacity>
      <Text style={styles.welcomeText}>WELCOME</Text>
      <View style={styles.dotsContainer}>{renderDots()}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    position: 'relative',
    width: windowWidth * 0.34,
    height: windowHeight * 0.11,
    backgroundColor: '#2DAD9E',
    transform: [{ rotate: '90deg' }],
    top: -(windowHeight * 0.47),
  },
  rectangle: {
    width: windowWidth * 1.2,
    height: windowHeight * 0.17,
    top: windowHeight * 0.16,
    borderRadius: 20,
    backgroundColor: '#D2DEDB',
    position: 'absolute',
  },
  activeDot: {
    backgroundColor: '#2DC2D7',
  },
  box: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.13,
    borderRadius: 30,
    backgroundColor: '#2DAD9E',
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxImage: {
    width: '75%',
    height: '75%',
    resizeMode: 'cover',
    borderRadius: 0,
    top: windowHeight * 0.015,
  },
  welcomeText: {
    width: windowWidth * 0.33,
    height: windowHeight * 0.07,
    top: windowHeight * 0.08,
    left: windowWidth * 0.37,
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 29,
    textAlign: 'left',
    position: 'absolute',
    color: '#000000',
  },
  text: {
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    top: -(windowHeight * 0.13),
    
  },
  investigationToolsText: {
    width: '120%',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    top: -(windowHeight * 0.13),
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: windowHeight * 0.68,
    left: 0,
    right: 0,
  },  
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#2DAD9E',
  },
});


export default Dashboard1Screen;
