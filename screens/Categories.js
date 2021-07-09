import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity, StyleSheet} from "react-native";


export default function Categories({navigation}) {
    
    const [categories, updateCategories] = useState([
        {name: "Landscape",  key: 1, photos: []},
        {name: "Street Photo", key:2, photos: []},
        {name: "Portrait",  key: 3, photos: []},
        {name: "Architecture",  key: 4, photos: []},
        {name: "Black & White",  key: 5, photos: []},
        {name: "Macro",  key: 6, photos: []}, 
        {name: "People",  key: 7, photos: []}
    ])
    useEffect(() => getPhotos(), [])

    const getPhotos = () => {
        fetch('https://photoap-backend.herokuapp.com/photos')  // got toket in response !
            .then(response => response.json())
            .then(resp => handlePhotos(resp))
    }

    const handlePhotos = (photoArray) => {
        // method send every photo object received from backend to the appropriate category

        let categoriesCopy = [...categories]

        photoArray.map((photoObject) => { 
            let newObj = Object.assign({}, photoObject, {"attached_image": photoObject.attached_image.split('?')[0] }) 
              // "attached_image" string need to be modified, I will fix it later on backend 
            let foundCategory = categoriesCopy.find((categ) => categ.name === photoObject.category )          
            foundCategory.photos.push(newObj)                   
        })
        updateCategories(categoriesCopy)
    }
    
        return (
            <View style={styles.container}>
                <FlatList 
                    data={categories}
                    numColumns={2}
                    renderItem={({item}) =>
                        <TouchableOpacity   style={styles.category}
                                            onPress={() => navigation.navigate("Photos", {category: item})} >
                            <Text style={{textAlign: 'center'}}>{item.name}</Text>
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
