import React, { Component } from 'react'
import { View, Text, Image, FlatList, ScrollView } from 'react-native'
import { List, Radio, WhiteSpace, Button, Progress } from '@ant-design/react-native'
import RadioModal from '../../components/RadioModal'
import { reduxForm } from 'redux-form'


export default class VoteProgress extends Component {
    render() {
        // console.log('this.props', this.props)
        const checkedList = this.props.params.options.map((item, index) => {
            return (
                <View key={index} style={{ alignItems: 'stretch', borderBottomWidth: 0.5, borderLeftWidth: 0.5, borderRightWidth: 0.5, borderColor: '#ccc' }}>
                    <View style={{ margin: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>选择{`${index}`}</Text>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Text style={{ color: '#555' }}>{item.txt ? `${item.txt}` : ''}</Text>
                    </View>
                    <View style={{ marginHorizontal: 10, marginTop: 10, height: 20, flexDirection: 'row' }}>
                        {item.num > 0 && this.props.params.participants_num != item.num && <View style={{ backgroundColor: '#2c8fff', height: 20, flex: item.num / this.props.params.participants_num }} />}
                        {item.num > 0 && this.props.params.participants_num == item.num && <View style={{ backgroundColor: '#2c8fff', height: 20, flex: 1 }} />}
                        {item.num > 0 && this.props.params.participants_num != item.num && <View style={{ backgroundColor: '#fff', height: 20, flex: (1 - item.num / this.props.params.participants_num) }} />}
                        {item.num == 0 && <View style={{ backgroundColor: '#2c8fff', height: 20, width: 2 }} />}
                    </View>
                    <View style={{ marginHorizontal: 10, marginBottom: 10 }}>
                        <Text style={{ color: '#555' }}>{item.num ? `${item.num}` : '0'}人支持</Text>
                    </View>
                </View>
            )
        })
        return (
            <View style={{ marginHorizontal: 10 }}>
                <View style={{ padding: 10, borderWidth: 0.5, borderColor: '#ccc' }}>
                    <Text>最多可选{this.props.params.max_num}票</Text>
                </View>
                {checkedList}
                <View style={{ height: 10 }} />
            </View>
        )
    }
}