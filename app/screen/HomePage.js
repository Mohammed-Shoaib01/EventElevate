import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Alert,
  Button,
  TouchableHighlight,
  Image,
  View,
} from "react-native";
import { signOut } from "firebase/auth";
import { FirebaseAuth } from "../../firebaseConfig.js";

function HomePage({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/WPImage.jpg")}
    >
      <View style={{ alignItems: "center", height: "100%", width: "100%" }}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require("../assets/Logo.png")}
        />
      </View>
      <TouchableHighlight>
        <Button
          color="#fc5c65"
          title="Signout"
          style={styles.loginButton}
          onPress={() => signOut(FirebaseAuth)}
        />
      </TouchableHighlight>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  loginButton: {
    width: "100%",
    height: 70,
    // color:"#fc5c65",
    alignItems: "flex-end",
  },
  registerButton: {
    width: "100%",
    height: 70,
    // color:"#4ecdc4",
  },
  logo: {
    width: "100%",
    position: "absolute",
    top: 50,
  },
});

export default HomePage;
