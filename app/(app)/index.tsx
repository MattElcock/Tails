import useUser from "@/api/users/useUser";
import { PageLayout } from "@/layouts/PageLayout";
import { Text, View } from "react-native";

const App = () => {
  const { isLoading, data: user } = useUser();

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  if (!user) {
    return <Text>Error</Text>;
  }

  return (
    <PageLayout
      title={
        <View>
          <Text className="text-3xl text-accent font-medium">Wooof!</Text>
          <Text className="text-4xl font-medium">
            Good morning, {user.firstName}!
          </Text>
        </View>
      }
    >
      <Text className="text-3xl font-medium">Your pets</Text>
      <Text>// TODO</Text>
    </PageLayout>
  );
};

export default App;
