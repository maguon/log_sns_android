import React, { Component } from 'react'
import { View, Text, FlatList, RefreshControl, TouchableOpacity, Image, ScrollView, InteractionManager } from 'react-native'
import { Card, Content as CardContent, Footer, Header, ImageContent, VideoContent, Map } from '../../../components/card'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'
import { ListEmpty, ListFooter } from '../../../components/list'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'
import globalStyles, { styleColor } from '../../../GlobalStyles'

class FollowingListForHome extends Component {


  componentDidMount() {
    this.props.getFollowingListForHomeWaiting()
    this.props.getFollowUserListWaiting()
    InteractionManager.runAfterInteractions(() => {
      this.props.getFollowingListForHome()
      this.props.getFollowUserList()
    })
  }


  render() {
    console.log('this.props', this.props)
    const { followingListForHomeReducer, navigation } = this.props

    // console.log('navigation',navigation)

    const el_followingUserList = followingListForHomeReducer.data.followingUserList.map((item, i) => {
      return (
        <WingBlank size='sm' key={i}>
          <View style={{ alignItems: 'center' }}>
            <WhiteSpace size='md' />
            <View style={{ height: 48, width: 48, borderRadius: 24 }} >
              <Image source={{ uri: item.follow_user_detail_info && item.follow_user_detail_info[0].avatar ? `${item.follow_user_detail_info[0].avatar}` : 'personalicon' }} style={{ height: 48, width: 48, borderRadius: 24 }}></Image>
            </View>
            <Text >{item.follow_user_detail_info && item.follow_user_detail_info[0].nick_name ? `${item.follow_user_detail_info[0].nick_name}` : ''}</Text>
            <WhiteSpace size='md' />
          </View>
        </WingBlank>
      )
    })
    return (
      <ScrollView style={{ flex: 1 }}>
        <ScrollView horizontal={true} style={{ borderBottomWidth: 0.5, borderColor: '#ccc' }}>
          <WingBlank size='sm' style={{ flexDirection: 'row' }}>
            {el_followingUserList}

          </WingBlank>
        </ScrollView>
        <WhiteSpace size='md' />
        <FlatList
          keyExtractor={(item, index) => `${index}`}
          data={followingListForHomeReducer.data.articleList}
          renderItem={params => {
            const { item, index } = params

            // console.log('item',item.media)
            return (
              <WingBlank size='md'>
                {index == 0 && <WhiteSpace size='md' />}
                <Card>
                  <TouchableOpacity
                    onPress={() => {
                      // console.log('item',item)
                      navigation.navigate('ArticleListOfFriend', {
                        userInfo: { _user_id: item._user_id }
                      })
                    }}>
                    <Header
                      params={{
                        nick: item.user_detail_info[0].nick_name,
                        date: item.created_at,
                        address: item.address_name,
                        avatar: item.user_detail_info[0].avatar
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('TextArticleInfo', {
                        articleInfo: item
                      })
                    }}>
                    <CardContent
                      params={{ content: item.info }}
                    />
                    {item.type == 1 && item.carrier == 4 && <Map />}
                    {item.type == 1 && item.carrier == 2 && <ImageContent
                      openPictureViewer={(index, imageList) => {
                        navigation.navigate('PictureViewer', { imageIndex: index, imageList })
                      }}
                      imageList={item.media.map(imageUriItem => `${imageUriItem.url}`)} />}

                  </TouchableOpacity>
                  {item.type == 1 && item.carrier == 3 && <VideoContent preview={item.media[0].preview} video={item.media[0].url} />}
                  <Footer
                    msgCount={item.comment_num}
                    likeCount={item.agree_num}
                    // delOnPress={() => { this.props.delArticle({ messageId: item._id }) }}
                    msgOnPress={() => {
                      navigation.navigate('LvOneCommentList', {
                        articleInfo: item
                      })
                    }}
                    likeOnPress={() => {
                      this.props.likeArticle({
                        msgId: item._id,
                        msgUserId: item._user_id
                      })
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
              refreshing={followingListForHomeReducer.getFollowingListForHome.isResultStatus == 1}
              onRefresh={() => {
                this.props.getFollowingListForHomeWaiting()
                this.props.getFollowingListForHome()
              }}
            />
          }
          onEndReachedThreshold={0.2}
          onEndReached={() => {
            if (followingListForHomeReducer.getFollowingListForHome.isResultStatus == 2 && !followingListForHomeReducer.data.isCompleted) {
              this.props.getFollowingListForHomeMore()
            }
          }}
          ListEmptyComponent={followingListForHomeReducer.getFollowingListForHome.isResultStatus != 1 && <ListEmpty title='暂无文章' />}
          ListFooterComponent={followingListForHomeReducer.getFollowingListForHome.isResultStatus == 1 ? <ListFooter /> : <View />}
        />

      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    followingListForHomeReducer: state.followingListForHomeReducer
  }
}

const mapDispatchToProps = (dispatch) => ({
  getFollowingListForHome: () => {
    dispatch(reduxActions.followingListForHome.getFollowingListForHome())
  },
  getFollowingListForHomeWaiting: () => {
    dispatch(reduxActions.followingListForHome.getFollowingListForHomeWaiting())
  },
  getFollowingListForHomeMore: () => {
    dispatch(reduxActions.followingListForHome.getFollowingListForHomeMore())
  },
  getFollowUserList: () => {
    dispatch(reduxActions.followingListForHome.getFollowUserList())
  },
  getFollowUserListWaiting: () => {
    dispatch(reduxActions.followingListForHome.getFollowUserListWaiting())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FollowingListForHome)