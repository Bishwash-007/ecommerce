import { useMemo } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Icon } from "@/components/ui/icon";
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Heart,
  Pencil,
} from "lucide-react-native";
import { Product, products } from "@/data";

import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionContentText,
  AccordionIcon,
  AccordionContent,
} from "@/components/ui/accordion";
import { Divider } from "@/components/ui/divider";
import RenderStars from "@/components/custom/Product/RenderStars";
import ReviewBreakdown from "@/components/custom/Product/ReviewPercent";
import ReviewCard from "@/components/custom/Product/UserReviews";
import ProductCard from "@/components/custom/ProductCard";

const ProductDetails = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  console.log(id);

  const product = useMemo<Product | undefined>(() => {
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
      {/* <View className="flex flex-row justify-between items-center p-8 absolute bottom-0 w-full bg-white dark:bg-black self-end">
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
      </View> */}

      <FlatList
        data={[]}
        renderItem={null}
        keyExtractor={(item, index) => index.toString()}
        className="bg-white dark:bg-black"
        ListHeaderComponent={
          <>
            <View className="flex-1 h-full bg-white dark:bg-black">
              <View className="relative h-full w-full flex-1 bg-rose-50">
                <TouchableOpacity
                  onPress={router.back}
                  className="absolute left-8 top-16 z-10 bg-white rounded-full p-3"
                >
                  <Icon as={ArrowLeft} size="xl" className="text-primary" />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {}}
                  className="absolute right-8 top-16 z-10 bg-white rounded-full p-3"
                >
                  <Icon as={Heart} size="xl" className="text-primary" />
                </TouchableOpacity>

                <Image
                  source={product?.imageUri}
                  className="w-screen rounded-xl mt-6 flex-1"
                  resizeMode="contain"
                />
              </View>

              <View className="px-8">
                <View className="flex-row items-center justify-between my-6">
                  <View className="flex flex-col">
                    <Text className="text-2xl font text-primary">
                      {product?.title}
                    </Text>
                    <View className="flex flex-row items-center gap-2 mt-2">
                      <RenderStars
                        averageRating={Number(product?.averageRating)}
                      />
                      <Text className="text-xs font-light text-primary-400">
                        {"(" + product?.reviews.length.toString() + ")"}
                      </Text>
                    </View>
                  </View>
                  <Text className="text-3xl text-primary font-light">
                    {"$ " + product?.price}
                  </Text>
                </View>

                <View className="flex-col items-start gap-2">
                  <Text className="text-md font text-primary-400 mb-2">
                    Size
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
              </View>

              <Accordion
                variant="unfilled"
                type="multiple"
                defaultValue={["item-2", "item-3"]}
                className="w-[90%] m-5 bg-white dark:bg-black gap-2"
              >
                {/* Description */}
                <AccordionItem value="item-1" className="rounded-lg">
                  <AccordionHeader>
                    <AccordionTrigger>
                      {({ isExpanded }: { isExpanded: boolean }) => (
                        <>
                          <AccordionTitleText className="font-medium text-xl text-primary">
                            Description
                          </AccordionTitleText>
                          <AccordionIcon
                            as={isExpanded ? ChevronUp : ChevronDown}
                          />
                        </>
                      )}
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    <AccordionContentText>
                      {product?.description}
                    </AccordionContentText>
                  </AccordionContent>
                </AccordionItem>

                <Divider />

                {/* Reviews */}
                <AccordionItem value="item-2" className="rounded-lg">
                  <AccordionHeader>
                    <AccordionTrigger>
                      {({ isExpanded }: { isExpanded: boolean }) => (
                        <>
                          <AccordionTitleText className="font-medium text-xl text-primary">
                            Reviews
                          </AccordionTitleText>
                          <AccordionIcon
                            as={isExpanded ? ChevronUp : ChevronDown}
                          />
                        </>
                      )}
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    <View>
                      <View className="flex flex-row items-end justify-between">
                        <View className="items-baseline flex flex-row justify-center gap-1">
                          <Text className="text-3xl text-primary font-bold">
                            {product?.averageRating}
                          </Text>
                          <Text className="text-xs text-primary-400 uppercase">
                            Out of 5
                          </Text>
                        </View>
                        <View className="flex flex-col gap-1 items-end mt-2">
                          <RenderStars
                            averageRating={Number(product?.averageRating)}
                          />
                          <Text className="text-xs text-primary-400">
                            {product?.reviews.length} reviews
                          </Text>
                        </View>
                      </View>

                      <ReviewBreakdown
                        data={[
                          { rating: 5, percentage: 80 },
                          { rating: 4, percentage: 60 },
                          { rating: 3, percentage: 40 },
                          { rating: 2, percentage: 20 },
                          { rating: 1, percentage: 10 },
                        ]}
                      />

                      <View className="flex flex-row items-center justify-between mt-6">
                        <Text className="text-xs font-light text-primary uppercase">
                          {product?.reviews.length + " reviews"}
                        </Text>
                        <View className="flex flex-row items-center gap-2">
                          <Text className="text-primary-400 uppercase text-xs">
                            Write a review
                          </Text>
                          <Icon
                            as={Pencil}
                            size="xs"
                            className="text-primary-400"
                          />
                        </View>
                      </View>

                      <ReviewCard
                        review={{
                          user: "Henry Cavil",
                          comment:
                            "Love the fit and quality — totally worth it!",
                          rating: 5,
                          date: "5 months ago",
                        }}
                      />
                      <ReviewCard
                        review={{
                          user: "Aayush M.",
                          comment:
                            "Love the fit and quality — totally worth it!",
                          rating: 5,
                          date: "5 months ago",
                        }}
                      />
                    </View>
                  </AccordionContent>
                </AccordionItem>

                <Divider />

                {/* Similar Products */}
                <AccordionItem value="item-3" className="rounded-lg">
                  <AccordionHeader>
                    <AccordionTrigger>
                      {({ isExpanded }: { isExpanded: boolean }) => (
                        <>
                          <AccordionTitleText className="font-medium text-xl text-primary">
                            Similar Products
                          </AccordionTitleText>
                          <AccordionIcon
                            as={isExpanded ? ChevronUp : ChevronDown}
                          />
                        </>
                      )}
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    <FlatList
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={{ paddingHorizontal: 8, gap: 20 }}
                      data={products}
                      keyExtractor={(item) => item.id}
                      horizontal
                      renderItem={({ item }) => <ProductCard {...item} />}
                      className="space-x-6"
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </View>
          </>
        }
      />
    </View>
  );
};

export default ProductDetails;
