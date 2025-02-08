import { Button } from "@/components/Button";
import { Href, useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { ReactNode } from "react";
import { StatusBar, View } from "react-native";

interface BackLink {
  href: Href;
  text: string;
}

interface PageLayoutProps {
  backLink?: BackLink;
  className?: string;
  children: ReactNode;
}

const PageLayout = ({ children, className, backLink }: PageLayoutProps) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push(backLink!.href);
  };
  return (
    <View className={`h-screen px-10 py-5 bg-background ${className} gap-3`}>
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

      {children}
    </View>
  );
};

export { PageLayout };
