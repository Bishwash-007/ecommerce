import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { cart } from "@/data";
import { Icon } from "@/components/ui/icon";
import { ChevronLeft, ShoppingCart } from "lucide-react-native";
import { useRouter } from "expo-router";
import { Button, ButtonText } from "@/components/ui/button";
import CartItem from "@/components/custom/cart/CartItem";

const Cart = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white dark:bg-black px-8 pt-12 relative">
      {/* FlatList with padding to avoid being hidden behind footer */}
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CartItem
            id={item.id}
            title={item.title}
            price={item.price}
            sizeVariant={item.sizeVariant || "L"}
            colorVariant={item.colorVariant || "Black"}
            quantity={item.quantity || 1}
            imageUri={item.imageUri || require("@/assets/images/ui/image1.png")}
          />
        )}
        ListEmptyComponent={
          <View className="h-full items-center justify-center flex-auto">
            <Icon as={ShoppingCart} size="xl" className="text-primary mb-4" />
            <Text className="text-lg font-medium text-primary-400">
              Oops! Nothing here yet.
            </Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 200 }} // prevents content from hiding behind footer
        ListHeaderComponent={() => (
          <View className="flex flex-row items-center justify-between w-full mb-6">
            <TouchableOpacity
              onPress={router.back}
              className="bg-slate-50 rounded-full p-2"
            >
              <Icon as={ChevronLeft} size="xl" className="text-primary" />
            </TouchableOpacity>

            <Text className="text-2xl font-medium text-primary text-center">
              Your Cart
            </Text>

            <View className="w-12" />
          </View>
        )}
      />

      {/* Sticky footer */}

      {cart.length > 0 && (
        <View className="absolute bottom-0 left-0 right-0 px-8 pb-8 pt-6 bg-white dark:bg-black rounded-t-2xl border-slate-100/20 border-t-2">
          <View className="flex flex-col gap-2">
            <View className="flex flex-row items-center justify-between">
              <Text className="text- font-light">Product Price</Text>
              <Text className="font-light text-sm">$100</Text>
            </View>

            <View className="flex flex-row items-center justify-between">
              <Text className="text font-light">Shipping cost</Text>
              <Text className="font-light text-sm">Free</Text>
            </View>

            <View className="flex flex-row items-center justify-between">
              <Text className="text-xl font-medium">Subtotal</Text>
              <Text className="font-medium text-lg">$100</Text>
            </View>

            <Button className="rounded-3xl h-14 mt-2" onPress={() => {}}>
              <ButtonText onPress={() => router.push("/(root)/checkout")}>
                Proceed to checkout
              </ButtonText>
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};

export default Cart;
