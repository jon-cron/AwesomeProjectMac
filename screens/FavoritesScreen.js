import React, { useContext } from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import MealsList from '../components/MealsList';
import { FavoriteContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummbyData';


const FavoritesScreen = () => {
const favContext = useContext(FavoriteContext)
// NOTE this is an excellent way to check to see if an id is in two different arrays
const favoriteMeals = MEALS.filter(meal => favContext.ids.includes(meal.id))
return (
<MealsList items={favoriteMeals}/>
)
}

const styles = StyleSheet.create({})

export default FavoritesScreen