import React from "react";
import { View, Text, FlatList, ListRenderItemInfo } from "react-native";
import ProductCard from "@/components/custom/ProductCard";

type Product = {
  id: string;
  title: string;
  price: string | number;
  imageUri: any;
};

type ProductListSectionProps = {
  title: string;
  products: Product[];
  horizontal?: boolean;
};

const ProductListSection: React.FC<ProductListSectionProps> = ({
  title,
  products,
  horizontal = false,
}) => {
  return (
    <View className="my-6">
      <View
        className={`flex-row items-center justify-between ${
          horizontal ? "my-6" : ""
        } px-4`}
      >
        <Text className="text-xl font-bold">{title}</Text>
        <Text className="text-primary-200 text-base font-semibold">
          View All
        </Text>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        renderItem={({ item }: ListRenderItemInfo<Product>) =>
          horizontal ? (
            <View className="ml-4">
              <ProductCard {...item} />
            </View>
          ) : (
            <View className="mt-4 px-4">
              <ProductCard {...item} horizontal />
            </View>
          )
        }
        contentContainerStyle={
          horizontal
            ? {
                paddingRight: 16,
              }
            : {
                gap: 16,
                marginTop: 16,
              }
        }
      />
    </View>
  );
};

export default ProductListSection;
