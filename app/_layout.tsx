import { Stack } from "expo-router";
import "../global.css";
import { Auth } from "@/components/Auth";

export default function RootLayout() {
  return (
    <Auth>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
      </Stack>
    </Auth>
  );
}
