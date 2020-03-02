import React, { Component } from 'react'
import { View, Text, FlatList, RefreshControl, InteractionManager, TouchableOpacity } from 'react-native'
import { Card, Content as CardContent, Footer, Header, Vote, VoteFooter, VoteHeader } from '../../../components/card'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'
import { ListEmpty, ListFooter } from '../../../components/list'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'
import globalStyles, { styleColor } from '../../../GlobalStyles'

class VoteListForCommunity extends Component {

    componentDidMount() {
        this.props.getVoteListWaiting()
        InteractionManager.runAfterInteractions(this.props.getVoteList)
    }

    render() {
        const { voteListForCommunityReducer, navigation } = this.props
        // return (
        //     <View style={{ flex: 1 }}>
        //         <WingBlank size='md'>
        //             <WhiteSpace size='md' />
        //             <Card>

        // <VoteHeader />
        // <Vote />
        // <VoteFooter />

        //             </Card>
        //             <WhiteSpace size='md' />
        //         </WingBlank>
        //     </View>
        // )
        return (
            // <View style={{ flex: 1 }}>
            //     <Text>NewestArticleListForCommunity</Text>
            // </View>
            <FlatList
                keyExtractor={(item, index) => `${index}`}
                data={voteListForCommunityReducer.data.voteList}
                renderItem={params => {
                    const { item, index } = params
                    return (
                        <WingBlank size='md'>
                            {index == 0 && <WhiteSpace size='md' />}
                            <Card>
                                <View>
                                    <VoteHeader
                                        params={{
                                            title: item.title ? `${item.title}` : '',
                                            status: item.status
                                        }} />
                                </View>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.setVote(item)
                                        navigation.navigate('VoteInfo')
                                    }}
                                >
                                    <Vote params={{
                                        content: item.info ? `${item.info}` : ''
                                    }} />
                                </TouchableOpacity>
                                <VoteFooter
                                    params={{
                                        participantsNum: item.participants_num ? `${item.participants_num}` : '0',
                                        status: item.user_votes.length > 0
                                    }}
                                />
                            </Card>
                            <WhiteSpace size='md' />
                        </WingBlank>
                    )
                }}
                refreshControl={
                    <RefreshControl
                        colors={[styleColor]}
                        refreshing={voteListForCommunityReducer.getVoteList.isResultStatus == 1}
                        onRefresh={() => {
                            this.props.getVoteListWaiting()
                            this.props.getVoteList()
                        }}
                    />
                }
                onEndReachedThreshold={0.2}
                onEndReached={() => {
                    if (voteListForCommunityReducer.getVoteList.isResultStatus == 2 && !voteListForCommunityReducer.data.isCompleted) {
                        this.props.getVoteListMore()
                    }
                }}
                ListEmptyComponent={voteListForCommunityReducer.getVoteList.isResultStatus != 1 && <ListEmpty title='暂无文章' />}
                ListFooterComponent={voteListForCommunityReducer.getVoteList.isResultStatus == 1 ? <ListFooter /> : <View />}
            />
        )

    }

}


const mapStateToProps = (state) => {
    return {
        voteListForCommunityReducer: state.voteListForCommunityReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getVoteList: () => {
        dispatch(reduxActions.voteListForCommunity.getVoteList())
    },
    getVoteListWaiting: () => {
        dispatch(reduxActions.voteListForCommunity.getVoteListWaiting())
    },
    getVoteListMore: () => {
        dispatch(reduxActions.voteListForCommunity.getVoteListMore())
    },
    setVote: voteInfo => {
        dispatch(reduxActions.voteInfo.setVote(voteInfo))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(VoteListForCommunity)