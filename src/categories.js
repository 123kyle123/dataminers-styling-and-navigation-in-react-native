import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Landscapecat from "./landscapecat";

const categories = [
  {
    id: 1,
    name: "Rings",
    image: require("../assets/ring.jpeg"),
  },

  {
    id: 2,
    name: "Earings",
    image: require("../assets/earings.jpeg"),
  },
  { id: 3, name: "Bracelets", image: require("../assets/bracelet.jpeg") },
  { id: 4, name: "Watches", image: require("../assets/watch.jpeg") },
  { id: 5, name: "Necklace", image:require("../assets/necklace.jpeg") },
  { id: 6, name: "Angklet", image: require("../assets/Angklet.jpg") },
  {
    id: 7,
    name: "Gemstone",
    image: require("../assets/gemstone.jpg"),
  },
];

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => navigation.navigate("Landscapecat", { category: 1 })}
    >
      <TouchableOpacity
        style={styles.categoryItem}
        onPress={() => navigation.navigate("Landscapecat", { category: 1 })}
      ></TouchableOpacity>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: "#E9F679"
  },
  categoryItem: {
    flex: 1,
    margin: 10,
    alignItems: "center",
  },
  categoryImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Half of width and height to make it round
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#346473"
  },
});

export default CategoriesScreen;
