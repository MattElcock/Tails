import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { Redirect } from "expo-router";
import { ReactNode, useEffect, useState } from "react";

interface AuthProps {
  children: ReactNode;
}

// Docs: https://rnfirebase.io/auth/usage#listening-to-authentication-state
const Auth = ({ children }: AuthProps) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    return <Redirect href="/login" />;
  }

  return children;
};

export { Auth };
