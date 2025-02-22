import { Button } from "@/components/Button";
import { Href, useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { ReactNode } from "react";
import { StatusBar, View, Text, ScrollView } from "react-native";

interface BackLink {
  href: Href;
  text: string;
}

interface PageLayoutProps {
  title?: ReactNode;
  className?: string;
  children: ReactNode;
}

const PageLayout = ({ children, className, title }: PageLayoutProps) => {
  return (
    <View className={`flex-1 px-5 pt-5 bg-background gap-5 ${className} `}>
      {title && (
        <View>
          {typeof title === "string" ? (
            <Text className="text-3xl font-medium">{title}</Text>
          ) : (
            title
          )}
        </View>
      )}

      <View className="flex-1">{children}</View>
    </View>
  );
};

export { PageLayout };
