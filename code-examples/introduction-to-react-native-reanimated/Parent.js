import * as React from "react"
import { View } from "react-native"
import { Header } from "./Header"
import { List } from "./List"
import Animated from "react-native-reanimated"

export const Parent = () => {
  // Create an "y" animated value and pass it down to the children
  const y = new Animated.Value(0)

  return (
    <View>
      <Header y={y} />
      <List y={y} />
    </View>
  )
}
