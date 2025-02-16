import DateTimePicker from "@react-native-community/datetimepicker";
import { Calendar } from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

interface DatePickerProps {
  label: string;
  value: Date | undefined;
  onChange: (value: Date | undefined) => void;
  errorMessage?: string;
}

const DatePicker = ({
  label,
  value,
  onChange,
  errorMessage,
}: DatePickerProps) => {
  const [show, setShow] = useState(false);

  const handlechange = (_event: unknown, selectedDate: Date | undefined) => {
    setShow(false);
    onChange(selectedDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };

  const dateFormatter = new Intl.DateTimeFormat("en", {
    dateStyle: "long",
  });

  return (
    <View className="gap-2">
      <Text className={`text-xl ${errorMessage && "text-red-500"}`}>
        {label}
      </Text>
      <Pressable onPress={showDatePicker}>
        <View
          className={`flex-row border ${
            errorMessage && "border-red-500"
          } rounded-lg px-4 py-3 justify-between`}
        >
          <Text className="text-xl">
            {value ? dateFormatter.format(value) : "Please select"}
          </Text>
          <Calendar />
        </View>
      </Pressable>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={value ?? new Date(Date.now())}
          mode="date"
          is24Hour={true}
          onChange={handlechange}
        />
      )}
      {errorMessage && <Text className="text-red-500">{errorMessage}</Text>}
    </View>
  );
};

export { DatePicker };
