import { Button } from "@/components/Button";
import { HorizontalLine } from "@/components/HorizontalLine";
import { Input } from "@/components/Input";
import { WelcomeMessage } from "@/components/WelcomeMessage";
import { PageLayout } from "@/layouts/PageLayout";
import auth from "@react-native-firebase/auth";
import { useNavigation, useRouter } from "expo-router";
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
        router.replace("/(app)");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          ToastAndroid.showWithGravity(
            "Incorrect email address or password",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM
          );
        } else {
          ToastAndroid.showWithGravity(
            "Oops! Something went wrong. Please try again or contact us for support.",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM
          );
          console.error("Error logging in:", error.message, error);
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
            label="Password"
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
    <PageLayout>
      <View className="mt-5">
        <WelcomeMessage />
        <View className="gap-3">
          <Login />
          <View className="flex-row items-center gap-3">
            <HorizontalLine />
            <Text className="text-lg">Or</Text>
            <HorizontalLine />
          </View>
          <CreateAccount />
        </View>
      </View>
    </PageLayout>
  );
};

export default LoginPage;
