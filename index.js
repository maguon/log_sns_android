import { AppRegistry, TextInput, Text } from 'react-native'
import Android_main from './src/Android_main'
import Camera from './src/views/camera/Camera'
import { name as appName } from './app.json'

TextInput.defaultProps = Object.assign({}, TextInput.defaultProps, { defaultProps: false })
Text.defaultProps = Object.assign({}, Text.defaultProps, { allowFontScaling: false })

console.disableYellowBox = true

AppRegistry.registerComponent(appName, () => Camera)
