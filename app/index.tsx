import { Text, View } from "react-native";
import VintedMonitor from "vinted-monitor";

var first_name: string = "Benji";
const Monitor = new VintedMonitor();

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Salut {first_name} 👋</Text>
    </View>
  );
}
