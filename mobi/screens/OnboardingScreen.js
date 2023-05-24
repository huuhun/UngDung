import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";

import React, { useLayoutEffect } from "react";
import {useNavigation } from "@react-navigation/native";
import AppStack from "../navigation/AppStack";
import { useSelector } from "react-redux";

const OnboardingScreen = () => {

  const user = useSelector((state)=>state.user?.login.currentUser)
  const loading = useSelector((state)=>state.user?.login.isFetching)
  const fail = useSelector((state)=>state.user.login.error)
  const navigation = useNavigation();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  if(fail){
    console.log("login that bai");
  }
  return (
   <>
    {
      !user ? (
        <SafeAreaView className="">
      <View>
        <Image
          className="object-right relative"
          source={{
            uri: "https://media.istockphoto.com/id/959839190/vector/vector-hand-drawn-seamless-pattern-of-burgers-tomato-and-onion-hand-drawn-set-of-fast-food.jpg?s=612x612&w=0&k=20&c=pUA7RFyXZi24zUWL3ToCAoHVHS9Xa_QH4wGDnobytdM=",
          }}
          style={{ width: 450, height: 700, left: -15 }}
        />
        <TouchableOpacity
          className=" bg-yellow-300 h-14 w-80 absolute bottom-20 ml-11 rounded-xl flex-row justify-around "
          onPress={()=>navigation.navigate('Login')}
       >
          <Text className="text-center pt-3 text-white-400 text-xl font-norm italic">
           ĐĂNG NHẬP TẠI ĐÂY
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
      ) : ( <AppStack />)
    }</>
  );
};

export default OnboardingScreen;
