import { View, Text } from "react-native";
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

const Shipping = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [deliveryOption, setDeliveryOption] = useState("standard");

  return (
    <View>
      <View className="flex-col mb-8 gap-4">
        <Text className="text-xl font-medium text-primary-400">
          Shipping Details
        </Text>
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

      {/* Payment Method */}
      <View className="mb-8">
        <Text className="text-xl font-medium text-primary-400 mb-4">
          Payment Method
        </Text>
        <RadioGroup
          value={deliveryOption}
          onChange={setDeliveryOption}
          className="flex-col gap-4"
        >
          {/* Option 1 */}
          <Radio value="free" size="md">
            <RadioIndicator className="flex items-center justify-center">
              <RadioIcon />
            </RadioIndicator>
            <View className="flex-col px-2">
              <View className="flex-row items-center gap-2">
                <Text className="text-xl font-light text-primary-400">
                  Free
                </Text>
                <Text className="text-xl font-light text-primary-400">
                  Delivery to home
                </Text>
              </View>
              <Text className="text-sm font-light text-primary-400">
                Delivery from 5 to 7 business days
              </Text>
            </View>
          </Radio>

          <Divider className="my-4" />

          {/* Option 2 */}
          <Radio value="standard" size="md">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <View className="flex-col px-2">
              <View className="flex-row items-center gap-2">
                <Text className="text-xl font-light text-primary-400">
                  $5.00
                </Text>
                <Text className="text-xl font-light text-primary-400">
                  Delivery to home
                </Text>
              </View>
              <Text className="text-sm font-light text-primary-400">
                Delivery from 3 to 5 business days
              </Text>
            </View>
          </Radio>

          <Divider className="my-4" />

          {/* Option 3 */}
          <Radio value="express" size="md">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <View className="flex-col px-2">
              <View className="flex-row items-center gap-2">
                <Text className="text-xl font-medium text-primary-400">
                  $9.99
                </Text>
                <Text className="text-xl font-light text-primary-400">
                  Fast Delivery
                </Text>
              </View>
              <Text className="text-sm font-light text-primary-400">
                Delivery from 1 to 2 business days
              </Text>
            </View>
          </Radio>
        </RadioGroup>
      </View>

      {/* Coupon Code */}
      <View className="pb-8">
        <Text className="text-xl font-medium text-primary-400 mb-4">
          Coupon Code
        </Text>

        <View className="flex-row flex-1 items-center gap-2 justify-between w-full">
          <InputField
            placeholder="Coupon Code"
            value={couponCode}
            onChangeText={setCouponCode}
            className="w-[80%]"
          />
          <Button
            size="sm"
            variant="outline"
            action="primary"
            className="flex-shrink-0 px-4 h-10 items-start justify-around rounded-full"
          >
            <Text className="text-primary-400 mt-2 text-base">Apply</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Shipping;
