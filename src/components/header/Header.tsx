import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

function Header() {
  return (
    <View className="flex flex-row justify-between items-center p-5 bg-white">
      <View>
        <Text className="text-2xl font-bold">E-commerce</Text>
      </View>
      <View className="flex flex-row">
        {/* <TouchableOpacity onPress={() => {}}>
            <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => {}}>
          <FontAwesome name="shopping-cart" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;
