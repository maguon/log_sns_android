import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import homeReducer from './views/home/homeReducer'
import initReducer from './views/init/initReducer'
import loginReducer from './views/auth/login/loginReducer'
import retrievePasswordReducer from './views/auth/retrievePassword/retrievePasswordReducer'
import userRegisterReducer from './views/auth/userRegister/userRegisterReducer'

export default combineReducers({
    formReducer,
    homeReducer,
    initReducer,
    loginReducer,
    retrievePasswordReducer,
    userRegisterReducer
})