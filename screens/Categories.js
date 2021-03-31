import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from "react-native";

export default function Categories() {


    const [categories, updateCategories] = useState([
        {name: "Landscape", picture: "picture", key: 1},
        {name: "Street photo", picture: "picture", key:2},
        {name: "Portrait", picture: "picture", key: 3},
        {name: "Architecture", picture: "picture", key: 4},
        {name: "Black & White", picture: "picture", key: 5},
        {name: "Macro", picture: "picture", key: 6}, 
        {name: "People", picture: "picture", key:7}
    ])
 
    
        return (
            <View style={styles.container}>
                {categories.map(category => {
                    return <Text> {category.name}</Text>
                })}
            </View>
        );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
