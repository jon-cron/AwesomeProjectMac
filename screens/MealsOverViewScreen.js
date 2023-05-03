import React, {useLayoutEffect} from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  FlatList,
} from "react-native";
import { MEALS, CATEGORIES } from "../data/dummbyData.js";
import MealItem from "../components/MealItem.js";
// import { useRoute } from "@react-navigation/native";
// NOTE you could also use the useRoute hook to accomplish the same thing as imported above
// NOTE any registered screen can access the route or navigation props
const MealsOverViewScreen = ({ route, navigation }) => {
  const params = route.params.categoryId;
  const filteredMEals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(params) >= 0;
  });
  // NOTE useLayoutEffect works similar to useEffect but will occur during page load not after. This can help with UI and timing.
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === params).title
    navigation.setOptions({title: categoryTitle})
  },[ params, navigation])
    const renderMealItem = (itemData) => {
    const mealItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imgUrl: itemData.item.imageUrl,
      complexity: itemData.item.complexity,
      duration: itemData.item.duration,
      affordability: itemData.item.affordability
    };
    return <MealItem {...mealItemProps} />;å
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={filteredMEals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverViewScreen;
