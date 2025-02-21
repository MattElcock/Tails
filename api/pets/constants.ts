import { FurColours, PetTypes } from "./types";

export const petOptions = [
  // Birds
  { label: "Budgie", value: PetTypes.Budgie, hasFur: false },
  { label: "Canary", value: PetTypes.Canary, hasFur: false },
  { label: "Cockatiel", value: PetTypes.Cockatiel, hasFur: false },
  { label: "Finch", value: PetTypes.Finch, hasFur: false },
  { label: "Macaw", value: PetTypes.Macaw, hasFur: false },
  { label: "Parrot", value: PetTypes.Parrot, hasFur: false },

  // Mammals
  { label: "Cat", value: PetTypes.Cat, hasFur: true },
  { label: "Chinchilla", value: PetTypes.Chinchilla, hasFur: true },
  { label: "Ferret", value: PetTypes.Ferret, hasFur: true },
  { label: "Guinea Pig", value: PetTypes.GuineaPig, hasFur: true },
  { label: "Hamster", value: PetTypes.Hamster, hasFur: true },
  { label: "Hedgehog", value: PetTypes.Hedgehog, hasFur: true },
  { label: "Rabbit", value: PetTypes.Rabbit, hasFur: true },
  { label: "Rat", value: PetTypes.Rat, hasFur: true },

  // Reptiles
  { label: "Chameleon", value: PetTypes.Chameleon, hasFur: false },
  { label: "Gecko", value: PetTypes.Gecko, hasFur: false },
  { label: "Iguana", value: PetTypes.Iguana, hasFur: false },
  { label: "Snake", value: PetTypes.Snake, hasFur: false },
  { label: "Tortoise", value: PetTypes.Tortoise, hasFur: false },
  { label: "Turtle", value: PetTypes.Turtle, hasFur: false },
];

export const furColourOptions = [
  { label: "Black", value: FurColours.Black },
  { label: "White", value: FurColours.White },
  { label: "Grey", value: FurColours.Grey },
  { label: "Ginger", value: FurColours.Ginger },
  { label: "Brown", value: FurColours.Brown },
  { label: "Golden", value: FurColours.Golden },
  { label: "Blue", value: FurColours.Blue },
  { label: "Cream", value: FurColours.Cream },
  { label: "Fawn", value: FurColours.Fawn },
];

// firestore collection names
export const PETS_COLLECTION = "pets";

// cache keys
export const PETS_LIST_KEY = ["pets"];
