import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'

//我参与的投票
const VoteList = props => {
    return (
        <View>
            <Text>VoteList</Text>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        voteListReducer: state.voteListReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getVoteList: () => {
        dispatch(reduxActions.voteList.getVoteList())
    },
    getVoteListWaiting: () => {
        dispatch(reduxActions.voteList.getVoteListWaiting())
    },
    getVoteListMore: () => {
        dispatch(reduxActions.voteList.getVoteListMore())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(VoteList)