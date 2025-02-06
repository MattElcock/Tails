import { useRouter } from "expo-router";
import { ReactNode } from "react";
import { Text, View } from "react-native";

interface AuthProps {
  children: ReactNode;
}

const Auth = ({ children }: AuthProps) => {
  const router = useRouter();

  if (true) {
    router.push("/login");
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  } else {
    return children;
  }
};

export { Auth };
