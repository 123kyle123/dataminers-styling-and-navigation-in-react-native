import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Button, TextInput} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import logo from "../assets/logo1.png";
import { useState } from "react";

function LoginScreen(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  
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
      <Text style={styles.greet}>WELCOME BACK!</Text>
      <TextInput
        style={styles.emaill}
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.passl}
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={!showPassword} // Hide or show password based on the state
        right={<TextInput.Icon icon={showPassword ? "eye-off" : "eye"} onPress={() => setShowPassword(!showPassword)} />}
      />
      <Text
        style={styles.forgot}
        onPress={() => props.navigation.navigate("Recovery")}
      >
        Forgot Password?
      </Text>
      <Button
        style={styles.login}
        icon="login"
        mode="contained"
        onPress={() => props.navigation.navigate("Landing")}
      >
        LOGIN
      </Button>
      <Text>
        Don't have an account?
        <Text
          style={{ color: "#346473" }}
          onPress={() => props.navigation.navigate("Signup")}
        >
          Signup
        </Text>
      </Text>
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
  passl: {
    marginTop: 10,
    height: 40,
    width: "50%",
    flexDirection: 'row',
    alignItems: 'center',
  },
  emaill: {
    height: 40,
    width: "50%",
  },
  forgot: {
    color: "red",
    fontSize: 10,
    textAlign: "right",
  },
  greet: {
    color: "#346473",
    fontSize: 30,
    fontWeight: "1000",
    marginBottom: 20,
  },
});

export default LoginScreen;