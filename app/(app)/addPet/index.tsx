import { Bird } from "@/api/pets/types/bird";
import { Cat } from "@/api/pets/types/cat";
import { Colour } from "@/api/pets/types/colour";
import { Dog } from "@/api/pets/types/dog";
import { Pet } from "@/api/pets/types/pet";
import { Reptile } from "@/api/pets/types/reptile";
import { Rodent } from "@/api/pets/types/rodent";
import useAddPet from "@/api/pets/useAddPet";
import { Button } from "@/components/Button";
import { CheckboxInput } from "@/components/CheckboxInput";
import { DatePicker } from "@/components/DatePicker";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { PageLayout } from "@/layouts/PageLayout";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";

const getBreeds = (type: Pet | undefined) => {
  switch (type) {
    case Pet.Cat:
      return Object.values(Cat);
    case Pet.Dog:
      return Object.values(Dog);
    case Pet.Rodent:
      return Object.values(Rodent);
    case Pet.Bird:
      return Object.values(Bird);
    case Pet.Reptile:
      return Object.values(Reptile);
    default:
      return [];
  }
};

interface FormFields {
  name: string;
  type: Pet;
  subType: Cat | Dog | Rodent | Reptile | Bird;
  colour: Colour[];
  dateOfBirth: Date;
}

const AddPet = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    resetField,
  } = useForm<FormFields>();

  const router = useRouter();
  const { mutate } = useAddPet();

  const onSubmit = (data: FormFields) => {
    mutate(
      {
        name: data.name,
        type: data.type,
        subType: data.subType,
        colour: data.colour,
        dateOfBirth: data.dateOfBirth,
      },
      {
        onSuccess: () => {
          reset();
          router.push("/(app)");
        },
        onError: (error) => {
          console.error(error);
        },
      }
    );
  };

  const type = watch("type");

  useEffect(() => {
    resetField("subType");
  }, [type]);

  // useEffect(() => {
  //   const resetForm = () => {
  //     reset();
  //   };
  //   return resetForm;
  // }, []);

  const breedList = getBreeds(type);

  return (
    <PageLayout title="Add a pet">
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
              items={Object.values(Pet).map((pet) => ({
                label: pet,
                value: pet,
              }))}
              errorMessage={errors.type?.message}
            />
          )}
          name="type"
        />
        <Controller
          control={control}
          rules={{
            required: "Required",
          }}
          render={({ field: { onChange, value } }) => (
            <Select
              disabled={type === undefined}
              label="Breed"
              onChange={onChange}
              value={value || ""}
              items={breedList.map((breed) => ({ label: breed, value: breed }))}
              errorMessage={errors.type?.message}
            />
          )}
          name="subType"
        />
        <Controller
          control={control}
          rules={{
            required: "Required",
          }}
          render={({ field: { onChange, value } }) => (
            <CheckboxInput<Colour>
              label="Colour"
              items={Object.values(Colour).map((colour) => ({
                label: colour,
                value: colour,
              }))}
              onChange={onChange}
              value={value || []}
              errorMessage={errors.colour?.message}
            />
          )}
          name="colour"
        />
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
