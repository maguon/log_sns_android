import React from 'react'
import { View, Text } from 'react-native'
import {Container} from 'native-base'

import Login from './views/login/Login'
import RetrievePassword from './views/retrievePassword/RetrievePassword'
import UserRegister from './views/userRegister/UserRegister'
import Home from './views/home/Home'


const App = props => {
    return (
        <Container>
            {/* <Login/> */}
            {/* <RetrievePassword/> */}
            <Home />
        </Container>
    )
}

export default App