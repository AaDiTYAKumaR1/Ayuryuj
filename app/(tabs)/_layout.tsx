import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from 'react-native';

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
        tabBarActiveTintColor: 'black',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute', // Makes the bar float
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
        name="explore"
        options={{
          title: 'Lab Test',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="flask" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Consult"
        options={{
          title: 'Consult',
          tabBarIcon: ({ color }) => (
              <Ionicons size={28} name="heart-circle-sharp" color="red" 
                />
            )
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
          title: 'My Order',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="bag" color={color} />,
        }}
      />
      
    </Tabs>
  );
}
