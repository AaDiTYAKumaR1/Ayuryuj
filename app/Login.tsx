import { View, Text, Button, TextInput, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import auth from "@react-native-firebase/auth";

export default function Login({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState("");

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      if (user) {
        Alert.alert("Login Successful!", `Welcome ${user.phoneNumber}`);
        navigation.replace("Home"); // Redirect to Home or Dashboard
      }
    });
    return subscriber; // Unsubscribe on unmount
  }, []);

  async function signInWithPhoneNumber() {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      Alert.alert("Error", "Failed to send OTP. Check the number.");
    }
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
      Alert.alert("Success", "Phone number verified!");
    } catch (error) {
      Alert.alert("Invalid Code", "Please enter the correct OTP.");
    }
  }

  return (
    <View style={{ padding: 20 }}>
      {!confirm ? (
        <>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>Enter Phone Number</Text>
          <TextInput
            placeholder="e.g. +1 650-555-3434"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            style={{
              borderWidth: 1,
              padding: 10,
              marginBottom: 10,
              borderRadius: 8,
            }}
          />
          <Button title="Send OTP" onPress={signInWithPhoneNumber} />
        </>
      ) : (
        <>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>Enter OTP</Text>
          <TextInput
            placeholder="6-digit OTP"
            value={code}
            onChangeText={setCode}
            keyboardType="number-pad"
            style={{
              borderWidth: 1,
              padding: 10,
              marginBottom: 10,
              borderRadius: 8,
            }}
          />
          <Button title="Verify OTP" onPress={confirmCode} />
        </>
      )}
    </View>
  );
}
