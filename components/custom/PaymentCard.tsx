import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const PaymentCard = () => {
  return (
    <LinearGradient
      colors={["#57ADF4", "#09A3C5", "#998FD4"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ borderRadius: 20 }}
      className="w-full h-52 p-5 justify-between shadow-lg"
    >
      <ImageBackground
        source={require("@/assets/images/ui/Map.png")}
        className="flex-1 justify-between"
      >
        {/* Header */}
        <View className="flex-row justify-start items-center self-end">
          <Image
            source={require("@/assets/images/ui/visa.png")}
            className="w-16 h-16"
            resizeMode="contain"
          />
        </View>

        {/* Card Number */}
        <View className="items-center">
          <Text className="text-white text-xl tracking-widest font-bold">
            **** **** **** 1234
          </Text>
        </View>

        {/* Footer */}
        <View className="flex-row justify-between">
          <View>
            <Text className="text-white/70 text-xs">Card Holder</Text>
            <Text className="text-white text-sm font-medium mt-1">
              Bishwash Chaudhari
            </Text>
          </View>
          <View>
            <Text className="text-white/70 text-xs">Expires</Text>
            <Text className="text-white text-sm font-medium mt-1">12/27</Text>
          </View>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

export default PaymentCard;
