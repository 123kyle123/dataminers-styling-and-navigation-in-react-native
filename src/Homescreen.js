import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";
import logo from "../assets/logo1.png";
function HomeScreen(props) {
  console.log(props);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E9F679",
      }}
    >
      <Image source={logo} style={styles.logo} />
      <Text style={styles.team}>DATA MINERS</Text>
      <Button
        style={styles.login}
        icon="login"
        mode="contained"
        onPress={() => props.navigation.navigate("Login")}
      >
        LOGIN
      </Button>
      <Button
        style={styles.signup}
        icon="login"
        mode="contained"
        onPress={() => props.navigation.navigate("Signup")}
      >
        SIGNUP
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 200,
    width: 200,
  },
  login: {
    marginTop: 10,
    height: 50,
    width: 150,
    backgroundColor: "#9BDF46",
  },
  signup: {
    height: 50,
    width: 150,
    marginTop: 10,
    backgroundColor: "#9BDF46",
  },
  team: {
    color: "#346473",
    fontSize: 30,
    fontWeight: "1000",
  },
  par: {
    color: "black",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 10,
    fontStyle: "italic",
  },
});

export default HomeScreen;