import React from "react";
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";

type Props = {
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
  reverse?: boolean;
  onPress?: () => void;
};

export default function CollectionCard({
  title,
  subtitle,
  image,
  reverse = false,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`bg-slate-100 -mx-8 flex-row items-center justify-between px-4 py-6 overflow-hidden ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      {/* Image Side */}
      <View className="h-44 w-44 rounded-full overflow-hidden items-center">
        <Image source={image} className="h-full w-full object-center" />
      </View>

      {/* Text Side */}
      <View className="flex-1 px-4">
        <View className="flex-row items-center gap-2 mb-2">
          <View className="h-[80%] w-0.5 bg-slate-400 py-2" />
          <Text
            className="text-sm font-light text-primary-400 uppercase"
            numberOfLines={2}
          >
            {subtitle}
          </Text>
        </View>
        <Text className="text-3xl font-light uppercase" numberOfLines={3}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
