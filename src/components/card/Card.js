import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'


const Card = props => {
    // console.log('props', props)
    const { children ,style=styles.card} = props
    return (
        <View style={style}>
            {children}
        </View>
    )
}

export default Card

const styles= StyleSheet.create({
    card:{
        borderColor: '#ddd', borderWidth: 0.5, borderRadius: 10 
    }
})