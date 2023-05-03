import React from 'react'
import { View, StyleSheet, Text,Pressable, } from 'react-native'


const MealDetailsScreen = ({route, navigation}) => {
    return (
        <View>
            <Text>I am a meals details screen</Text>
        </View>
    )

    const styles = StyleSheet.create({
        constainer: {
            flex: 1
        }
    })
}
export default MealDetailsScreen