import { View, Text, Image, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function DoctorDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const { doctor } = route.params;

  return (
    <View className="flex-1 bg-white p-4">
      <SafeAreaView>
        <Image source={doctor.image} className="w-full h-60 rounded-lg mb-4" />
        <Text className="text-3xl font-bold text-gray-800">{doctor.name}</Text>
        <Text className="text-xl text-gray-600">{doctor.specialty}</Text>
        <Text className="text-lg text-gray-700 mt-2">Experience: {doctor.epx} years</Text>
        <Text className="text-lg text-gray-700">Qualification: {doctor.qualification}</Text>
        <Text className="text-gray-800 mt-4">{doctor.about}</Text>
        
        <View className="mt-6 space-y-3">
          <Button color="#2196BD" title="Book an Appointment" />
          {/* <Button color="#323232" title="Go Back" onPress={() => navigation.goBack()} /> */}
        </View>
      </SafeAreaView>
    </View>
  );
}
