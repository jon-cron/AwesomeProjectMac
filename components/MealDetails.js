import React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';


const MealDetails = ({duration, affordability, complexity}) => {


return (
<View style={styles.details}>
            <Text>{duration}(minutes) </Text>
            <Text>{complexity.toUpperCase()} </Text>
            <Text>{affordability.toUpperCase()} </Text>
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
