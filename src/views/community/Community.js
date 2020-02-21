import React from 'react'
import { View, Text } from 'react-native'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'
import NewestArticleListForCommunity from './newest/NewestArticleListForCommunity'
import SeekHelpListForCommunity from './seekHelp/SeekHelpListForCommunity'
import VideoArticleListForCommunity from './video/VideoArticleListForCommunity'
import VoteListForCommunity from './vote/VoteListForCommunity'


const Community = props => {
    const tabs = [
        { title: '最新发布' },
        { title: '视频' },
        { title: '求助' },
        { title: '投票' }
    ];

    const overlayList = [
        { icon: 'edit', title: '发布文章' },
        { icon: 'question', title: '发布求助' },
        { icon: 'scan', title: '扫一扫' },
        { icon: 'environment', title: '收藏定位' }].map(item => {
            return (
                <Popover.Item value={item.title} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name={item.icon} size='md' color='#000' />
                    <Text style={{ marginLeft: 10 }}>{item.title}</Text>
                </Popover.Item>
            )
        })

    const { navigation } = props
    return (
        <View style={{ flex: 1 }}>
            <View style={{
                flexDirection: 'row', alignItems: 'center',
                justifyContent: 'space-between', paddingHorizontal: 15,
                borderBottomWidth: 0.5, borderBottomColor: '#bbb'
            }}>
                <Icon name='camera' size={26} color='#000' />
                <Text style={{ fontSize: 18, padding: 15 }}>社区</Text>
                <React.Fragment>
                    <Popover
                        onSelect={param => {
                            console.log('param', param)
                            if (param == '发布文章') {
                                navigation.navigate('PublishBlog')
                            } else if (param == '发布求助') {
                                navigation.navigate('SeekHelp')
                            } else if (param == '扫一扫') {
                                navigation.navigate('Scan')
                            } else if (param == '收藏定位') {
                                navigation.navigate('CollectionAddr')
                            }
                        }}
                        overlay={overlayList}
                        placement='bottom'
                        renderOverlayComponent={nodes => (
                            <View style={{ padding: 5 }}>
                                {nodes}
                            </View>)}>
                        <Icon name='menu' size={26} color='#000' />
                    </Popover>
                </React.Fragment>
            </View>
            <Tabs tabs={tabs}>
                <NewestArticleListForCommunity navigation={navigation}/>
                <VideoArticleListForCommunity navigation={navigation}/>
                <SeekHelpListForCommunity navigation={navigation}/>
                <VoteListForCommunity navigation={navigation}/>
            </Tabs>
        </View>
    )
}

export default Community