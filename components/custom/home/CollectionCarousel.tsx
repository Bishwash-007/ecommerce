import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import Carousel, { Pagination } from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

type CollectionItem = {
  id: string;
  image: any;
  title: string;
  subtitle: string;
  year: string;
};

const collections: CollectionItem[] = [
  {
    id: "1",
    image: require("@/assets/images/ui/carousel.png"),
    title: "Autumn",
    subtitle: "Collection",
    year: "2024",
  },
  {
    id: "2",
    image: require("@/assets/images/ui/carousel.png"),
    title: "Winter",
    subtitle: "Drop",
    year: "2025",
  },
  {
    id: "3",
    image: require("@/assets/images/ui/carousel.png"),
    title: "Spring",
    subtitle: "Looks",
    year: "2025",
  },
];

const CollectionCarousel: React.FC = () => {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View id="carousel-component" className="items-center mt-8">
      <Carousel
        ref={ref}
        data={collections}
        loop
        width={width * 0.9}
        height={220}
        autoPlayInterval={3000}
        pagingEnabled
        snapEnabled
        onProgressChange={progress}
        mode="horizontal-stack"
        modeConfig={{
          snapDirection: "left",
          stackInterval: 18,
        }}
        customConfig={() => ({ type: "positive", viewCount: 4 })}
        style={{
          width: width,
          alignItems: "center",
          justifyContent: "center",
        }}
        renderItem={({ item }) => (
          <View key={item.id} className="w-full relative">
            <Image
              source={item.image}
              resizeMode="cover"
              className="w-full h-full rounded-xl"
            />
            <View className="absolute right-4 bottom-4">
              <Text className="text-white font-semibold text-xl">
                {item.title}
              </Text>
              <Text className="text-white text-base font-semibold">
                {item.subtitle}
              </Text>
              <Text className="text-white text-xl">{item.year}</Text>
            </View>
          </View>
        )}
      />
      <View className="mt-4">
        <Pagination.Basic
          progress={progress}
          data={collections}
          dotStyle={{
            width: 16,
            height: 4,
            backgroundColor: "#262626",
            borderRadius: 4,
          }}
          activeDotStyle={{
            backgroundColor: "#f1f1f1",
          }}
          containerStyle={{
            gap: 10,
          }}
          horizontal
          onPress={onPressPagination}
        />
      </View>
    </View>
  );
};

export default CollectionCarousel;
