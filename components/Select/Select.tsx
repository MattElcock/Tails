import { ACCENT_COLOUR } from "@/constants";
import { Picker } from "@react-native-picker/picker";
import { useRef } from "react";
import { View, Text, Pressable } from "react-native";

interface Item<TValue> {
  label: string;
  value: TValue;
}

interface SelectProps<TValue = string> {
  onChange: (value: TValue) => void;
  value: TValue;
  items: Item<TValue>[];
  label: string;
  errorMessage?: string;
  disabled?: boolean;
}

const Select = ({
  label,
  onChange,
  value,
  items,
  errorMessage,
  disabled,
}: SelectProps) => {
  return (
    <View className="gap-2">
      <Text
        className={`text-xl ${errorMessage && "text-red-500"} ${
          disabled && "text-gray-500"
        }`}
      >
        {label}
      </Text>

      <View
        className={`border ${errorMessage && "border-red-500"} ${
          disabled && "border-gray-500"
        } rounded-lg`}
      >
        <Picker
          enabled={!disabled}
          selectedValue={value}
          onValueChange={(itemValue) => onChange(itemValue)}
          style={{ marginTop: -3, marginBottom: -3 }}
          prompt={label}
        >
          <Picker.Item
            label="Please select..."
            value={undefined}
            color={disabled ? "gray" : undefined}
          />
          {items.map((item) => (
            <Picker.Item
              key={item.value}
              label={item.label}
              value={item.value}
              style={{ fontSize: 18 }}
            />
          ))}
        </Picker>
      </View>

      {errorMessage && <Text className="text-red-500">{errorMessage}</Text>}
    </View>
  );
};

export { Select };
