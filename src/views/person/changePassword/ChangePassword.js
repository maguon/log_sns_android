import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import TextBox from '../../../components/inputs/TextBox'

class ChangePassword extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>ChangePassword</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        aboutReducer: state.aboutReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getAbout: () => {
        dispatch(reduxActions.about.getAbout())
    }
})

export default ChangePassword