import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ServicesPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Our Services</Text>
      <View style={styles.service}>
        <Text style={styles.serviceTitle}>Custom Design</Text>
        <Text style={styles.serviceDescription}>
          Creating unique, one of a kind pieces tailored to individual preference.
        </Text>
      </View>
      <View style={styles.service}>
        <Text style={styles.serviceTitle}>Repair and Restoration</Text>
        <Text style={styles.serviceDescription}>
          Fixing damaged jewelry or retoring vintage pieces to their former Glory.
        </Text>
      </View>
      <View style={styles.service}>
        <Text style={styles.serviceTitle}>Cleaning and Maintenane</Text>
        <Text style={styles.serviceDescription}>
          Polishing, Cleaning, and Maintaining jewelry to keep it looking it's best.
        </Text>
      </View>
      <View style={styles.service}>
        <Text style={styles.serviceTitle}>Appraisal</Text>
        <Text style={styles.serviceDescription}>
          Providing valuations for insurance purposes or resale value.
        </Text>
      </View>
      <View style={styles.service}>
        <Text style={styles.serviceTitle}>Sourcing And procurement</Text>
        <Text style={styles.serviceDescription}>
          Helping customers find specific gems or materials for their jewelry needs.
        </Text>
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
  service: {
    marginBottom: 20,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#346473"
  },
  serviceDescription: {
    fontSize: 16,
    color: "#346473"
  },
});

export default ServicesPage;
