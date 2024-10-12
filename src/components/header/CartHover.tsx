import React from "react";
import { Image, Text, View } from "react-native";
import { useSelector } from "react-redux";

function CartHover() {
  const cartProduct = useSelector((state: any) => state.cart.cart);
  return (
    <View className="w-[300px] h-[300px] bg-white p-2">
      {cartProduct.map((item: any) => (
        <View className="flex flex-row  items-center p-2" key={item.id}>
          <View className="w-12 h-12 bg-gray-200 rounded-full">
            <Image
              source={{ uri: item.image }}
              className="w-full h-full rounded-full object-cover"
            />
          </View>

          <View className="flex flex-col ml-2">
            <Text>{item.title.substring(0, 20)}</Text>
            <Text>{item.quantity}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

export default CartHover;
