import React, { Component } from 'react'
import { View, Text, Image, FlatList, ScrollView } from 'react-native'
import { List, Radio, WhiteSpace, Button, Progress } from '@ant-design/react-native'
import RadioModal from '../../components/RadioModal'
import VoteRadio from './VoteRadio'
import VoteProgress from './VoteProgress'
import VoteEnd from './VoteEnd'
import VoteCheck from './VoteCheck'
import { connect } from 'react-redux'

class VoteInfo extends Component {

    render() {
        const { voteInfoReducer: { data: { voteInfo } } } = this.props
        // console.log('voteInfo', voteInfo)
        return (
            <View style={{ flex: 1 }}>
                <ScrollView >
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ padding: 10, fontSize: 18 }}>{voteInfo.title ? `${voteInfo.title}` : ''}</Text>
                    </View>
                    <View>
                        <Text style={{ padding: 10 }} numberOfLines={3}>{voteInfo.info ? `${voteInfo.info}` : ''}</Text>
                    </View>
                    {voteInfo.status == 3 && <VoteProgress params={{
                        options: voteInfo.option.map((item, index) => {
                            return {
                                ...item,
                                checked: voteInfo.user_votes[0].option_item.some(checkedItem => checkedItem.index == index)
                            }
                        }),
                        participants_num: voteInfo.participants_num,
                        max_num: voteInfo.max_num
                    }} />}
                    {voteInfo.status == 1 && voteInfo.user_votes.length > 0 && <VoteEnd params={{
                        options: voteInfo.option.map((item, index) => {
                            return {
                                ...item,
                                checked: voteInfo.user_votes[0].option_item.some(checkedItem => checkedItem.index == index)
                            }
                        }),
                        max_num: voteInfo.max_num
                    }} />}
                    {voteInfo.status == 1 && voteInfo.user_votes.length == 0 && <VoteCheck voteInfo={voteInfo} />}
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        voteInfoReducer: state.voteInfoReducer
    }
}

export default connect(mapStateToProps)(VoteInfo)