import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  ProductAddCart,
  ProductRemoveCard,
} from "../../redux/slices/cartSlice";
import { useNavigation } from "@react-navigation/native";
import CartListItem from "../CartListItem";
import { product } from "../../../types";

function CartHover() {
  const cartProduct = useSelector((state: any) => state.cart.cart);

  const navigation = useNavigation();

  return (
    <View className="bg-white p-2">
      {cartProduct.length > 0 ? (
        <View>
          {cartProduct.slice(0, 3).map((item: product) => (
            <CartListItem product={item} key={item.id} />
          ))}
          {cartProduct.length > 3 && (
            <View className="flex flex-row items-center justify-between mt-1">
              <Text className="text-xl font-extrabold text-center w-full my-2">
                .......
              </Text>
            </View>
          )}
        </View>
      ) : (
        <Text className="text-center">Cart is Empty</Text>
      )}
      {cartProduct.length > 0 && (
        <View className="mt-2 flex flex-row w-full justify-center gap-x-2 px-3">
          <TouchableOpacity
            onPress={() => {
              // Add logic for checkout navigation
            }}
            className="bg-blue-500 p-2 rounded-full px-5"
          >
            <Text style={{ color: "white" }}>Go To Checkout</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Cart" as never);
            }}
            className="border border-blue-500 p-2 rounded-full px-5"
          >
            <Text style={{ color: "blue" }}>View Cart</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default CartHover;
