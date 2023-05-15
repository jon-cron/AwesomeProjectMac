import React, { useLayoutEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../data/dummbyData";
import MealDetails from "../components/MealDetails";
// import { FavoriteContext } from '../store/context/favorites-context'
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
const MealDetailsScreen = ({ route, navigation }) => {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  // const favContext = useContext(FavoriteContext)
  const id = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === id);
  const mealIsFav = favoriteMealIds.includes(meal.id);

  const handlePress = () => {
    if (mealIsFav) {
      // favContext.removeFavorite(id)
      dispatch(removeFavorite({ id: id }));
    } else {
      // favContext.addFavorite(id)
      dispatch(addFavorite({ id: id }));
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ size, color }) => {
        return (
          <Ionicons
            name={mealIsFav ? "heart" : "heart-outline"}
            size={30}
            color={"red"}
            onPress={handlePress}
          />
        );
      },
    });
  }, [navigation, handlePress]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: meal.imageUrl }} />
        <Text style={styles.title}>{meal.title}</Text>
        <MealDetails
          textStyle={styles.textStyle}
          duration={meal.duration}
          affordability={meal.affordability}
          complexity={meal.complexity}
        />
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Ingredients</Text>
        </View>
        {meal.ingredients.map((i) => {
          return (
            <Text style={styles.textStyle} key={i}>
              {i}
            </Text>
          );
        })}
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Steps</Text>
        </View>
        {meal.steps.map((s) => {
          return (
            <Text style={styles.textStyle} key={s}>
              {s}
            </Text>
          );
        })}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 350,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  textStyle: {
    color: "white",
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    // NOTE text cannot receive borders in react
    // borderBottomColor: 'white',
    // borderBottomWidth: 2
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
export default MealDetailsScreen;
