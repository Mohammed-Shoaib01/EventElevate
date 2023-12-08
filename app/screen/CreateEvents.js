import * as React from "react";
import { Component, useState, useEffect } from "react";
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from "react-native-cards";
import { collection, getDocs } from "firebase/firestore";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  FlatList,
} from "react-native";
import { FirebaseDB } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { FirebaseAuth } from "../../firebaseConfig";
import { getAuth } from "firebase/auth";

export default function CreateEvents({ navigation }) {
  let displayName = undefined;
  const auth = getAuth();
  let user = auth.currentUser;
  const [searchText, setSearchText] = useState("");
  const [docSnapData, setdocSnapData] = useState(null);
  const [optionList, setOptionList] = useState([
    { Genre: "...", Image: "...", Location: "...", Title: "..." },
  ]);
  // const handleSearch = (text) => {
  //   setSearchText(text);
  // };
  // const filteredData = optionList.filter((item) => {
  //   return item.name.toLowerCase().includes(searchText.toLowerCase());
  // });

  useEffect(() => {
    async function fetchData() {
      const docRef = doc(FirebaseDB, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data User:", docSnap.data());
        setdocSnapData(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }

    fetchData();
  }, []);
  useEffect(() => {
    async function fetchEventsData() {
      // const querySnapshot = await getDocs(collection(FirebaseDB, "Events"));
      const tempList = [];
      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      //   tempList.push(doc.data());
      // });
      // console.log(tempList);
      console.log("going inside loop");
      for (let i = 0; i < docSnapData.EventsOrganised.length; i++) {
        console.log("inside the loop");
        console.log(docSnapData.EventsOrganised[i].trim());
        const docRef = doc(
          FirebaseDB,
          "Events",
          docSnapData.EventsOrganised[i].trim()
        );
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Document data Event:", docSnap.data());
          tempList.push(docSnap.data());
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      }
      setOptionList(tempList);
    }
    fetchEventsData();
  }, docSnapData);

  return (
    <View>
      <FlatList
        data={optionList}
        keyExtractor={(item) => {
          return item.Title;
        }}
        renderItem={({ item }) => {
          return (
            <Card key={item.id}>
              <CardImage source={{ uri: item.Image }} title={item.Title} />
              <CardTitle subtitle={item.Genre} />
              <CardContent text={item.Location} />
              <CardAction separator={true} inColumn={false}>
                <CardButton onPress={() => {}} title="Share" color="#FEB557" />
                <CardButton
                  onPress={() => {
                    navigation.navigate("EventDetails", item);
                  }}
                  title="Details"
                  color="#FEB557"
                />
              </CardAction>
            </Card>
          );
        }}
      />
      <TouchableOpacity
        style={{ flex: 0, alignSelf: "flex-end", margin: 20 }}
        onPress={() => {
          navigation.navigate("EventForm");
        }}
      >
        {/* button kek also why comments being weird here */}
        <View
          style={{ padding: 10, backgroundColor: "blue", borderRadius: 10 }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Add Event</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
