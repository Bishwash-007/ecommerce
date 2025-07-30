import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Icon } from "@/components/ui/icon";
import { BellIcon, Menu } from "lucide-react-native";

const HomeScreen = () => {
  return (
    <ScrollView className="flex-1 pt-16 px-8 bg-white dark:bg-black">
      <View className="flex-row justify-between items-center">
        <TouchableOpacity>
          <Icon as={Menu} className="text-primary" size="xl" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold text-primary">GemStore</Text>
        <TouchableOpacity>
          <Icon as={BellIcon} className="text-primary" size="xl" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
