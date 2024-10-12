import React from "react";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { product } from "../../../types";
import { FontAwesome } from "@expo/vector-icons";

interface ProductCardProps {
  readonly item: product;
}

function ProductCard({ item }: ProductCardProps) {
  return (
    <View className="relative  border border-gray-200 p-2 m-2 rounded-lg w-[120px] h-[200px]">
      <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
      <Text style={{ fontWeight: "bold" }}>{item.title.substring(0, 30)}</Text>
      <View className="flex flex-row items-center justify-between absolute w-full bottom-2 right-2">
        <Text className="text-sm font-bold ">{item.price}$</Text>
        <TouchableOpacity onPress={() => {}}>
          <FontAwesome name="cart-plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ProductCard;
