import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@/components/ui/icon";
import { ChevronLeft, DotIcon } from "lucide-react-native";
import { useRouter } from "expo-router";
import { Button } from "@/components/ui/button";

const trackingData = [
  { status: "Parcel is Delivered Successfully", date: "2025/04/06" },
  { status: "Parcel is in Transit", date: "2025/04/05" },
  { status: "Parcel is Out for Delivery", date: "2025/04/04" },
  { status: "Parcel is Picked Up", date: "2025/04/03" },
];

const TrackOrder = () => {
  const router = useRouter();

  const Header = () => (
    <View className="flex-row items-center justify-between mb-6">
      <TouchableOpacity onPress={() => router.back()}>
        <Icon as={ChevronLeft} className="text-primary" />
      </TouchableOpacity>
      <Text className="text-xl font-semibold text-primary">Track Order</Text>
      <View className="w-6" />
    </View>
  );

  const TrackingInfo = () => (
    <View className="mb-6 space-y-2">
      <Text className="text-muted-foreground">
        Delivered on:{" "}
        <Text className="text-foreground font-semibold">2025/04/06</Text>
      </Text>
      <Text className="text-muted-foreground">
        Tracking Number:{" "}
        <Text className="text-foreground font-semibold">TRK123456789</Text>
      </Text>
    </View>
  );

  const TrackingStep = ({
    status,
    date,
    isLast,
  }: {
    status: string;
    date: string;
    isLast: boolean;
  }) => (
    <View className="flex-row items-start gap-4 mb-6">
      <View className="items-center">
        <View className="rounded-full border border-gray-300 dark:border-gray-600 p-1 mb-1">
          <Icon as={DotIcon} className="text-primary-400 h-6 w-6" />
        </View>
        {!isLast && <View className="h-12 w-px bg-gray-300 dark:bg-gray-600" />}
      </View>
      <View className="flex-1">
        <Text className="font-medium text-foreground">{status}</Text>
        <Text className="text-muted-foreground text-sm">{date}</Text>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-white dark:bg-black pt-16 px-6">
      <Header />
      <TrackingInfo />
      <View className="mt-4">
        {trackingData.map((item, index) => (
          <TrackingStep
            key={index}
            status={item.status}
            date={item.date}
            isLast={index === trackingData.length - 1}
          />
        ))}
      </View>

      <View>
        <Button
          variant="link"
          className="rounded-full items-center h-14 mt-6"
          onPress={() => router.push("/order/rateOrder")}
        >
          <Text className="font-semibold underline text-primary-400 text-xl">
            {"Don't forget to Rate Us"}
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default TrackOrder;
