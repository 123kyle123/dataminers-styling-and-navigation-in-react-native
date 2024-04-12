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
import pants from "../assets/logo1.png";
import { TextInput } from "react-native-paper";
import Categories from "./categories";
import HomeScreen from "./Homescreen";
import Logos from "../assets/logo1.png";

const { width } = Dimensions.get("window");

function Landscapecat() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
     
      <Image source={Logos} style={styles.logo} />
      
      <View style={styles.photoGrid}>
        <Image
          source={{
            uri: "https://www.google.com/imgres?q=rings&imgurl=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fg%2FfYAAAOSw0rdb884M%2Fs-l1200.jpg&imgrefurl=https%3A%2F%2Fwww.ebay.ph%2Fitm%2F224718023718&docid=dxS8oCbdSyOnSM&tbnid=gFHg96z6hqlL9M&vet=12ahUKEwiatKHZ3rmFAxUY1TgGHQphDekQM3oECBkQAA..i&w=800&h=800&hcb=2&ved=2ahUKEwiatKHZ3rmFAxUY1TgGHQphDekQM3oECBkQAA",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://www.google.com/imgres?q=rings&imgurl=https%3A%2F%2Fwww.brides.com%2Fthmb%2FBriMJ_sBebrRtYXsvKA6I33H6Tk%3D%2F1500x0%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2Fpromise-rings-getty-images-Facebook-132783d5bc85479e800ebf57ff1d2d18.jpg&imgrefurl=https%3A%2F%2Fwww.brides.com%2Fwhat-is-a-promise-ring-5069736&docid=ndCL5W5efb8E1M&tbnid=LM7PJS1Mby-giM&vet=12ahUKEwiatKHZ3rmFAxUY1TgGHQphDekQM3oECGMQAA..i&w=1500&h=785&hcb=2&ved=2ahUKEwiatKHZ3rmFAxUY1TgGHQphDekQM3oECGMQAA",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://www.google.com/imgres?q=rings&imgurl=https%3A%2F%2Fwww.monicarichkosann.com%2Fcdn%2Fshop%2Farticles%2Funnamed_6c2a52af-4676-4742-8213-9a64b0a2c843_x500.jpg%3Fv%3D1669927069&imgrefurl=https%3A%2F%2Fwww.monicarichkosann.com%2Fblogs%2Fjournal%2Fmeaning-rings-each-finger&docid=Xn_nO7BD8RD5FM&tbnid=GLe_G0AFTn-o1M&vet=12ahUKEwiatKHZ3rmFAxUY1TgGHQphDekQM3oECBQQAA..i&w=750&h=500&hcb=2&ved=2ahUKEwiatKHZ3rmFAxUY1TgGHQphDekQM3oECBQQAA",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://www.google.com/imgres?q=rings&imgurl=https%3A%2F%2Fassets.ajio.com%2Fmedias%2Fsys_master%2Froot%2F20210918%2Feiy7%2F6144e20caeb269a26896cb9d%2F-1117Wx1400H-462975711-gold-MODEL.jpg&imgrefurl=https%3A%2F%2Fwww.ajio.com%2Fvembley-set-of-8-stone-studded-finger-rings%2Fp%2F462975711_gold&docid=2szHzIPoFQCK6M&tbnid=jG20_xZxhzuo2M&vet=12ahUKEwiatKHZ3rmFAxUY1TgGHQphDekQM3oECG4QAA..i&w=1117&h=1400&hcb=2&ved=2ahUKEwiatKHZ3rmFAxUY1TgGHQphDekQM3oECG4QAA",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://www.google.com/imgres?q=rings&imgurl=https%3A%2F%2Fspringfieldjewellers.com.au%2Fcdn%2Fshop%2Farticles%2Fgobidog_a_engagment_ring_and_wedding_ring_aa3136c5-a5ab-45e9-a068-729c0548766f.png%3Fv%3D1692744174&imgrefurl=https%3A%2F%2Fspringfieldjewellers.com.au%2Fblogs%2Fnews%2Fcreative-ways-to-repurpose-your-wedding-and-engagement-rings-after-divorce&docid=UhdFITXMPhQd7M&tbnid=9Fz_nmvmB-xmyM&vet=12ahUKEwiatKHZ3rmFAxUY1TgGHQphDekQM3oECHoQAA..i&w=1024&h=573&hcb=2&ved=2ahUKEwiatKHZ3rmFAxUY1TgGHQphDekQM3oECHoQAA",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "",
          }}
          style={styles.image}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: "center",
  },
  logo: {
    width: width,
    height: 50,
    resizeMode: "contain",
  },
  photoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  image: {
    width: width / 2 - 10,
    height: width / 2 - 10,
    marginVertical: 5,
    resizeMode: "cover",
  },
});

export default Landscapecat;
