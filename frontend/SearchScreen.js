import React from 'react';
import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;

const SearchScreen = ({ route, navigation }) => {
  const { user } = route.params || {};

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.noDataText}>No user data available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={windowWidth * 0.075} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Patient Details</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>ID:</Text>
        <Text style={styles.value}>{user.id}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.value}>{user.username}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{user.Name}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Gender:</Text>
        <Text style={styles.value}>{user.Gender}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Age:</Text>
        <Text style={styles.value}>{user.Age}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{user.Date}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Phone Number:</Text>
        <Text style={styles.value}>{user.phonenumber}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Attended Questions"
          onPress={() => navigation.navigate('AttendedQuestionsScreen', { username: user.username })}
          color="black"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(56, 231, 210, 0.5)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    flex: 1,
  },
  noDataText: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginVertical: 20,
  },
  detailContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    width: '40%',
  },
  value: {
    fontSize: 16,
    color: '#555',
    width: '60%',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default SearchScreen;
