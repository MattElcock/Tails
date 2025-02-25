import useUpdateMe from "@/api/users/updateMe";
import useMe from "@/api/users/useMe";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Loading } from "@/containers/Loading";
import { PageLayout } from "@/layouts/PageLayout";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Text, ToastAndroid, View } from "react-native";

interface FormFields {
  firstName: string;
}

const ChangeFirstName = () => {
  const { isLoading, data: me, isRefetching } = useMe();
  const { mutate } = useUpdateMe();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ defaultValues: { firstName: me?.firstName } });

  if (isLoading || isRefetching) {
    return <Loading />;
  }

  if (!me) {
    return <Text>Error</Text>;
  }

  const onSubmit = (data: FormFields) => {
    mutate(
      {
        firstName: data.firstName,
      },
      {
        onSuccess: () => {
          ToastAndroid.showWithGravity(
            `Your first name has been changed to ${data.firstName}`,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM
          );
          router.push("/(app)/profile");
        },
        onError: (error) => {
          ToastAndroid.showWithGravity(
            "Oops! Something went wrong. Please try again or contact us for support.",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM
          );
          console.error("Error updating first name:", error.message, error);
        },
      }
    );
  };

  return (
    <PageLayout title="Change first name">
      <View className="gap-5">
        <Controller
          control={control}
          rules={{
            required: "Required",
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="First name"
              type="text"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.firstName?.message}
            />
          )}
          name="firstName"
        />
        <Button
          variant="solid"
          colorScheme="primary"
          size="medium"
          onPress={handleSubmit(onSubmit)}
        >
          Change
        </Button>
      </View>
    </PageLayout>
  );
};

export default ChangeFirstName;
