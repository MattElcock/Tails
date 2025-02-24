import createScreenOptions from "@/utils/createScreenOptions";
import { Stack } from "expo-router";

export default function Layout() {
  const screenOptions = createScreenOptions({ showHeader: false });

  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen name="index" />
      <Stack.Screen name="createAccount" options={{ title: "" }} />
      <Stack.Screen name="resetPassword" options={{ title: "" }} />
    </Stack>
  );
}
