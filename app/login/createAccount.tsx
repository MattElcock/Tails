import { PageLayout } from "@/layouts/PageLayout";
import { Text } from "react-native";

const CreateAccount = () => {
  return (
    <PageLayout backLink={{ href: "/login", text: "Login" }}>
      <Text className="text-4xl font-medium">Create an Account</Text>
    </PageLayout>
  );
};

export default CreateAccount;
