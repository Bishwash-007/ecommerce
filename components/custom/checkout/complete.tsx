import { Button, ButtonText } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { useRouter } from "expo-router";
import { CheckCircle } from "lucide-react-native";
import { View, Text } from "react-native";

const Complete = () => {
  const router = useRouter();

  return (
    <View className="h-full pt-48 pb-10 flex-1 bg-white dark:bg-black justify-between self-center items-center">
      <View className="self-center items-center justify-center">
        <Icon as={CheckCircle} size="xl" className="text-green-600 mb-4" />
        <Text className="text-2xl font-bold text-primary-400 mb-2">
          Order Confirmed!
        </Text>
        <Text className="text-center text-base font-light text-primary-300 px-2">
          Thank you for shopping with us.{"\n"}
          You can track your order status in{" "}
          <Text
            className="text-primary-500 underline"
            onPress={() => router.push("/")}
          >
            My Orders
          </Text>
          .
        </Text>
      </View>

      <Button
        className="rounded-3xl h-14 mt-12"
        onPress={() => router.push("/")}
      >
        <ButtonText className="text-base font-semibold">
          Continue Shopping
        </ButtonText>
      </Button>
    </View>
  );
};

export default Complete;
