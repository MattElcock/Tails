import createScreenOptions from "@/utils/createScreenOptions";
import { Stack } from "expo-router";

export default function Layout() {
  const screenOptions = createScreenOptions({
    backConfig: { href: "/(app)", text: "home" },
    showProfileButton: false,
  });

  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen
        name="changeFirstName"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="changeLastName"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
