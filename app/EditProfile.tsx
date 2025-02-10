import { View, Text, TextInput, StyleSheet, Pressable, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-expo';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';

export default function EditProfile() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  const [fullName, setFullName] = useState(user?.fullName || '');
  const [email, setEmail] = useState(user?.emailAddresses[0]?.emailAddress || '');
  const [phone, setPhone] = useState(user?.primaryPhoneNumber || '');
  const [bloodGroup, setBloodGroup] = useState('');
  const [allergies, setAllergies] = useState('');
  const [medicalConditions, setMedicalConditions] = useState('');

  if (!isLoaded) return <Text>Loading...</Text>;

  const handleSave = async () => {
    try {
      await  user?.update({
        firstName: fullName.split(' ')[0],
        lastName: fullName.split(' ').slice(1).join(' '),
        primaryEmailAddressId: user?.emailAddresses[0]?.id,
        // primaryPhoneNumber: phone,
        // publicMetadata: { bloodGroup, allergies, medicalConditions }
      });

      Alert.alert('Success', 'Profile updated successfully!');
      router.back();
    } catch (error) {
        console.log(error)
      Alert.alert('Error', 'Failed to update profile.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText type="title">Edit Profile</ThemedText>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} value={fullName} onChangeText={setFullName} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} editable={false} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone</Text>
        <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      </View>

      {/* Health Info */}
      <ThemedText type="title" style={styles.sectionTitle}>Health Information</ThemedText>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Blood Group</Text>
        <TextInput style={styles.input} value={bloodGroup} onChangeText={setBloodGroup} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Allergies</Text>
        <TextInput style={styles.input} value={allergies} onChangeText={setAllergies} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Medical Conditions</Text>
        <TextInput style={styles.input} value={medicalConditions} onChangeText={setMedicalConditions} multiline />
      </View>

      {/* Save Button */}
      <Pressable style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  sectionTitle: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
