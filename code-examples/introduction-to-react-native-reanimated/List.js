import * as React from "react"
import { Image } from "react-native"
import { onScroll } from "react-native-redash"
import Animated from "react-native-reanimated"

export const List = props => {
  return (
    // Use onScroll to update the y value
    <Animated.ScrollView
      onScroll={onScroll({ y: props.y })}
      scrollEventThrottle={16}
      contentContainerStyle={{ paddingTop: 50 }}
    >
      {Array.from({ length: 10 }, (v, k) => (
        <Image
          style={{ width: "100%", height: 200, marginTop: 50 }}
          key={k + ""}
          source={{ uri: "https://picsum.photos/200/300" }}
        />
      ))}
    </Animated.ScrollView>
  )
}
