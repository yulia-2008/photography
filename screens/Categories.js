import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity, StyleSheet} from "react-native";


export default function Categories({navigation}) {
    

    const [categories, updateCategories] = useState([
        {name: "Landscape", picture: "Landscape", key: 1},
        {name: "Street Photo", picture: "Landscape", key:2},
        {name: "Portrait", picture: "Landscape", key: 3},
        {name: "Architecture", picture: "Landscape", key: 4},
        {name: "Black & White", picture: "Landscape", key: 5},
        {name: "Macro", picture: "Landscape", key: 6}, 
        {name: "People", picture: "Landscape", key:7}
    ])
    
        return (
            <View style={styles.container}>
                <FlatList 
                    style={{alignSelf: 'center'}}
                    data={categories}
                    numColumns={2}
                    renderItem={ ({item}) =>
                        <TouchableOpacity   style={styles.category}
                                            onPress={() => navigation.navigate(item.name, item)} >
                            <Text>{item.name}</Text>
                            <Image source={require('./1.jpg')} style={styles.image}/> 
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
    },
    image: {
        width: 150,                                      
        height: 100
    }
  });
