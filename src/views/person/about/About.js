import React, { Component } from 'react'
import { View, Text, InteractionManager } from 'react-native'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'


class About extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(this.props.getAbout)
    }

    render() {
        const { aboutReducer } = this.props
        return (
            <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
                <View style={{ width: 96, height: 96, borderWidth: 1, marginVertical: 50 }} >
                    <Text>logo</Text>
                </View>
                <View style={{ marginBottom: 20, alignSelf: 'flex-start' }}>
                    <Text>&#12288;&#12288;{aboutReducer.data.aboutInfo.info ? `${aboutReducer.data.aboutInfo.info}` : ''}</Text>
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Text>联系电话：{aboutReducer.data.aboutInfo.phone ? `${aboutReducer.data.aboutInfo.phone}` : ''}</Text>
                </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(About)