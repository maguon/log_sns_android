import React from 'react'
import { View, Text } from 'react-native'

import Home from './views/home/Home'
// import PersonCenter from './views/personCenter/PersonCenter'
import RouterApp from './routers/App'


const App = props => {
    return (
        <View style={{ flex: 1 }}>
            {/* <PersonCenter /> */}
            <RouterApp />
        </View>
    )
}

export default App