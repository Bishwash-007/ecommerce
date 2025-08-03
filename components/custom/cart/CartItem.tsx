import { View, Text, TouchableOpacity, Image } from "react-native";
import { Icon } from "@/components/ui/icon";
import { Minus, Plus } from "lucide-react-native";
import { Checkbox } from "@/components/ui/checkbox";

type CartItemProps = {
  id: string;
  title: string;
  price: number;
  sizeVariant: string;
  colorVariant: string;
  quantity: number;
  imageUri: any;
};

const CartItem = ({
  title,
  price,
  sizeVariant,
  colorVariant,
  quantity,
  imageUri,
}: CartItemProps) => {
  return (
    <View className="flex flex-row items-center justify-between w-full mb-4 p-4 rounded-xl bg-white dark:bg-neutral-900 shadow-sm shadow-slate-200">
      {/* Image */}
      <Image
        source={imageUri}
        className="w-20 h-20 rounded-md"
        resizeMode="cover"
      />

      {/* Product Info */}
      <View className="flex flex-col justify-between flex-1 px-4">
        {/* Title */}
        <Text className="text-lg font-medium text-primary">{title}</Text>

        {/* Price */}
        <View className="flex flex-row gap-2 items-center mt-1">
          <Text className="text-sm text-primary-400">Price:</Text>
          <Text className="text-sm font-semibold text-primary">${price}</Text>
        </View>

        {/* Variants */}
        <Text className="text-sm text-primary-400 mt-1">
          Size: <Text className="text-primary">{sizeVariant}</Text> | Color:{" "}
          <Text className="text-primary">{colorVariant}</Text>
        </Text>
      </View>

      {/* Controls */}
      <View className="flex flex-col items-center justify-center">
        <Checkbox value="" className="text-primary" />

        <View className="flex flex-row items-center gap-2 border-hairline p-1 rounded-lg">
          <TouchableOpacity>
            <Icon as={Minus} size="xs" className="text-primary" />
          </TouchableOpacity>
          <Text className="text-sm text-primary">{quantity}</Text>
          <TouchableOpacity>
            <Icon as={Plus} size="xs" className="text-primary" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
