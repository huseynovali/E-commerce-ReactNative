import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { product } from "../../types";
import Categories from "../components/Categories";

function Home() {
  const [data, setData] = useState<product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View className="mt-5">
      <Categories />
      <ScrollView>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {data.map((item) => (
              <TouchableOpacity key={item.id}>
                <View className="border border-gray-200 p-2 m-2 rounded-lg w-[120px]">
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: 100, height: 100 }}
                  />
                  <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
                  <Text>{item.price}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

export default Home;
