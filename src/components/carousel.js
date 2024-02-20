import { FlatList, Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";

const Carousel = () =>{
    const flatlistRef = useRef();
    // Get Dimensions
    const screenWidth = Dimensions.get("window").width;
    const[activeIndex, setActiveIndex] = useState(0);

    // Auto Scroll
    useEffect(()=>{
        //if activeIndex === last index --> jump back to the first
        // else activeIndex +1
        let interval = setInterval(()=>{
           if(activeIndex === carouselData.length - 1){
            flatlistRef.current.scrollToIndex({
                index: 0,
                animation: true,
            });
           } 
           else{
            flatlistRef.current.scrollToIndex({
                index: activeIndex + 1,
                animation: true,
            });  
           }
        }, 2000);
        return()=>clearInterval(interval);
    });


    const getItemLayout = (data, index)=>({
        length: screenWidth,
        offset: screenWidth * index,
        index: index,
    })
    // Data for carousel
    const carouselData = [
        {
            id: "01",
            image: require('../imgs/Birds/BirdFlying.jpg'),
        },
        {
            id: "02",
            image: require('../imgs/Birds/BirdWater.png'),
        },
        {
            id: "03",
            image: require('../imgs/Birds/Quetzal.jpg'),
        },
        {
            id: "04",
            image: require('../imgs/Birds/Pigeons.png'),
        },
    ]
    //Display Images
    const renderItem = ({item , index})=>{
        <View>
            <Image source={item.image} style={{height: 200, width: screenWidth}}/>
        </View>
    }

    const handleScroll = ()=>{
        // Get the scroll position
        const scrollPosition = event.nativeEvent.contentOffset.x;
        //Get The index of the current active item
        const index = scrollPosition / screenWidth;
        // Update the index
        setActiveIndex(index);
    }

const renderDotIndicators = ()=>{
    return(
        carouselData.map((dot, index)=>{
            //if the active index === index
            if(activeIndex === index){
                return(
                    <View style={{
                    backgroundColor: 'black', 
                    height: 10, 
                    width: 10, 
                    borderRadius: 5,
                    marginHorizontal: 6,
                    }}> 
                    </View>
                )
            }
            else{
                return(
                    <View
                    key={index} 
                    style={{backgroundColor: 'grey', 
                    height: 10, 
                    width: 10, 
                    borderRadius: 5,
                    marginHorizontal: 6,
                    }}>
                    </View>
                )
            }
        })
    ) 
}

return (
    <View>
        <FlatList 
        data={carouselData} 
        ref={flatlistRef}
        getItemLayout={getItemLayout}
        renderItem={renderItem} 
        keyExtractor={(item)=>item.id}
        horizontal={true} 
        pagingEnabled={true}
        onScroll={handleScroll}
        />
        <View style={{flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30}}
    >{renderDotIndicators()}</View>
        
    </View>
);

};

export default Carousel;

const styles = StyleSheet.create({});

