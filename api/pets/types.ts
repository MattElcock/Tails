export enum PetTypes {
  // Mammals
  Cat = "cat",
  Dog = "dog",
  Hamster = "hamster",
  Rat = "rat",
  GuineaPig = "guineaPig",
  Rabbit = "rabbit",
  Ferret = "ferret",
  Chinchilla = "chinchilla",
  Hedgehog = "hedgehog",

  // Birds
  Parrot = "parrot",
  Canary = "canary",
  Finch = "finch",
  Budgie = "budgie",
  Cockatiel = "cockatiel",
  Macaw = "macaw",

  // Reptiles
  Tortoise = "tortoise",
  Turtle = "turtle",
  Gecko = "gecko",
  Iguana = "iguana",
  Snake = "snake",
  Chameleon = "chameleon",
}

export enum FurColours {
  Black = "black",
  White = "white",
  Brown = "brown",
  Grey = "grey",
  Cream = "cream",
  Ginger = "ginger",
  Chocolate = "chocolate",
  Golden = "golden",
  Blue = "blue", // e.g., Russian Blue cats
  Red = "red", // e.g., Irish Setter dogs
  Silver = "silver",
  Fawn = "fawn",
}

export enum Permission {
  View = "view",
  Edit = "edit",
  Admin = "admin",
}

export interface UserPermission {
  [userId: string]: Permission;
}

export interface FirestoreDocumentPet {
  name: string;
  type: PetTypes;
  dateOfBirth: Date;
  furColour?: FurColours[];
  sharedWith: UserPermission;
}
