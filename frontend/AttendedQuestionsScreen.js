import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import config from './file';

const AttendedQuestionsScreen = ({ route, navigation }) => {
  const { username } = route.params; // Get username from route params
  const [data, setData] = useState([]); // State to hold fetched data
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  // Fetch data from the PHP script
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(config.attend(username));
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result); // Log the result to check its structure

        // Ensure result is an array
        setData(Array.isArray(result) ? result : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  // Calculate total score
  const calculateTotalScore = () => {
    return data.reduce((total, item) => total + (item.score || 0), 0);
  };

  // Handle the "See Results" button press
  const handleSeeResults = () => {
    const totalScore = calculateTotalScore();
    if (totalScore === 0) {
      navigation.navigate('Result1Screen'); // Navigate based on total score
    } else {
      navigation.navigate('Result2Screen'); // Navigate based on total score
    }
  };

  // Render different UI based on loading, error, or data state
  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text style={styles.errorText}>Error: {error}</Text>;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.username}>Username: {username}</Text>
        {data.length === 0 ? (
          <Text style={styles.noQuestionsText}>No questions found.</Text>
        ) : (
          data.map((item, index) => (
            <View key={index} style={styles.item}>
              <Text>ID: {item.id}</Text>
              <Text>Username: {item.username}</Text>
              <Text>Category: {item.category}</Text>
              <Text>Question Text: {item.questionText}</Text>
              <Text>Answer: {item.answer}</Text>
              <Text>Score: {item.score}</Text>
            </View>
          ))
        )}
        <View style={styles.buttonContainer}>
          <Button 
            title="See Results"
            onPress={handleSeeResults}
            color="black"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(56, 231, 210, 0.5)',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    top: 10,
    left: 10
  },
  item: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
  },
  noQuestionsText: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
});

export default AttendedQuestionsScreen;
