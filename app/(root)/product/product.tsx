import React, { useMemo } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Icon } from "@/components/ui/icon";
import { ArrowLeft, Heart, Save, Star } from "lucide-react-native";
import products from "@/data";
import ReviewSection from "@/components/custom/Product/Reviews";

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
    <FlatList
      data={[]}
      renderItem={null}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={
        <>
          <View className="relative h-full w-full align-bottom flex-1 bg-rose-50">
            <TouchableOpacity
              onPress={() => router.back()}
              className="mb-2 absolute left-8 top-16 z-10 bg-white rounded-full p-3"
            >
              <Icon as={ArrowLeft} size="xl" className="text-primary " />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.back()}
              className="mb-2 absolute right-8 top-16 z-10 bg-white rounded-full p-3"
            >
              <Icon as={Heart} size="xl" className="text-primary " />
            </TouchableOpacity>
            <Image
              source={product?.imageUri}
              className="w-screen rounded-xl mb-4 mt-6 flex-1"
              resizeMode="contain"
            />
          </View>

          {/* product detatils  */}
          <>
            <View className="flex-row items-start justify-between mb-4 px-4">
              <View className="gap-1">
                <Text className="text-xl font-semibold text-primary">
                  {product?.title}
                </Text>

                {product?.averageRating && (
                  <View className="flex-row items-center gap-1">
                    <Icon as={Star} size="sm" className="text-red-400" />
                    <Text className="text-sm text-primary-500 dark:text-neutral-400">
                      {product.averageRating.toFixed(1)}
                    </Text>
                  </View>
                )}
              </View>

              <Text className="text-lg font-bold text-primary-400">
                ${product?.price}
              </Text>
            </View>

            <View className="flex-row items-center justify-between px-4 mb-4">
              <Text className="text-sm text-gray-500 dark:text-neutral-400">
                {product?.category}
              </Text>

              <View className="flex-row gap-2">
                {product?.sizeVariants.map((size) => (
                  <View
                    key={size}
                    className="items-center justify-center bg-rose-50 rounded-full size-10"
                  >
                    <Text className="text-sm font-medium text-primary">
                      {size}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </>

          <ReviewSection />
        </>
      }
    />
  );
};

export default Product;
