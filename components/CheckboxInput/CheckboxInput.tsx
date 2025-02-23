import { ACCENT_COLOUR } from "@/constants";
import Checkbox from "expo-checkbox";
import React from "react";
import { FlatList, Text, View } from "react-native";

interface Item<TValue> {
  label: string;
  value: TValue;
}

interface CheckboxInputProps<TValue> {
  onChange: (value: TValue[]) => void;
  value: TValue[];
  label: string;
  items: Item<TValue>[];
  errorMessage?: string;
}

const CheckboxInput = <TValue = string,>({
  label,
  items,
  onChange,
  value,
  errorMessage,
}: CheckboxInputProps<TValue>) => {
  const onCheckChange = (label: TValue, isChecked: boolean) => {
    if (isChecked) {
      onChange([...value, label]);
    } else {
      const copy = [...value];
      const index = copy.indexOf(label);
      copy.splice(index, 1);
      onChange(copy);
    }
  };

  return (
    <View className="gap-2">
      <Text className={`text-xl ${errorMessage && "text-red-500"}`}>
        {label}
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 5,
        }}
      >
        {items.map((item) => (
          <View
            className="flex-row gap-2 pb-2"
            style={{ width: 150 }}
            key={item.label}
          >
            <Checkbox
              value={value.includes(item.value)}
              onValueChange={(isChecked) =>
                onCheckChange(item.value, isChecked)
              }
              style={{ width: 30, height: 30 }}
              color={value.includes(item.value) ? ACCENT_COLOUR : undefined}
            />
            <Text className="text-xl">{item.label}</Text>
          </View>
        ))}
      </View>

      {errorMessage && <Text className="text-red-500">{errorMessage}</Text>}
    </View>
  );
};

export { CheckboxInput };
