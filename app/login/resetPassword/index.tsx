import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { PageLayout } from "@/layouts/PageLayout";
import auth from "@react-native-firebase/auth";
import { Dot } from "lucide-react-native";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FlatList, Text, View } from "react-native";

interface FormFields {
  emailAddress: string;
}

const ResetPassword = () => {
  const [emailSent, setEmailSent] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { emailAddress: "" },
  });

  const emailAddress = watch("emailAddress");

  const handleSendEmailTap = (data: FormFields) => {
    auth()
      .sendPasswordResetEmail(data.emailAddress)
      .then(() => {
        setEmailSent(true);
      });
  };

  const handleTryAgainPress = () => {
    setEmailSent(false);
  };

  return (
    <PageLayout title="Reset password">
      <View className="gap-5">
        <View className="gap-3">
          <Text className="text-xl text-accent font-semibold">
            It's OK - we've all been there.
          </Text>
          {!emailSent ? (
            <Text className="text-lg">
              Please tell us your email address and we will send you
              instructions on how to reset your password.
            </Text>
          ) : (
            <>
              <Text className="text-lg">
                We have sent an email to{" "}
                <Text className="font-medium">{emailAddress}</Text> with
                instructions on how to reset your password.
              </Text>
              <Text className="text-lg font-medium">Can't find it?</Text>
              <FlatList
                data={[
                  "Please allow some time for it to arrive.",
                  "Check your junk or spam folder.",
                ]}
                renderItem={({ item }) => (
                  <View className="flex-row items-center gap-2 pb-2">
                    <Dot />
                    <Text className="text-lg ">{item}</Text>
                  </View>
                )}
              />
              <Button
                variant="outline"
                colorScheme="primary"
                size="small"
                onPress={handleTryAgainPress}
              >
                Try again with a new email address
              </Button>
            </>
          )}
        </View>
        {!emailSent && (
          <View className="gap-5">
            <Controller
              control={control}
              rules={{
                required: "Required",
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label="Email address"
                  type="email"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.emailAddress?.message}
                />
              )}
              name="emailAddress"
            />
            <Button
              variant="solid"
              colorScheme="primary"
              size="medium"
              onPress={handleSubmit(handleSendEmailTap)}
            >
              Send reset password email
            </Button>
          </View>
        )}
      </View>
    </PageLayout>
  );
};

export default ResetPassword;
