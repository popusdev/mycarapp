import { Stack, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
      name="index"
      options={{
        title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="home" size={focused ? size + 2 : size} color={color} />
          ),
      }}></Tabs.Screen>
      <Tabs.Screen
      name="carinfo"
      options={{
        title: "Car Info",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="car" size={focused ? size + 2 : size} color={color}></Ionicons>
          )
      }}></Tabs.Screen>
      <Tabs.Screen
      name="maintenance"
      options={{
        title: "Maintenance",
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons name="settings" size={focused ? size + 2 : size} color={color}></Ionicons>
      )
      }}></Tabs.Screen>
    </Tabs>
  );
}
