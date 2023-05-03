import React from 'react'
import { View, StyleSheet, Text,Pressable, Image, } from 'react-native'
import { MEALS } from '../data/dummbyData'


const MealDetailsScreen = ({route, navigation}) => {
    const id = route.params.mealId
    const meal = MEALS.find((meal) => meal.id === id)
    console.log(meal)
    return (
        <View>
            <Image/>
            <Text>I am a meals details screen {id}</Text>
            <View></View>
            <Text>Ingredients</Text>
            <Text>Steps</Text>
        </View>
    )

    const styles = StyleSheet.create({
        constainer: {
            flex: 1
        }
    })
}
export default MealDetailsScreen