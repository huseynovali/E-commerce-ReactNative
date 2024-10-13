import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  ProductAddCart,
  ProductRemoveCard,
} from "../../redux/slices/cartSlice";
import { useNavigation } from "@react-navigation/native";

function CartHover() {
  const cartProduct = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View className=" bg-white p-2">
      {cartProduct.length > 0 ? (
        cartProduct.map((item: any) => (
          <View className="flex flex-row  items-center p-2" key={item.id}>
            <View className="w-12 h-12 bg-gray-200 rounded-full">
              <Image
                source={{ uri: item.image }}
                className="w-full h-full rounded-full object-cover"
              />
            </View>

            <View className="flex flex-col ml-2 w-[200px]">
              <Text>{item.title.substring(0, 20)}</Text>
              <View className="flex flex-row items-center justify-between mt-1">
                <Text>{item.price}$</Text>
                <View className="flex flex-row items-center border border-gray-100 ml-3">
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(ProductRemoveCard(item));
                    }}
                    className="bg-gray-400 w-[30px]"
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        paddingHorizontal: 12,
                        color: "white",
                      }}
                    >
                      -
                    </Text>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 18, paddingHorizontal: 10 }}>
                    {item.quantity}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(ProductAddCart(item));
                    }}
                    className="bg-gray-500"
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        paddingHorizontal: 10,
                        color: "white",
                      }}
                    >
                      +
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))
      ) : (
        <Text className="text-center">Cart is Empty</Text>
      )}
      {cartProduct.length > 0 && (
        <View className="mt-2 flex flex-row w-full justify-between px-3">
          <TouchableOpacity
            onPress={() => {}}
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
