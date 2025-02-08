import { Button } from "@/components/Button";
import { WelcomeMessage } from "@/components/WelcomeMessage";
import { PageLayout } from "@/layouts/PageLayout";
import { useRouter } from "expo-router";
import { View } from "react-native";

const LoginPage = () => {
  const router = useRouter();

  const handleCreateAccountPress = () => {
    router.push("/login/createAccount");
  };

  return (
    <PageLayout className="pt-[10rem]">
      <WelcomeMessage />
      <View className="mt-20 gap-3">
        <Button variant="solid" colorScheme="primary" size="large">
          Log In
        </Button>
        <Button
          variant="ghost"
          colorScheme="primary"
          size="medium"
          onPress={handleCreateAccountPress}
        >
          Create an Account
        </Button>
      </View>
    </PageLayout>
  );
};

export default LoginPage;
