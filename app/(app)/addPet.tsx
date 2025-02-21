import { furColourOptions, petOptions } from "@/api/pets/constants";
import { FurColours, PetTypes } from "@/api/pets/types";
import useAddPet from "@/api/pets/useAddPet";
import { Button } from "@/components/Button";
import { CheckboxInput } from "@/components/CheckboxInput";
import { DatePicker } from "@/components/DatePicker";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { PageLayout } from "@/layouts/PageLayout";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";

interface FormFields {
  name: string;
  type: PetTypes;
  dateOfBirth: Date;
  furColour: FurColours[];
}

const sortedPetOptions = petOptions.sort((a, b) => {
  return a.label.toLowerCase().localeCompare(b.label.toLowerCase());
});

const AddPet = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormFields>();

  const router = useRouter();
  const { mutate } = useAddPet();

  const onSubmit = (data: FormFields) => {
    mutate(
      {
        name: data.name,
        type: data.type,
        dateOfBirth: data.dateOfBirth,
        furColour: data.furColour,
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
  };

  const type = watch("type");
  const hasFur = sortedPetOptions.find((pet) => pet.value === type)?.hasFur;

  return (
    <PageLayout title="Add a pet" backLink={{ href: "/(app)", text: "home" }}>
      <View className="gap-5">
        <Controller
          control={control}
          rules={{
            required: "Required",
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Name"
              type="text"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.name?.message}
            />
          )}
          name="name"
        />
        <Controller
          control={control}
          rules={{
            required: "Required",
          }}
          render={({ field: { onChange, value } }) => (
            <Select
              label="Type"
              onChange={onChange}
              value={value || ""}
              items={sortedPetOptions}
              errorMessage={errors.type?.message}
            />
          )}
          name="type"
        />

        {hasFur && (
          <Controller
            control={control}
            rules={{
              required: "Required",
            }}
            render={({ field: { onChange, value } }) => (
              <CheckboxInput<FurColours>
                label="Fur Colour"
                items={furColourOptions}
                onChange={onChange}
                value={value || []}
                errorMessage={errors.furColour?.message}
              />
            )}
            name="furColour"
          />
        )}
        <Controller
          control={control}
          rules={{
            required: "Required",
          }}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              label="Date of birth"
              value={value}
              onChange={onChange}
              errorMessage={errors.dateOfBirth?.message}
            />
          )}
          name="dateOfBirth"
        />
        <Button
          onPress={handleSubmit(onSubmit)}
          variant="solid"
          colorScheme="primary"
          size="medium"
          className="mt-5"
        >
          Add pet
        </Button>
      </View>
    </PageLayout>
  );
};

export default AddPet;
