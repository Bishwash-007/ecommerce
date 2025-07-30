import React from "react";
import { Tabs } from "expo-router";
import { Icon } from "@/components/ui/icon";
import { Home, Search, ShoppingCart, User } from "lucide-react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0.5,
          borderTopColor: "#e5e5e5",
          height: 60,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconComponent;

          switch (route.name) {
            case "home":
              iconComponent = Home;
              break;
            case "search/index":
              iconComponent = Search;
              break;
            case "cart":
              iconComponent = ShoppingCart;
              break;
            case "profile":
              iconComponent = User;
              break;
            default:
              iconComponent = Home;
          }

          return (
            <Icon
              as={iconComponent}
              size="xl"
              className={focused ? "text-primary" : "text-gray-400"}
            />
          );
        },
      })}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="search/index" />
      <Tabs.Screen name="cart" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
