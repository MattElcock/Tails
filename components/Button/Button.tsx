import { Alert, Text, TouchableOpacity } from "react-native";

type Variant = "solid" | "ghost";
type ColorScheme = "primary";
type Size = "large" | "medium";

interface ButtonProps {
  variant: Variant;
  colorScheme: ColorScheme;
  size: Size;
  children: string;
  onPress?: () => void;
}

const Button = ({
  children,
  variant,
  colorScheme,
  size,
  onPress,
}: ButtonProps) => {
  const baseClass = "items-center";

  const buttonSizeClass: Record<Size, string> = {
    large: "p-6",
    medium: "p-4",
  };

  const textSizeClass: Record<Size, string> = {
    large: "text-2xl",
    medium: "text-xl",
  };

  const buttonColorClass: Record<Variant, Record<ColorScheme, string>> = {
    solid: {
      primary: "bg-primary",
    },
    ghost: {
      primary: "",
    },
  };

  const roundedAndShadow = variant === "solid" ? "rounded-lg shadow-lg" : "";

  const buttonColorStyle = buttonColorClass[variant][colorScheme];
  const buttonSizeStyle = buttonSizeClass[size];
  const textSizeStyle = textSizeClass[size];

  return (
    <TouchableOpacity
      className={`${baseClass} ${buttonColorStyle} ${buttonSizeStyle} ${roundedAndShadow}`}
      onPress={onPress}
    >
      <Text className={`font-semibold text-black ${textSizeStyle}`}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };
