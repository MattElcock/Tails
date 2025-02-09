import { Eye, EyeOff } from "lucide-react-native";
import { ReactNode, useState } from "react";
import { Pressable, Text, TextInput, TextInputProps, View } from "react-native";

type Type = "text" | "email" | "password";

interface InputProps extends TextInputProps {
  label: string;
  type: Type;
  errorMessage?: string;
  action?: ReactNode;
}

const Input = ({ label, type, errorMessage, action, ...rest }: InputProps) => {
  const [isSecure, setIsSecure] = useState(type === "password");

  const togglePassword = () => {
    setIsSecure((current) => !current);
  };

  return (
    <View className="gap-2">
      <View className="flex-row items-center justify-between">
        <Text className={`text-xl ${errorMessage && "text-red-500"}`}>
          {label}
        </Text>
        {action}
      </View>
      <View className="flex-row items-center">
        <TextInput
          className={`border rounded-lg text-xl px-4 py-3 flex-1  ${
            errorMessage && "border-red-500"
          } ${type === "password" && "rounded-r-none"}`}
          {...(type === "email" && {
            keyboardType: "email-address",
            autoCapitalize: "none",
            autoCorrect: false,
          })}
          {...(type === "password" && {
            textContentType: "newPassword",
            secureTextEntry: isSecure,
            autoCapitalize: "none",
            autoCorrect: false,
          })}
          {...rest}
        />
        {type === "password" && (
          <Pressable
            className={`p-[0.8rem] border border-l-0 rounded-lg rounded-l-none ${
              errorMessage && "border-red-500"
            }`}
            onPress={togglePassword}
          >
            {isSecure ? <Eye /> : <EyeOff />}
          </Pressable>
        )}
      </View>

      {errorMessage && <Text className="text-red-500">{errorMessage}</Text>}
    </View>
  );
};

export { Input };
