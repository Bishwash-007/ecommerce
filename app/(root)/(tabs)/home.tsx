import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { Icon } from "@/components/ui/icon";
import IconRow from "@/components/custom/home/IconRow";
import CollectionCarousel from "@/components/custom/home/CollectionCarousel";
import Header from "@/components/custom/home/Header";
import CollectionCard from "@/components/custom/home/CollectionCard";
import ProductCard from "@/components/custom/ProductCard";
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
      className="h-full pt-16 px-8 bg-white dark:bg-black"
      data={[]}
      renderItem={null}
      contentContainerStyle={{
        marginBottom: 20,
      }}
      ListHeaderComponent={() => (
        <>
          <Header />
          <IconRow className="mt-8" />
          <CollectionCarousel />
          <ProductListSection
            title="Featured Items"
            products={products}
            horizontal
          />
          <CollectionCard
            title="New Arrivals"
            subtitle="Collection"
            image={products[0].imageUri}
            variant="bottomRight"
          />

          <ProductListSection title="Top Picks" products={products} />
          <CollectionCard
            title="Best Sellers"
            subtitle="Collection"
            variant="verticalRight"
            image={products[2].imageUri}
          />
        </>
      )}
    />
  );
};

export default HomeScreen;
