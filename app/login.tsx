import { Button } from "@/components/Button";
import { WelcomeMessage } from "@/components/WelcomeMessage";
import { View } from "react-native";

export default function Index() {
  return (
    <View className="h-screen bg-background px-10">
      <View className="mt-[10rem]">
        <WelcomeMessage />
        <View className="mt-20 gap-3">
          <Button variant="solid" colorScheme="primary" size="large">
            Log In
          </Button>
          <Button variant="ghost" colorScheme="primary" size="medium">
            Create an Account
          </Button>
        </View>
      </View>
    </View>
  );
}
