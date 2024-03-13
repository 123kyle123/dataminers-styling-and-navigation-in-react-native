import * as React from "react";
import { View, text, Image, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";
import logo from "../assets/logo1.png";
import { TextInput } from "react-native-paper";
function LandingScreen(props) {
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
      <Text style={styles.grt}>This Is a Landing Page</Text>
      <Button
        style={styles.logout}
        icon="login"
        mode="contained"
        onPress={() => props.navigation.navigate("Login")}
      >
        LOGOUT
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
    width: "50%",
  },
  passl: {
    marginTop: 10,
  },
  forgot: {
    color: "red",
    fontSize: 10,
    textAlign: "right",
  },
  grt: {
    color: "#346473",
    fontSize: 20,
    fontWeight: "1000",
    textAlign: "center",
  },
  logout: {
    height: 50,
    width: 150,
    marginTop: 10,
    backgroundColor: "#9BDF46",
  },
});

export default LandingScreen;