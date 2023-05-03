import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  FlatList,
} from "react-native";
import { CATEGORIES } from "../data/dummbyData.js";
import CategoryComp from "../components/CategoryComp.js";

// NOTE since this is a react native navigation screen, we can destructure navigation in this component
const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const handleNavigate = () => {
      // NOTE navigation.navigate(the first argument is the screen you want to go to, the second argument are the params that you would like to pass down )
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    };
    return (
      <CategoryComp
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={handleNavigate}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
