import { BackButton } from "@/components/BackButton";
import { ProfileButton } from "@/components/ProfileButton";
import { ACCENT_COLOUR } from "@/constants";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Href } from "expo-router";
import React from "react";

interface BackConfig {
  href: Href;
  text: string;
}

interface CreateScreenOptions {
  backConfig?: BackConfig;
  showProfileButton?: boolean;
  showHeader?: boolean;
}

const createScreenOptions = ({
  backConfig,
  showProfileButton = true,
  showHeader = true,
}: CreateScreenOptions): NativeStackNavigationOptions => ({
  title: "",
  headerStyle: { backgroundColor: ACCENT_COLOUR },
  statusBarBackgroundColor: ACCENT_COLOUR,
  statusBarStyle: "dark",
  headerShown: showHeader,
  headerLeft: () =>
    backConfig ? (
      <BackButton href={backConfig.href} text={backConfig.text} />
    ) : (
      <React.Fragment />
    ),
  headerRight: () =>
    showProfileButton ? <ProfileButton /> : <React.Fragment />,
});

export default createScreenOptions;
