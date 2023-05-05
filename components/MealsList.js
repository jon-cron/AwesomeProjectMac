import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import MealItem from './MealItem';
const MealsList = ({items}) => {


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
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
          />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });

export default MealsList