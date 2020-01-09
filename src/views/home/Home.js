import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Card, Content as CardContent, Footer, Header, Video, Image, Map } from '../../components/card'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'
import HotListForHome from './hotListForHome/HotListForHome'
import FollowingListForHome from './followingListForHome/FollowingListForHome'
import NearbyListForHome from './nearbyListForHome/NearbyListForHome'

const Home = props => {
  const { navigation } = props
  // console.log('navigation', navigation)
  const tabs = [
    { title: '热门' },
    { title: '关注' },
    { title: '附近' },
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

  return (
    <View style={{ flex: 1 }}>
      <Tabs tabs={tabs}
        renderTabBar={tabProps => (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <Icon name='camera' size={26} color='#000' />
            {tabProps.tabs.map((tab, i) => (
              <TouchableOpacity
                activeOpacity={0.9}
                key={tab.key || i}
                style={{ padding: 15, borderBottomWidth: 2, borderColor: tabProps.activeTab === i ? '#2c8ec5' : '#fff' }}
                onPress={() => {
                  const { goToTab, onTabClick } = tabProps;
                  onTabClick && onTabClick(tabs[i], i);
                  goToTab && goToTab(i);
                }}>
                <Text style={{ fontSize: 18, color: tabProps.activeTab === i ? '#2c8ec5' : undefined }}>
                  {tab.title}
                </Text>
              </TouchableOpacity>
            ))}
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
        )}>
        <HotListForHome {...props}/>
        <FollowingListForHome />
        <NearbyListForHome />
      </Tabs>
    </View>
  )
}

export default Home