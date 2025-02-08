import { Auth } from "@/components/Auth";
import { Text, View } from "react-native";

const App = () => {
  return (
    <Auth>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text className="text-9xl">Logged in</Text>
      </View>
    </Auth>
  );
};

export default App;
