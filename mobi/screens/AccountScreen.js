import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/apiRequest";
import { useNavigation } from "@react-navigation/native";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  InboxIcon,
  PhoneArrowDownLeftIcon,
  PhoneIcon,
} from "react-native-heroicons/outline";

const AccountScreen = () => {
  const user = useSelector((state) => state.user.login.currentUser);
  const token = user.accessToken;

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handlePress = () => {
    logoutUser(token, user, dispatch);
  };
  return (
    <SafeAreaView className="">
      <View className="justify-center items-center pb-2">
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: "https://burgerking.vn/skin/frontend/bk2/default/images/BK_LOGO_ICON.png",
          }}
        />
      </View>
      <View>
        <Text className="text-center text-gray-700 py-5 text-3xl font-bold">
          Hồ sơ cá nhân
        </Text>
      </View>
    

      {/* <TouchableOpacity
        style={{ elevation: 4, borderRadius: 5 }}
        className=" mb-4 mx-3 bg-white flex justify-center h-16"
      >
        <Text className="pl-4 text-xl text-sky-700 font-semibold ">
          Tài khoản
        </Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        onPress={() => navigation.navigate("Receipt")}
        style={{ elevation: 4, borderRadius: 5 }}
        className="mb-4 mx-3 bg-white flex justify-center h-16"
      >
        <Text className="pl-4 text-xl text-yellow-600 font-semibold ">
          Xem hóa đơn
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("OrderPlaced")}
        style={{ elevation: 4, borderRadius: 5 }}
        className="mb-4 mx-3 bg-white flex justify-center h-16"
      >
        <Text className="pl-4 text-xl  text-yellow-600 font-semibold ">
          Các đơn hàng đã hoàn thành
        </Text>
      </TouchableOpacity>

      <View
        style={{ elevation: 4, borderRadius: 5 }}
        className=" flex-row  items-center mb-4 mx-3 bg-white flex justify-between h-16"
      >
        <Text className="pl-4 text-xl  text-yellow-600 font-semibold">
          Liên hệ để được giúp đỡ: (1900 9999)
        </Text>
        <Text className="pl-4 text-xl  text-yellow-600 font-semibold">
         
        </Text>
        {/* <TouchableOpacity className=" border-2 border-sky-700 flex justify-center items-center w-10 h-10 rounded-full">
          <PhoneArrowDownLeftIcon color={"#1D4ED8"} size={25} />
        </TouchableOpacity>
        <TouchableOpacity className=" border-2 border-sky-700 flex justify-center items-center w-10 h-10 rounded-full">
          <EnvelopeIcon size={25} color={"#1D4ED8"} />
        </TouchableOpacity> */}
        {/* <TouchableOpacity className=" border-2 border-sky-700 flex justify-center items-center w-10 h-10 rounded-full">
          <Text>1900 9999 </Text>
        </TouchableOpacity> */}
      </View>
      <TouchableOpacity
        onPress={() => handlePress()}
        style={{ elevation: 4, borderRadius: 5 }}
        className="mb-4 mx-3 bg-white flex justify-center h-16"
      >
        <Text className="pl-4 text-xl text-yellow-600 font-semibold ">
          Đăng xuất
        </Text>
      </TouchableOpacity>
      <View className="justify-center items-center">
        
        <Text className="font-semibold">Phiên bản: 1.0.1</Text>
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;
