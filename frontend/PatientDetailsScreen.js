import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import backgroundImage from './assets/dashboard.png';
import config from './file';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const PatientDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [patientDetails, setPatientDetails] = useState([]);
  const { username } = route.params || {};
  
  useEffect(() => {
    if (username) {
      fetch(config.getPatientDetailsUrl(username)) // Invoke the function with username
        .then((response) => response.json())
        .then((data) => {
          setPatientDetails(data);
          console.log(data); // Log data to check if it's being fetched correctly
        })
        .catch((error) => console.error('Error fetching data: ', error));
    }
  }, [username]);
  
  if (!patientDetails.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.noDataText}>No patient data available.</Text>
      </View>
    );
  }

  const renderPatientDetail = ({ item }) => (
    <View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.value}>{item.username}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{item.Name}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Gender:</Text>
        <Text style={styles.value}>{item.Gender}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Age:</Text>
        <Text style={styles.value}>{item.Age}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Date-Of-Birth:</Text>
        <Text style={styles.value}>{item.Date}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Phone Number:</Text>
        <Text style={styles.value}>{item.phonenumber}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={windowWidth * 0.075} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Patient Details</Text>
        </View>
        <FlatList
          data={patientDetails}
          renderItem={renderPatientDetail}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContentContainer}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: windowHeight * 0,
    paddingHorizontal: windowWidth * 0,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: windowHeight * 0.02,
  },
  backButton: {
    marginRight: windowWidth * 0.03,
    top: windowHeight * 0.05,
    left: windowHeight* 0.02
  },
  title: {
    fontSize: windowWidth * 0.06,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    flex: 1,
    marginRight: windowWidth * 0.03,
    top: windowWidth* 0.1
  },
  noDataText: {
    fontSize: windowWidth * 0.05,
    color: '#555',
    textAlign: 'center',
    marginVertical: windowHeight * 0.05,
  },
  detailContainer: {
    flexDirection: 'row',
    marginVertical: windowHeight * 0.01,
    alignItems: 'center',
    paddingHorizontal: windowWidth * 0.05,
    left: windowHeight* 0.07,
    top: windowHeight* -0.1
  },
  label: {
    fontSize: windowWidth * 0.045,
    fontWeight: 'bold',
    color: '#333',
    width: '40%',
  },
  value: {
    fontSize: windowWidth * 0.045,
    color: '#555',
    width: '60%',
  },
  listContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: windowHeight * 0.02, 
  },
});

export default PatientDetailsScreen;
