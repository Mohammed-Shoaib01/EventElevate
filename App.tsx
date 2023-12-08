import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { onAuthStateChanged, User } from "firebase/auth";

import WelcomeScreen from "./app/screen/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./app/screen/Login";
import { useState, useEffect } from "react";
import { FirebaseAuth } from "./firebaseConfig";
import HomePage from "./app/screen/HomePage";
import Signup from "./app/screen/Signup";

const Stack = createNativeStackNavigator();

export default function App() {
  const auth = FirebaseAuth;
  const [user, setuser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      setuser(user);
      console.log("user:", user);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user == null ? (
          <>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        ) : (
          <Stack.Screen name="HomePage" component={HomePage} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
