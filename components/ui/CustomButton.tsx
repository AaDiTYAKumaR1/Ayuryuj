import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({ title, onPress, bgColor, textColor }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: bgColor,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
      }}
    >
      <Text style={{ color: textColor, fontSize: 16, fontWeight: "bold" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
