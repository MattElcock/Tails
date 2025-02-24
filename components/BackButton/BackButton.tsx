import { Href, useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

interface BackButtonProps {
  href: Href;
  text: string;
}

const BackButton = ({ href, text }: BackButtonProps) => {
  const router = useRouter();

  const handleChevronPress = () => {
    router.push(href);
  };
  return (
    <Pressable onPressOut={handleChevronPress}>
      <View className="flex-row items-center gap-1 py-2">
        <ChevronLeft />
        <Text className="text-lg">Back to {text}</Text>
      </View>
    </Pressable>
  );
};

export { BackButton };
