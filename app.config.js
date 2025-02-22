module.exports = {
  expo: {
    name: "Tails",
    slug: "Tails",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/rat.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        backgroundColor: "#ffffff",
      },
      package: "com.k9morphed.Tails",
      googleServicesFile:
        process.env.GOOGLE_SERVICES_JSON || "./google-services.json",
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/rat.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/rat.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
      "@react-native-firebase/app",
      "@react-native-firebase/auth",
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "370b0406-971b-4f5d-8f77-75ba39b48b10",
      },
    },
    owner: "k9morphed",
  },
};
