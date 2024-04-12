import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ContactPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <View style={styles.contactInfo}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.info}>P-1 Lapinigan, Pongol, Libona, Bukidnon</Text>
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.info}>09518384882</Text>
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>dataminers@gmail.com</Text>
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
  contactInfo: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#346473"
  },
  info: {
    fontSize: 16,
    color: "#346473"
  },
});

export default ContactPage;
