import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  ProductAddCart,
  ProductDeleteCard,
  ProductRemoveCard,
} from "../redux/slices/cartSlice";
import { EvilIcons } from "@expo/vector-icons";

function CartDetail() {
  const cartProducts = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();
  return (
    <View>
      {cartProducts.map((product: any) => (
        <View key={product.id} className="px-2 py-2 bg-white flex flex-row my-2 mx-2 rounded-lg">
          <View>
            <Image
              style={{ width: 50, height: 80 }}
              source={{ uri: product.image }}
            />
          </View>
          <View className="ml-2 w-[80%]">
            <Text className="text-[14px] font-bold">{product.title}</Text>
            <Text>{product.category}</Text>

            <View className="flex flex-row items-center justify-between mt-3">
              <View className="flex flex-row items-center border border-gray-100 rounded-full ">
                <TouchableOpacity
                  onPress={() => {
                    dispatch(ProductRemoveCard(product));
                  }}
                  className="rounded-full w-[30px]"
                >
                  <Text
                    style={{
                      fontSize: 20,
                      paddingHorizontal: 12,
                    }}
                  >
                    -
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 18,
                    paddingHorizontal: 10,
                    backgroundColor: "#aaa",
                    color: "white",
                  }}
                >
                  {product.quantity}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(ProductAddCart(product));
                  }}
                  className="rounded-full "
                >
                  <Text
                    style={{
                      fontSize: 20,
                      paddingHorizontal: 10,
                    }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => {
                  dispatch(ProductDeleteCard(product.id));
                }}
                className=" px-2 py-1 rounded-md"
              >
                <EvilIcons name="trash" size={24} color="gray" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

export default CartDetail;
