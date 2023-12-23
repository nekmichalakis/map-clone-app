import { GestureHandlerRootView } from 'react-native-gesture-handler'
import MainNavigator from './src/navigation/MainNavigator'

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MainNavigator />
    </GestureHandlerRootView>
  )
}

export default App