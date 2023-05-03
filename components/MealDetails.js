import React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';

// NOTE we can pass down style to our components through props like this
const MealDetails = ({duration, affordability, complexity, style, textStyle}) => {


return (
<View style={[styles.details, style]}>
            <Text style={textStyle}>{duration}(minutes) </Text>
            <Text style={textStyle}>{complexity.toUpperCase()} </Text>
            <Text style={textStyle}>{affordability.toUpperCase()} </Text>
</View>
)
}

const styles = StyleSheet.create({
      details: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        justifyContent: "space-evenly",
      },
})

export default MealDetails
