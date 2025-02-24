import { FirestoreDocumentPet } from "@/api/pets/types";
import { Pet } from "@/api/pets/types/pet";
import { PawPrint } from "lucide-react-native";
import { Image, ImageSourcePropType, Text, View } from "react-native";

const catAvatar = require("@/assets/images/cat_circle.png");
const dogAvatar = require("@/assets/images/dog_circle.png");
const ratAvatar = require("@/assets/images/rat_circle.png");
const birdAvatar = require("@/assets/images/bird_circle.png");
const tortoiseAvatar = require("@/assets/images/tortoise_circle.png");

const petAvatarMap: Partial<Record<Pet, ImageSourcePropType>> = {
  [Pet.Cat]: catAvatar,
  [Pet.Dog]: dogAvatar,
  [Pet.Rodent]: ratAvatar,
  [Pet.Reptile]: tortoiseAvatar,
  [Pet.Bird]: birdAvatar,
};

interface ListProps {
  pets: FirestoreDocumentPet[];
}

const List = ({ pets }: ListProps) => {
  return (
    <View
      style={{
        justifyContent: "space-evenly",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {pets.map((pet) => (
        <View
          key={`${pet.name}-${pet.dateOfBirth.toString()}`}
          className="w-[10rem] items-center gap-2 mb-5"
        >
          <View className="bg-primary w-[8rem] h-[8rem] rounded-full items-center justify-center">
            {petAvatarMap[pet.type] ? (
              <Image
                source={petAvatarMap[pet.type]}
                style={{ width: 100, height: 100 }}
              />
            ) : (
              <PawPrint width="80px" height="80px" strokeWidth={1} />
            )}
          </View>
          <Text className="text-xl font-medium">{pet.name}</Text>
        </View>
      ))}
    </View>
  );
};

export { List };
