import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Ionicons } from '@expo/vector-icons';
import consultant from "../../assets/images/consultant.jpeg"
import bodycheck from "../../assets/images/bodycheck.jpeg"
import medicineimg from "../../assets/images/medicineimg.jpeg"
import skincare from "../../assets/images/skincare.jpeg"
import xray from "../../assets/images/xray.jpeg"
import labtest from "../../assets/images/labtest.jpeg"
import banner from "../../assets/images/banner.jpeg"
export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ThemedView style={styles.container} className='text-black'>
      
      <View style={styles.headerContainer} >
       <View className='flex-row text-center'>
       <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.drawerToggle}>
          <Ionicons name="menu" size={30} color="black" />
        </TouchableOpacity>
        <ThemedText style={styles.headerTitle}>Ayuryuj HealthApp</ThemedText>
       </View>
        <View className='flex-row ' >
         
        </View>
      </View>
      
      <ScrollView contentContainerStyle={styles.mainContent}>
       <View className='flex flex-row  flex-wrap'>
       <TouchableOpacity  className='w-44 rounded-lg m-2 overflow-hidden  h-32  flex bg-blue-400'>
            <Text className=' text-center'>
              online Consultations
            </Text>
            <View className='flex justify-center items-center overflow-hidden'>

            <Image source={consultant} className=' w-3/3  h-36' />
            </View>
       </TouchableOpacity>
       <TouchableOpacity  className='w-44 rounded-lg m-2 overflow-hidden  h-32  flex bg-amber-100'>
            <Text className=' text-center'>
              Full BodyCheckup
            </Text>
            <View className='flex justify-center items-center overflow-hidden'>

            <Image source={bodycheck} className=' w-2/3  h-36' />
            </View>
       </TouchableOpacity>
       <TouchableOpacity  className='w-44 rounded-lg m-2 overflow-hidden  h-32  flex bg-green-200'>
            <Text className=' text-center'>
              Order Medicine
            </Text>
            <View className='flex justify-center items-center overflow-hidden'>

            <Image source={medicineimg} className=' w-2/3  h-36' />
            </View>
       </TouchableOpacity>
       <TouchableOpacity  className='w-44 rounded-lg m-2 overflow-hidden  h-32  flex bg-pink-200'>
            <Text className=' text-center'>
              Skin care
            </Text>
            <View className='flex justify-center items-center overflow-hidden'>

            <Image source={skincare} className=' w-2/3  h-36' />
            </View>
       </TouchableOpacity>
       <TouchableOpacity  className='w-44 rounded-lg m-2 overflow-hidden  h-32  flex bg-yellow-200'>
            <Text className=' text-center'>
              X-Ray,MRI
            </Text>
            <View className='flex justify-center items-center overflow-hidden'>

            <Image source={xray} className=' w-2/3  h-36' />
            </View>
       </TouchableOpacity>
       <TouchableOpacity  className='w-44 rounded-lg m-2 overflow-hidden  h-32  flex bg-violet-400'>
            <Text className=' text-center'>
              Lab test
            </Text>
            <View className='flex justify-center items-center overflow-hidden'>

            <Image source={labtest} className=' w-2/3  h-36' />
            </View>
       </TouchableOpacity>
       </View>
       <TouchableOpacity>
        <Image source={banner} className='w-full h-36 rounded-lg'/>
       </TouchableOpacity>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between",
    // backgroundColor: '#007AFF',
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
  welcomeSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 150,
    height: 150,
  },
  welcomeText: {
    fontSize: 24,
    marginTop: 16,
    fontWeight: 'bold',
  },
  introText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
    color: '#555',
  },
  sections: {
    marginTop: 16,
  },
  sectionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    marginLeft: 12,
  },
});
