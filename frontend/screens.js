import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.text}>You have to consult doctor and do PAP Smear</Text>
        <Text style={styles.instructions}>Pap Smear instructions</Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Pap Test', 'Pap Test instructions...')}>
          <Text style={styles.buttonText}>Pap Test</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SecondScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.text}>You have to do Pap Smear</Text>
        <Text style={styles.instructions}>Pap Smear instructions</Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Pap Test', 'Pap Test instructions...')}>
          <Text style={styles.buttonText}>Pap Test</Text>
        </TouchableOpacity>
        <Text style={styles.moreInfo}>click here to know more :</Text>
        <TouchableOpacity style={styles.investigationButton} onPress={() => Alert.alert('Investigation Tools', 'Details about investigation tools...')}>
          <Text style={styles.buttonText}>Investigation tools</Text>
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
    backgroundColor: '#bce0fb',
  },
  circle: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
  },
  instructions: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  moreInfo: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 10,
  },
  investigationButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export { FirstScreen, SecondScreen };
