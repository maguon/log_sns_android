import React from 'react'
import { ScrollView, View } from 'react-native'
import { Card, ReplyContent, ReplyHeader } from '../../../components/card'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'
import globalStyles from '../../../GlobalStyles'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'

const CommentOnMeList = props => {
    return (
        <View style={globalStyles.container}>
            <ScrollView style={{ flex: 1 }}>
                <Card style={{ backgroundColor: '#fff' }}>
                    <ReplyHeader />
                    <ReplyContent />
                </Card>
                <WhiteSpace size='md' />

                <Card style={{ backgroundColor: '#fff' }}>
                    <ReplyHeader />
                    <ReplyContent />
                </Card>
                <WhiteSpace size='md' />

                <Card style={{ backgroundColor: '#fff' }}>
                    <ReplyHeader />
                    <ReplyContent />
                </Card>
                <WhiteSpace size='md' />

                <Card style={{ backgroundColor: '#fff' }}>
                    <ReplyHeader />
                    <ReplyContent />
                </Card>
                <WhiteSpace size='md' />

                <Card style={{ backgroundColor: '#fff' }}>
                    <ReplyHeader />
                    <ReplyContent />
                </Card>
                <WhiteSpace size='md' />

            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        commentOnMeListReducer: state.commentOnMeListReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getCommentOnMeList: () => {
        dispatch(reduxActions.commentOnMeList.getCommentOnMeList())
    },
    getCommentOnMeListMore: () => {
        dispatch(reduxActions.commentOnMeList.getCommentOnMeListMore())
    },
    getCommentOnMeListWaiting: () => {
        dispatch(reduxActions.commentOnMeList.getCommentOnMeListWaiting())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentOnMeList)