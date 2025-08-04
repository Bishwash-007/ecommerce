import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import InputField from "@/components/custom/InputField";
import {
  Radio,
  RadioGroup,
  RadioIndicator,
  RadioIcon,
} from "@/components/ui/radio";
import { CircleIcon } from "lucide-react-native";
import { Divider } from "@/components/ui/divider";
import { Button } from "@/components/ui/button";

const Shipping = ({ onComplete }: { onComplete: () => void }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [deliveryOption, setDeliveryOption] = useState("standard");
  const deliveryOptions = [
    { value: "free", label: "Free Delivery (5–7 business days)" },
    { value: "standard", label: "$5.00 Standard Delivery (3–5 business days)" },
    { value: "express", label: "$9.99 Express Delivery (1–2 business days)" },
  ];

  const isFormValid = firstname && lastname && address && city && zipcode;

  return (
    <ScrollView
      className="flex-1 pb-16 bg-background"
      showsVerticalScrollIndicator={false}
    >
      {/* Shipping Info */}
      <View className="pb-8">
        <Text className="text-xl font-semibold text-primary-400 mb-4">
          {"Shipping Details"}
        </Text>
        <View className="gap-y-4">
          <InputField
            placeholder="First Name"
            value={firstname}
            onChangeText={setFirstname}
          />
          <InputField
            placeholder="Last Name"
            value={lastname}
            onChangeText={setLastname}
          />
          <InputField
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
          />
          <InputField placeholder="City" value={city} onChangeText={setCity} />
          <InputField
            placeholder="Zip Code"
            value={zipcode}
            onChangeText={setZipcode}
          />
        </View>
      </View>

      {/* Delivery Options */}
      <View className="mb-10">
        <Text className="text-xl font-semibold text-primary-400 mb-4">
          {"Delivery Options"}
        </Text>
        <RadioGroup
          value={deliveryOption}
          onChange={setDeliveryOption}
          className="space-y-6"
        >
          {/* Free Delivery */}

          {deliveryOptions.map(({ value, label }) => (
            <View key={value} className="flex-col items-start gap-4">
              <Radio value={value.toString()}>
                <RadioIndicator className="items-center justify-center">
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <View className="pl-3">
                  <Text className="text-base font-medium text-primary-400">
                    {label.split(" (")[0]}
                  </Text>
                  <Text className="text-sm text-primary-300">
                    {label.split(" (")[1].replace(")", "")}
                  </Text>
                </View>
              </Radio>
              <Divider className="my-2" />
            </View>
          ))}
        </RadioGroup>
      </View>

      {/* Coupon Code */}
      <View className="mb-10">
        <Text className="text-xl font-semibold text-primary-400 mb-4">
          Coupon Code
        </Text>
        <View className="flex-row gap-3 items-center justify-between">
          <InputField
            placeholder="Enter Coupon"
            value={couponCode}
            onChangeText={setCouponCode}
            className="w-3/4"
          />
          <Button
            size="sm"
            variant="outline"
            action="primary"
            className="rounded-full h-10 px-4 self-end"
          >
            <Text className="text-primary-400 text-base font-medium">
              Apply
            </Text>
          </Button>
        </View>
      </View>

      {/* Continue Button */}
      <Button
        className="rounded-3xl h-14 mt-4"
        onPress={() => {
          if (isFormValid) {
            onComplete();
          } else {
            alert("Please fill out all shipping fields");
          }
        }}
      >
        <Text className="text-base font-semibold text-white">
          Proceed to Payment
        </Text>
      </Button>
    </ScrollView>
  );
};

export default Shipping;
