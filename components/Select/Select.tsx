import { Picker } from "@react-native-picker/picker";
import { View, Text } from "react-native";

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
}

const Select = ({
  label,
  onChange,
  value,
  items,
  errorMessage,
}: SelectProps) => {
  return (
    <View className="gap-2">
      <Text className={`text-xl ${errorMessage && "text-red-500"}`}>
        {label}
      </Text>
      <View className={`border ${errorMessage && "border-red-500"} rounded-lg`}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue) => onChange(itemValue)}
          style={{ marginTop: -3, marginBottom: -3 }}
        >
          <Picker.Item
            label="Please select"
            value=""
            enabled={false}
            style={{ fontSize: 18 }}
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
