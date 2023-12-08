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
    async function fetchEventsData() {
      // const querySnapshot = await getDocs(collection(FirebaseDB, "Events"));
      const tempList = [];
      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      //   tempList.push(doc.data());
      // });
      // console.log(tempList);
      // setOptionList(tempList);
      for (let i = 0; i < docSnapData.EventsOrganised.length; i++) {
        const docRef = doc(
          FirebaseDB,
          "Events",
          docSnapData.EventsOrganised[i]
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
    }
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
      fetchEventsData();
    }

    fetchData();
  }, []);

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
                  onPress={() => {}}
                  title="Details"
                  color="#FEB557"
                />
              </CardAction>
            </Card>
          );
        }}
      />
    </View>
  );
}
