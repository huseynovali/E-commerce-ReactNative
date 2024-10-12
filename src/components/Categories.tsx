import React from "react";
import { FlatList, Text, View } from "react-native";

const data = [
  {
    id: 1,
    name: "Electronics",
  },
  {
    id: 2,
    name: "Jewelery",
  },
  {
    id: 3,
    name: "men's clothing",
  },
  {
    id: 4,
    name: "women's clothing",
  },
];
function Categories() {
  return (
    <View className="flex flex-row justify-between p-5">
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View className="border border-gray-200 p-2 m-2 rounded-lg w-[120px]">
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
      />
    </View>
  );
}

export default Categories;
