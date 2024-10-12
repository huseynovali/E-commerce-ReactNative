import React from 'react'
import { Image, Text, View } from 'react-native'

function ProductCard({item}: {item: {id: number, title: string, price: number, image: string}}) {
  return (
    <View className="relative  border border-gray-200 p-2 m-2 rounded-lg w-[120px] h-[200px]">
    <Image
      source={{ uri: item.image }}
      style={{ width: 100, height: 100 }}
    />
    <Text style={{ fontWeight: "bold" }}>{item.title.substring(0,30)}</Text>
    <Text className="text-sm font-bold absolute bottom-2 right-2">{item.price}$</Text>
  </View>
  )
}

export default ProductCard