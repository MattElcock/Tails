import useMe from "@/api/users/useMe";
import { Button } from "@/components/Button";
import auth from "@react-native-firebase/auth";
import { LabelledValue } from "@/components/LabelledValue";
import { PageLayout } from "@/layouts/PageLayout";
import { LogOut } from "lucide-react-native";
import { ReactNode, useReducer } from "react";
import { Text, ToastAndroid, View } from "react-native";
import { useRouter } from "expo-router";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <View className="gap-3">
      <Text className="text-2xl">{title}</Text>
      <View className="gap-1">{children}</View>
    </View>
  );
};

const Profile = () => {
  const { isLoading, data: me, isRefetching } = useMe();
  const router = useRouter();

  if (isLoading || isRefetching) {
    return <Text>Loading</Text>;
  }

  if (!me) {
    return <Text>Error</Text>;
  }

  const dateFormatter = new Intl.DateTimeFormat("en", {
    dateStyle: "long",
  });

  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => {
        router.push("/login");
        ToastAndroid.showWithGravity(
          "See you soon!",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM
        );
      });
  };

  return (
    <PageLayout title="Your profile">
      <View className="gap-5">
        <Section title="About you">
          <LabelledValue
            label="First name"
            value={me.firstName}
            onPress={() => 0}
          />
          <LabelledValue
            label="Last name"
            value={me.lastName}
            onPress={() => 0}
          />
        </Section>
        <Section title="Securtity">
          <LabelledValue label="Email address" value={me.emailAddress} />
          <LabelledValue label="Password" value="●●●" onPress={() => 0} />
          <LabelledValue
            label="When you saw the app purpose disclaimer"
            value={
              me.seenAppPurposeDisclaimer
                ? dateFormatter.format(new Date(me.seenAppPurposeDisclaimer))
                : "-"
            }
          />
        </Section>
        <View className="mt-10">
          <Button
            variant="outline"
            colorScheme="primary"
            size="small"
            startIcon={<LogOut />}
            onPress={handleSignOut}
          >
            Sign out
          </Button>
        </View>
      </View>
    </PageLayout>
  );
};

export default Profile;
