import React from "react";
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { BlurView } from "expo-blur";

type Variant =
  | "bottomLeft"
  | "centered"
  | "bottomRight"
  | "verticalLeft"
  | "verticalRight";

type CollectionCardProps = {
  image: ImageSourcePropType;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  variant?: Variant;
};

const CollectionCard: React.FC<CollectionCardProps> = ({
  image,
  title,
  subtitle,
  onPress,
  variant = "bottomLeft",
}) => {
  const screenWidth = Dimensions.get("window").width;

  const textPositionStyle = {
    bottomLeft: "items-start justify-end",
    centered: "items-center justify-center",
    bottomRight: "items-end justify-end",
    verticalLeft: "items-start justify-center rotate-90",
    verticalRight: "items-end justify-center",
  }[variant];

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={{ width: screenWidth }}
      className="my-4 overflow-hidden -mx-8 flex-row"
    >
      {/* Image Left */}
      <Image source={image} className="h-48 w-1/2" resizeMode="contain" />

      {/* Text Right with blur */}
      <BlurView
        intensity={40}
        tint="dark"
        className={`w-1/2 h-48 px-4 py-3 ${textPositionStyle} rounded-r-2xl`}
      >
        <View className="space-y-1">
          <Text className="text-white text-xl font-bold">{title}</Text>
          {subtitle && (
            <Text className="text-white/80 text-sm font-medium">
              {subtitle}
            </Text>
          )}
        </View>
      </BlurView>
    </TouchableOpacity>
  );
};

export default CollectionCard;
