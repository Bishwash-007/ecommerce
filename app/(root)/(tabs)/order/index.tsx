import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React, { useState } from "react";
import Header from "@/components/custom/home/Header";
import { Icon } from "@/components/ui/icon";
import { ChevronRight } from "lucide-react-native";
import { useRouter } from "expo-router";
import { Button } from "@/components/ui/button";
import { mockOrders } from "@/data";

const OrderScreen = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<
    "pending" | "delivered" | "cancelled"
  >("pending");

  const TabBar = () => {
    const tabs: { key: typeof activeTab }[] = [
      { key: "pending" },
      { key: "delivered" },
      { key: "cancelled" },
    ];

    return (
      <View className="flex-row items-center justify-between bg-white dark:bg-neutral-900 p-2 rounded-xl mb-6 mt-6">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <TouchableOpacity
              key={tab.key}
              onPress={() => setActiveTab(tab.key)}
              className={`flex-1 py-3 rounded-3xl items-center ${
                isActive ? "bg-primary-600 dark:bg-primary-900" : ""
              }`}
              activeOpacity={0.8}
            >
              <Text
                className={`text-base ${
                  isActive
                    ? "text-white font-bold"
                    : "text-primary-300 font-medium"
                }`}
              >
                {tab.key.charAt(0).toUpperCase() + tab.key.slice(1)}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  const OrderCard = ({
    id,
    title,
    imageUri,
    trackingNumber,
    onPress,
    status,
    subtotal,
    datePlaced,
    quantity,
  }: {
    id: string;
    title: string;
    imageUri: any;
    trackingNumber?: string;
    onPress?: () => void;
    status: "pending" | "delivered" | "cancelled";
    subtotal: number;
    datePlaced: string;
    quantity: number;
  }) => {
    const statusColorMap = {
      pending: "text-yellow-500",
      delivered: "text-green-500",
      cancelled: "text-red-500",
    };

    const statusTextMap = {
      pending: "Pending",
      delivered: "Delivered",
      cancelled: "Cancelled",
    };

    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.9}
        className="bg-white dark:bg-neutral-800 p-4 rounded-2xl mb-4 shadow-sm w-full"
      >
        <View className="w-full gap-y-4">
          {/* Order ID and Date */}
          <View className="flex-row items-center justify-between">
            <Text className="text-base font-semibold text-primary-600">
              Order #{id}
            </Text>
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              {datePlaced}
            </Text>
          </View>

          {/* Tracking Number */}
          <View className="flex-row justify-between">
            <Text className="text-base text-primary-400 font-medium">
              Tracking No: {trackingNumber}
            </Text>
          </View>

          {/* Quantity & Subtotal */}
          <View className="flex-row items-center justify-between">
            <Text className="text-base text-primary-400 font-medium">
              Quantity: {quantity}
            </Text>
            <Text className="text-base font-semibold text-primary-500">
              Subtotal: ${subtotal.toFixed(2)}
            </Text>
          </View>

          {/* Status and Button */}
          <View className="flex-row items-center justify-between">
            <Text className={`text-base font-medium ${statusColorMap[status]}`}>
              {statusTextMap[status]}
            </Text>

            <Button
              variant="outline"
              size="sm"
              className={`rounded-full px-4 py-1 border ${statusColorMap[status]}`}
              onPress={onPress}
            >
              <Text className={`text-sm font-medium`}>Details</Text>
              <Icon
                as={ChevronRight}
                size="xs"
                className={`text-primary-500`}
              />
            </Button>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View className="flex-1 bg-white dark:bg-black px-8 pt-12">
      <Header title="Order" />
      <TabBar />
      <View className="flex-1">
        <FlatList
          data={mockOrders.filter((order) => order.status === activeTab)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <OrderCard
              {...item}
              onPress={() =>
                router.push({
                  pathname: "/order/orderDetails",
                  params: { id: item.id },
                })
              }
            />
          )}
          contentContainerStyle={{ paddingBottom: 40 }}
          ListEmptyComponent={
            <View className="items-center justify-center mt-10">
              <Text className="text-lg text-gray-400">No orders found.</Text>
            </View>
          }
        />
      </View>
    </View>
  );
};

export default OrderScreen;
