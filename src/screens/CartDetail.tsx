import React from 'react'
import { Image, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

function CartDetail() {
  const cartProducts = useSelector((state: any) => state.cart.cart)
  return (
    <View>
      <Text>Cart Detail</Text>
      {cartProducts.map((product: any) => (
        <View key={product.id}>
          <View >
            <Image
              style={{ width: 50, height: 50 }}
              source={{ uri: product.image }}
            />
          </View>
          <Text>{product.id}</Text>
          <Text>{product.category}</Text>
          <Text>{product.name}</Text>
          <Text>{product.price}</Text>
        </View>
      ))}
    </View>
  )
}

export default CartDetail