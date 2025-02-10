import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import auth from '@react-native-firebase/auth';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

import consultant from "../../assets/images/consultant.jpeg";
import bodycheck from "../../assets/images/bodycheck.jpeg";
import medicineimg from "../../assets/images/medicineimg.jpeg";
import skincare from "../../assets/images/skincare.jpeg";
import xray from "../../assets/images/xray.jpeg";
import labtest from "../../assets/images/labtest.jpeg";
import banner from "../../assets/images/banner.jpeg";

export default function HomeScreen() {
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');
  const navigation = useNavigation();
  const [user, setUser] = useState(null);



  const services = [
    { name: "Online Consultations", image: consultant, bg: "bg-blue-400", screen: "Consult" },
    { name: "Full Body Checkup", image: bodycheck, bg: "bg-amber-100", screen: "Consult" },
    { name: "Order Medicine", image: medicineimg, bg: "bg-green-200", screen: "Medicine" },
    { name: "Skin Care", image: skincare, bg: "bg-pink-200", screen: "Medicine" },
    { name: "X-Ray, MRI", image: xray, bg: "bg-yellow-200", screen: "Consult" },
    { name: "Lab Test", image: labtest, bg: "bg-violet-400", screen: "Labtest" },
  ];

  // useEffect(() => {
  //   const unsubscribe = auth().onAuthStateChanged((authenticatedUser) => {
  //     if (authenticatedUser) {
  //       setUser(authenticatedUser);
  //     } else {
  //       navigation.replace('Login'); // Redirect if no user
  //     }
  //   });

  //   return unsubscribe; // Cleanup on unmount
  // }, []);

  // if (!user) return null; // Avoid rendering UI before user check is complete

  return (
    <ThemedView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.drawerToggle}>
          <Ionicons name="menu" size={30} color="black" />
        </TouchableOpacity>
        <ThemedText style={styles.headerTitle}>Ayuryuj HealthApp</ThemedText>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.mainContent}>
        <View className='flex flex-row flex-wrap justify-center'>
          {services.map((service, index) => (
            <TouchableOpacity 
              key={index} 
              className={`w-44 rounded-lg m-2 overflow-hidden h-36 flex justify-center items-center ${service.bg}`} 
              onPress={() => navigation.navigate(service.screen)}
            >
              <Text className='text-center text-lg font-bold'>{service.name}</Text>
              <Image source={service.image} className='w-32 h-24 mt-2' resizeMode='contain' />
            </TouchableOpacity>
          ))}
        </View>

        {/* Promotional Banner */}
        <TouchableOpacity>
          <Image source={banner} className='w-full h-40 rounded-lg mt-4' resizeMode='cover' />
        </TouchableOpacity>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  drawerToggle: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  mainContent: {
    padding: 16,
  },
});

