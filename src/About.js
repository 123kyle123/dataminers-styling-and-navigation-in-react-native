import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const AboutUsPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <View style={styles.member}>
        <Image
          source={require("../assets/kyle.jpg")}
          style={styles.memberImage}
        />
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>Kyle Ratilla</Text>
          <Text style={styles.memberRole}>Store Manager</Text>
        </View>
      </View>
      <View style={styles.member}>
        <Image
          source={require("../assets/jd.jpg")}
          style={styles.memberImage}
        />
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>John Dave Remiticado</Text>
          <Text style={styles.memberRole}>Customer Service representative</Text>
        </View>
      </View> 
      <View style={styles.member}>
        <Image
          source={require("../assets/logo1.png")}
          style={styles.memberImage}
        />
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>Chayzelle Magabang</Text>
          <Text style={styles.memberRole}>Jewerlry Designer</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#E9F679"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#346473"
  },
  member: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  memberImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#346473"
  },
  memberRole: {
    fontSize: 16,
    color: "#666",
    color: "white"
  },
});

export default AboutUsPage;
