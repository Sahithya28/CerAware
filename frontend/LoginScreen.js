import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import config from './file';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert("Error", "Please enter both username and password.");
      return;
    }

    const loginApiUrl = config.login;

    fetch(loginApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login Response:", data);
        if (data.status === "success") {
          Alert.alert("Success", "Login successful!", [
            {
              text: "OK",
              onPress: () => {
                console.log("Logged in Username:", username);
                navigation.navigate("DashboardScreen", { username });
              },
            },
          ]);
        } else {
          Alert.alert(
            "Error",
            "Invalid username or password. Please try again."
          );
        }
      })
      .catch((error) => {
        console.error("Login Error:", error);
        Alert.alert("Error", "Login failed. Please try again later.");
      });
  };

  const handleSignUp = () => {
    navigation.navigate("SignUpScreen");
  };

  return (
    <ImageBackground
      source={require("./assets/8761.jpg")}
      style={styles.background}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
        enabled
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.textStyle}>WELCOME</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.signUpButton}
              onPress={handleSignUp}
            >
              <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.topLeftContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back"
                size={windowWidth * 0.08}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: windowWidth,
    height: windowHeight * 1.05,
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: windowWidth * 0.05,
    paddingVertical: windowHeight * 0.1,
  },
  textStyle: {
    fontSize: windowWidth * 0.08,
    fontWeight: "700",
    marginBottom: windowHeight * 0.05,
    top: windowHeight * -0.05,
  },
  inputContainer: {
    width: "100%",
    marginBottom: windowHeight * 0.03,
    top: windowHeight * -0.04,
  },
  input: {
    width: "100%",
    height: windowHeight * 0.06,
    borderWidth: 1.5,
    borderColor: "black",
    paddingHorizontal: windowWidth * 0.04,
    fontSize: windowWidth * 0.04,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: windowHeight * 0.03,
    top: windowHeight * -0.05,
  },
  loginButton: {
    width: "40%",
    height: windowHeight * 0.045,
    backgroundColor: "rgba(56, 231, 210, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: windowHeight * 0.03,
    elevation: 4,
    left: windowHeight * 0.02,
  },
  signUpButton: {
    width: "40%",
    height: windowHeight * 0.045,
    backgroundColor: "rgba(56, 231, 210, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: windowHeight * 0.03,
    elevation: 4,
    right: windowHeight * 0.02,
  },
  buttonText: {
    fontSize: windowWidth * 0.04,
    fontWeight: "600",
    color: "black",
  },
  topLeftContainer: {
    position: "absolute",
    top: windowHeight * 0.05,
    left: windowWidth * 0.05,
  },
});
