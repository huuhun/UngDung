import { View, Text, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Product from '../components/product/Product';
import { ScrollView } from 'react-native';
import MenuCategory from '../components/menuCategory/MenuCategory';
import RestaurantCard from '../components/featuredRow/RestaurantCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../redux/apiRequest';


const MenuScreen = () => {
  const dataProduct = useSelector((state)=>state.product.products.allProduct)
  const [type,setType] = useState('pizza')

  const dispatch  = useDispatch()
  useEffect(()=>{
    getAllProduct(dispatch,type)
  },[type])
    return (
        <SafeAreaView className="">
            {/* header */}
            <View className="justify-center items-center bg-white border-b border-gray-300 pb-2">
                <Image
                    style={{ width: 100, height: 100 }}
                    source={{
                        uri: 'https://burgerking.vn/skin/frontend/bk2/default/images/BK_LOGO_ICON.png',
                    }}
                />
                <MenuCategory setType={setType} />
            </View>

            {/* thay doi */}
            <FlatList
                    className="mt-2 pl-4 mb-28"
                    data={dataProduct}
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <RestaurantCard data={item} />}
                ></FlatList>
        </SafeAreaView>
    );
};

export default MenuScreen;
