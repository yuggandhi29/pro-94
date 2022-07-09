import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import { Avatar, ListItem, Icon } from "react-native-elements";
import db from "../config";
import firebase from "firebase"
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
     name: "",
     grade : 0,
     hours:0,
     favsubject:"",
    };
  }
      

   addUser(){
    db.collection("user").add({
    
       favsubject:this.state.favsubject,
       grade:this.state.grade,
       hours:this.state.hours,
       name:this.state.name,
    })}

      

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      
          <View style={styles.upperContainer}>
            <Text style = {styles.textfilltheform}>FILL THE FORM</Text>
          </View>
          <View style={styles.lowerContainer}>
            <TextInput
              style={styles.textinput}
              onChangeText={text => this.setState({ name: text })}
              placeholder={"Enter Your Name"}
              placeholderTextColor={"#FFFFFF"}
              autoFocus
            />
            <TextInput
              style={[styles.textinput, { marginTop: 20 }]}
              onChangeText={text => this.setState({ grade: parseInt(text )})}
              placeholder={"Enter Your Grade"}
              placeholderTextColor={"#FFFFFF"}
              secureTextEntry
            />
             <TextInput
              style={[styles.textinput, { marginTop: 20 }]}
              onChangeText={text => this.setState({ hours: parseInt(text) })}
              placeholder={"No. of Hours You Are Free"}
              placeholderTextColor={"#FFFFFF"}
              secureTextEntry
            />
             <TextInput
              style={[styles.textinput, { marginTop: 20 }]}
              onChangeText={text => this.setState({ favsubject: text })}
              placeholder={"Most Fav Subject"}
              placeholderTextColor={"#FFFFFF"}
              secureTextEntry
            />
            <TouchableOpacity
              style={[styles.button, { marginTop: 20 }]}
              onPress={() => {
                this.addUser()
               
                }}
            >
              <Text style={styles.buttonText}>Summit</Text>
            </TouchableOpacity>
            <Text>{this.state.favsubject}
           {this.state.hours}
           { this.state.name}
            {this.state.grade}
            </Text>
          </View>
       
      </KeyboardAvoidingView>
    );
  }
}
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffecb3"

  },
  upperContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
 
  textinput: {
    width: "57%",
    height: 50,
    padding: 10,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: "#5653D4",
    fontFamily: "Rajdhani_600SemiBold",
    color: "#FFFFFF"
  },
  textfilltheform:{
    fontSize: 18,
    fontFamily: "Rajdhani_600SemiBold",
    color: "#000000"
  },
  
  lowerContainer: {
    flex: 0.8,
    backgroundColor: "#ffecb3"
  },

  button: {
    width: "43%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#76b5c5",
    borderRadius: 15
  },
  buttonText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontFamily: "Rajdhani_600SemiBold"
  }
});
  