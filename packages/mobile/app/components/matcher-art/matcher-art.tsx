import React, { FunctionComponent as Component } from "react"
import { View } from "react-native"
import { Text } from "../"
// import { observer } from "mobx-react-lite"
// import { useStores } from "../../models"
import { matcherArtStyles as styles } from "./matcher-art.styles"

export interface MatcherArtProps {}

/**
 * This is a React functional component, ready to 
 *
 * Component description here for TypeScript tips.
 */
export const MatcherArt: Component<MatcherArtProps> = props => {
  // Note: if you want your componeobservernt to refresh when data is updated in the store,
  // wrap this component in `` like so:
  // `export const MatcherArt = observer(function MatcherArt { ... })`
  
  // Enable this line to retrieve data from the rootStore (or other store)
  // const rootStore = useStores()
  // or
  // const { otherStore, userStore } = useStores()

  return useObserver(() => (
    <View style={styles.WRAPPER}>
      <Text>Hi Func</Text>
    </View>
  ))
}
