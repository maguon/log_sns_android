import React, { Component } from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import { List, Radio, WhiteSpace, Button, Progress } from '@ant-design/react-native'
import RadioModal from '../../components/RadioModal'
import { reduxForm } from 'redux-form'

export default class VoteRadio extends Component {
    render() {
        return (
            <View>
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
            </View>
        )
    }
}