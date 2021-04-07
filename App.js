import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import * as React from "react";
import { useFonts } from "expo-font";
import { MaterialIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Alert,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

export default function App() {
  const [loaded] = useFonts({
    lobster: require("./assets/font/Lobster-Regular.ttf"),
    A: require('./assets/font/A.ttf'),
   

  });
  const [name, setname] = useState("jay");
  const [person, setperson] = useState([  ]);
  const [text, settext] = useState("");
  const presshandler = (id) => {
    setperson((prevperson) => {
      return prevperson.filter((person) => person.id != id);
    });
  };
  const Inputhandler = (e) => {
    settext(e);
  };
  const submithandler = () => {
    if (text != "") {
      setperson((prevstate) => {
        return [{ name: text, id: Math.random().toString() }, ...prevstate];
      });
    } else {
      Alert.alert("OOPS!!!!", "Must enter something", [{ text: "Understood" }]);
    }
  };
  if (!loaded) {
    return null;
  } else
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
         
          <View style={styles.heading}>
            <Text style={styles.headingtext}>Todo App</Text>
          </View>

          <TextInput
            multiline
            placeholder="Add a todo...."
            style={styles.Inputfield}
            onChangeText={Inputhandler}
          />
          <Button title="add " onPress={submithandler} />

          <FlatList
            data={person}
            keyExtractor={(item) => {
              return item.id.toString();
            }}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => presshandler(item.id)}>
                <View style={styles.nameandcoll}>
                  <MaterialIcons name="delete" size={25} color="gray" />
                  <Text style={styles.textfield}>{item.name} </Text>
                </View>
              </TouchableOpacity>
            )}
          />
          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  Inputfield: {
    borderWidth: 2,
    borderColor: "gray",
    marginTop: 40,
   
    marginBottom: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width:300,
    borderRadius:15,
    
  },
  nameandcoll: {
    flex: 1,
    borderWidth: 1,
    flexDirection: "row",
    paddingVertical: 20,
    width:300,
    textAlign: "justify",
    backgroundColor: "white",
    margin: 15,
    paddingHorizontal: 5,
    borderColor: "darkgray",
    borderRadius:10
  
  },
  heading: {
    backgroundColor: "dodgerblue",
    paddingHorizontal:65,
    paddingVertical:15
  },
  headingtext: {
    fontSize: 40,
    paddingTop: 50,
    paddingHorizontal: 40,
    color: "white",
    fontFamily:"lobster",
    
  },
  textfield: {
    width: 200,
    fontSize: 16,
    color: "gray",
    marginLeft: 5,
   
  },
});
// C:\Users\jaywa\.android\avd/Pixel_3a_API_30_x86.avd/*.lock
