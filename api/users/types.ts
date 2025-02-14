export interface User {
  emailAddress: string | null;
  firstName?: string;
  lastName?: string;
  seenAppPurposeDisclaimer?: false | string; // String is an ISO Date of when the user saw the disclaimer
}

// Email Address is stored in Firebase Auth, not Firestore
export type FirestoreDocumentUser = Omit<User, "emailAddress">;
