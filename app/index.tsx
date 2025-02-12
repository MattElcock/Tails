import { Text, View } from "react-native";

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-9xl">Logged in</Text>
    </View>
  );
};

export default App;
