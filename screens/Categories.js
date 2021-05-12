import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity, StyleSheet} from "react-native";


export default function Categories({navigation}) {
    
    const [categories, updateCategories] = useState([
        {name: "Landscape",  key: 1},
        {name: "Street Photo", key:2},
        {name: "Portrait",  key: 3},
        {name: "Architecture",  key: 4},
        {name: "Black & White",  key: 5},
        {name: "Macro",  key: 6}, 
        {name: "People",  key: 7}
    ])
    
        return (
            <View style={styles.container}>
                <FlatList 
                    style={{alignSelf: 'center'}}
                    data={categories}
                    numColumns={2}
                    renderItem={({item}) =>
                        <TouchableOpacity   style={styles.category}
                                            onPress={() => navigation.navigate("Photos", {category: item})} >
                            <Text>{item.name}</Text>
                            <Image source={require('./1.jpg')} style={styles.image}/>   
                            {/* image should be in the same folder */}
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
