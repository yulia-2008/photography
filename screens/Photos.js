import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, StyleSheet} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

export default function Photos({navigation, route}) {

    const category = route.params.category    // category is an object {name: "Landscape",  key: 1, photos: []},
    // category.photos.sort((a, b) => {
    //     return b.id - a.id;  // it is done in parent component - Categories
    // });
   
    return (
    <View style={styles.container}> 
        <FlatList 
            data={category.photos}
            numColumns={2}
            renderItem={({item}) => <TouchableOpacity  
                                        style={styles.card}
                                        onPress={() => navigation.navigate("PhotoDetails", {
                                            photos: category.photos,
                                            photoObj: item 
                                            }) 
                                        } >                                                   
                    <Image source={{uri: item.attached_image}} style={styles.image}/>
                    <View style={styles.icon}>
                        <AntDesign name="like2" size={24} color="black" />
                    </View> 
                </TouchableOpacity>   
                }        
                />
    </View>  
    //  In React Navigation 5.x, the navigation prop split into 2 props: navigation, route
    //  No more getParam() method, it's equivalent to: route.params          
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'             
    },
    card: {                                
        margin: 10,
        borderWidth: 5,
        borderRadius: 10, 
        borderColor: 'silver',                                     
    },
    image: {
        width: 170,                                      
        height: 90,
        position: "relative",
        top: 0,
        left: 0,
         
    },
    icon: {
        position: "absolute",
        top: "70%",
        right: "2%",
    }
  });




