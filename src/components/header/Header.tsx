import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import CartHover from "./CartHover";
import Popover, { PopoverMode } from "react-native-popover-view";

function Header() {
  const cartProduct = useSelector((state: any) => state.cart.cart);

  return (
    <View className="flex flex-row justify-between items-center p-5 bg-white">
      <View>
        <Text className="text-2xl font-bold">E-commerce</Text>
      </View>
      <View className="flex flex-row">
        {/* <TouchableOpacity onPress={() => {}}>
            <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity> */}
        <Popover
          from={
            <TouchableOpacity className="relative">
              {cartProduct.length > 0 ? (
                <View className="absolute z-10 -top-2 -right-2 bg-red-500 w-5 h-5 rounded-full flex items-center justify-center">
                  <Text className="text-white text-xs">
                    {cartProduct.length}
                  </Text>
                </View>
              ) : null}

              <FontAwesome name="shopping-cart" size={24} color="black" />
            </TouchableOpacity>
          }
        >
          <CartHover />
        </Popover>
      </View>
    </View>
  );
}

export default Header;
