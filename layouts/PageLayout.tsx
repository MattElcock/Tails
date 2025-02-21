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
  backLink?: BackLink;
  className?: string;
  children: ReactNode;
}

const PageLayout = ({
  backLink,
  children,
  className,
  title,
}: PageLayoutProps) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push(backLink!.href);
  };

  return (
    <ScrollView className={`h-screen px-5 bg-background gap-10 ${className} `}>
      <StatusBar className="bg-background" barStyle="dark-content" />
      <View>
        {backLink && (
          <Button
            variant="ghost"
            colorScheme="primary"
            size="medium"
            startIcon={<ArrowLeft />}
            className="self-start px-0"
            onPress={handleBackClick}
          >
            Back to {backLink.text}
          </Button>
        )}
        {typeof title === "string" ? (
          <Text className="text-4xl font-medium">{title}</Text>
        ) : (
          title
        )}
      </View>
      <View className="flex-1">{children}</View>
    </ScrollView>
  );
};

export { PageLayout };
