import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@/components/ui/icon";
import {
  ChevronLeft,
  CircleDashed,
  Ban,
  CheckCircle,
} from "lucide-react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Button } from "@/components/ui/button";

type StatusType = "pending" | "delivered" | "cancelled";

const statusMap: Record<
  StatusType,
  {
    message: string;
    icon: any;
  }
> = {
  pending: {
    message: "Your order is being processed. Hang tight!",
    icon: CircleDashed,
  },
  delivered: {
    message: "Hooray! Your package has arrived.",
    icon: CheckCircle,
  },
  cancelled: {
    message: "This order was cancelled.",
    icon: Ban,
  },
};

const OrderDetails = () => {
  const { id, status } = useLocalSearchParams<{
    id: string;
    status: StatusType;
  }>();
  const router = useRouter();

  const Header = () => (
    <View className="flex-row items-center justify-between">
      <TouchableOpacity onPress={() => router.back()}>
        <Icon as={ChevronLeft} className="text-primary" />
      </TouchableOpacity>
      <Text className="text-xl font-semibold text-primary-400">
        {"Order #" + id}
      </Text>
      <View className="w-8" />
    </View>
  );

  const StatusCard = ({
    status,
    message,
    icon,
  }: {
    status: StatusType;
    message: string;
    icon: any;
  }) => (
    <View className="dark:bg-white bg-neutral-800 p-4 rounded-2xl shadow-sm my-8 flex-row items-center justify-between">
      <View className="flex flex-col items-start justify-end">
        <Text className="text-lg font-semibold text-gray-50 dark:text-primary-600">
          {"Order Status: " + status.charAt(0).toUpperCase() + status.slice(1)}
        </Text>
        <Text className="text-base text-gray-50 dark:text-gray-400 mt-2 max-w-[85%]">
          {message}
        </Text>
      </View>
      <Icon
        as={icon}
        className="dark:text-primary-600 text-gray-50 h-12 w-12"
      />
    </View>
  );

  const currentStatus = (status || "pending") as StatusType;

  return (
    <View className="flex-1 bg-white dark:bg-black px-8 pt-16">
      <Header />

      <StatusCard
        status={currentStatus}
        message={statusMap[currentStatus].message}
        icon={statusMap[currentStatus].icon}
      />

      <View className="mt-6">
        <View className="flex-row items-center justify-between my-3">
          <Text className="text-base font-light">Order Number</Text>
          <Text className="text-sm font-medium">#{id}</Text>
        </View>
        <View className="flex-row items-center justify-between my-3">
          <Text className="text-base font-light">Tracking Number</Text>
          <Text className="text-sm font-medium">TRK123456789</Text>
        </View>
        <View className="flex-row items-center justify-between my-3">
          <Text className="text-base font-light">Delivery Address</Text>
          <Text className="text-sm font-medium text-right">
            123 Main Street, NY
          </Text>
        </View>
      </View>

      <View className="mt-8">
        {/* Example product row */}
        <View className="flex-row items-center justify-between my-4">
          <Text className="text-base font-light">Air Max Sneakers</Text>
          <Text>{"x2"}</Text>
          <Text className="text-sm font-medium">$240.00</Text>
        </View>

        <View className="flex-row items-center justify-between my-4">
          <Text className="text-base font-light">Subtotal</Text>
          <Text className="text-sm font-medium">$240.00</Text>
        </View>
        <View className="flex-row items-center justify-between my-4">
          <Text className="text-base font-light">Shipping</Text>
          <Text className="text-sm font-medium">$0.00</Text>
        </View>
      </View>

      <View className="flex flex-row items-center justify-center my-8 gap-2">
        <Button
          variant="outline"
          className="w-[50%] h-14 rounded-2xl"
          onPress={() => router.push("/(root)/(tabs)/home")}
        >
          <Text className="text-base font-semibold">Return Home</Text>
        </Button>
        <Button
          variant="outline"
          className="w-[50%] h-14 rounded-2xl"
          onPress={() => router.push("/order/rateOrder")}
        >
          <Text className="text-base font-semibold">Rate</Text>
        </Button>
      </View>
    </View>
  );
};

export default OrderDetails;
