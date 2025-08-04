import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image as RNImage,
} from "react-native";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { ChevronLeft, Image, Star } from "lucide-react-native";
import { useRouter } from "expo-router";

const MAX_RATING = 5;

const RateOrder = () => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState<string | null>(null);

  const router = useRouter();

  const Header = () => (
    <View className="flex-row items-center justify-between mb-8">
      <TouchableOpacity onPress={() => router.back()}>
        <Icon as={ChevronLeft} className="text-primary" />
      </TouchableOpacity>
      <Text className="text-xl font-semibold text-primary-400">Rate Order</Text>
      <View className="w-6" />
    </View>
  );

  const handleRating = (selected: number) => {
    setRating(selected);
  };

  const handleImageUpload = async () => {
    // TODO: Implement image picker logic here
    console.log("Image upload triggered.");
  };

  return (
    <View className="flex-1 bg-white dark:bg-black pt-16 px-8">
      <Header />

      {/* Star Rating */}
      <View className="flex-row justify-center mb-6">
        {Array.from({ length: MAX_RATING }).map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleRating(index + 1)}
            className="mx-1"
          >
            <Icon
              as={Star}
              className={`${
                rating > index
                  ? "fill-yellow-300 text-yellow-300"
                  : "text-gray-200"
              }
                  h-12 w-12
              `}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Review Input */}
      <View className="bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-4 mb-2 h-40">
        <TextInput
          multiline
          maxLength={500}
          value={review}
          onChangeText={setReview}
          placeholder="Write your review here..."
          placeholderTextColor="#888"
          className="text-base text-black dark:text-white h-full text-start"
        />
      </View>

      <Text className="text-right text-xs text-neutral-500 mb-6">
        {review.length}/500 characters
      </Text>

      {/* Upload Image Box */}
      <TouchableOpacity
        className="w-[50%] border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-2xl h-48 items-center justify-center mb-8 self-center"
        onPress={handleImageUpload}
      >
        {image ? (
          <RNImage
            source={{ uri: image }}
            className="w-full h-full rounded-2xl"
            resizeMode="cover"
          />
        ) : (
          <>
            <Icon as={Image} className="text-neutral-400 h-12 w-12"  />
            <Text className="text-sm text-neutral-500 mt-2">Upload Image</Text>
          </>
        )}
      </TouchableOpacity>

      {/* Submit Button */}
      <Button className="w-full h-14 rounded-2xl items-center justify-center mt-auto">
        <Text className="text-base font-semibold text-white">
          Submit Review
        </Text>
      </Button>
    </View>
  );
};

export default RateOrder;
