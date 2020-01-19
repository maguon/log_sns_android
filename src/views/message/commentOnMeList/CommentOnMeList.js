import React, { Component } from 'react'
import { ScrollView, View, InteractionManager, FlatList, RefreshControl } from 'react-native'
import { Container, ReplyContent, ReplyHeader } from '../../../components/reply'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'
import globalStyles, { styleColor } from '../../../GlobalStyles'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'
import { ListEmpty, ListFooter } from '../../../components/list'

class CommentOnMeList extends Component {
    componentDidMount() {
        this.props.getCommentOnMeListWaiting()
        InteractionManager.runAfterInteractions(() => this.props.getCommentOnMeList())
    }

    render() {
        const { commentOnMeListReducer } = this.props
        console.log('commentOnMeListReducer', commentOnMeListReducer)
        return (
            <FlatList
                keyExtractor={(item, index) => `${index}`}
                data={commentOnMeListReducer.data.commentOnMeList}
                renderItem={params => {
                    const { item, index } = params
                    return (
                        <View>
                            <Container style={{ backgroundColor: '#fff' }}>
                                <ReplyHeader />
                                <ReplyContent />
                            </Container>
                            <WhiteSpace size='md' />
                        </View>

                    )
                }}
                refreshControl={
                    <RefreshControl
                        colors={[styleColor]}
                        refreshing={commentOnMeListReducer.getCommentOnMeList.isResultStatus == 1}
                        onRefresh={() => {
                            this.props.getCommentOnMeListWaiting()
                            this.props.getCommentOnMeList()
                        }}
                    />
                }
                onEndReachedThreshold={0.2}
                onEndReached={() => {
                    if (commentOnMeListReducer.getCommentOnMeList.isResultStatus == 2 && !commentOnMeListReducer.data.isCompleted) {
                        this.props.getCommentOnMeListMore()
                    }
                }}
                ListEmptyComponent={commentOnMeListReducer.getCommentOnMeList.isResultStatus != 1 && <ListEmpty title='暂无文章' />}
                ListFooterComponent={commentOnMeListReducer.getCommentOnMeListMore.isResultStatus == 1 ? <ListFooter /> : <View />}
            />
            // <View style={globalStyles.container}>
            //     <ScrollView style={{ flex: 1 }}>
            //         <Card style={{ backgroundColor: '#fff' }}>
            //             <ReplyHeader />
            //             <ReplyContent />
            //         </Card>
            //         <WhiteSpace size='md' />

            //         <Card style={{ backgroundColor: '#fff' }}>
            //             <ReplyHeader />
            //             <ReplyContent />
            //         </Card>
            //         <WhiteSpace size='md' />

            //         <Card style={{ backgroundColor: '#fff' }}>
            //             <ReplyHeader />
            //             <ReplyContent />
            //         </Card>
            //         <WhiteSpace size='md' />

            //         <Card style={{ backgroundColor: '#fff' }}>
            //             <ReplyHeader />
            //             <ReplyContent />
            //         </Card>
            //         <WhiteSpace size='md' />

            //         <Card style={{ backgroundColor: '#fff' }}>
            //             <ReplyHeader />
            //             <ReplyContent />
            //         </Card>
            //         <WhiteSpace size='md' />

            //     </ScrollView>
            // </View>
        )
    }
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