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
import { Icon } from "@/components/ui/icon";
import products, { Product } from "@/data";
import {
  ChevronUp,
  ChevronDown,
  Pencil,
  ArrowLeft,
  Heart,
  Star,
  Handbag,
} from "lucide-react-native";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import RenderStars from "./RenderStars";
import ReviewBreakdown from "./ReviewPercent";
import ReviewCard from "./UserReviews";
import ProductCard from "../ProductCard";
import { useRouter } from "expo-router";

const DetailsSection: React.FC<Product> = ({
  description,
  reviews,
  averageRating,
  price,
  imageUri,
  title,
  category,
  sizeVariants,
}) => {
  const router = useRouter();

  return (
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
          source={imageUri}
          className="w-screen rounded-xl mt-6 flex-1"
          resizeMode="contain"
        />
      </View>

      <View className="rounded-2xl px-8">
        <View className="flex-row items-start justify-between my-6">
          <View>
            <Text className="text-xl font-semibold text-primary">{title}</Text>
            <View className="flex flex-row items-center gap-2 mt-2">
              <RenderStars averageRating={averageRating} />
              <Text className="text-xs font-light text-primary-400">
                {"(" + reviews.length.toString() + ")"}
              </Text>
            </View>
          </View>
          <Text className="text-3xl text-primary font-light">${price}</Text>
        </View>

        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-sm text-gray-500 dark:text-neutral-400">
            {category}
          </Text>
          <View className="flex-row gap-2">
            {sizeVariants.map((size) => (
              <View
                key={size}
                className="items-center justify-center bg-rose-50 rounded-full size-10"
              >
                <Text className="text-sm font-medium text-primary">{size}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <Accordion
        variant="unfilled"
        type="multiple"
        defaultValue="item-2"
        className="w-[90%] m-5 bg-white dark:bg-black gap-2"
      >
        {/* Description */}
        <AccordionItem value="item-1" className="rounded-lg">
          <AccordionHeader>
            <AccordionTrigger>
              {({ isExpanded }) => (
                <>
                  <AccordionTitleText className="font-medium text-xl text-primary">
                    Description
                  </AccordionTitleText>
                  <AccordionIcon as={isExpanded ? ChevronUp : ChevronDown} />
                </>
              )}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <AccordionContentText>{description}</AccordionContentText>
          </AccordionContent>
        </AccordionItem>

        <Divider />

        {/* Reviews */}
        <AccordionItem value="item-2" className="rounded-lg">
          <AccordionHeader>
            <AccordionTrigger>
              {({ isExpanded }) => (
                <>
                  <AccordionTitleText className="font-medium text-xl text-primary">
                    Reviews
                  </AccordionTitleText>
                  <AccordionIcon as={isExpanded ? ChevronUp : ChevronDown} />
                </>
              )}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <View>
              <View className="flex flex-row items-end justify-between">
                <View className="items-baseline flex flex-row justify-center gap-1">
                  <Text className="text-3xl text-primary font-bold">
                    {averageRating}
                  </Text>
                  <Text className="text-xs text-primary-400 uppercase">
                    Out of 5
                  </Text>
                </View>
                <View className="flex flex-col gap-1 items-end mt-2">
                  <RenderStars averageRating={averageRating} />
                  <Text className="text-xs text-primary-400">
                    {reviews.length} reviews
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
                  {reviews.length + " reviews"}
                </Text>
                <View className="flex flex-row items-center gap-2">
                  <Text className="text-primary-400 uppercase text-xs">
                    Write a review
                  </Text>
                  <Icon as={Pencil} size="xs" className="text-primary-400" />
                </View>
              </View>

              <ReviewCard
                review={{
                  user: "Henry Cavil",
                  comment: "Love the fit and quality — totally worth it!",
                  rating: 5,
                  date: "5 months ago",
                }}
              />
              <ReviewCard
                review={{
                  user: "Aayush M.",
                  comment: "Love the fit and quality — totally worth it!",
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
              {({ isExpanded }) => (
                <>
                  <AccordionTitleText className="font-medium text-xl text-primary">
                    Similar Products
                  </AccordionTitleText>
                  <AccordionIcon as={isExpanded ? ChevronUp : ChevronDown} />
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
  );
};

export default DetailsSection;
