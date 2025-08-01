import React from "react";
import { View, Text, Image } from "react-native";
import RenderStars from "./RenderStars";

type Review = {
  user: string;
  comment: string;
  rating: number;
  date?: string;
  avatarUri?: string;
};

type ReviewCardProps = {
  review: Review;
};

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <>
      <View className="flex flex-row items-center justify-between mt-6">
        <View className="flex flex-row items-start justify-between self-start">
          <Image
            source={{
              uri:
                review.avatarUri ??
                "https://www.thesun.co.uk/wp-content/uploads/2022/10/NINTCHDBPICT000623572784-e1713253255748.jpg?strip=all&w=960",
            }}
            className="size-12 object-contain rounded-full"
          />
          <View className="flex-col items-start justify-center ml-2 gap-1">
            <Text className="text-md text-primary">{review.user}</Text>
            <RenderStars averageRating={review.rating} />
          </View>
        </View>
        <Text className="text-xs text-primary-400">
          {review.date ?? "Some time ago"}
        </Text>
      </View>

      <Text className="text-sm font-light text-primary-400 mt-4 ml-1">
        {review.comment}
      </Text>
    </>
  );
};

export default ReviewCard;
