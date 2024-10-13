import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const CustomHeader = ({ title, navigation }) => {
  return (
    <View className="w-[60%] border-b border-[#e8e7e7] flex flex-row py-5 px-2 mt-3 items-center justify-between">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text className="text-[18px] text-blue-400">{"<"} Back</Text>
      </TouchableOpacity>
      <Text className="text-center text-[20px] font-bold">{title}</Text>
    </View>
  );
};

export default CustomHeader;
