import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  View
} from "react-native";

import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { useState } from "react";

const RowView = ({ label, value }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
      }}
    >
      <View>
        <Text
          style={{
            fontFamily: "Inter-regular",
            color: "#303030",
            fontSize: 10,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {label}
        </Text>
      </View>

      <View>
        <Text
          style={{
            fontFamily: "Inter-bold",
            fontSize: 20,
            color: "#303030",
          }}
        >
          {value}
        </Text>
      </View>
    </View>
  );
};

export default function App() {
  let [fontsLoaded] = useFonts({
    "Inter-regular": Inter_400Regular,
    "Inter-bold": Inter_700Bold,
  });
  const [showMore, setShowMore] = useState(false);
  if (!fontsLoaded) {
    // return <AppLoading />;
    return <ActivityIndicator />;
  }
  return (
    <ImageBackground
      style={styles.container}
      source={require("./assets/background.png")} // Corrected typo here
    >
      <Text style={{
        fontSize : 25,
        color :"#fff",
        fontFamily : "Inter-regular"
      }}>
        habiba kutta
      </Text>
      <Text style={{
        fontSize : 25,
        color :"#fff",
        fontFamily : "Inter-bold"
      }}>
        habiba
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : "center",
    alignItems : "center"
  },
});
