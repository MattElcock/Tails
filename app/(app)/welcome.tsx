import useUpdateMe from "@/api/users/updateMe";
import { Stepper } from "@/components/Stepper";
import { PageLayout } from "@/layouts/PageLayout";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const StepOne = () => {
  return (
    <View className="items-center gap-10">
      <Text className="text-3xl text-center">
        <Text className="font-medium text-accent">Thank you</Text> for choosing
        us to help manage your pets' health.
      </Text>
      <Text className="text-3xl text-center">
        Before you begin, there are a few{" "}
        <Text className="font-medium text-accent">important</Text> things we'd
        like to share.
      </Text>
    </View>
  );
};

const StepTwo = () => {
  return (
    <View className="items-center gap-10">
      <Text className="text-3xl text-center">
        This app provides tools to{" "}
        <Text className="font-medium text-accent">assist</Text> with managing
        your pets' well-being.
      </Text>
      <Text className="text-3xl text-center">
        <Text className="font-medium text-accent">It is not</Text> a substitute
        for professional veterinary care.
      </Text>
    </View>
  );
};

const StepThree = () => {
  return (
    <View className="items-center gap-10">
      <Text className="text-3xl text-center">
        If you notice any health concerns, please consult a qualified vet{" "}
        <Text className="font-medium text-accent">immediately</Text>.
      </Text>
    </View>
  );
};

const Welcome = () => {
  const router = useRouter();
  const { mutate } = useUpdateMe();

  const handleComplete = () => {
    mutate(
      { seenAppPurposeDisclaimer: new Date(Date.now()).toISOString() },
      {
        onSuccess: () => {
          router.push("/(app)");
        },
        onError: (error) => {
          console.error(error);
        },
      }
    );
  };

  return (
    <PageLayout title="An important message">
      <Stepper
        steps={[<StepOne />, <StepTwo />, <StepThree />]}
        onComplete={handleComplete}
      />
    </PageLayout>
  );
};

export default Welcome;
