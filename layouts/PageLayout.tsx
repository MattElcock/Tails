import { Href } from "expo-router";
import { ReactNode } from "react";
import { ScrollView, Text, View } from "react-native";

interface PageLayoutProps {
  title?: ReactNode;
  scrollContainer?: boolean;
  children: ReactNode;
}

interface ContainerProps {
  children: ReactNode;
  type: "scroll" | "view";
  className: string;
}

const Container = ({ children, type, className }: ContainerProps) => {
  if (type === "scroll") {
    return <ScrollView className={className}>{children}</ScrollView>;
  } else {
    return <View className={className}>{children}</View>;
  }
};

const PageLayout = ({
  children,
  title,
  scrollContainer = true,
}: PageLayoutProps) => {
  return (
    <Container
      type={scrollContainer ? "scroll" : "view"}
      className="flex-1 px-5 pt-5 bg-background"
    >
      {title && (
        <View className="mb-3">
          {typeof title === "string" ? (
            <Text className="text-3xl font-medium">{title}</Text>
          ) : (
            title
          )}
        </View>
      )}

      <View className="flex-1 pt-3">{children}</View>
    </Container>
  );
};

export { PageLayout };
