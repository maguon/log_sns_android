import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'

//我的评论
const CommentList = props => {
    return (
        <View>
            <Text>CommentList</Text>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        commentListReducer: state.commentListReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getCommentList: () => {
        dispatch(reduxActions.commentList.getCommentList())
    },
    getCommentListWaiting: () => {
        dispatch(reduxActions.commentList.getCommentListWaiting())
    },
    getCommentListMore: () => {
        dispatch(reduxActions.commentList.getCommentListMore())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)