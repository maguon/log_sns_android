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
        console.log('this.props', this.props)
        const { voteInfoReducer: { data: { voteInfo } } } = this.props
        // const optionList =this.props.voteInfo.options.map(item=>{
        //     return(
        //         <Text value={0} content={'选项1内容选项1内容选项1内容选项1内容'}>选项1</Text>
        //     )
        // })
        return (
            <View style={{ flex: 1 }}>
                <ScrollView >
                    {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
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
                            {voteInfo.status == 0 && <Text>未开始</Text>}
                            {voteInfo.status == 1 && <Text>进行中</Text>}
                            {voteInfo.status == 3 && <Text>已结束</Text>}
                        </View>
                    </View> */}
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ padding: 10, fontSize: 18 }}>{voteInfo.title ? `${voteInfo.title}` : ''}</Text>
                    </View>
                    <View>
                        <Text style={{ padding: 10 }} numberOfLines={3}>{voteInfo.info ? `${voteInfo.info}` : ''}</Text>
                    </View>
                    {/* {voteInfo.status == 0 && <VoteRadio />}
                {voteInfo.status == 1 && <VoteProgress />}*/}
                    {voteInfo.status == 3 && <VoteEnd />}
                    {voteInfo.status == 1 && voteInfo.user_votes.length > 0 && <VoteCheck voteInfo={voteInfo} />}
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