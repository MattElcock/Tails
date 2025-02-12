import useCheckSession from "@/api/authentication/useCheckSession";
import auth from "@react-native-firebase/auth";
import { Redirect, Stack } from "expo-router";
import { Text } from "react-native";

export default function AppLayout() {
  const user = auth().currentUser;
  const { data: isSessionValid, isLoading } = useCheckSession(user);

  if (!user) {
    return <Redirect href="/login" />;
  }
  if (isLoading) {
    return <Text>Loading</Text>;
  }

  if (!isSessionValid) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="welcome" />
    </Stack>
  );
}
