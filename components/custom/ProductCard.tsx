import { useRouter } from "expo-router";
import React from "react";
import {
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  View,
} from "react-native";

type ProductCardProps = {
  id: string;
  imageUri: ImageSourcePropType;
  price: string | number;
  title: string;
  horizontal?: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({
  imageUri,
  price,
  title,
  horizontal = false,
  id,
}) => {
  const router = useRouter();
  const handleOnpress = () => {
    router.push({
      pathname: "/(root)/product/product",
      params: {
        id,
      },
    });
  };
  return (
    <TouchableOpacity
      onPress={handleOnpress}
      activeOpacity={0.8}
      className={`flex ${
        horizontal ? "flex-row gap-4 mt-4" : "flex-col gap-4"
      } items-start`}
    >
      <Image
        source={imageUri}
        className={`rounded-2xl ${horizontal ? "h-24 w-24" : "h-56 w-40"}`}
        resizeMode="cover"
      />

      <View className={`${horizontal ? "justify-center ml-1" : "mt-2"} flex`}>
        <Text
          className={`text-base font-medium ${horizontal ? "" : "text-start"}`}
          numberOfLines={1}
        >
          {title || "Product Name"}
        </Text>
        <Text className="text-lg font-semibold text-gray-800">
          ${price || "0.00"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
