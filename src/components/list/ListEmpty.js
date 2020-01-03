import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import globalStyles, { styleColor } from '../../GlobalStyles'

export default props => {
    const { title = '暂无记录' } = props
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 80 }}>
            <Text style={globalStyles.midText}>{title}</Text>
        </View>
    )
}
