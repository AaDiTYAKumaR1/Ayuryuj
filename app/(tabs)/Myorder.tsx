import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { useUser, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useRouter } from 'expo-router';

export default function UserProfileScreen() {
  const { user } = useUser();
  const router = useRouter();
  console.log(user)

  return (
    <ThemedView style={styles.container}>
      <SignedIn>
        <View style={styles.profileHeader}>
          <Image 
            source={{ uri: user?.imageUrl || 'https://via.placeholder.com/100' }} 
            style={styles.avatar} 
          />
          <ThemedText type="title">{user?.fullName || 'User'}</ThemedText>
          <Text style={styles.email}>{user?.emailAddresses[0]?.emailAddress}</Text>
        </View>

        <View style={styles.infoCard}>
          <IconSymbol name="phone" size={20} color="#4CAF50" />
          <Text style={styles.infoText}>{user?.primaryPhoneNumber || 'Not Provided'}</Text>
        </View>

        <View style={styles.infoCard}>
          <IconSymbol name="user-circle" size={20} color="#4CAF50" />
          <Text style={styles.infoText}>Member since: {user?.createdAt?.toDateString()}</Text>
        </View>

        <Pressable style={styles.button} onPress={() => router.push('/EditProfile')}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.logoutButton]}>
          <Text style={styles.logoutText}>Logout</Text>
        </Pressable>
      </SignedIn>

      <SignedOut>
        <Text style={styles.title}>You are not signed in</Text>
      </SignedOut>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    width: '100%',
  },
  infoText: {
    fontSize: 16,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#d9534f',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
