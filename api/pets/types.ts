import { Bird } from "./types/bird";
import { Cat } from "./types/cat";
import { Colour } from "./types/colour";
import { Dog } from "./types/dog";
import { Pet } from "./types/pet";
import { Reptile } from "./types/reptile";
import { Rodent } from "./types/rodent";

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
  type: Pet;
  subType: Cat | Dog | Rodent | Reptile | Bird;
  dateOfBirth: Date;
  colour?: Colour[];
  sharedWith: UserPermission;
}
