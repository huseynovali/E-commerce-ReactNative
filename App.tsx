import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View className="bg-gray-50 h-full">
      <StatusBar style="auto" />
      <NavigationContainer>
        <View className=" bg-gray-50 h-full">
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
            })}
          >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarIcon: ({ color }) => (
                  <Entypo name="home" size={24} color={color} />
                ),
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
        </View>
      </NavigationContainer>
    </View>
  );
}
