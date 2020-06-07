import React from 'react'
import { View, Text } from 'react-native'

import RouterApp from './routers/App'
import { Provider } from '@ant-design/react-native'
import NavigationService from './routers/NavigationService'

const App = props => {
    return (
        <Provider style={{ flex: 1 }}>
            <RouterApp ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef)
            }} />
        </Provider>
    )
}

export default App