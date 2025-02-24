import createScreenOptions from "@/utils/createScreenOptions";
import { Stack } from "expo-router";

export default function Layout() {
  const screenOptions = createScreenOptions({
    backConfig: { href: "/(app)/profile", text: "profile" },
    showProfileButton: false,
  });

  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
