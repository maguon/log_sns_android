import React from 'react'
import { ScrollView, View } from 'react-native'
import { Card, ReplyContent, ReplyHeader } from '../../../components/card'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'
import globalStyles from '../../../GlobalStyles'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'

const LikeMeList = props => {
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
        likeMeListReducer: state.likeMeListReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getLikeMeList: () => {
        dispatch(reduxActions.likeMeList.getLikeMeList())
    },
    getLikeMeListMore: () => {
        dispatch(reduxActions.likeMeList.getLikeMeListMore())
    },
    getLikeMeListWaiting: () => {
        dispatch(reduxActions.likeMeList.getLikeMeListWaiting())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(LikeMeList)