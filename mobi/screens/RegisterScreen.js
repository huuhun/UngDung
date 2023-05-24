import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {ArrowLeftIcon, ChevronLeftIcon} from 'react-native-heroicons/outline'
import { useState } from "react";
import { registerUser } from "../redux/apiRequest";
import { useDispatch } from "react-redux";
const RegisterScreen = () => {

    const [fullName,setFullName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const dispatch = useDispatch()
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

    const handlePress = () =>{
        if(password === confirmPassword){
            const newUser = {
                username:fullName,email,password,phone
            }
            registerUser(newUser,dispatch)
            navigation.navigate('Login')
        }else{
            console.log("k trung password");
        }

    }
  return (
    <SafeAreaView className="flex-1 bg-white ">
      <KeyboardAvoidingView behavior="height" className="">
        <ScrollView className=" h-full ">
          <View className="items-center py-7 flex-row justify-between ">
            <ChevronLeftIcon onPress={()=>navigation.goBack()} color={"#A0AEC0"} size={20}/>
            <Text className="text-3xl font-semibold text-yellow-500">Tạo tài khoản</Text>
            <Text></Text>
            
          </View>
            <View className="mx-6">
              <Text className="text-gray-500 pb-2">Họ tên</Text>
              <TextInput
                onChangeText={(e)=>setFullName(e)}
                className=" mb-2 p-3 border font-medium border-gray-300"
                placeholder="Nhập họ tên"
              />
            </View>
            <View className="mx-6">
              <Text className="text-gray-500 pb-2">SĐT</Text>
              <TextInput
                onChangeText={(e)=>setPhone(e)}
                className=" mb-2 p-3 border font-medium border-gray-300"
                placeholder="Số điện thoại"
              />
            </View>
            <View className="mx-6">
              <Text className="text-gray-500 pb-2">Email</Text>
              <TextInput
                onChangeText={(e)=>setEmail(e)}
                className=" mb-2 p-3 border font-medium border-gray-300"
                placeholder="Nhập email"
              />
            </View>

            <View className="mx-6">
              <Text className="text-gray-500 pb-2 ">Mật khẩu</Text>
              <TextInput
                onChangeText={(e)=>setPassword(e)}
                className="mb-2 p-3 border border-gray-300 font-medium"
                keyboardType="password"
                placeholder="Nhập mật khẩu"
                secureTextEntry={true}
              />
            </View>
            <View className="mx-6">
              <Text className="text-gray-500 pb-2">Nhập lại mật khẩu</Text>
              <TextInput
                onChangeText={(e)=>setConfirmPassword(e)}
                className="mb-2 p-3 border border-gray-300 font-medium"
                keyboardType="password"
                placeholder="Nhập lại mật khẩu"
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity
              onPress={()=>handlePress()}
              className="mx-6 mt-3 flex"
            >
              <Text className="text-xl text-center  bg-yellow-500 text-white pt-4 pb-4">
                TẠO TÀI KHOẢN
              </Text>
            </TouchableOpacity>
          </ScrollView>
      
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
