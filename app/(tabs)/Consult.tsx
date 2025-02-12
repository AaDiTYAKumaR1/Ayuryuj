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
import { Ionicons } from "@expo/vector-icons";

const doctors = [
  {
    id: "1",
    name: "Dr. Rohit Sharma",
    specialty: "Cardiologist",
    epx: 5,
    charge:"Rs. 300",
    qualification: "MBBS, MD",
    about: "Dr. Rohit Sharma is a highly experienced cardiologist...",
    image: require("../../assets/images/doctor1.jpg"),
  },
  {
    id: "2",
    name: "Dr. Rahul Verma",
    specialty: "Dentist",
    epx: 12,
    charge:"Rs. 475",
    qualification: "BDS, MDS",
    about: "Dr. Rahul Verma specializes in dental surgeries...",
    image: require("../../assets/images/Doctor2.jpg"),
  },
  {
    id: "3",
    name: "Dr. Subhash Gupta",
    specialty: "Dentist",
    epx: 8,
    charge:"Rs. 340",
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
    .filter(
      (doctor) =>
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

       <View className="flex flex-row justify-center items-center ">
        <Ionicons name="search" size={32} color="#2196BD"
        className="mb-4"
        />
       <TextInput
          className="bg-white p-3 rounded-xl shadow-md flex-1  mb-4"
          placeholder="Search by name or specialty"
          placeholderTextColor="#2196BD"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
       </View>

        <FlatList
          data={filteredDoctors}
          keyExtractor={(item) => item.id}
          initialNumToRender={4}
          className="mb-32"
          renderItem={({ item }) => (
            <View className="flex bg-white mb-4 shadow-md border border-gray-200">
              <View className="flex-row bg-white rounded-lg ">
                <View className="m-2">
                  <View className="border border-gray-300 mb-2 px-4 rounded-lg">
                  <Image
                    source={item.image}
                    className="w-32  rounded-lg h-40 object-cover "
                    style={{ overflow: "hidden" }}
                  />
                  </View>
                  <Button title={` ${item.epx} years exp`} color="#2196BD" />
                </View>
                <View className="flex w-full mt-2 ">
                  <View className="flex flex-row w-full gap-2 items-center">
                    <Image source={logo} className="w-12 h-12" />
                    <Text>|</Text>
                    <View className="flex justify-center items-center">
                    <Text className="font-bold text-lg text-gray-800">
                      Ayuryuj Healthcare
                    </Text>
                    <Text>Hsr Layout,Bengalure</Text>
                    </View>
                  </View>
                  <Text className="text-lg font-semibold text-gray-900 mt-2">
                    {item.name}
                  </Text>
                  <Text className="text-gray-600">{item.specialty}</Text>
                  <Text className="text-gray-700">
                    Qualification: {item.qualification}
                  </Text>
                  <View className="flex  flex-row items-center">
                    <Ionicons name="document-text-outline" size={24} color="#2196BD" />
                    <Text className="text-gray-700">English Telugu...</Text>
                  </View>
                  <View className="mt-2 ">
                    <Text className="text-lg font-bold text-gray-900 ml-4">
                      {item.charge}
                    </Text>
                  </View>
                </View>
              </View>
              <View className="flex flex-row mt-2 gap-4 space-x-2 p-2 rounded-lg justify-center">
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("DoctorDetails", { doctor: item })
                  }
                  className="flex-1  px-4 py-2 border border-[#2196BD]  rounded-md"
                >
                 <View className="flex flex-row justify-center items-center">
                 <Ionicons name="play-circle" size={24} color="#2196BD" />
                 <Text className="text-[#2196BD] text-center font-semibold">Know More</Text>
                 </View>
                </TouchableOpacity>

                <TouchableOpacity className="bg-[#FD7B5A] flex-1 px-4 py-2 rounded-md"
                onPress={() => navigation.navigate("DoctorDetails", { doctor: item })}
                >
                 <View className="flex flex-1 flex-row justify-center items-center">
                 <Text className="text-white text-center justify-center items-center font-semibold">Consult Now</Text>
                 </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />

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
