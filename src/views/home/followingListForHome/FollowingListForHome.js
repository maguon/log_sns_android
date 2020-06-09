import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Card, Content as CardContent, Footer, Header, Map } from '../../../components/card'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'
import { ListEmpty, ListFooter } from '../../../components/list'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'

class FollowingListForHome extends Component {


    componentDidMount() {
        // this.props.getArticleAllListWaiting()
        // InteractionManager.runAfterInteractions(this.props.getArticleAllList)
    }

    componentWillUnmount() {
        // this.props.rmArticleAllList()
    }

    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
            <ScrollView horizontal={true} style={{ borderBottomWidth: 0.5, borderColor: '#ccc' }}>
              <WingBlank size='sm' style={{ flexDirection: 'row' }}>
                <WingBlank size='sm'>
                  <View>
                    <WhiteSpace size='md' />
                    <View style={{ height: 48, width: 48, backgroundColor: 'red', borderRadius: 24 }} />
                    <Text>张大爷</Text>
                    <WhiteSpace size='md' />
                  </View>
                </WingBlank>
                <WingBlank size='sm'>
                  <View>
                    <WhiteSpace size='md' />
                    <View style={{ height: 48, width: 48, backgroundColor: 'red', borderRadius: 24 }} />
                    <Text>张大爷</Text>
                    <WhiteSpace size='md' />
                  </View>
                </WingBlank>
                <WingBlank size='sm'>
                  <View>
                    <WhiteSpace size='md' />
                    <View style={{ height: 48, width: 48, backgroundColor: 'red', borderRadius: 24 }} />
                    <Text>张大爷</Text>
                    <WhiteSpace size='md' />
                  </View>
                </WingBlank>
                <WingBlank size='sm'>
                  <View>
                    <WhiteSpace size='md' />
                    <View style={{ height: 48, width: 48, backgroundColor: 'red', borderRadius: 24 }} />
                    <Text>张大爷</Text>
                    <WhiteSpace size='md' />
                  </View>
                </WingBlank>
                <WingBlank size='sm'>
                  <View>
                    <WhiteSpace size='md' />
                    <View style={{ height: 48, width: 48, backgroundColor: 'red', borderRadius: 24 }} />
                    <Text>张大爷</Text>
                    <WhiteSpace size='md' />
                  </View>
                </WingBlank>
                <WingBlank size='sm'>
                  <View>
                    <WhiteSpace size='md' />
                    <View style={{ height: 48, width: 48, backgroundColor: 'red', borderRadius: 24 }} />
                    <Text>张大爷</Text>
                    <WhiteSpace size='md' />
                  </View>
                </WingBlank>
                <WingBlank size='sm'>
                  <View>
                    <WhiteSpace size='md' />
                    <View style={{ height: 48, width: 48, backgroundColor: 'red', borderRadius: 24 }} />
                    <Text>张大爷</Text>
                    <WhiteSpace size='md' />
                  </View>
                </WingBlank>
                <WingBlank size='sm'>
                  <View>
                    <WhiteSpace size='md' />
                    <View style={{ height: 48, width: 48, backgroundColor: 'red', borderRadius: 24 }} />
                    <Text>张大爷</Text>
                    <WhiteSpace size='md' />
                  </View>
                </WingBlank>
                <WingBlank size='sm'>
                  <View>
                    <WhiteSpace size='md' />
                    <View style={{ height: 48, width: 48, backgroundColor: 'red', borderRadius: 24 }} />
                    <Text>张大爷</Text>
                    <WhiteSpace size='md' />
                  </View>
                </WingBlank>
                <WingBlank size='sm'>
                  <View>
                    <WhiteSpace size='md' />
                    <View style={{ height: 48, width: 48, backgroundColor: 'red', borderRadius: 24 }} />
                    <Text>张大爷</Text>
                    <WhiteSpace size='md' />
                  </View>
                </WingBlank>
                <WingBlank size='sm'>
                  <View>
                    <WhiteSpace size='md' />
                    <View style={{ height: 48, width: 48, backgroundColor: 'red', borderRadius: 24 }} />
                    <Text>张大爷</Text>
                    <WhiteSpace size='md' />
                  </View>
                </WingBlank>
                <WingBlank size='sm'>
                  <View>
                    <WhiteSpace size='md' />
                    <View style={{ height: 48, width: 48, backgroundColor: 'red', borderRadius: 24 }} />
                    <Text>张大爷</Text>
                    <WhiteSpace size='md' />
                  </View>
                </WingBlank>
                <WingBlank size='sm'>
                  <View>
                    <WhiteSpace size='md' />
                    <View style={{ height: 48, width: 48, backgroundColor: 'red', borderRadius: 24 }} />
                    <Text>张大爷</Text>
                    <WhiteSpace size='md' />
                  </View>
                </WingBlank>
                <WingBlank size='sm'>
                  <View>
                    <WhiteSpace size='md' />
                    <View style={{ height: 48, width: 48, backgroundColor: 'red', borderRadius: 24 }} />
                    <Text>张大爷</Text>
                    <WhiteSpace size='md' />
                  </View>
                </WingBlank>
                <WingBlank size='sm'>
                  <View>
                    <WhiteSpace size='md' />
                    <View style={{ height: 48, width: 48, backgroundColor: 'red', borderRadius: 24 }} />
                    <Text>张大爷</Text>
                    <WhiteSpace size='md' />
                  </View>
                </WingBlank>
                <WingBlank size='sm'>
                  <View>
                    <WhiteSpace size='md' />
                    <View style={{ height: 48, width: 48, backgroundColor: 'red', borderRadius: 24 }} />
                    <Text>张大爷</Text>
                    <WhiteSpace size='md' />
                  </View>
                </WingBlank>
                <WingBlank size='sm'>
                  <View>
                    <WhiteSpace size='md' />
                    <View style={{ height: 48, width: 48, backgroundColor: 'red', borderRadius: 24 }} />
                    <Text>张大爷</Text>
                    <WhiteSpace size='md' />
                  </View>
                </WingBlank>
                <WingBlank size='sm'>
                  <View>
                    <WhiteSpace size='md' />
                    <View style={{ height: 48, width: 48, backgroundColor: 'red', borderRadius: 24 }} />
                    <Text>张大爷</Text>
                    <WhiteSpace size='md' />
                  </View>
                </WingBlank>
                <WingBlank size='sm'>
                  <View>
                    <WhiteSpace size='md' />
                    <View style={{ height: 48, width: 48, backgroundColor: 'red', borderRadius: 24 }} />
                    <Text>张大爷</Text>
                    <WhiteSpace size='md' />
                  </View>
                </WingBlank>
                <WingBlank size='sm'>
                  <View>
                    <WhiteSpace size='md' />
                    <View style={{ height: 48, width: 48, backgroundColor: 'red', borderRadius: 24 }} />
                    <Text>张大爷</Text>
                    <WhiteSpace size='md' />
                  </View>
                </WingBlank>
              </WingBlank>
            </ScrollView>
            <WhiteSpace size='md' />
            <WingBlank size='md'>
              <Card>
                <Header />
                <CardContent />
                {/* <Video /> */}
                <Footer />
              </Card>
              <WhiteSpace size='md' />
            </WingBlank>
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
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FollowingListForHome)