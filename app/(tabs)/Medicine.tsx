import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function MedicineScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#E3F2FD', dark: '#1E2A38' }}
      headerImage={
        <Image source={
            require('../../assets/images/medicine2.jpeg')
        } 
        className='w-full h-full'
        />
      }>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Medicine Store</ThemedText>
      </ThemedView>

      
      <ThemedText>Find and order medicines online with doorstep delivery.</ThemedText>

      <Collapsible title="Popular Medicines">
        <ThemedText type="defaultSemiBold">💊 Paracetamol - ₹30</ThemedText>
        <ThemedText type="defaultSemiBold">💊 Ibuprofen - ₹50</ThemedText>
        <ThemedText type="defaultSemiBold">💊 Aspirin - ₹25</ThemedText>
        <ThemedText type="defaultSemiBold">💊 Cough Syrup - ₹120</ThemedText>
      </Collapsible>

      <Collapsible title="Categories">
        <ThemedText>✔️ Pain Relief</ThemedText>
        <ThemedText>✔️ Cold & Flu</ThemedText>
        <ThemedText>✔️ Diabetes Care</ThemedText>
        <ThemedText>✔️ Cardiac Medicines</ThemedText>
      </Collapsible>

      <Collapsible title="Home Delivery Available">
        <ThemedText>Order now and get medicines delivered within 24 hours.</ThemedText>
        <ExternalLink href="https://yourmedicineapp.com/order">
          <ThemedText type="link">Order Now</ThemedText>
        </ExternalLink>
      </Collapsible>

      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/medicineimg.jpeg')}
          style={styles.image}
        />
      </View>

      <Pressable style={styles.button}>
        <ThemedText type="buttonText">Buy Medicines</ThemedText>
      </Pressable>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#1976D2',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 300,
    height: 180,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#1976D2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
});
