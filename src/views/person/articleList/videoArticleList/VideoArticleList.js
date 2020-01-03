import React from 'react'
import { FlatList ,RefreshControl,View} from 'react-native'
import { Card, Content as CardContent, Footer, Header, Video, Image, Map } from '../../../../components/card'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'
import { connect } from 'react-redux'
import reduxActions from '../../../../reduxActions'
import { styleColor } from '../../../../GlobalStyles'
import { ListEmpty, ListFooter } from '../../../../components/list'
import moment from 'moment'

//我的文章
const VideoArticleList = props => {
    const { articleListReducer } = props
    // console.log('articleListReducer', articleListReducer)
    return (
        <FlatList
            keyExtractor={(item, index) => `${index}`}
            data={[]}
            renderItem={params => {
                const { item, index } = params
                return (
                    <WingBlank size='md'>
                        {index == 0 && <WhiteSpace size='md' />}
                        <Card>
                            <Header />
                            <CardContent />
                            <Map />
                            <Footer />
                        </Card>
                        <WhiteSpace size='md' />
                    </WingBlank>
                )
            }}
        refreshControl={
            <RefreshControl
                colors={[styleColor]}
                refreshing={articleListReducer.getArticleList.isResultStatus == 1}
                onRefresh={() => {
                    props.getArticleListWaiting()
                    props.getArticleList()
                }}
            />
        }
        onEndReachedThreshold={0.2}
        onEndReached={() => {
            if (articleListReducer.getArticleList.isResultStatus == 2 && !articleListReducer.data.isCompleted) {
                props.getArticleListMore()
            }
        }}
        ListEmptyComponent={articleListReducer.getArticleList.isResultStatus != 1 && <ListEmpty title='暂无文章' />}
        ListFooterComponent={articleListReducer.getArticleListMore.isResultStatus == 1 ? <ListFooter /> : <View />}
        />
        // <ScrollView style={{ flex: 1 }}>
        //     <WhiteSpace size='md' />
        //     <WingBlank size='md'>
        //         <Card>
        //             <Header />
        //             <CardContent />
        //             <Map />
        //             <Footer />
        //         </Card>
        //         <WhiteSpace size='md' />
        //     </WingBlank>
        //     <WingBlank size='md'>
        //         <Card>
        //             <Header />
        //             <CardContent />
        //             <Image />
        //             <Footer />
        //         </Card>
        //         <WhiteSpace size='md' />
        //     </WingBlank>
        //     <WingBlank size='md'>
        //         <Card>
        //             <Header />
        //             <CardContent />
        //             <Video />
        //             <Footer />
        //         </Card>
        //         <WhiteSpace size='md' />
        //     </WingBlank>
        // </ScrollView>
    )
}


const mapStateToProps = (state) => {
    return {
        articleListReducer: state.articleListReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getArticleList: () => {
        dispatch(reduxActions.articleList.getArticleList())
    },
    getArticleListWaiting: () => {
        dispatch(reduxActions.articleList.getArticleListWaiting())
    },
    getArticleListMore: () => {
        dispatch(reduxActions.articleList.getArticleListMore())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoArticleList)

// import React from 'react'
// import { View, Text, ScrollView } from 'react-native'
// import { Card, Content as CardContent, Footer, Header, Video, Image, Map } from '../../../components/card'
// import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'

// //我的文章
// const VideoArticleList = props => {
//     return (
//         <ScrollView style={{ flex: 1 }}>
//             <WhiteSpace size='md' />
//             <WingBlank size='md'>
//                 <Card>
//                     <Header />
//                     <CardContent />
//                     <Video />
//                     <Footer />
//                 </Card>
//                 <WhiteSpace size='md' />
//             </WingBlank>

//         </ScrollView>
//     )
// }

// export default VideoArticleList