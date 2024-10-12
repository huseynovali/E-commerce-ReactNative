import React from "react";
import { Text, View } from "react-native";

function CategorySliderItem({ item }: { item: { id: number; name: string } }) {
  return (
    <View className="border  p-2 m-2 rounded-lg ">
      <Text className="text-sm">{item.name}</Text>
    </View>
  );
}

export default CategorySliderItem;
