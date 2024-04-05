import { ImageBackground, StyleSheet } from "react-native";

export default function App() {
  return (
    <ImageBackground
      style={styles.container}
      source={require("./assets/bacground.png")}
    >
    
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
