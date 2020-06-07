import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'


const BackLeft = props => {
    const { style = styles.left } = props
    return (
        <TouchableOpacity style={style} onPress={() => {
            props.navigation.pop()
        }}>
            <Ionicons name='ios-arrow-back' color='#000' style={{fontSize:20}}/>
        </TouchableOpacity>
    )
}

export default BackLeft

const styles = StyleSheet.create({
    left: {
        flex: 1,
        marginLeft: 15
    }
})