import { Stack } from "expo-router";
import "../global.css";
import { Auth } from "@/components/Auth";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Auth>
        <Stack.Screen name="index" />
        <Stack.Screen name="home" />
      </Auth>
    </Stack>
  );
}
