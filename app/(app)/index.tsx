import { PageLayout } from "@/layouts/PageLayout";
import { Text, View } from "react-native";

const App = () => {
  return (
    <PageLayout
      title={
        <View>
          <Text className="text-3xl text-accent font-medium">Wooof!</Text>
          <Text className="text-4xl font-medium">Good morning, Matt!</Text>
        </View>
      }
    >
      <Text className="text-3xl font-medium">Your pets</Text>
      <Text>// TODO</Text>
    </PageLayout>
  );
};

export default App;
