import React from 'react';
import { View, StyleSheet } from 'react-native'


const NavBarContainer = props => {
    const { style = styles.navBar, children } = props
    // console.log('props', props)
    return (
        <View style={[style]}>
            {children}
        </View>
    )
}

export default NavBarContainer

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#777'
    }
})