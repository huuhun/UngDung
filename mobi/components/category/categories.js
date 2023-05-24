import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './categoryCard'

const Categories = () => {
  return (
    <ScrollView 
    className=""
    contentContainerStyle={{paddingHorizontal:15,
    paddingTop:10}}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
      {/* categoryCard */}
      <CategoryCard imgUrl="https://burgerking.vn/media/catalog/product/cache/1/small_image/316x/9df78eab33525d08d6e5fb8d27136e95/b/u/burger-salmon_new__1.jpg" title=""/>
      <CategoryCard imgUrl="https://burgerking.vn/media/catalog/product/cache/1/small_image/316x/9df78eab33525d08d6e5fb8d27136e95/d/e/deluxe_salmon_burger_new__1.jpg" title=""/>
      <CategoryCard imgUrl="https://burgerking.vn/media/catalog/product/cache/1/small_image/316x/9df78eab33525d08d6e5fb8d27136e95/e/x/ex_cheese_whp_jr.jpg" title=""/>
      <CategoryCard imgUrl="https://burgerking.vn/media/catalog/product/cache/1/small_image/316x/9df78eab33525d08d6e5fb8d27136e95/7/-/7-burger-b_-n_ng-whopper-jr_1.jpg" title=""/>
      <CategoryCard imgUrl="https://burgerking.vn/media/catalog/product/cache/1/small_image/316x/9df78eab33525d08d6e5fb8d27136e95/7/-/7-burger-b_-n_ng-whopper-jr_1.jpg" title=""/>

    </ScrollView>
  )
}

export default Categories