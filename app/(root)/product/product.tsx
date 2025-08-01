import React, { useMemo } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Icon } from "@/components/ui/icon";
import { ArrowLeft, Handbag, Heart, Star } from "lucide-react-native";
import products from "@/data";
import DetailsSection from "@/components/custom/Product/Details";

const Product = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  console.log(id);

  const product = useMemo(() => {
    return products.find((product) => product.id === id);
  }, [id]);

  //   if (!product) {
  //     return (
  //       <View className="flex-1 items-center justify-center">
  //         <Text className="text-lg font-bold">Product not found 😢</Text>
  //       </View>
  //     );
  //   }
  console.log(product?.averageRating);

  return (
    <View className="relative flex-1 h-full bg-white dark:bg-black">
      <View className="flex flex-row justify-between items-center p-8 absolute bottom-0 w-full bg-white dark:bg-black self-end">
        <View className="flex flex-row items-center gap-2">
          <Icon as={Handbag} size="xl" className="text-primary-400" />
          <Text className="text-primary-400 text-lg font-bold">
            Add to Cart
          </Text>
        </View>
        <View className="flex flex-row items-center gap-2">
          <Icon />
          <Text className="text-primary-400 text-lg font-bold">Buy</Text>
        </View>
      </View>

      <FlatList
        data={[]}
        renderItem={null}
        keyExtractor={(item, index) => index.toString()}
        className="bg-white dark:bg-black"
        ListHeaderComponent={<DetailsSection {...product} />}
      />
    </View>
  );
};

export default Product;
