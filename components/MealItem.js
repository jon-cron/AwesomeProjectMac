import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  Image,
  Platform,
} from "react-native";

const MealItem = ({ id, title, imgUrl, complexity, duration, affordability }) => {
  const navigation = useNavigation()
  const handleNavigate = () => {
    
    navigation.navigate('MealDetails', {
      mealId: id
    })
  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={handleNavigate}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imgUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text>{duration}(minutes) </Text>
            <Text>{complexity.toUpperCase()} </Text>
            <Text>{affordability.toUpperCase()} </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
    // borderTopRightRadius: 8,
    // borderTopLeftRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "space-evenly",
  },
});

export default MealItem;
