import useCreateUser from "@/api/users/createUser";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { PageLayout } from "@/layouts/PageLayout";
import auth from "@react-native-firebase/auth";
import { useRouter } from "expo-router";
import { CheckCircle, Circle } from "lucide-react-native";
import { Controller, useForm } from "react-hook-form";
import { Text, View } from "react-native";

interface FormFields {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
  confirmPassword: string;
}

const passwordRules = [
  { label: "At least 8 characters", regex: /(?=.{8})/ },
  { label: "At least one lowercase letter", regex: /(?=.*[a-z])/ },
  { label: "At least one uppercase letter", regex: /(?=.*[A-Z])/ },
  { label: "At least one number", regex: /(?=.*\d)/ },
  {
    label: "At least one special character",
    regex: /(?=.*\W)/,
  },
];

interface PasswordRulesListProps {
  password: string;
}

const PasswordRulesList = ({ password }: PasswordRulesListProps) => {
  const isValid = (regex: RegExp) => regex.test(password);

  return (
    <View className="gap-2">
      <Text>Password rules</Text>
      {passwordRules.map((rule) => (
        <View key={rule.label} className="flex-row gap-3 items-center">
          {isValid(rule.regex) ? <CheckCircle color="green" /> : <Circle />}
          <Text>{rule.label}</Text>
        </View>
      ))}
    </View>
  );
};

const CreateAccount = () => {
  const router = useRouter();
  const { mutate, isPending } = useCreateUser();
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: FormFields) => {
    auth()
      .createUserWithEmailAndPassword(data.emailAddress, data.password)
      .then((user) => {
        mutate(
          {
            firestoreUid: user.user.uid,
            firstName: data.firstName,
            lastName: data.lastName,
          },
          {
            onSuccess: () => {
              router.push("/(app)");
            },
            onError: (error) => {
              console.error(error);
            },
          }
        );
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        console.error(error);
      });
  };

  const password = watch("password");

  if (isPending) {
    return <Text>Loading</Text>;
  }

  return (
    <PageLayout
      title="Create an account"
      backLink={{ href: "/login", text: "login" }}
    >
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
              errorMessage={errors.emailAddress?.message as string}
            />
          )}
          name="firstName"
        />
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
              errorMessage={errors.emailAddress?.message as string}
            />
          )}
          name="lastName"
        />
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
        <PasswordRulesList password={password} />
        <Controller
          control={control}
          rules={{
            validate: (value) =>
              passwordRules.every((rule) => rule.regex.test(value)) ||
              "Invalid password",
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
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
        <Controller
          control={control}
          rules={{
            required: "Required",
            validate: (value) => password === value || "Passwords don't match",
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Confirm password"
              type="password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.confirmPassword?.message?.toString()}
            />
          )}
          name="confirmPassword"
        />
      </View>
      <Button
        onPress={handleSubmit(onSubmit)}
        variant="solid"
        colorScheme="primary"
        size="medium"
        className="mt-5"
      >
        Create account
      </Button>
    </PageLayout>
  );
};

export default CreateAccount;
