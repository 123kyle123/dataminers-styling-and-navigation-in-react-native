import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../dm-styling-and-navigation-in-react-native/src/Homescreen";
import LoginScreen from "../dm-styling-and-navigation-in-react-native/src/login";
import SignupScreen from "../dm-styling-and-navigation-in-react-native/src/signup";
import RecoveryScreen from "../dm-styling-and-navigation-in-react-native/src/recovery";
import LandingScreen from "../dm-styling-and-navigation-in-react-native/src/landing";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "../dm-styling-and-navigation-in-react-native/src/categories";
import Landscapecat from "../dm-styling-and-navigation-in-react-native/src/landscapecat";
import ServicesPage from "../dm-styling-and-navigation-in-react-native/src/services";
import AboutUsPage from "../dm-styling-and-navigation-in-react-native/src/About";
import ContactPage from "../dm-styling-and-navigation-in-react-native/src/contact";
import FilterPage from "../dm-styling-and-navigation-in-react-native/src/filter";
import FavoritesPage from "../dm-styling-and-navigation-in-react-native/src/favorites";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingScreen">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Recovery" component={RecoveryScreen} />
        <Stack.Screen name="Landscapecat" component={Landscapecat} />
        <Stack.Screen
          name="Landing"
          component={MyDrawer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={LandingScreen}  />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Favorites" component={FavoritesPage} />
    </Tab.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions= { { drawerStyle: { backgroundColor: 'white' }}} >
      <Drawer.Screen name="Home" component={MyTabs} />
      <Drawer.Screen name="Services" component={ServicesPage} />
      <Drawer.Screen name="Filters" component={FilterPage} />
      <Drawer.Screen name="About Us" component={AboutUsPage} />
      <Drawer.Screen name="Contact" component={ContactPage} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
