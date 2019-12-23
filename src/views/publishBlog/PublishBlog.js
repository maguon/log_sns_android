import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { List, TextareaItem, Icon, Switch } from '@ant-design/react-native'

const Item = List.Item
const Brief = Item.Brief

const PublishBlog = props => {
    const { navigation } = props
    // console.log('navigation', navigation)
    return (
        <ScrollView
            style={{ flex: 1 }}
            automaticallyAdjustContentInsets={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <List>
                <TextareaItem rows={5} placeholder="输入文章内容" count={100}/>
                <Item
                    multipleLine
                    thumb={
                        <View style={{alignSelf:'flex-start',marginTop:16}}>
                            <Icon name="environment" color='orange' style={{ marginRight: 15 }} />
                        </View>
                    }>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems:'flex-end' }}>
                        <Text style={{fontSize:17}}>显示定位</Text>
                        <Switch checked={true}/>
                    </View>
                    <Brief>辽宁省大连市开发区金马路凯伦国际大厦</Brief>
                </Item>
            </List>
        </ScrollView>
    )
}

export default PublishBlog