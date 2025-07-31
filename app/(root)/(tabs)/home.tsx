import { View, Text, FlatList } from "react-native";
import React from "react";
import IconRow from "@/components/custom/home/IconRow";
import CollectionCarousel from "@/components/custom/home/CollectionCarousel";
import Header from "@/components/custom/home/Header";
import CollectionCard from "@/components/custom/home/CollectionCard";
import ProductListSection from "@/components/custom/home/ProductListSection";

const HomeScreen = () => {
  const products = [
    {
      id: "1",
      imageUri: require("@/assets/images/ui/image1.png"),
      title: "Cool Jacket",
      price: 49.99,
    },
    {
      id: "2",
      imageUri: require("@/assets/images/ui/image2.png"),
      title: "Comfy Hoodie",
      price: 39.99,
    },
    {
      id: "3",
      imageUri: require("@/assets/images/ui/image2.png"),
      title: "Sneakers",
      price: 89.99,
    },
  ];

  return (
    <FlatList
      data={[]}
      renderItem={null}
      showsVerticalScrollIndicator={false}
      className="bg-white dark:bg-black"
      contentContainerStyle={{
        paddingTop: 48,
        paddingHorizontal: 32,
      }}
      ListHeaderComponent={() => (
        <View className="gap-8">
          <Header />
          <IconRow />
          <CollectionCarousel />

          <ProductListSection
            title="Featured Items"
            products={products}
            horizontal
          />

          <CollectionCard
            title="new collection"
            subtitle="Hang out & party"
            image={require("@/assets/images/ui/image1.png")}
          />

          <ProductListSection title="Top Picks" products={products} />

          <View className="flex-row items-center justify-between">
            <Text className="text-xl font-semibold">Top collection</Text>
            <Text className="text-primary-200 text-base font-semibold">
              View All
            </Text>
          </View>

          <View className="flex-col justify-between gap-8 mx-8">
            <CollectionCard
              title="Most Fabolous & Sexy"
              subtitle="Summer Collection 2021"
              image={require("@/assets/images/ui/image1.png")}
              reverse
            />
            <CollectionCard
              title="The office of life"
              subtitle="T-shirts"
              image={require("@/assets/images/ui/image2.png")}
            />
            <CollectionCard
              title="Just Vibes"
              subtitle="Winter Chill"
              image={require("@/assets/images/ui/image2.png")}
            />
          </View>
        </View>
      )}
    />
  );
};

export default HomeScreen;
