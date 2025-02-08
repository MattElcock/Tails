import { ReactNode } from "react";
import { View } from "react-native";

interface PageLayoutProps {
  className?: string;
  children: ReactNode;
}

const PageLayout = ({ children, className }: PageLayoutProps) => {
  return (
    <View className={`h-screen px-10 bg-background ${className}`}>
      {children}
    </View>
  );
};

export { PageLayout };
