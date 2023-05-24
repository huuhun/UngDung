import { View, Text, Dimensions, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'

const Slider = () => {
    const [imgActive,setImgActive] = useState(0)
    const images = [
        'https://burgerking.vn/media/banner/image//b/a/banner_web_-_trang_chu_-_tet.jpg',
        'https://burgerking.vn/media/banner/image//b/a/banner_home.jpg',
        'https://images.foody.vn/res/g5/48335/prof/s576x330/image-a7a205a9-221205183010.jpeg',
    ]
    const WIDTH = Dimensions.get('window').width
    const HEIGHT = Dimensions.get('window').height

    const onchange = (nativeEvent)=>{
        if(nativeEvent){
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
            if(slide != imgActive){
                setImgActive(slide)
            }
        }
    }

  return (
    <View className="" style={{width:WIDTH,height:HEIGHT*0.25}} >
      <ScrollView 
      
        onScroll={({nativeEvent}) =>onchange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={{width:WIDTH,height:HEIGHT*0.25}}
      >
        {
            images.map((e,index)=><Image 
            key={e}
            resizeMode='stretch'
            style={{width:WIDTH,height:HEIGHT*0.25}}
            source={{uri:e}}
            />)
        }
      </ScrollView>
      <View className="absolute bottom-0 flex-row self-center">
        {
            images.map((e,index)=>
                 <Text
                 key={e}
                //  style={imgActive == index ?  text-white"}
                className={imgActive == index ? "m-3 text-black": "m-3 text-white"}
                 >●</Text>
            )
        }
      </View>
    </View>
  )
}

export default Slider