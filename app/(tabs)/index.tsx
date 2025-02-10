import React, { useState, useMemo, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
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

  const navigation = useNavigation();

  const services = useMemo(() => [
    { name: "Online Consultations", image: consultant, bgColor: "#60A5FA", screen: "Consult" },
    { name: "Full Body Checkup", image: bodycheck, bgColor: "#FEF3C7", screen: "Consult" },
    { name: "Order Medicine", image: medicineimg, bgColor: "#BBF7D0", screen: "Medicine" },
    { name: "Skin Care", image: skincare, bgColor: "#FBCFE8", screen: "Medicine" },
    { name: "X-Ray, MRI", image: xray, bgColor: "#FDE68A", screen: "Consult" },
    { name: "Lab Test", image: labtest, bgColor: "#C4B5FD", screen: "Labtest" },
  ], []);

  const openDrawer = useCallback(() => {
    navigation.openDrawer();
  }, [navigation]);

  return (
    <ThemedView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={openDrawer} style={styles.drawerToggle}>
          <Ionicons name="menu" size={30} color="black" />
        </TouchableOpacity>
        <ThemedText style={styles.headerTitle}>Ayuryuj HealthApp</ThemedText>
      </View>

      <ScrollView contentContainerStyle={styles.mainContent}>
        <View style={styles.serviceContainer}>
          {services.map((service, index) => (
            <TouchableOpacity 
              key={index} 
              style={[styles.serviceItem, { backgroundColor: service.bgColor }]} 
              onPress={() => navigation.navigate(service.screen)}
            >
              <Text style={styles.serviceText}>{service.name}</Text>
              <Image source={service.image} style={styles.serviceImage} resizeMode='contain' />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity>
          <Image source={banner} style={styles.bannerImage} resizeMode='cover' />
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
  serviceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  serviceItem: {
    width: 160,
    height: 140,
    margin: 8,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  serviceText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  serviceImage: {
    width: 100,
    height: 80,
    marginTop: 8,
  },
  bannerImage: {
    width: '100%',
    height: 160,
    borderRadius: 12,
    marginTop: 16,
  },
});
