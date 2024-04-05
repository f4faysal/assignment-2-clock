import { ImageBackground, StyleSheet, Text } from "react-native";

export default function App() {
  return (
    <ImageBackground
      style={styles.container}
      source={require("./assets/bacground.png")}
    >
      <Text style={{
        fontSize : 22,
        color : "white"
      }}>
      hihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihi
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
