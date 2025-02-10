import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import { Text, View, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace("/(tabs)"); // Navigate to the tab layout if user is signed in
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo1.png")} style={styles.logo} />

      <SignedOut>
        <Text style={styles.title}>Welcome to Our App</Text>
        <Text style={styles.subtitle}>Please sign in to continue</Text>

        <Link href="/(auth)/sign-in" style={styles.linkButton}>
          <Text style={styles.linkText}>Sign In</Text>
        </Link>

        <Link href="/(auth)/sign-up" style={[styles.linkButton, styles.secondaryButton]}>
          <Text style={styles.secondaryText}>Sign Up</Text>
        </Link>
      </SignedOut>
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
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  linkButton: {
    width: "80%",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#007bff",
    alignItems: "center",
    marginVertical: 8,
    textAlign: "center",
  },
  linkText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  secondaryButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#007bff",
  },
  secondaryText: {
    color: "#007bff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
