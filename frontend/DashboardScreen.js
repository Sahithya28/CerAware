import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import boxImage2 from './assets/AskQuestion.png';
import boxImage3 from './assets/MediumRisk.png';
import boxImage5 from './assets/Shaking.png';
import boxImage1 from './assets/Vector.png';
import boxImage6 from './assets/ZoomIn.png';
import boxImage4 from './assets/Zoom.png';
import backgroundImage from './assets/dashboard.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DashboardScreen = ({ route }) => {
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
          scrollRef.current.scrollTo({
            x: 0,
            animated: false,
          });
        } else {
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
    require('./assets/scroll1.jpg'),
    require('./assets/scroll3.jpg'),
    require('./assets/scroll4.jpg'),
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
              x: width * 4,
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
            <View key={index} style={{ width: windowWidth *1, height: windowHeight * 0.2, left:windowHeight* 0 }}>
              <Image source={image} style={{ width: '100%', height: '100%' }} />
            </View>
          ))}
        </ScrollView>
      </View>
      <TouchableOpacity style={[styles.box, { top: windowHeight * 0.38, left: windowWidth * 0.1 }]} onPress={() => navigateTo("PatientDetailsScreen", { username })}>
        <Image source={boxImage1} style={styles.boxImage} />
        <Text style={styles.text}>Patient Details</Text>
      </TouchableOpacity>
      <TouchableOpacity
  style={[styles.box, { top: windowHeight * 0.48, left: windowWidth * 0.1 }]}
  onPress={() => navigateTo('NewCategoryScreen', { username })}
>
  <Image source={boxImage2} style={styles.boxImage} />
  <Text style={styles.text}>Screening Quiz</Text>
</TouchableOpacity>

      <TouchableOpacity style={[styles.box, { top: windowHeight * 0.58, left: windowWidth * 0.1 }]} onPress={() => navigateTo("RiskFactorsScreen")}>
        <Image source={boxImage3} style={styles.boxImage} />
        <Text style={styles.text}>Risk Factors</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.box, { top: windowHeight * 0.68, left: windowWidth * 0.1 }]} onPress={() => navigateTo("Toolscreen")}>
        <Image source={boxImage4} style={styles.boxImage} />
        <Text style={styles.investigationToolsText}>Investigation Tools</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.box, { top: windowHeight * 0.78, left: windowWidth * 0.1 }]} onPress={() => navigateTo("SymptomsScreen")}>
        <Image source={boxImage5} style={styles.boxImage} />
        <Text style={styles.text}>Symptoms</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.box, { top: windowHeight * 0.88, left: windowWidth * 0.1 }]} onPress={() => navigateTo("TkmScreen")}>
        <Image source={boxImage6} style={styles.boxImage} />
        <Text style={styles.text}>To know more</Text>
      </TouchableOpacity>
      <View style={styles.welcomeContainer}>
        <Icon name="user" size={24} color="#000" style={styles.userIcon} />
        <Text style={styles.welcomeText}>Welcome..{ username.substring(0, 6) }..!</Text>
      </View>
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
    width: windowWidth * 1,
    height: windowHeight * 0.2,
    top: windowHeight * 0.13,
    position: 'absolute',
  },
  activeDot: {
    backgroundColor: '#2DC2D7',
  },
  box: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.07,
    borderRadius: 10,
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
    width: '15.35%',
    height: '75%',
    resizeMode: 'cover',
    top: windowHeight * 0.018,
    left: windowHeight* -0.13
  },
  welcomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: windowHeight * 0.085,
    left: windowWidth * 0.25,
  },
  userIcon: {
    marginRight: 8,
    top: windowHeight * -0.05
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 29,
    textAlign: 'left',
    color: '#000000',
    top: windowHeight * -0.05,
  },
  text: {
    width: '100%',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
    top: -(windowHeight * 0.03),
    left: windowHeight* 0.015
    
  },
  investigationToolsText: {
    width: '120%',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
    top: -(windowHeight * 0.03),
    left: windowHeight* 0.018

  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: windowHeight * 0.67,
  },  
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
    top: windowHeight * 0.02
  },
  activeDot: {
    backgroundColor: '#2DAD9E',
  },
});

export default DashboardScreen;
