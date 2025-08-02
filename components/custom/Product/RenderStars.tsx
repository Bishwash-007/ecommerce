import { View } from "react-native";
import { Icon } from "@/components/ui/icon";
import { Star, StarHalf } from "lucide-react-native";

const RenderStars = ({ averageRating }: { averageRating: number }) => {
  const fullStars = Math.floor(averageRating);
  const hasHalfStar = averageRating % 1 >= 0.5;

  return (
    <View className="flex-row">
      {[...Array(fullStars)].map((_, index) => (
        <Icon
          key={`star-${index}`}
          as={Star}
          size="sm"
          className="fill-red-400 text-red-400"
        />
      ))}

      {hasHalfStar && (
        <View className="relative">
          <Icon
            as={Star}
            size="sm"
            className="fill-red-100 text-red-100 z-0 absolute"
          />
          <Icon
            as={StarHalf}
            size="sm"
            className="fill-red-400 text-red-400 z-10"
          />
        </View>
      )}
    </View>
  );
};
export default RenderStars;
