import React from "react";
import { View, Text } from "react-native";
import { Icon } from "@/components/ui/icon";
import { Star } from "lucide-react-native";

type ReviewStats = {
  rating: number;
  percentage: number;
}[];

type ReviewBreakdownProps = {
  data: ReviewStats;
};

const ReviewBreakdown: React.FC<ReviewBreakdownProps> = ({ data }) => {
  return (
    <View className="flex flex-col gap-2 mt-6">
      {data.map(({ rating, percentage }) => (
        <View
          key={rating}
          className="flex flex-row items-center justify-between"
        >
          <View className="flex flex-row items-center justify-between space-x-2 flex-1 gap-2">
            <>
              <Text className="text-sm font-medium">{rating}</Text>
              <Icon as={Star} size="sm" className="fill-red-400 text-red-400" />
            </>

            <View className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <View
                className="h-2 bg-red-500 rounded-full"
                style={{ width: `${percentage}%` }}
              />
            </View>

            <Text className="text-xs text-primary-400 ml-2">{`${percentage}%`}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ReviewBreakdown;
