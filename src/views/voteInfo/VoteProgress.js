import React, { Component } from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import { List, Radio, WhiteSpace, Button, Progress } from '@ant-design/react-native'
import RadioModal from '../../components/RadioModal'
import { reduxForm } from 'redux-form'


export default class VoteProgress extends Component {
    render() {
        return (
            <View style={{ marginHorizontal: 10 }}>
                <View style={{ padding: 10, borderWidth: 0.5, borderColor: '#ccc' }}>
                    <Text>最多可选1票</Text>
                </View>
                <View style={{ alignItems: 'stretch', borderBottomWidth: 0.5, borderLeftWidth: 0.5, borderRightWidth: 0.5, borderColor: '#ccc' }}>
                    <View style={{ margin: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>选择一</Text>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Text style={{ color: '#555' }}>选择一内容选择一内容选择一内容选择一内容选择一内容选择一内容选择一内容选择一内容选择一内容选择一内容</Text>
                    </View>
                    <View style={{ marginHorizontal: 10, marginTop: 10, height: 20, flexDirection: 'row' }}>
                        <View style={{ backgroundColor: '#2c8fff', height: 20, flex: 70 }} />
                        <View style={{ backgroundColor: '#fff', height: 20, flex: 30 }} />
                    </View>
                    <View style={{ marginHorizontal: 10, marginBottom: 10 }}>
                        <Text style={{ color: '#555' }}>123人支持</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'stretch', borderBottomWidth: 0.5, borderLeftWidth: 0.5, borderRightWidth: 0.5, borderColor: '#ccc' }}>
                    <View style={{ margin: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>选择一</Text>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Text style={{ color: '#555' }}>选择一内容选择一内容选择一内容选择一内容选择一内容选择一内容选择一内容选择一内容选择一内容选择一内容</Text>
                    </View>
                    <View style={{ marginHorizontal: 10, marginTop: 10, height: 20, flexDirection: 'row' }}>
                        <View style={{ backgroundColor: '#2c8fff', height: 20, flex: 70 }} />
                        <View style={{ backgroundColor: '#fff', height: 20, flex: 30 }} />
                    </View>
                    <View style={{ marginHorizontal: 10, marginBottom: 10 }}>
                        <Text style={{ color: '#555' }}>123人支持</Text>
                    </View>
                    <View style={{ height: 40, width: 40, position: 'absolute', top: 10, right: 10, borderColor: '#5dc52d', borderRadius: 20, borderWidth: 2, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#5dc52d' }}>支持</Text>
                    </View>
                </View>
            </View>
        )
    }
}