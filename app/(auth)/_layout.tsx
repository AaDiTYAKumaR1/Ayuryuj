import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth();

  // If user is already signed in, redirect to home page
  if (isSignedIn) {
    return <Redirect href="/" />;
  }

  return (
    <Stack
    >
      <Stack.Screen name="sign-in" options={{ headerShown: false }}  />
      <Stack.Screen name="sign-up"options={{ headerShown: false }}  />
    </Stack>
  );
}
