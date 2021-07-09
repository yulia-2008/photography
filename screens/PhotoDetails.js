import React, {useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity, StyleSheet} from "react-native";
// import Swiper from 'react-native-swipe-image';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


export default function PhotoDetails({route}) {

   
    const photos = route.params.photos 
    const photoObject = route.params.photoObj
    const [currentPhoto, setCurrentPhoto] = useState(photoObject)
    const rightAction = () => {
        
        // console.log('Swipe from right');
        setCurrentPhoto(photos[1])     
      }
      const leftAction = () => {
        // console.log('Swipe from left');
        setCurrentPhoto(photos[0]) 
      }

      const onSwipeUp = (statee) => {
       console.log("UP", statee)
      }
     
      const onSwipeDown = () => {
        console.log("down")
      }
     
      const onSwipeLeft = () => {
       console.log("left")
      }
     
      const onSwipeRight = () =>  {
        console.log("right")
      }
    
    return (
            <View style={styles.container}> 
                <GestureRecognizer
         onSwipe={console.log("onswipe")}
        onSwipeUp={(state)=>console.log(state)}
        onSwipeDown={()=> console.log("down)")}
        onSwipeLeft={() => onSwipeLeft}
        onSwipeRight={() => onSwipeRight}
        config={{
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80,
          }}
        style={{
          flex: 1
        }}
        ></GestureRecognizer>



                {/* <Image style={styles.image} source={{uri: photoObject.attached_image}} />  */}
                <Image style={styles.image} source={{uri: currentPhoto.attached_image}} /> 
                <Text style={{textAlign: 'center'}}>Like?</Text>
                <Text style={{textAlign: 'center'}}>Descriprion: {currentPhoto.description}</Text>  
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
    image: {
        width: 400,                                      
        height: 300,
        borderWidth: 5,
        borderRadius: 10, 
        borderColor: 'silver'  
    }
  });
