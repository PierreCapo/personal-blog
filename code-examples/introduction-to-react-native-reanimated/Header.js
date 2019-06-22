import * as React from "react"
import { Text } from "react-native"
import Animated from "react-native-reanimated"

const HEADER_HEIGHT = 60
const { diffClamp, interpolate } = Animated

export const Header = props => {
  const diffClampY = diffClamp(props.y, 0, HEADER_HEIGHT)
  const translateY = interpolate(diffClampY, {
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
  })
  return (
    <Animated.View
      style={{
        height: HEADER_HEIGHT,
        position: "absolute",
        top: 0,
        width: "100%",
        zIndex: 2,
        backgroundColor: "#ffb74d",
        justifyContent: "center",
        alignItems: "center",
        transform: [{ translateY: translateY }],
      }}
    >
      <Text>Header</Text>
    </Animated.View>
  )
}

