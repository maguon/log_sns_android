import React from 'react'
import { View, Text } from 'react-native'

import Login from './views/login/Login'
import RetrievePassword from './views/retrievePassword/RetrievePassword'
import UserRegister from './views/userRegister/UserRegister'
import Home from './views/home/Home'
// import PersonCenter from './views/personCenter/PersonCenter'
import RouterApp from './routers/App'


const App = props => {
    return (
        <View style={{ flex: 1 }}>
            {/* <Login/> */}
            {/* <RetrievePassword/> */}
            {/* <Home /> */}
            {/* <PersonCenter /> */}
            <RouterApp />
        </View>
    )
}

export default App