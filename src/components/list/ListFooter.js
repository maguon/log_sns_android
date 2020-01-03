import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import globalStyles, { styleColor } from '../../GlobalStyles'
import { ActivityIndicator } from '@ant-design/react-native'

export default props => {
    const { title = '加载中...' } = props
    return (
        <View style={styles.footerContainer}>
            <ActivityIndicator color={styleColor} animating={true} size='small' text={title} />
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center'
    }
})