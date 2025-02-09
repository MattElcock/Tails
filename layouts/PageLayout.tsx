import { Button } from "@/components/Button";
import { Href, useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { ReactNode } from "react";
import { StatusBar, View, Text } from "react-native";

interface BackLink {
  href: Href;
  text: string;
}

interface PageLayoutProps {
  title?: string;
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
    <View className={`h-screen px-10 py-5 bg-background gap-3 ${className} `}>
      <StatusBar className="bg-background" barStyle="dark-content" />
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
      {title && <Text className="text-4xl font-medium">{title}</Text>}
      {children}
    </View>
  );
};

export { PageLayout };
