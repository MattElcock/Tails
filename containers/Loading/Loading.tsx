import { ACCENT_COLOUR } from "@/constants";
import { PageLayout } from "@/layouts/PageLayout";
import { ActivityIndicator, View } from "react-native";

const Loading = () => {
  return (
    <PageLayout scrollContainer={false}>
      <View className="flex-1 justify-center">
        <ActivityIndicator size={100} color={ACCENT_COLOUR} />
      </View>
    </PageLayout>
  );
};

export { Loading };
