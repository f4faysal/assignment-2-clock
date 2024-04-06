import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
  useColorScheme,
} from "react-native";

import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";

const RowView = ({ label, value, themeTextStyle }) => {
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
          style={[
            {
              fontFamily: "Inter-regular",
              fontSize: 10,
              letterSpacing: 2,
              textTransform: "uppercase",
            },
            themeTextStyle,
          ]}
        >
          {label}
        </Text>
      </View>

      <View>
        <Text
          style={[
            {
              fontFamily: "Inter-bold",
              fontSize: 20,
            },
            themeTextStyle,
          ]}
        >
          {value}
        </Text>
      </View>
    </View>
  );
};

export default function App() {
  const colorScheme = useColorScheme();

  const [themeMode, setThemeMode] = useState(colorScheme);
  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  function showToast() {
    ToastAndroid.show("Refresh successfully!", ToastAndroid.SHORT);
  }

  const themeTextStyle =
    themeMode === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    themeMode === "light" ? styles.lightContainer : styles.darkContainer;

  let [fontsLoaded] = useFonts({
    "Inter-regular": Inter_400Regular,
    "Inter-bold": Inter_700Bold,
  });

  const [showMore, setShowMore] = useState(false);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ImageBackground
      style={[styles.container]}
      source={
        themeMode === "dark"
          ? require("./assets/background.png")
          : require("./assets/light-bg.png")
      }
    >
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          paddingHorizontal: 26,
          marginTop: 35,
        }}
      >
        {/* Upper Portion */}
        {!showMore && (
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text
                style={[
                  {
                    fontFamily: "Inter-regular",
                    fontSize: 12,
                  },
                  themeTextStyle,
                ]}
              >
                The science of operations, as derived from mathematics more
                especially, is a science of itself, and has its own abstract
                truth and value.
              </Text>
              <Text
                style={[
                  {
                    fontFamily: "Inter-bold",
                    color: "#fff",
                    fontSize: 15,
                    marginTop: 8,
                  },
                  themeTextStyle,
                ]}
              >
                Ada Lovelace
              </Text>
            </View>
            <Pressable onPress={showToast}>
              <Image source={require("./assets/refresh.png")} />
            </Pressable>
          </View>
        )}
        {/* Lower Portion edit */}
        <View
          style={{
            marginBottom: 32,
          }}
        >
          {/* Good Evening */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={
                themeMode === "dark"
                  ? require("./assets/moon.png")
                  : require("./assets/sun.png")
              }
            />
            <Text
              style={[
                {
                  fontSize: 15,
                  fontFamily: "Inter-bold",
                  marginLeft: 8,
                  letterSpacing: 3,
                },
                themeTextStyle,
              ]}
            >
              Good {themeMode === "dark" ? "Evening" : "Morning"}
            </Text>
          </View>
          {/* Time */}
          <View style={{ marginTop: 8 }}>
            <Text
              style={[
                {
                  fontSize: 100,
                  fontFamily: "Inter-bold",
                },
                themeTextStyle,
              ]}
            >
              {themeMode === "dark" ? "23:14" : "6:00"}
              <Text style={{ fontSize: 30, fontFamily: "Inter-regular" }}>
                BST
              </Text>
            </Text>
          </View>
          {/* Location */}
          <View style={{ marginTop: 16 }}>
            <Text
              style={[
                {
                  fontFamily: "Inter-bold",
                  fontSize: 15,
                  letterSpacing: 3,
                },
                themeTextStyle,
              ]}
            >
              IN LONDON, UK
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "space-between",
            }}
          >
            <Pressable
              onPress={() => {
                setShowMore(!showMore);
              }}
              style={[
                {
                  flexDirection: "row",
                  height: 40,
                  width: 115,
                  borderRadius: 30,
                  marginTop: 50,
                  justifyContent: "space-between",
                  paddingLeft: 16,
                  paddingRight: 4,
                  alignItems: "center",
                },
                themeContainerStyle,
              ]}
            >
              <Text
                style={[
                  {
                    fontFamily: "Inter-bold",
                    fontSize: 12,

                    letterSpacing: 3,
                  },
                  themeTextStyle,
                ]}
              >
                {showMore ? "LESS" : "MORE"}
              </Text>

              <Image
                source={
                  showMore
                    ? require("./assets/arrow-up.png")
                    : require("./assets/arrow-down.png")
                }
              />
            </Pressable>

            <Pressable
              style={{
                flexDirection: "row",
                height: 40,
                width: 50,
                marginTop: 50,
                paddingLeft: 16,
                paddingRight: 4,
                alignItems: "center",
              }}
              onPress={toggleTheme}
            >
              <Image
                style={{}}
                source={
                  themeMode === "dark"
                    ? require("./assets/sun.png")
                    : require("./assets/moon.png")
                }
              />
            </Pressable>
          </View>
        </View>
      </View>

      {/* EXPANDED VIEW */}
      {showMore && (
        <View
          style={[
            {
              opacity: 0.8,
              paddingVertical: 48,
              paddingHorizontal: 26,
            },
            themeContainerStyle,
          ]}
        >
          <RowView
            label={"Current Timezone"}
            value="Europe/London"
            themeTextStyle={themeTextStyle}
          />
          <RowView
            label={"Day of the year"}
            value="295"
            themeTextStyle={themeTextStyle}
          />
          <RowView
            label={"Day of the week"}
            value="5"
            themeTextStyle={themeTextStyle}
          />
          <RowView
            label={"Week number"}
            value="42"
            themeTextStyle={themeTextStyle}
          />
        </View>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
  },
  lightContainer: {
    backgroundColor: "#242c40",
  },
  darkContainer: {
    backgroundColor: "#242c40",
  },
  lightThemeText: {
    color: "#fff",
  },
  darkThemeText: {
    color: "#fff",
  },
});
