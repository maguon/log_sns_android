import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'

//我的评论
const MyCommentList = props => {
    return (
        <View>
            <Text>MyCommentList</Text>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        myCommentListReducer: state.myCommentListReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getCommentList: () => {
        dispatch(reduxActions.myCommentList.getCommentList())
    },
    getCommentListWaiting: () => {
        dispatch(reduxActions.myCommentList.getCommentListWaiting())
    },
    getCommentListMore: () => {
        dispatch(reduxActions.myCommentList.getCommentListMore())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MyCommentList)