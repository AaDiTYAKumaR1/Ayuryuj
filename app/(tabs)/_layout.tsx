import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2196BD',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Labtest"
        options={{
          title: 'Lab Test',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="flask" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Consult"
        options={{
          title: 'Consult',
          tabBarIcon: ({ focused }) => {
            return (
              
            <View style ={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 50,
              height: 50,
              borderRadius: 25,
              top: -10,
              backgroundColor: "#FD7B5A",
              
            }}>

              <FontAwesome name="heartbeat" size={24} color="#fff" />
            </View>
            )}
          }}
          />
      <Tabs.Screen
        name="Medicine"
        options={{
          title: 'Medicine',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="medkit" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Myorder"
        options={{
          title: 'User',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="bag" color={color} />,
        }}
      />
      
    </Tabs>
  );
}
