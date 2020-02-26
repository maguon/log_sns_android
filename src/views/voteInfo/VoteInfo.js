import React, { Component } from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import { List, Radio, WhiteSpace, Button, Progress } from '@ant-design/react-native'
import RadioModal from '../../components/RadioModal'

class VoteInfo extends Component {

    render() {
        console.log('this.props', this.props)
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ padding: 10 }}>
                            <Image style={{ width: 40, height: 40 }} source={{ uri: 'personalicon' }} />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontSize: 16 }}>{''}</Text>
                            <Text style={{ color: '#777' }}>{''}</Text>
                        </View>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text>进行中</Text>
                    </View>
                </View>
                {/* <View>
                    <View>
                        <Text style={{ padding: 10 }} numberOfLines={3}>投票详情投票详情投票详情投票详情投票详情投票详情</Text>
                    </View>
                    <View>
                        <View style={{ marginHorizontal: 10, marginTop: 10, padding: 10, borderTopWidth: 0.5, borderLeftWidth: 0.5, borderRightWidth: 0.5, borderColor: '#ccc' }}>
                            <Text>最多可选1票</Text>
                        </View>
                        <RadioModal
                            style={{ marginHorizontal: 10, borderWidth: 0.5, borderColor: '#ccc' }}
                            onValueChange={(id, item) => {
                                console.log('id', id)
                            }}>
                            <Text value={0} content={'选项1内容选项1内容选项1内容选项1内容'}>选项1</Text>
                            <Text value={1} content={'选项2内容选项2内容选项2内容选项2内容'}>选项1</Text>
                            <Text value={2} content={'选项3内容选项3内容选项3内容选项3内容'}>选项3</Text>
                        </RadioModal>
                        <View style={{ margin: 10 }}>
                            <Button type="primary">提交投票</Button>
                        </View>
                    </View>
                </View> */}
                <View>
                    <View>
                        <Text style={{ padding: 10 }} numberOfLines={3}>投票详情投票详情投票详情投票详情投票详情投票详情</Text>
                    </View>
                    <View>
                        <Text>选择一</Text>
                        <Text>选择一内容选择一内容选择一内容选择一内容选择一内容</Text>
                        <Progress style={{ borderBottomWidth: 20 }} barStyle={{ borderBottomWidth: 20 }} percent={90} position="normal" />
                    </View>
                </View>
            </View>
        )
    }
}

export default VoteInfo