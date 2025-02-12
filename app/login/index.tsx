import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { WelcomeMessage } from "@/components/WelcomeMessage";
import { PageLayout } from "@/layouts/PageLayout";
import auth from "@react-native-firebase/auth";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Text, ToastAndroid, View } from "react-native";

interface FormFields {
  emailAddress: string;
  password: string;
}

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { emailAddress: "", password: "" },
  });
  const router = useRouter();

  const onSubmit = (data: FormFields) => {
    auth()
      .signInWithEmailAndPassword(data.emailAddress, data.password)
      .then(() => {
        router.push("/(app)/welcome");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          ToastAndroid.showWithGravity(
            "Incorrect email address or password",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM
          );
        } else {
          console.error(error);
        }
      });
  };

  const handleResetPasswordPress = () => {
    router.push("/login/resetPassword");
  };

  return (
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
            errorMessage={errors.emailAddress?.message as string}
          />
        )}
        name="emailAddress"
      />
      <Controller
        control={control}
        rules={{
          required: "Required",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            action={
              <Button
                variant="ghost"
                colorScheme="primary"
                size="small"
                className="self-end px-0"
                onPress={handleResetPasswordPress}
              >
                Forgot password?
              </Button>
            }
            label="Pasword"
            type="password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            errorMessage={errors.password?.message?.toString()}
          />
        )}
        name="password"
      />
      <Button
        variant="solid"
        colorScheme="primary"
        size="medium"
        onPress={handleSubmit(onSubmit)}
        className="mt-5"
      >
        Log in
      </Button>
    </View>
  );
};

const CreateAccount = () => {
  const router = useRouter();

  const handleCreateAccountPress = () => {
    router.push("/login/createAccount");
  };

  return (
    <Button
      variant="outline"
      colorScheme="primary"
      size="medium"
      onPress={handleCreateAccountPress}
    >
      Create an account
    </Button>
  );
};

const LoginPage = () => {
  return (
    <PageLayout className="gap-8 pt-10">
      <WelcomeMessage />
      <View className="gap-3">
        <Login />
        <View className="flex-row items-center gap-3">
          <View className="border-b-[1px] border-black flex-1" />
          <Text className="text-lg">Or</Text>
          <View className="border-b-[1px] border-black flex-1" />
        </View>
        <CreateAccount />
      </View>
    </PageLayout>
  );
};

export default LoginPage;
