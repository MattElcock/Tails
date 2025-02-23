import useUpdateMe from "@/api/users/updateMe";
import useMe from "@/api/users/useMe";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { PageLayout } from "@/layouts/PageLayout";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Text, ToastAndroid, View } from "react-native";

interface FormFields {
  lastName: string;
}

const ChangeLastName = () => {
  const { isLoading, data: me, isRefetching } = useMe();
  const { mutate } = useUpdateMe();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ defaultValues: { lastName: me?.lastName } });

  if (isLoading || isRefetching) {
    return <Text>Loading</Text>;
  }

  if (!me) {
    return <Text>Error</Text>;
  }

  const onSubmit = (data: FormFields) => {
    mutate(
      {
        lastName: data.lastName,
      },
      {
        onSuccess: () => {
          ToastAndroid.showWithGravity(
            `Your last name has been changed to ${data.lastName}`,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM
          );
          router.push("/(app)/profile");
        },
        onError: (error) => {
          console.error(error);
        },
      }
    );
  };

  return (
    <PageLayout title="Change last name">
      <View className="gap-5">
        <Controller
          control={control}
          rules={{
            required: "Required",
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Last name"
              type="text"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.lastName?.message}
            />
          )}
          name="lastName"
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

export default ChangeLastName;
