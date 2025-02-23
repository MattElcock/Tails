import useMe from "@/api/users/useMe";
import { ListPets } from "@/containers/ListPets";
import { Loading } from "@/containers/Loading";
import { PageLayout } from "@/layouts/PageLayout";
import { Redirect } from "expo-router";
import { Text } from "react-native";

const App = () => {
  const { isLoading, data: me, isRefetching } = useMe();

  if (isLoading || isRefetching) {
    return <Loading />;
  }

  if (!me) {
    return <Text>Error</Text>;
  }

  if (!me.seenAppPurposeDisclaimer) {
    return <Redirect href="/(app)/welcome" />;
  }

  return (
    <PageLayout>
      <ListPets />
    </PageLayout>
  );
};

export default App;
