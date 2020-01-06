import React from 'react'
import { View, Text } from 'react-native'

import RouterApp from './routers/App'
import { Provider} from '@ant-design/react-native'


const App = props => {
    return (
        <Provider style={{ flex: 1 }}>
            <RouterApp />
        </Provider>
    )
}

export default App