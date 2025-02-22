import useCheckSession from "@/api/authentication/useCheckSession";
import { ACCENT_COLOUR } from "@/constants";
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
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: ACCENT_COLOUR },
        statusBarBackgroundColor: ACCENT_COLOUR,
        statusBarStyle: "dark",
      }}
    >
      <Stack.Screen name="index" options={{ title: "" }} />
      <Stack.Screen name="addPet" options={{ title: "" }} />
      <Stack.Screen name="welcome" options={{ title: "" }} />
    </Stack>
  );
}
