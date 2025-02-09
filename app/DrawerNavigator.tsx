import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './(tabs)/index'; // Adjust according to your structure


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        {/* <Drawer.Screen name="ConsultDoctor" component={ConsultDoctorScreen} />
        <Drawer.Screen name="BookTests" component={BookTestsScreen} />
        <Drawer.Screen name="OtherOptions" component={OtherOptionsScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
