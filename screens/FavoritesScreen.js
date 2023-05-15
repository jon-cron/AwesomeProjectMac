import React, { useContext } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import MealsList from "../components/MealsList";
import { FavoriteContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummbyData";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  //   const favContext = useContext(FavoriteContext);
  // NOTE this is an excellent way to check to see if an id is in two different arrays
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsIds.includes(meal.id)
  );
  if (favoriteMeals.length === 0) {
    return (
      <View>
        <Text>There are no favorites</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
};

const styles = StyleSheet.create({});
// NOTE will finish this app on somedat
export default FavoritesScreen;
