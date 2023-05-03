import React from 'react'
import { View, StyleSheet, Text,Pressable, Image, } from 'react-native'
import { MEALS } from '../data/dummbyData'


const MealDetailsScreen = ({route, navigation}) => {
    const id = route.params.mealId
    const meal = MEALS.find((meal) => meal.id === id)
    return (
        <View style={styles.container}> 
            <Image style={styles.image} source={{uri: meal.imageUrl}}/>
            <Text>I am a meals details screen {id}</Text>
            <View></View>
            <Text>Ingredients</Text>
            <Text>Steps</Text>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height:200,
        width: 300
    }
})
export default MealDetailsScreen