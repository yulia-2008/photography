import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, StyleSheet} from "react-native";

export default function Photos({route}) {

    const category = route.params.category    // category is an object {name: "Landscape",  key: 1, photos: []},
    // const urlsArray = category.photos.map((photoObject) => photoObject.attached_image.split('?')[0])
    return (
    <View style={styles.container}>
        <FlatList 
            data={category.photos}
            numColumns={2}
            renderItem={({item}) => <TouchableOpacity    style={styles.category}
                                    // onPress={() => navigation.navigate("PhotoDetails", {photoObj: item})} 
                                    // need to add one more screen for PhotoDetails
                                    >
                    <Text style={{textAlign: 'center'}}>Like?</Text>
                    <Image source={{uri: item.attached_image}} style={styles.image}/> 
                    {console.log("lll", item)}  
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
    category: {                                
        margin: 10,                                      
    },
    image: {
        width: 170,                                      
        height: 90,
        borderWidth: 5,
        borderRadius: 10, 
        borderColor: 'silver'  
    }
  });




