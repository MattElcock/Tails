import useMe from "@/api/users/useMe";
import { PageLayout } from "@/layouts/PageLayout";
import { Redirect } from "expo-router";
import { Text, View } from "react-native";

const App = () => {
  const { isLoading, data: me } = useMe();

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  if (!me) {
    return <Text>Error</Text>;
  }

  if (!me.seenAppPurposeDisclaimer) {
    return <Redirect href="/(app)/welcome" />;
  }

  return (
    <PageLayout
      title={
        <View>
          <Text className="text-3xl text-accent font-medium">Wooof!</Text>
          {me.firstName && (
            <Text className="text-4xl font-medium">
              Good morning, {me.firstName}!
            </Text>
          )}
        </View>
      }
    >
      <Text className="text-3xl font-medium">Your pets</Text>
      <Text>// TODO</Text>
    </PageLayout>
  );
};

export default App;
