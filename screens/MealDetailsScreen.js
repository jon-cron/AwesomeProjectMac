import React from 'react'
import { View, StyleSheet, Text,Pressable, Image, } from 'react-native'
import { MEALS } from '../data/dummbyData'
import MealDetails from '../components/MealDetails'


const MealDetailsScreen = ({route, navigation}) => {
    const id = route.params.mealId
    const meal = MEALS.find((meal) => meal.id === id)
    return (
        <View style={styles.container}> 
            <Image style={styles.image} source={{uri: meal.imageUrl}}/>
            <Text style={styles.title}>{meal.title}</Text>
            <MealDetails textStyle={styles.textStyle} duration={meal.duration} affordability={meal.affordability} complexity={meal.complexity}/>
            <Text>Ingredients</Text>
            {meal.ingredients.map((i) => {
                return <Text style={styles.textStyle} key={i}>{i}</Text>
            })}
            <Text>Steps</Text>
            {meal.steps.map((s) => {
                return <Text style={styles.textStyle} key={s}>{s}</Text>
            })}
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height:350,
        width: '100%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    textStyle: {
        color: 'white'
    }
})
export default MealDetailsScreen