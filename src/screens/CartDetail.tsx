import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

import CartListItem from "../components/CartListItem";
import { product } from "../../types";

function CartDetail() {
  const cartProducts = useSelector((state: any) => state.cart.cart);

  return (
    <View>
      {cartProducts.map((product: product) => (
        <CartListItem product={product} key={product.id} />
      ))}
    </View>
  );
}

export default CartDetail;
