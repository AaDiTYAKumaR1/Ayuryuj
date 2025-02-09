import { View, Text,Image, StyleSheet, FlatList, Pressable } from 'react-native';
import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
const orders = [
  { id: '1', name: 'Paracetamol', status: 'Delivered', date: 'Feb 6, 2025' },
  { id: '2', name: 'Cough Syrup', status: 'Shipped', date: 'Feb 7, 2025' },
  { id: '3', name: 'Aspirin', status: 'Processing', date: 'Feb 8, 2025' },
];

export default function MyOrderScreen() {
  return (
     <ParallaxScrollView
          headerBackgroundColor={{ light: '#E3F2FD', dark: '#1E2A38' }}
          headerImage={
           <Image source={ require("../../assets/images/medicineimg.jpeg")} className='w-full h-full' />
          }>
    <ThemedView style={styles.container}>
      
      <View style={styles.header}>
        <IconSymbol size={40} color="#4CAF50" name="cart" />
        <ThemedText type="title">My Orders</ThemedText>
      </View>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderCard}>
            <ThemedText type="defaultSemiBold">{item.name}</ThemedText>
            <Text style={styles.orderStatus}>{item.status}</Text>
            <Text style={styles.orderDate}>{item.date}</Text>
          </View>
        )}
      />

      <Collapsible title="Track Order">
        <ThemedText>
          You can track your orders and get real-time updates.
        </ThemedText>
        <Pressable style={styles.button}>
          <ThemedText type="buttonText">Track Orders</ThemedText>
        </Pressable>
      </Collapsible>

    </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex:1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 16,
  },
  orderCard: {
    backgroundColor: '#E8F5E9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  orderStatus: {
    fontSize: 14,
    color: '#388E3C',
  },
  orderDate: {
    fontSize: 12,
    color: '#757575',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
});
