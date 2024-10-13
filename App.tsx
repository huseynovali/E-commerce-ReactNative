import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";

import { Entypo } from "@expo/vector-icons";
import ProductDetail from "./src/screens/ProductDetail";
import CartDetail from "./src/screens/CartDetail";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import CustomHeader from "./src/components/header/CustomHeader";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigation - Product ve Cart için
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Product" component={ProductDetail} />
      <Stack.Screen
        name="Cart"
        component={CartDetail}
        options={({ navigation }) => ({
          header: () => (
            <CustomHeader title="Your Cart" navigation={navigation} />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          {/* HomeStack, tab içinde olacak */}
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
              tabBarIcon: ({ color }) => (
                <Entypo name="home" size={24} color={color} />
              ),
              tabBarLabel: "Home",
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({ color }) => (
                <Entypo name="user" size={24} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
