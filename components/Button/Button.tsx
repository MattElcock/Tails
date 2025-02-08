import { ReactNode } from "react";
import { Text, TouchableOpacity } from "react-native";

type Variant = "solid" | "ghost";
type ColorScheme = "primary";
type Size = "large" | "medium";

interface ButtonProps {
  variant: Variant;
  colorScheme: ColorScheme;
  size: Size;
  children: ReactNode;
  startIcon?: ReactNode;
  fontWeight?: string;
  className?: string;
  onPress?: () => void;
}

const Button = ({
  children,
  variant,
  colorScheme,
  size,
  fontWeight = "font-semibold",
  startIcon,
  className,
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
      className={`flex-row gap-3 justify-center ${baseClass} ${buttonColorStyle} ${buttonSizeStyle} ${roundedAndShadow} ${className}`}
      onPress={onPress}
    >
      {startIcon}
      <Text className={`${fontWeight} text-black ${textSizeStyle}`}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };
