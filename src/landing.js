import * as React from "react";
import {
  View,
  text,
  Image,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Windows,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";
import logo from "../assets/logo1.png";
import shirt from "../assets/logo1.png";
import jacket from "../assets/logo1.png";
import pants from "../assets/logo1.png";
import { TextInput } from "react-native-paper";
import Categories from "./categories";
import HomeScreen from "./Homescreen";
import Logos from "../assets/logo1.png";

const { width } = Dimensions.get("window");

function LandingScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo1.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to DataMiners</Text>
      <Text style={styles.description}>
      Adorn Yourself in Elegance: Where Every Jewel Tells a Story.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Categories")}
      >
        <Text style={styles.buttonText}>Explore Categories</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#E9F679"
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#346473",
    textAlign: "center"
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "white"
  },
  button: {
    backgroundColor: "#9BDF46",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LandingScreen;
