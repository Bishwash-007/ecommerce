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
  const [shippingComplete, setShippingComplete] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

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

    const canAccessTab = (key: string) => {
      if (key === "shipping") return true;
      if (key === "payment") return shippingComplete;
      if (key === "confirmation") return shippingComplete && paymentComplete;
      return false;
    };

    return (
      <View className="flex-row items-center justify-around bg-white dark:bg-neutral-900 py-6 rounded-xl">
        {tabs.map(({ key, icon }) => {
          const isFocused = activeTab === key;
          const isEnabled = canAccessTab(key);

          return (
            <TouchableOpacity
              key={key}
              onPress={() => isEnabled && setActiveTab(key as typeof activeTab)}
              className="items-center opacity-100"
              disabled={!isEnabled}
            >
              <Icon
                as={icon}
                size="xl"
                className={`${
                  isFocused ? "text-black font-bold" : "text-primary-200"
                }
                ${!isEnabled ? "opacity-30" : ""}`}
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
      {activeTab === "shipping" && (
        <Shipping
          onComplete={() => {
            setShippingComplete(true);
            setActiveTab("payment");
          }}
        />
      )}
      {activeTab === "payment" && (
        <Payment
          onComplete={() => {
            setPaymentComplete(true);
            setActiveTab("confirmation");
          }}
        />
      )}
      {activeTab === "confirmation" && <Complete />}
    </ScrollView>
  );
};

export default CheckoutScreen;
