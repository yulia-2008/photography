import React, {useState} from 'react';
import {View, ScrollView, Text, Image, FlatList, TouchableOpacity, StyleSheet} from "react-native";
import { Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 



export default function PhotoDetails({route}) {

   
    const photos = route.params.photos 
    const photoObject = route.params.photoObj
    let touchX;
    const [currentPhoto, setCurrentPhoto] = useState(photoObject)

    const swipeLeft = () => {       
        let current = photos.find(item => item.id === currentPhoto.id)
        let indexOfCurrent = photos.indexOf(current)
       
        if (indexOfCurrent !== photos.length-1) {
            let previous = photos[indexOfCurrent+1]
            setCurrentPhoto(previous)
        }
         // if the photo is the last swiping has no effect      
    }

    const swipeRight = () => {       
        let current = photos.find(item => item.id === currentPhoto.id)
        let indexOfCurrent = photos.indexOf(current)

        if (indexOfCurrent !== 0) {
            let next = photos[indexOfCurrent-1]
            setCurrentPhoto(next)
        } 
        // if the photo is the first swiping has no effect 
    }
   
    
    return (
        <ScrollView>
            <View   onTouchStart={e=> touchX = e.nativeEvent.pageX }
                    onTouchEnd={e => {
                        if (touchX - e.nativeEvent.pageX > 10){
                            swipeLeft()
                            }
                        else if (touchX - e.nativeEvent.pageX < -10) {
                            swipeRight()
                            }
                    }} 
                    
                    >
                <Image style={styles.image} source={{uri: currentPhoto.attached_image}} />    
            </View> 
            <View style={styles.description}>
                <Text style={{fontWeight: "bold", fontSize: 20}}>Descriprion</Text> 
                <AntDesign name="like2" size={30} color="black" />
            </View>
            <Text style={{left: "4%"}}>{currentPhoto.description}</Text>
    </ScrollView>       
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'             
    },
    image: {
        width: Dimensions.get('window').width,                                      
        height: 500,  
    },
    description: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "4%",
    }
  });
