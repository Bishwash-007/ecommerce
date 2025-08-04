import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@/components/ui/icon";
import { BellIcon, Menu } from "lucide-react-native";

const Header = ({ title }: { title: string }) => {
  return (
    <View className="flex-row justify-between items-center">
      <TouchableOpacity>
        <Icon as={Menu} className="text-primary" size="xl" />
      </TouchableOpacity>
      <Text className="text-2xl font-medium text-primary uppercase">
        {title}
      </Text>
      <TouchableOpacity>
        <Icon as={BellIcon} className="text-primary" size="xl" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
