import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { product } from "../../../types";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { ProductAddCart } from "../../redux/slices/cartSlice";

interface ProductCardProps {
  readonly item: product;
}

function ProductCard({ item }: ProductCardProps) {
  const dispatch = useDispatch();
  const addProductToCart = () => {
    dispatch(ProductAddCart(item));
  };
  return (
    <View className="relative  border border-gray-200 p-2 m-2 rounded-lg w-[120px] h-[200px]">
      <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
      <Text style={{ fontWeight: "bold" }}>{item.title.substring(0, 30)}</Text>
      <View className="flex flex-row items-center justify-between absolute w-full bottom-2 right-2">
        <Text className="text-sm font-bold ">{item.price}$</Text>
        <TouchableOpacity onPress={addProductToCart}>
          <FontAwesome name="cart-plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ProductCard;
