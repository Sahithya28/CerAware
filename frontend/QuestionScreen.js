import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, FlatList, Text, TouchableOpacity, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();

const QuestionsScreen = ({ navigation }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDischargeColorQuestion, setShowDischargeColorQuestion] = useState(false);
  const [dischargeColor, setDischargeColor] = useState('');

  useEffect(() => {
    fetch('http://192.168.156.26/php/showqns.php')
      .then(response => response.json())
      .then(data => {
        setQuestions(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleYesPress = () => {
    setShowDischargeColorQuestion(true);
  };

  const handleNoPress = () => {
    // Handle logic for "No" answer, if needed
    // For now, let's just move to the next question
    setShowDischargeColorQuestion(false);
  };

  const handleColorSelection = (color) => {
    setDischargeColor(color);
    setShowDischargeColorQuestion(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.topLeftContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={windowWidth * 0.08} color="black" />
        </TouchableOpacity>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={questions}
          renderItem={({ item, index }) => {
            if (showDischargeColorQuestion && index === 0) {
              return (
                <View>
                  <Text>What is the color of the discharge?</Text>
                  <TouchableOpacity onPress={() => handleColorSelection('Clear')}>
                    <Text>Clear</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleColorSelection('Yellow')}>
                    <Text>Yellow</Text>
                  </TouchableOpacity>
                  {/* Add other color options as needed */}
                </View>
              );
            } else {
              return (
                <View>
                  <Text>{item.question}</Text>
                  {index === 0 && (
                    <>
                      <TouchableOpacity onPress={handleYesPress}>
                        <Text>Yes</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={handleNoPress}>
                        <Text>No</Text>
                      </TouchableOpacity>
                    </>
                  )}
                </View>
              );
            }
          }}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Questions">
        <Stack.Screen name="Questions" component={QuestionsScreen} options={{ title: 'Questions' }} />
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = {
  topLeftContainer: {
    position: 'absolute',
    top: windowHeight * 0.06,
    left: windowWidth * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
};
