import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import { Icon } from "@/components/ui/icon";
import {
  CheckCircle,
  ChevronLeft,
  CreditCard,
  MapPin,
} from "lucide-react-native";
import { useRouter } from "expo-router";
import Shipping from "@/components/custom/checkout/shipping";
import Payment from "@/components/custom/checkout/payment";
import Complete from "@/components/custom/checkout/complete";

const CheckoutScreen = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<
    "shipping" | "payment" | "confirmation"
  >("shipping");

  const Header = () => (
    <View className="flex-row items-center justify-between">
      <TouchableOpacity onPress={() => router.back()}>
        <Icon as={ChevronLeft} size="xl" className="text-primary" />
      </TouchableOpacity>
      <Text className="text-xl font-semibold text-primary-400">Check Out</Text>
      <View className="w-8" />
    </View>
  );
  const Tabbar = () => {
    const tabs = [
      { key: "shipping", icon: MapPin },
      { key: "payment", icon: CreditCard },
      { key: "confirmation", icon: CheckCircle },
    ];

    return (
      <View className="flex-row items-center justify-around bg-white dark:bg-neutral-900 py-6 rounded-xl">
        {tabs.map(({ key, icon }) => {
          const isFocused = activeTab === key;

          return (
            <TouchableOpacity
              key={key}
              onPress={() => setActiveTab(key as typeof activeTab)}
              className="items-center"
            >
              <Icon
                as={icon}
                size="xl"
                className={`${
                  isFocused ? "text-primary" : "text-muted-foreground"
                }`}
              />
              <View
                className={`mt-1 h-1 w-6 rounded-full ${
                  isFocused ? "bg-primary" : "bg-transparent"
                }`}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <ScrollView className="bg-white dark:bg-neutral-900 px-8 pt-12 pb-8">
      <Header />
      <Tabbar />
      {activeTab === "shipping" && <Shipping />}
      {activeTab === "payment" && <Payment />}
      {activeTab === "confirmation" && <Complete />}
    </ScrollView>
  );
};

export default CheckoutScreen;
