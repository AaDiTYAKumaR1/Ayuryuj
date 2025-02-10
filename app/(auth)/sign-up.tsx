import * as React from 'react';
import { Text,Image, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useSignUp } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState('');

  const onSignUpPress = async () => {
    if (!isLoaded) return;

    try {
      await signUp.create({ emailAddress, password });
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      setPendingVerification(true);
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
      alert(err.errors[0].message)
    }
  };

  const onVerifyPress = async () => {
    if (!isLoaded) return;

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({ code });

      if (signUpAttempt.status === 'complete') {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace('/');
      } else {
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <View style={styles.container}>
      {pendingVerification ? (
        <>
          <Text style={styles.title}>Verify Your Email</Text>
           <Image source={require("../../assets/images/logo1.png")} style={styles.logo} />
          <TextInput
            style={styles.input}
            value={code}
            placeholder="Enter verification code"
            onChangeText={setCode}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.button} onPress={onVerifyPress}>
            <Text style={styles.buttonText}>Verify</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.title}>Sign Up</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            value={emailAddress}
            placeholder="Enter email"
            onChangeText={setEmailAddress}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            value={password}
            placeholder="Enter password"
            secureTextEntry
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={onSignUpPress}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

// 🖌️ StyleSheet for better UI
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  logo: {
    width: 120, 
    height: 120, 
    marginBottom: 20,
    resizeMode: "contain",
  },
  input: {
    width: '100%',
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
