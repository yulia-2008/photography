import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from "react-native";
import Landscape from './photoLibrary/Landscape.JPG'

export default function Categories({navigation}) {

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
                <FlatList 
                    style={{alignSelf: 'center'}}
                    data={categories}
                    numColumns={2}
                    renderItem={ ({item}) =>
                        <TouchableOpacity   style={styles.category}
                                            onPress={() => navigation.navigate("Photos", item)} >
                            <Text>{item.name}</Text>
                        </TouchableOpacity>   
                    }         
                />
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
    category: { 
        borderWidth: 1, 
        width: 150,                                
        margin: 10, 
        height: 100                                                         
    }   
  });
