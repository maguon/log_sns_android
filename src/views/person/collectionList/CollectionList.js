import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'


//我的收藏
const CollectionList = props => {
    return (
        <View>
            <Text>CollectionList</Text>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        collectionListReducer: state.collectionListReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getCollectionList: () => {
        dispatch(reduxActions.collectionList.getCollectionList())
    },
    getCollectionListWaiting: () => {
        dispatch(reduxActions.collectionList.getCollectionListWaiting())
    },
    getCollectionListMore: () => {
        dispatch(reduxActions.collectionList.getCollectionListMore())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionList)