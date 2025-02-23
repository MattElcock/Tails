import { ReactNode } from "react";
import { Pressable, Text } from "react-native";

type Variant = "solid" | "ghost" | "outline";
type ColorScheme = "primary";
type Size = "large" | "medium" | "small";

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
    small: "p-2",
  };

  const textSizeClass: Record<Size, string> = {
    large: "text-2xl",
    medium: "text-xl",
    small: "text-lg",
  };

  const buttonColorClass: Record<Variant, Record<ColorScheme, string>> = {
    solid: {
      primary: "bg-primary rounded-lg",
    },
    outline: {
      primary: "border-2 rounded-lg border-primary",
    },
    ghost: {
      primary: "",
    },
  };

  const buttonColorStyle = buttonColorClass[variant][colorScheme];
  const buttonSizeStyle = buttonSizeClass[size];
  const textSizeStyle = textSizeClass[size];

  return (
    <Pressable
      className={`flex-row gap-3 justify-center ${baseClass} ${buttonColorStyle} ${buttonSizeStyle} ${className}`}
      android_ripple={{ color: "" }}
      onPressOut={onPress}
    >
      {startIcon}
      <Text className={`${fontWeight} ${textSizeStyle}`}>{children}</Text>
    </Pressable>
  );
};

export { Button };
