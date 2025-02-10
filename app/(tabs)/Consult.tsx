import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import logo from "../../assets/images/logo1.png";

const doctors = [
  {
    id: "1",
    name: "Dr. Rohit Sharma",
    specialty: "Cardiologist",
    epx: 5,
    qualification: "MBBS, MD",
    about: "Dr. Rohit Sharma is a highly experienced cardiologist...",
    image: require("../../assets/images/doctor1.jpg"),
  },
  {
    id: "2",
    name: "Dr. Rahul Verma",
    specialty: "Dentist",
    epx: 12,
    qualification: "BDS, MDS",
    about: "Dr. Rahul Verma specializes in dental surgeries...",
    image: require("../../assets/images/Doctor2.jpg"),
  },
  {
    id: "3",
    name: "Dr. Subhash Gupta",
    specialty: "Dentist",
    epx: 8,
    qualification: "BDS, MDS",
    about: "Dr. Subhash Gupta specializes in dental surgeries...",
    image: require("../../assets/images/Doctor3.jpg"),
  },
];

export default function Consult() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("experience");

  const filteredDoctors = doctors
    .filter((doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => (sortOption === "experience" ? b.epx - a.epx : 0));

  return (
    <View className="flex-1 bg-gray-100 p-2">
      <SafeAreaView>
        <Text className="text-2xl font-bold text-center text-gray-800 mb-4">
          Consult a Doctor
        </Text>
        
        {/* Search Bar */}
        <TextInput
          className="bg-white p-3 rounded-xl shadow-md mb-4"
          placeholder="Search by name or specialty"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        <FlatList
          data={filteredDoctors}
          keyExtractor={(item) => item.id}
          initialNumToRender={4}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="mb-3"
              onPress={() => {
                navigation.navigate("DoctorDetails", { doctor: item });
              }}
            >
              <View className="flex-row bg-white p-4 rounded-xl shadow-md">
                <View>
                  <Image
                    source={item.image}
                    className="w-32 mb-2 rounded-lg h-40 mr-4"
                    style={{ overflow: "hidden" }}
                  />
                  <Button title={` ${item.epx} years exp`} color="#4CAF50" />
                </View>
                <View className="flex w-full bg-red-50 p-4">
                  <View className="flex flex-row w-full gap-6 items-center">
                    <Image source={logo} className="w-12 h-12" />
                    <Text className="font-bold text-gray-800">Auryuj Healthcare</Text>
                  </View>
                  <Text className="text-lg font-semibold text-gray-900 mt-2">{item.name}</Text>
                  <Text className="text-gray-600">{item.specialty}</Text>
                  <Text className="text-gray-700">Qualification: {item.qualification}</Text>
                </View>
                <View className="flex mt-2 space-y-2">
                  <Button color="#f2a2c3" title="Know More" onPress={() => navigation.navigate("DoctorDetails", { doctor: item })} />
                  <Button color="#323232" title="Consult" />
                </View>
              </View>
            </TouchableOpacity>
          )}
        />

        {/* Sort Option */}
        <View className="flex flex-row justify-between p-4">
          <Text className="text-gray-700">Sort by: </Text>
          <Button
            title="Experience"
            color={sortOption === "experience" ? "#4CAF50" : "#888"}
            onPress={() => setSortOption("experience")}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
