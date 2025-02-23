import { ChevronRight } from "lucide-react-native";
import { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";

interface LabelledValueProps {
  label: string;
  value: string | ReactNode;
  iconStart?: ReactNode;
  className?: string;
  onPress?: () => void;
}

const LabelledValue = ({
  label,
  value,
  className,
  iconStart,
  onPress,
}: LabelledValueProps) => {
  const content = (
    <View className={`${className} flex-row items-center gap-5`}>
      {iconStart}
      <View>
        <Text className="text-lg font-semibold">{label}</Text>
        {typeof value === "string" || !value ? (
          <Text className="text-xl">{value}</Text>
        ) : (
          value
        )}
      </View>
    </View>
  );

  const wrapperClass = "flex-row justify-between items-center border-b pb-2";

  if (onPress) {
    return (
      <Pressable android_ripple={{ color: "" }} onPressOut={onPress}>
        <View className={wrapperClass}>
          {content}
          <ChevronRight />
        </View>
      </Pressable>
    );
  } else {
    return <View className={wrapperClass}>{content}</View>;
  }
};

export { LabelledValue };
