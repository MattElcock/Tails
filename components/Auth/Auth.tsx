import { Redirect } from "expo-router";
import { ReactNode } from "react";

interface AuthProps {
  children: ReactNode;
}

const Auth = ({ children }: AuthProps) => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }

  return children;
};

export { Auth };
