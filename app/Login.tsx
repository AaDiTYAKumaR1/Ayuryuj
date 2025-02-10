import { View, Text, Button, TextInput, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore"; // Import Firestore
import { useNavigation } from "@react-navigation/native"; // Fix navigation import

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState("");
  const navigation = useNavigation(); // Use navigation correctly

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = firestore().collection("users").doc(user.uid);
        const doc = await userRef.get();

        if (!doc.exists) {
          await userRef.set({ phoneNumber: user.phoneNumber });
        }

        Alert.alert("Login Successful!", `Welcome ${user.phoneNumber}`);
        navigation.replace("Home");
      }
    });
    return subscriber; 
  }, [navigation]);


  async function signInWithPhoneNumber() {
    if (!phoneNumber.startsWith("+")) {
      Alert.alert("Invalid Number", "Please enter a valid phone number with country code.");
      return;
    }
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      Alert.alert("OTP Sent!", "Check your phone for the verification code.");
    } catch (error) {
      Alert.alert("Error", "Failed to send OTP. Try again later.");
    }
  }

  // 🔥 Verify OTP Function
  async function confirmCode() {
    if (!confirm) {
      Alert.alert("Error", "OTP has not been sent yet.");
      return;
    }
    try {
      const userCredential = await confirm.confirm(code);
      const user = userCredential.user;

      const userRef = firestore().collection("users").doc(user.uid);
      const doc = await userRef.get();
      if (!doc.exists) {
        await userRef.set({ phoneNumber: user.phoneNumber });
      }

      Alert.alert("Success", "Phone number verified!");
      navigation.replace("Home"); // Navigate after verification
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
