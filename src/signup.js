import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import logo from "../assets/logo1.png";

function SignupScreen(props) {
  const [username, setUsername] = React.useState("");
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
      <Text style={styles.create}>Create Account</Text>
      <TextInput
        style={styles.usernames}
        label="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
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
        secureTextEntry={!showPassword}
        right={<TextInput.Icon icon={showPassword ? "eye-off" : "eye"} onPress={() => setShowPassword(!showPassword)} />}
      />
      <Button
        style={styles.login}
        icon="login"
        mode="contained"
        onPress={() => props.navigation.navigate("Login")}
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
  emaill: {
    height: 40,
    width: "50%"
  },
  passl: {
    marginTop: 10,
    height: 40,
    width: "50%",
    flexDirection: 'row',
    alignItems: 'center',
  },
  usernames: {
    marginBottom: 10,
    height: 40,
    width: "50%",
  },
  create: {
    color: "#346473",
    fontSize: 30,
    fontWeight: "1000",
    marginBottom: 20,
  },
});

export default SignupScreen;
