import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { Icon } from "@/components/ui/icon";
import { Banknote, CreditCard, Ellipsis, Check } from "lucide-react-native";
import PaymentCard from "@/components/custom/PaymentCard";
import { Button, ButtonText } from "@/components/ui/button";

const paymentOptions = [
  { icon: Banknote, label: "Cash" },
  { icon: CreditCard, label: "Card" },
  { icon: Ellipsis, label: "Other" },
];

const walletOptions = [
  require("@/assets/images/ui/applepay.png"),
  require("@/assets/images/ui/mastercard.png"),
  require("@/assets/images/ui/paypal.png"),
  require("@/assets/images/ui/visa.png"),
];

const Payment = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("Credit Card");
  const router = useRouter();

  return (
    <View className="flex-1 pb-40 bg-white dark:bg-black relative">
      <Text className="text-xl font-medium text-primary-400 mb-4">Payment</Text>

      {/* Payment Method Options */}
      <View className="flex-row justify-evenly mb-6">
        {paymentOptions.map(({ icon, label }) => (
          <TouchableOpacity
            key={label}
            onPress={() => setSelectedMethod(label)}
            className={`items-center justify-center flex-shrink-0 gap-2 p-3 h-24 w-24 rounded-xl ${
              selectedMethod === label ? "bg-primary-400" : ""
            }`}
          >
            <Icon
              as={icon}
              size="xl"
              className={`${
                selectedMethod === label
                  ? "text-gray-100"
                  : "text-muted-foreground"
              }`}
            />
            <Text
              className={`${
                selectedMethod === label ? "text-white" : "text"
              }`}
            >
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Payment Card Component */}
      <PaymentCard />

      {/* Alt Checkout Methods */}
      <Text className="text-center text-sm text-primary-400 mt-4 mb-2">
        Or check out with
      </Text>
      <View className="flex-row items-center justify-center gap-4">
        {walletOptions.map((img, idx) => (
          <TouchableOpacity key={idx} className="w-16 h-16">
            <Image
              className="w-full h-full"
              resizeMode="contain"
              source={img}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Order Summary Footer */}
      <View className="px-8 pb-8 pt-6 bg-white dark:bg-black rounded-t-2xl border-slate-100/20 border-t-2">
        <View className="gap-2">
          <View className="flex-row justify-between">
            <Text className="font-light text-sm">Product Price</Text>
            <Text className="font-light text-sm">$100</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="font-light text-sm">Shipping cost</Text>
            <Text className="font-light text-sm">Free</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-xl font-medium">Subtotal</Text>
            <Text className="text-lg font-medium">$100</Text>
          </View>

          {/* Terms Agreement */}
          <View className="flex-row items-center mt-4">
            <TouchableOpacity
              onPress={() => setAcceptedTerms(!acceptedTerms)}
              className="w-5 h-5 rounded-full border border-primary-400 items-center justify-center mr-2"
            >
              {acceptedTerms && (
                <Icon as={Check} size="xs" className="text-primary-500" />
              )}
            </TouchableOpacity>
            <Text className="text-sm font-light text-primary-400 flex-1">
              By placing an order, you agree to our{" "}
              <Text className="text-primary-500">Terms of Service</Text>
            </Text>
          </View>

          {/* Place Order Button */}
          <Button
            className="rounded-3xl h-14 mt-4"
            onPress={() => {
              if (acceptedTerms) {
                router.push("/");
              }
            }}
          >
            <ButtonText>Place Order</ButtonText>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Payment;
