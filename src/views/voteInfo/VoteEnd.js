import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { List, Radio, WhiteSpace, Button, Progress } from '@ant-design/react-native'
import RadioModal from '../../components/RadioModal'
import { reduxForm } from 'redux-form'

export default class VoteEnd extends Component {

    render() {
        // console.log('this.props', this.props)
        const checkedList = this.props.params.options.map((item, index) => {
            return (
                <View key={index} style={{ alignItems: 'stretch', borderBottomWidth: 0.5, borderLeftWidth: 0.5, borderRightWidth: 0.5, borderColor: '#ccc' }}>
                    <View style={{ margin: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>选择 {`${index + 1}`}</Text>
                    </View>
                    <View style={{ marginHorizontal: 10, marginBottom: 10 }}>
                        <Text style={{ color: '#555' }}>{`${item.txt}`}</Text>
                    </View>
                    {item.checked && <View style={{ height: 40, width: 40, position: 'absolute', top: 10, right: 10, borderColor: '#5dc52d', borderRadius: 20, borderWidth: 2, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#5dc52d' }}>支持</Text>
                    </View>}
                </View>
            )
        })
        return (
            <View style={{ marginHorizontal: 10, flex: 1 }}>
                <View style={{ padding: 10, borderWidth: 0.5, borderColor: '#ccc' }}>
                    <Text>最多可选{`${this.props.params.max_num}`}票</Text>
                </View>
                {checkedList}
                <View style={{ height: 10 }} />
            </View>
        )
    }
}