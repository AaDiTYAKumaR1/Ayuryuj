import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text,Image, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function SignInPage() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSignInPress = async () => {
    if (!isLoaded) return;
    setLoading(true);

    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/(tabs)");
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err: any) {
      Alert.alert("Sign-in Failed", err.errors?.[0]?.message || "Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
         <Image source={require("../../assets/images/logo1.png")} style={styles.logo} />
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        style={styles.input}
        autoCapitalize="none"
        placeholder="Enter email"
        value={emailAddress}
        onChangeText={setEmailAddress}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={onSignInPress} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? "Signing In..." : "Sign In"}</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <Link href="/sign-up">
          <Text style={styles.linkText}>Sign up</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  logo: {
    width: 120, 
    height: 120, 
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "100%",
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 14,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginVertical: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  footerText: {
    fontSize: 14,
    color: "#555",
  },
  linkText: {
    fontSize: 14,
    color: "#007bff",
    fontWeight: "bold",
    marginLeft: 5,
  },
});
