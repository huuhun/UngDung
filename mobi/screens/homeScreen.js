import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Categories from '../components/category/categories';
import FeaturedRow from '../components/featuredRow/featuredRow';
import Slider from '../components/slider/Slider';
import { useSelector } from 'react-redux';
const HomeScreen = () => {
    const user = useSelector((state)=>state.user.login?.currentUser)
    // const route = useRoute();
    // const { numberTable } = route.params
    // console.log("numberTable");

    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <SafeAreaView className="bg-white pt-4 ">
            {/*header */}
            <View className="flex-row pb-3 items-center  justify-between mx-4">
                 <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/550px-Burger_King_2020.svg.png' }} />
                <Text>{user.username}</Text>
                {/* <View className="flex-row items-center">
                    <Text className="font-bold text-xl ">Pizza Domilo!</Text>
                </View> */}
            </View>

            {/* Body */}
            <ScrollView className="bg-gray-100 mt-0" contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Component */}
                <Slider />
                <Categories />

                {/* Featured Row */}
                <FeaturedRow
                    id="123"
                    title="HÃY LỰA CHỌN CÁC MÓN ĂN CỦA NHÀ HÀNG CHÚNG TÔI"
                    description=""
                    featureCategory="featured"
                />

                <View className="flex-row mt-4 items-center justify-between px-4 ">
                    <Text className="font-bold text-xl text-yellow-500">Liên hệ với BurgerKing</Text>
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate('Cart') }} className=" flex-row mt-4 items-center justify-between mx-4 bg-white p-3"  >
                    <Text className="text-yellow-500 font-normal">Cần tư vấn hãy gọi ? </Text>
                    <Text className="font-bold text-yellow-500">1900 9999</Text>
                </TouchableOpacity>
                <TouchableOpacity className=" flex-row mt-4 items-center justify-between mx-4 bg-white p-3"  >
                    {/* <Text className="text-yellow-500 font-normal">Điều khoản của chúng tô\ </Text> */}

                </TouchableOpacity>
                <Image source={{ uri: 'https://dominos.vn/img/credentials.png' }} />
            </ScrollView>
            {/* Footer */}

        </SafeAreaView>
    );
};

export default HomeScreen;
